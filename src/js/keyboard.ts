import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { Scene } from './scene';

export class Keyboard {
  private scene: Scene;
  private keyMap: string[][];
  private keyObjects: Record<string, THREE.Mesh>;
  private textObjects: Record<string, THREE.Mesh>;
  private outlineObjects: Record<string, THREE.LineSegments>;
  private baseOutlineObjects: Record<string, THREE.LineSegments>;
  private keyHeights: Record<string, number>;
  private keyWaves: Record<string, { time: number; active: boolean; distance?: number }>;
  private keyTypeCounts: Record<string, number>;
  private keySize: number;
  private spacing: number;
  private growthIncrement: number;
  private waveSpeed: number;
  private waveRadius: number;
  private waveHeight: number;
  private idleAnimationTime: number;
  private _isIncreasing: boolean = false;
  private clearAnimationInProgress: boolean = false;
  private _clearAnimationSpeed: number = 15;
  private container: THREE.Group;
  private isDarkMode: boolean;
  private keyMaterials: Record<string, THREE.MeshPhysicalMaterial[]>;
  private textMaterials: Record<string, THREE.MeshPhysicalMaterial>;
  private loadedFonts: Record<string, any>;
  private currentFont: any;
  private fontLoader: FontLoader;
  private rotationState: {
    isRotating: boolean;
    startTime: number;
    rotationDuration: number;
    pauseDuration: number;
    initialRotation: number;
    targetRotation: number;
    isPaused: boolean;
    pauseStartTime: number;
  };
  private aiRemixAnimation: {
    isActive: boolean;
    startTime: number;
    pulseSpeed: number;
    waveRadius: number;
  };

  constructor(scene: Scene) {
    this.scene = scene;
    
    // Initialize keyboard layout
    this.keyMap = [
      ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
      ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
      ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
      ['z', 'x', 'c', 'v', 'b', 'n', 'm']
    ];

    // Initialize properties
    // Key-related objects and states
    this.keyObjects = {};
    this.textObjects = {};
    this.outlineObjects = {};
    this.baseOutlineObjects = {};
    this.keyHeights = {};
    this.keyWaves = {};
    this.keyTypeCounts = {};
    this.keyMaterials = {};
    this.textMaterials = {};
    this.loadedFonts = {};
    this.currentFont = null;
    this.fontLoader = new FontLoader();

    // Keyboard dimensions and animation parameters
    this.keySize = 10;
    this.spacing = 12;
    this.growthIncrement = 0.5;
    this.waveSpeed = 2;
    this.waveRadius = 3;
    this.waveHeight = 0.2;
    this.idleAnimationTime = 0;
    
    // State flags
    this._clearAnimationSpeed = 15;
    this.isDarkMode = false;
    this.aiRemixAnimation = {
      isActive: false,
      startTime: 0,
      pulseSpeed: 0.1,
      waveRadius: 5
    };

    // Setup keyboard container
    // Create a container for all keyboard elements
    this.container = new THREE.Group();
    (this.scene as any).scene.add(this.container);
    
    // Initialize rotation animation properties
    this.rotationState = {
      isRotating: true,
      startTime: performance.now(),
      rotationDuration: 2000, // 2 seconds for rotation
      pauseDuration: 3000, // 3 seconds pause between rotations
      initialRotation: 0,
      targetRotation: Math.PI * 2, // 360 degrees
      isPaused: false,
      pauseStartTime: 0
    };
    
    this.loadFonts();
  }

  createKeyMaterial() {
    // Simple side material without complex textures
    const sideMaterial = new THREE.MeshBasicMaterial({
      color: this.isDarkMode ? 0x333333 : 0xcccccc,
      transparent: true,
      opacity: 0.8
    });

    // Top material - physical material for light mode, basic for dark mode
    const topMaterial = this.isDarkMode 
      ? new THREE.MeshBasicMaterial({
          color: 0x252525,
          transparent: false
        })
      : new THREE.MeshPhysicalMaterial({
          color: 0xfcfaf6,
          metalness: 0.1,
          roughness: 0.2,
          clearcoat: 0.8,
          clearcoatRoughness: 0.1,
          emissive: 0xfcfaf6,
          emissiveIntensity: 0.3,
          transparent: false
        });

    return [
      sideMaterial, sideMaterial, topMaterial,
      sideMaterial, sideMaterial, sideMaterial
    ];
  }

  loadFonts() {
    // Define font URLs for different styles
    const fontUrls = {
      'System': 'https://threejs.org/examples/fonts/helvetiker_regular.typeface.json',
      'Georgia': 'https://threejs.org/examples/fonts/gentilis_regular.typeface.json',
      'Inter': 'https://threejs.org/examples/fonts/helvetiker_regular.typeface.json',
      'Roboto Condensed': 'https://threejs.org/examples/fonts/helvetiker_regular.typeface.json'
    };

    // Load all fonts
    let fontsLoaded = 0;
    const totalFonts = Object.keys(fontUrls).length;

    Object.entries(fontUrls).forEach(([fontName, url]) => {
      this.fontLoader.load(url, (font) => {
        this.loadedFonts[fontName] = font;
        fontsLoaded++;
        
        // Use System font as default
        if (fontName === 'System') {
          this.currentFont = font;
        }
        
        // Create keyboard when all fonts are loaded
        if (fontsLoaded === totalFonts) {
          this.createKeyboard();
        }
      });
    });
  }

  createKeyboard() {
    const outlineMaterial = new THREE.LineBasicMaterial({
      color: 0x000000,
      linewidth: 3,
      transparent: true,
      opacity: 0.60
    });

    this.keyMap.forEach((row, rowIndex) => {
      const z = rowIndex * this.spacing;
      let x = rowIndex * 5;
      
      row.forEach((key) => {
        this.createKeyWithOutlineAndText(key, x, z, this.currentFont, outlineMaterial);
        x += this.keySize + 2;
      });
    });
  }

  createKeyWithOutlineAndText(key: string, x: number, z: number, font: any, outlineMaterial: THREE.LineBasicMaterial) {
    // Create main key mesh
    const geometry = new THREE.BoxGeometry(this.keySize, this.keySize, this.keySize);
    const keyMaterials = this.createKeyMaterial();
    const mesh = new THREE.Mesh(geometry, keyMaterials);
    this.setupKeyMesh(mesh, x, z);
    
    // Create key outline
    const outline = this.createKeyOutline(mesh.position, outlineMaterial);
    
    // Create base outline
    const baseOutline = this.createBaseOutline(mesh.position);
    
    // Create text material for this key
    const textMaterial = new THREE.MeshPhysicalMaterial({
      color: this.isDarkMode ? 0xfcfaf6 : 0x3c4142,
      metalness: 0,
      roughness: 1
    });
    
    // Create key text
    const textMesh = this.createKeyText(key, font, textMaterial);
    mesh.add(textMesh);
    
    // Store references
    this.keyObjects[key] = mesh;
    this.keyMaterials[key] = keyMaterials as THREE.MeshPhysicalMaterial[];
    this.textMaterials[key] = textMaterial;
    this.outlineObjects[key] = outline;
    this.baseOutlineObjects[key] = baseOutline;
    this.textObjects[key] = textMesh;
    this.keyHeights[key] = 0;
    this.keyWaves[key] = { time: 0, active: false };
    this.keyTypeCounts[key] = 0;
  }

  setupKeyMesh(mesh: THREE.Mesh, x: number, z: number) {
    mesh.position.set(x + this.keySize/2 - 50, 0, z - 20);
    mesh.scale.y = 0.01;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    this.container.add(mesh);
  }

  createKeyOutline(position: THREE.Vector3, _material: THREE.LineBasicMaterial) {
    const outlineGeometry = new THREE.BoxGeometry(
      this.keySize + 0.1,
      this.keySize + 0.1,
      this.keySize + 0.1
    );
    const edges = new THREE.EdgesGeometry(outlineGeometry);
    
    // Create material that responds to dark mode
    const outlineMaterial = new THREE.LineBasicMaterial({
      color: this.isDarkMode ? 0xfcfaf6 : 0x3c4142,
      linewidth: 3,
      transparent: true,
      opacity: this.isDarkMode ? 0.8 : 0.60
    });
    
    const outline = new THREE.LineSegments(edges, outlineMaterial);
    outline.position.copy(position);
    outline.scale.y = 0.01;
    outline.castShadow = true;
    this.container.add(outline);
    return outline;
  }

  createBaseOutline(position: THREE.Vector3) {
    // Create a square outline at the base of the key
    const baseGeometry = new THREE.PlaneGeometry(this.keySize, this.keySize);
    const edges = new THREE.EdgesGeometry(baseGeometry);
    
    // Create material that responds to dark mode
    const baseOutlineMaterial = new THREE.LineBasicMaterial({
      color: this.isDarkMode ? 0xfcfaf6 : 0x3c4142,
      linewidth: 2,
      transparent: true,
      opacity: this.isDarkMode ? 0.6 : 0.4
    });
    
    const baseOutline = new THREE.LineSegments(edges, baseOutlineMaterial);
    baseOutline.position.copy(position);
    baseOutline.position.y = 0.1; // Slightly above the floor
    baseOutline.rotation.x = -Math.PI / 2; // Lay flat on the ground
    this.container.add(baseOutline);
    return baseOutline;
  }

  createKeyText(key: string, font: any, material: THREE.MeshPhysicalMaterial) {
    const textGeometry = new TextGeometry(key, {
      font: font,
      size: 2.5,
      height: 0,
      curveSegments: 12,
    });
    textGeometry.computeBoundingBox();
    const textMesh = new THREE.Mesh(textGeometry, material);
    
    const textWidth = textGeometry.boundingBox!.max.x - textGeometry.boundingBox!.min.x;
    textMesh.position.set(
      -textWidth/2,
      this.keySize/2 + 0.1,
      -1.5
    );
    textMesh.rotation.x = -Math.PI / 2;
    return textMesh;
  }

  updateKeyObject(key: string, targetHeight: number | null = null) {
    const mesh = this.keyObjects[key];
    const outline = this.outlineObjects[key];
    
    // CRITICAL: Height must ALWAYS match character count - never override this relationship
    const height = this.keyHeights[key] || 0.01;
    
    // Only allow temporary height override for animations (like key press effects)
    const displayHeight = targetHeight !== null ? targetHeight : height;
    
    mesh.scale.y = Math.max(0.01, displayHeight);
    mesh.position.y = (this.keySize * displayHeight) / 2;
    outline.scale.y = displayHeight;
    outline.position.y = mesh.position.y;

    (mesh.material as THREE.Material[]).forEach((material: any) => {
      if (material.emissive) {
        material.emissiveIntensity = displayHeight > 0.01 ? 0.2 : 0;
      }
    });
    
    // Validate that stored height matches character count (except during temporary animations)
    if (targetHeight === null) {
      const expectedHeight = this.growthIncrement * (this.keyTypeCounts[key] || 0);
      if (Math.abs(this.keyHeights[key] - expectedHeight) > 0.001) {
        console.warn(`Height mismatch for key ${key}: stored=${this.keyHeights[key]}, expected=${expectedHeight}`);
        // Force correction
        this.keyHeights[key] = expectedHeight;
      }
    }
  }

  createWaveEffect(sourceKey: string) {
    const sourcePos = this.keyObjects[sourceKey].position.clone();
    Object.entries(this.keyObjects).forEach(([key, mesh]) => {
      const distance = sourcePos.distanceTo(mesh.position);
      if (distance <= this.waveRadius && key !== sourceKey) {
        this.keyWaves[key] = {
          time: 0,
          active: true,
          distance: distance
        };
      }
    });
  }

  updateWaves() {
    Object.entries(this.keyWaves).forEach(([key, wave]) => {
      if (wave.active) {
        wave.time += this.waveSpeed;
        const mesh = this.keyObjects[key];
        const outline = this.outlineObjects[key];
        
        if (wave.time >= Math.PI) {
          this.resetWave(key, wave, mesh, outline);
        } else {
          this.updateWavePosition(key, wave, mesh, outline);
        }
      }
    });
  }

  resetWave(key: string, wave: any, mesh: THREE.Mesh, outline: THREE.LineSegments) {
    wave.active = false;
    wave.time = 0;
    mesh.position.y = (this.keySize * this.keyHeights[key]) / 2;
    outline.position.y = mesh.position.y;
  }

  updateWavePosition(key: string, wave: any, mesh: THREE.Mesh, outline: THREE.LineSegments) {
    const waveOffset = Math.sin(wave.time) * this.waveHeight * 
      (1 - wave.distance / this.waveRadius);
    mesh.position.y = (this.keySize * this.keyHeights[key]) / 2 + waveOffset;
    outline.position.y = mesh.position.y;
  }

  updateIdleAnimation() {
    this.idleAnimationTime += 0.03;
    
    Object.entries(this.keyObjects).forEach(([key, mesh]) => {
      // CRITICAL: Base height must always match character count
      const baseHeight = this.growthIncrement * (this.keyTypeCounts[key] || 0);
      this.keyHeights[key] = baseHeight; // Ensure stored height is always correct
      
      const offset = Math.sin(this.idleAnimationTime + mesh.position.x * 0.1) * 0.1;
      const animatedHeight = Math.max(0.01, baseHeight + offset);
      
      mesh.scale.y = animatedHeight;
      mesh.position.y = (this.keySize * animatedHeight) / 2;
      
      const outline = this.outlineObjects[key];
      outline.scale.y = animatedHeight;
      outline.position.y = mesh.position.y;
    });
  }

  updateFromText(text: string) {
    this.resetAllKeys();
    
    if (!text || text === "type something and hit Ai Remix...") {
      return;
    }

    // Always process text input for automatic key growth
    this.processTextInput(text);
  }

  resetAllKeys() {
    // CRITICAL: Reset both counts and heights to maintain relationship
    Object.keys(this.keyHeights).forEach(key => {
      this.keyTypeCounts[key] = 0;
      this.keyHeights[key] = this.growthIncrement * this.keyTypeCounts[key]; // Should be 0
      this.updateKeyObject(key);
    });
  }

  processTextInput(text: string) {
    const charCounts = {};
    text.toLowerCase().split('').forEach(char => {
      if (this.keyObjects[char]) {
        (charCounts as any)[char] = ((charCounts as any)[char] || 0) + 1;
      }
    });

    Object.entries(charCounts).forEach(([char, count]) => {
      // CRITICAL: Character count determines height - this relationship is immutable
      this.keyTypeCounts[char] = count as number;
      this.keyHeights[char] = this.growthIncrement * (count as number);
      this.updateKeyObject(char);
      this.createWaveEffect(char);
    });
    
    // Ensure keys not in current text are reset to zero
    Object.keys(this.keyObjects).forEach(key => {
      if (!(charCounts as any)[key]) {
        this.keyTypeCounts[key] = 0;
        this.keyHeights[key] = 0;
        this.updateKeyObject(key);
      }
    });
  }

  async animateKeyDown(key: string, startHeight: number) {
    return new Promise<void>(resolve => {
      const steps = 60;
      const duration = 1000; // Fixed duration for smooth animation
      const _stepTime = duration / steps;
      let currentStep = 0;
      
      const animate = () => {
        if (currentStep >= steps) {
          this.updateKeyObject(key, 0);
          this.createWaveEffect(key);
          resolve();
          return;
        }
        
        const progress = currentStep / (steps - 1);
        const easeProgress = 1 - Math.pow(1 - progress, 2);
        const height = startHeight * (1 - easeProgress);
        this.updateKeyObject(key, height);
        
        currentStep++;
        requestAnimationFrame(animate);
      };
      
      animate();
    });
  }

  async clear() {
    if (this.clearAnimationInProgress) return;
    this.clearAnimationInProgress = true;

    // Get current text to simulate backspace sequence
    const currentText = this.getCurrentTextFromUI();
    if (currentText && currentText.trim()) {
      await this.animateBackspaceSequence(currentText);
    } else {
      // If no text, just clear all keys normally
      await this.clearAllKeysInstantly();
    }
    
    this.clearAnimationInProgress = false;
  }

  async animateTypingSequence(newText: string) {
    const chars = newText.toLowerCase().split('');
    const initialDelay = 50;  // Start slower (3x faster)
    const finalDelay = 10;    // End faster (3x faster)
    
    // Reset all keys to zero before starting
    this.resetAllKeys();
    
    // Clear current text display first
    this.updateTextDisplayDuringTyping('');
    
    for (let i = 0; i < chars.length; i++) {
      const char = chars[i];
      const currentText = newText.substring(0, i + 1);
      
      // Calculate accelerating delay - starts slow, gets faster
      const progress = i / (chars.length - 1);
      const currentDelay = initialDelay - (initialDelay - finalDelay) * Math.pow(progress, 2);
      
      // Animate key press if it exists
      if (this.keyObjects[char]) {
        await this.animateKeyPress(char);
        
        // CRITICAL: Increment count and recalculate height based on count
        this.keyTypeCounts[char] = (this.keyTypeCounts[char] || 0) + 1;
        this.keyHeights[char] = this.growthIncrement * this.keyTypeCounts[char];
        this.updateKeyObject(char);
      }
      
      // Update text display to show character being typed
      this.updateTextDisplayDuringTyping(currentText);
      
      // Update character bar during typing animation
      this.updateCharacterBarDuringTyping(currentText);
      
      // Wait before next key press
      await new Promise(resolve => setTimeout(resolve, currentDelay));
    }
  }

  private updateCharacterBarDuringTyping(text: string) {
    // Get reference to UI's character bar update method
    const characterBarSegments = document.getElementById('characterBarSegments');
    if (!characterBarSegments) return;
    
    // Clear existing segments
    characterBarSegments.innerHTML = '';
    
    if (!text || !text.trim()) return;
    
    // Calculate character counts from current text
    const letterCount: { [key: string]: number } = {};
    text.toLowerCase().split('').forEach(char => {
      if (/[a-z0-9]/.test(char)) {
        letterCount[char] = (letterCount[char] || 0) + 1;
      }
    });
    
    // Only proceed if we have character counts
    if (Object.keys(letterCount).length === 0) return;
    
    // Get the UI instance to access character bar methods
    // This is a bit of a hack, but necessary for the animation
    const event = new CustomEvent('updateCharacterBar', { 
      detail: { text, letterCount } 
    });
    document.dispatchEvent(event);
  }
  private updateTextDisplayDuringTyping(text: string) {
    const textDisplay = document.getElementById('textDisplay');
    const mobileTextDisplay = document.getElementById('mobileTextDisplay');
    
    if (textDisplay) textDisplay.textContent = text;
    if (mobileTextDisplay) mobileTextDisplay.textContent = text;
    
    // Update character count
    const characterCount = document.getElementById('characterCount');
    if (characterCount) {
      characterCount.textContent = `${text.length}/90 characters`;
    }
  }

  private getCurrentTextFromUI(): string {
    // Get text from either desktop or mobile display
    const textDisplay = document.getElementById('textDisplay');
    const mobileTextDisplay = document.getElementById('mobileTextDisplay');
    
    const text = textDisplay?.textContent || mobileTextDisplay?.textContent || '';
    return text === 'type something and click Ai Remix or just hit enter...' ? '' : text;
  }

  async animateBackspaceSequence(text: string) {
    const chars = text.toLowerCase().split('').reverse(); // Reverse for backspace order
    const initialDelay = 20;  // Start slower (3x faster)
    const finalDelay = 3;     // End faster (3x faster)
    
    for (let i = 0; i < chars.length; i++) {
      const char = chars[i];
      
      // Calculate accelerating delay - starts slow, gets faster
      const progress = i / (chars.length - 1);
      const currentDelay = initialDelay - (initialDelay - finalDelay) * Math.pow(progress, 2);
      
      if (this.keyObjects[char]) {
        // Animate key press (down and up)
        await this.animateKeyPress(char);
        
        // Update text display to show character being removed
        this.updateTextDisplayDuringClear(text, chars.length - i - 1);
        
        // CRITICAL: Decrement count and recalculate height based on count
        if (this.keyTypeCounts[char] > 0) {
          this.keyTypeCounts[char]--;
          this.keyHeights[char] = this.growthIncrement * this.keyTypeCounts[char];
          this.updateKeyObject(char);
        }
      }
      
      // Wait before next key press
      await new Promise(resolve => setTimeout(resolve, currentDelay));
    }
    
    // Final cleanup - ensure all keys are reset
    await this.clearAllKeysInstantly();
    
    // Reset text displays to empty after backspace completes
    this.updateTextDisplayDuringClear('', 0);
  }

  private async animateKeyPress(key: string) {
    const mesh = this.keyObjects[key];
    const outline = this.outlineObjects[key];
    if (!mesh || !outline) return;

    const originalHeight = this.keyHeights[key] || 0.01;
    const pressDepth = 0.3; // How far down the key goes when pressed
    const totalDuration = 100; // Total animation time in ms
    const startTime = performance.now();

    return new Promise<void>(resolve => {
      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / totalDuration, 1);
        
        // Create a press-release cycle: down for first half, up for second half
        let heightOffset;
        if (progress < 0.5) {
          // Press down (first half)
          const pressProgress = progress * 2;
          heightOffset = -pressDepth * Math.sin(pressProgress * Math.PI / 2);
        } else {
          // Release up (second half) 
          const releaseProgress = (progress - 0.5) * 2;
          heightOffset = -pressDepth * Math.cos(releaseProgress * Math.PI / 2);
        }
        
        const currentHeight = originalHeight + heightOffset;
        this.updateKeyObject(key, Math.max(0.01, currentHeight));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          // Ensure key returns to original height
          this.updateKeyObject(key, originalHeight);
          this.createWaveEffect(key);
          resolve();
        }
      };
      
      requestAnimationFrame(animate);
    });
  }

  private updateTextDisplayDuringClear(originalText: string, remainingLength: number) {
    const remainingText = originalText.substring(0, remainingLength);
    const textDisplay = document.getElementById('textDisplay');
    const mobileTextDisplay = document.getElementById('mobileTextDisplay');
    
    if (textDisplay) textDisplay.textContent = remainingText;
    if (mobileTextDisplay) mobileTextDisplay.textContent = remainingText;
    
    // Update character count
    const characterCount = document.getElementById('characterCount');
    if (characterCount) {
      characterCount.textContent = `${remainingText.length}/90 characters`;
    }
  }

  private async clearAllKeysInstantly() {
    // CRITICAL: Reset both counts and heights to maintain relationship
    Object.keys(this.keyHeights).forEach(key => {
      this.keyTypeCounts[key] = 0;
      this.keyHeights[key] = this.growthIncrement * this.keyTypeCounts[key]; // Should be 0
      this.updateKeyObject(key);
    });
  }

  increaseHeight() {
    this._isIncreasing = true;
  }

  decreaseHeight() {
    this._isIncreasing = false;
  }

  updateRotation() {
    if (!this.rotationState.isRotating) return;

    const currentTime = performance.now();
    const elapsed = currentTime - this.rotationState.startTime;
    
    if (elapsed >= this.rotationState.rotationDuration) {
      // Complete the rotation and stop
      this.container.rotation.y = this.rotationState.targetRotation;
      this.rotationState.isRotating = false;
      return;
    }

    const progress = elapsed / this.rotationState.rotationDuration;
    const easedProgress = 1 - Math.cos(progress * Math.PI / 2); // Smooth easing
    const newRotation = this.rotationState.initialRotation + 
      (this.rotationState.targetRotation - this.rotationState.initialRotation) * easedProgress;
    
    this.container.rotation.y = newRotation;
  }

  update() {
    this.updateWaves();
    this.updateIdleAnimation();
    this.updateRotation();
  }

  startAiRemixAnimation() {
    // AI Remix now uses typing animation instead of ripple effects
    // This method is kept for compatibility but doesn't start ripple animation
  }

  stopAiRemixAnimation() {
    // AI Remix typing animation handles its own completion
    // This method is kept for compatibility
  }

  private _updateAiRemixAnimation() {
    if (!this.aiRemixAnimation.isActive) return;

    const currentTime = performance.now();
    const elapsed = (currentTime - this.aiRemixAnimation.startTime) / 1000;
    
    Object.entries(this.keyObjects).forEach(([key, mesh]) => {
      const baseHeight = this.keyHeights[key] || 0.01;
      
      // Create ripple effect based on key position
      const ripplePhase = elapsed * this.aiRemixAnimation.pulseSpeed + 
        (mesh.position.x * 0.02) + (mesh.position.z * 0.03);
      const rippleOffset = Math.sin(ripplePhase) * 0.3;
      
      // Add gentle pulsing
      const pulseOffset = Math.sin(elapsed * 2) * 0.1;
      
      const animatedHeight = Math.max(0.01, baseHeight + rippleOffset + pulseOffset);
      this.updateKeyObject(key, animatedHeight);
    });
  }

  private _createGlobalWaveEffect() {
    // Create waves from multiple points for a dramatic finish
    const waveOrigins = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
    
    waveOrigins.forEach((key, index) => {
      if (this.keyObjects[key]) {
        setTimeout(() => {
          this.createWaveEffect(key);
        }, index * 100); // Stagger the waves
      }
    });
  }

  updateTheme(isDarkMode: boolean) {
    this.isDarkMode = isDarkMode;
    
    // Update key materials (key caps)
    Object.entries(this.keyMaterials).forEach(([key, materials]) => {
      // Update the top material (key cap) - index 2
      // Need to recreate the material since we're switching between Basic and Physical
      const mesh = this.keyObjects[key];
      if (mesh) {
        const newTopMaterial = isDarkMode 
          ? new THREE.MeshBasicMaterial({
              color: 0x252525, // Dark mode key caps
              transparent: false
            })
          : new THREE.MeshPhysicalMaterial({
              color: 0xfcfaf6,
              metalness: 0.1,
              roughness: 0.2,
              clearcoat: 0.8,
              clearcoatRoughness: 0.1,
              emissive: 0xfcfaf6,
              emissiveIntensity: 0.3,
              transparent: false
            });
        
        // Update the material array
        (materials as any)[2] = newTopMaterial;
        
        // Update the mesh materials
        if (Array.isArray(mesh.material)) {
          mesh.material[2] = newTopMaterial;
        }
      }
      
      // Update side materials - indices 0, 1, 3, 4, 5
      [0, 1, 3, 4, 5].forEach(index => {
        const sideMaterial = materials[index] as unknown as THREE.MeshBasicMaterial;
        if (sideMaterial) {
          sideMaterial.color.setHex(isDarkMode ? 0x333333 : 0xdddddd);
        }
      });
    });
    
    // Update text materials
    Object.values(this.textMaterials).forEach(textMaterial => {
      textMaterial.color.setHex(isDarkMode ? 0xfcfaf6 : 0x3c4142);
    });
    
    // Update all existing outlines
    Object.values(this.outlineObjects).forEach(outline => {
      if (outline.material) {
        (outline.material as any).color.setHex(isDarkMode ? 0xfcfaf6 : 0x3c4142);
        (outline.material as any).opacity = isDarkMode ? 0.8 : 0.60;
      }
    });
    
    // Update all existing base outlines
    Object.values(this.baseOutlineObjects).forEach(baseOutline => {
      if (baseOutline.material) {
        (baseOutline.material as any).color.setHex(isDarkMode ? 0xffffff : 0x3c4142);
        (baseOutline.material as any).opacity = isDarkMode ? 0.6 : 0.4;
      }
    });
  }

  updateKeyCapFont(_fontFamily: string, fontName: string) {
    // Check if the font is loaded
    if (!this.loadedFonts[fontName]) {
      console.warn(`Font ${fontName} not loaded, keeping current font`);
      return;
    }

    // Update current font
    this.currentFont = this.loadedFonts[fontName];

    // Recreate all text objects with new font
    Object.entries(this.textObjects).forEach(([key, textMesh]) => {
      const keyMesh = this.keyObjects[key];
      if (!keyMesh) return;

      // Remove old text mesh
      keyMesh.remove(textMesh);
      textMesh.geometry.dispose();
      
      // Create new text material
      const textMaterial = new THREE.MeshPhysicalMaterial({
        color: this.isDarkMode ? 0xfcfaf6 : 0x3c4142,
        metalness: 0,
        roughness: 1
      });

      // Create new text mesh with current font
      const newTextMesh = this.createKeyText(key, this.currentFont, textMaterial);
      
      // Apply font-specific styling
      this.applyFontStyling(newTextMesh, fontName);
      
      // Add to key mesh
      keyMesh.add(newTextMesh);
      
      // Update references
      this.textObjects[key] = newTextMesh;
      this.textMaterials[key] = textMaterial;
    });
  }

  private applyFontStyling(textMesh: THREE.Mesh, fontName: string) {
    const textMaterial = textMesh.material as THREE.MeshPhysicalMaterial;
    
    switch (fontName) {
      case 'Georgia':
        // Serif fonts - elegant and refined
        textMaterial.roughness = 0.8;
        textMaterial.metalness = 0.05;
        textMesh.scale.set(0.95, 0.95, 1);
        break;
        
      case 'Roboto Condensed':
        // Condensed font - narrower and taller
        textMaterial.roughness = 0.9;
        textMaterial.metalness = 0;
        textMesh.scale.set(0.85, 1.1, 1);
        break;
        
      case 'Inter':
        // Modern sans-serif - clean and sharp
        textMaterial.roughness = 1.0;
        textMaterial.metalness = 0;
        textMesh.scale.set(1, 1, 1);
        break;
        
      default: // 'System'
        // Default balanced styling
        textMaterial.roughness = 1.0;
        textMaterial.metalness = 0;
        textMesh.scale.set(1, 1, 1);
        break;
    }
    
    textMaterial.needsUpdate = true;
  }
}