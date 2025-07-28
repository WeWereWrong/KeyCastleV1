import * as THREE from 'three';

interface UIElements {
  // Core UI Elements
  heightUpBtn: HTMLElement | null;
  heightDownBtn: HTMLElement | null;
  textDisplay: HTMLElement | null;
  mobileTextDisplay: HTMLElement | null;
  typeButton: HTMLElement | null;
  clearButton: HTMLElement | null;
  characterCount: HTMLElement | null;
  characterBarSegments: HTMLElement | null;
  warning: HTMLElement | null;
  typingSpeed?: HTMLElement | null;
  downloadPoster?: HTMLElement | null;
  remixWithAI?: HTMLElement | null;
  fontSize?: HTMLElement | null;
  typingSpeedDisplay?: HTMLElement | null;
  fontName?: HTMLElement | null;
  fontPrev?: HTMLElement | null;
  fontNext?: HTMLElement | null;
  
  // Preview-related elements (optional)
  previewModal?: HTMLElement | null;
  previewText?: HTMLElement | null;
  previewClose?: HTMLElement | null;
  previewDownload?: HTMLElement | null;
  previewRemix?: HTMLElement | null;
  previewFontSize?: HTMLElement | null;
  previewImage?: HTMLImageElement | null;
  
  // Other optional elements
  keyboardHeightControl?: HTMLInputElement | null;
  keyboardHeightText?: HTMLElement | null;
  fontSizeControl?: HTMLInputElement | null;
  fontSizeText?: HTMLElement | null;
  textInput?: HTMLTextAreaElement | null;
  closePreview?: HTMLElement | null;
  printFromPreview?: HTMLElement | null;
  previewAndPrint?: HTMLElement | null;
  shadowAngle?: HTMLInputElement | null;
}

export class UI {
  private isDarkMode: boolean = false;
  private keyboard: Record<string, any>;
  private renderer: THREE.WebGLRenderer;
  private maxCharacters: number;
  private isUpdating: boolean;
  private hasInteracted: boolean;
  private elements: UIElements = {
    // Initialize only required properties
    heightUpBtn: null,
    heightDownBtn: null,
    textDisplay: null,
    mobileTextDisplay: null,
    typeButton: null,
    clearButton: null,
    characterCount: null,
    characterBarSegments: null,
    warning: null
  };
  private aiButtonFirstUse: boolean;
  private fonts: Array<{name: string, family: string}>;
  private currentFontIndex: number;
  private typingStats: {
    startTime: number | null;
    endTime: number | null;
    characterCount: number;
    currentWPM: number;
    isTyping: boolean;
  };

  constructor(keyboard: any, renderer: any) {
    this.keyboard = keyboard;
    this.renderer = renderer;
    this.maxCharacters = 90;
    this.isUpdating = false;
    this.hasInteracted = false;
    
    // Initialize elements with all properties
    this.elements = {
      // Required properties
      heightUpBtn: document.getElementById('heightUpBtn'),
      heightDownBtn: document.getElementById('heightDownBtn'),
      textDisplay: document.getElementById('textDisplay'),
      mobileTextDisplay: document.getElementById('mobileTextDisplay'),
      typeButton: document.getElementById('typeButton'),
      clearButton: document.getElementById('clearButton'),
      characterCount: document.getElementById('characterCount'),
      characterBarSegments: document.getElementById('characterBarSegments'),
      warning: document.getElementById('warning'),
      
      // Optional properties
      typingSpeed: document.getElementById('typingSpeed'),
      downloadPoster: document.getElementById('downloadPoster'),
      remixWithAI: document.getElementById('remixWithAI'),
      fontSize: document.getElementById('fontSize'),
      typingSpeedDisplay: document.getElementById('typingSpeedDisplay'),
      fontName: document.getElementById('fontName'),
      fontPrev: document.getElementById('fontPrev'),
      fontNext: document.getElementById('fontNext'),
      
      // Preview-related elements
      previewModal: document.getElementById('previewModal') as HTMLElement | null,
      previewText: document.getElementById('previewText'),
      previewClose: document.getElementById('previewClose'),
      previewDownload: document.getElementById('previewDownload'),
      previewRemix: document.getElementById('previewRemix'),
      previewFontSize: document.getElementById('previewFontSize'),
      previewImage: document.getElementById('previewImage') as HTMLImageElement | null,
      
      // Other optional elements
      keyboardHeightControl: document.getElementById('keyboardHeight') as HTMLInputElement | null,
      keyboardHeightText: document.getElementById('keyboardHeightText'),
      fontSizeControl: document.getElementById('fontSizeControl') as HTMLInputElement | null,
      fontSizeText: document.getElementById('fontSizeText'),
      textInput: document.getElementById('textInput') as HTMLTextAreaElement | null,
      closePreview: document.getElementById('closePreview'),
      printFromPreview: document.getElementById('printFromPreview'),
      previewAndPrint: document.getElementById('previewAndPrint'),
      shadowAngle: document.getElementById('shadowAngle') as HTMLInputElement | null
    };
    this.aiButtonFirstUse = true;
    this.fonts = [
      { name: 'System', family: 'system-ui, -apple-system, sans-serif' },
      { name: 'Georgia', family: 'Georgia, serif' },
      { name: 'Inter', family: 'Inter, system-ui, sans-serif' },
      { name: 'Roboto Condensed', family: '"Roboto Condensed", "Arial Narrow", "Helvetica Condensed", sans-serif' }
    ];
    this.currentFontIndex = 0;
    this.typingStats = {
      startTime: null,
      endTime: null,
      characterCount: 0,
      currentWPM: 0,
      isTyping: false
    };
    this.setupElements();
    this.setupEventListeners();
    this.loadThemePreference();
    
    // Set initial placeholder state with blinking cursor
    this.updateDisplays('');
  }

  private setupElements() {
    this.elements = {
      heightUpBtn: document.getElementById('heightUp'),
      heightDownBtn: document.getElementById('heightDown'),
      textDisplay: document.getElementById('textDisplay'),
      mobileTextDisplay: document.getElementById('mobileTextDisplay'),
      typeButton: document.getElementById('type'),
      clearButton: document.getElementById('clearButton'),
      characterCount: document.getElementById('characterCount'),
      characterBarSegments: document.getElementById('characterBarSegments'),
      warning: document.getElementById('warning'),
      previewModal: document.getElementById('previewModal'),
      previewImage: document.getElementById('previewImage') as HTMLImageElement,
      closePreview: document.getElementById('closePreview'),
      printFromPreview: document.getElementById('printFromPreview'),
      previewAndPrint: document.getElementById('previewAndPrint'),
      shadowAngle: document.getElementById('shadowAngle') as HTMLInputElement,
      fontPrev: document.getElementById('fontPrev'),
      fontNext: document.getElementById('fontNext'),
      fontName: document.getElementById('fontName'),
      typingSpeed: document.getElementById('typingSpeed')
    };

    this.setupAIButtonListener();
  }

  // Removed unused createAIButton method

  private async modifyTextWithAI(text: string): Promise<string> {
    try {
      // Use environment variables for security
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
      
      if (!supabaseUrl || !supabaseKey) {
        throw new Error('Supabase configuration is missing. Please check your environment variables.');
      }
      
      const fetchUrl = `${supabaseUrl}/functions/v1/openai`;
      
      const response = await fetch(fetchUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${supabaseKey}`
        },
        body: JSON.stringify({ text })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Server error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      if (!data.text) {
        throw new Error('No text received from the server');
      }

      return data.text;
    } catch (error) {
      console.error('AI Text Generation Error:', error);
      
      let errorMessage = 'Unable to generate text. Please try again.';
      
      if (error instanceof Error) {
        if (error.message.includes('Supabase configuration is missing')) {
          errorMessage = 'Configuration error. Please check your setup.';
        } else if (error.message.includes('Failed to fetch')) {
          errorMessage = 'Network error. Please check your connection and try again.';
        } else if (error.message === 'Please enter some text first') {
          errorMessage = error.message;
        }
      }
      
      this.showError(errorMessage);
      return text;
    }
  }

  private showError(message: string) {
    const errorDiv = document.createElement('div');
    errorDiv.style.cssText = `
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: #fee2e2;
      color: #991b1b;
      padding: 12px 20px;
      border-radius: 8px;
      font-family: system-ui;
      font-size: 14px;
      border: 1px solid #fecaca;
      z-index: 2000;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    `;
    errorDiv.textContent = message;
    document.body.appendChild(errorDiv);
    
    setTimeout(() => {
      errorDiv.style.opacity = '0';
      errorDiv.style.transition = 'opacity 0.3s ease';
      setTimeout(() => errorDiv.remove(), 300);
    }, 3000);
  }

  private loadThemePreference() {
    const savedTheme = localStorage.getItem('theme');
    this.isDarkMode = savedTheme === 'dark';
    this.applyTheme();
  }

  private applyTheme() {
    if (this.isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.body.style.background = '#000000';
      this.keyboard.scene.scene.background = new THREE.Color(0x000000);
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      document.body.style.background = '#fcfaf6';
      this.keyboard.scene.scene.background = new THREE.Color('#fcfaf6');
    }
    
    // Update keyboard theme
    this.keyboard.updateTheme(this.isDarkMode);
    
    // Update floor theme
    this.keyboard.scene.updateFloorTheme(this.isDarkMode);
    
    // Update character bar colors for current theme
    this.updateCharacterBar(this.getDisplayText());
    
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }

  // Removed unused updateSliderPosition method

  private setupEventListeners() {
    this.setupButtonListeners();
    this.setupTextInputListeners();
    this.setupKeyboardListeners();
    this.setupPreviewListeners();
    this.setupAIButtonListener();
    this.setupThemeToggle();
    this.setupFontControls();
    this.setupCharacterBarEvents();
  }

  private setupCharacterBarEvents() {
    // Listen for character bar updates during typing animation
    document.addEventListener('updateCharacterBar', ((event: Event) => {
      const customEvent = event as CustomEvent<{ text: string }>;
      const { text } = customEvent.detail;
      this.updateCharacterBar(text);
    }) as EventListener);
  }

  private setupButtonListeners() {
    this.elements.heightUpBtn?.addEventListener('click', () => {
      // Visual feedback - make Castle button active
      this.elements.heightUpBtn?.classList.add('active');
      this.elements.heightDownBtn?.classList.remove('active');
      this.keyboard.increaseHeight();
      this.updateKeyboardFromText(this.getDisplayText());
    });

    this.elements.heightDownBtn?.addEventListener('click', async () => {
      // Visual feedback - make Clear button active during animation
      this.elements.heightDownBtn?.classList.add('active');
      this.elements.heightUpBtn?.classList.remove('active');
      this.keyboard.decreaseHeight();
      await this.keyboard.clear();
      
      setTimeout(() => {
        // Switch back to Castle being active after clear animation
        this.elements.heightUpBtn?.classList.add('active');
        this.elements.heightDownBtn?.classList.remove('active');
        this.keyboard.increaseHeight();
        // Reset displays after animation completes
        this.resetTextDisplays();
      }, 500);
    });

    this.elements.clearButton?.addEventListener('click', async () => {
      // Temporarily activate Clear button during clear operation
      this.elements.heightDownBtn?.classList.add('active');
      this.elements.heightUpBtn?.classList.remove('active');
      
      await this.keyboard.clear();
      
      setTimeout(() => {
        // Switch back to Castle being active
        this.elements.heightUpBtn?.classList.add('active');
        this.elements.heightDownBtn?.classList.remove('active');
        this.keyboard.increaseHeight();
        // Reset displays after animation completes
        this.resetTextDisplays();
      }, 500);
    });

    this.elements.shadowAngle?.addEventListener('input', (e: Event) => {
      const target = e.target as HTMLInputElement;
      const angle = (parseInt(target.value) * Math.PI) / 180;
      this.keyboard.scene.updateLightPosition(angle);
    });
  }

  private setupFontControls() {
    this.elements.fontPrev?.addEventListener('click', () => {
      this.currentFontIndex = (this.currentFontIndex - 1 + this.fonts.length) % this.fonts.length;
      this.updateFont();
    });

    this.elements.fontNext?.addEventListener('click', () => {
      this.currentFontIndex = (this.currentFontIndex + 1) % this.fonts.length;
      this.updateFont();
    });

    // Initialize font display
    this.updateFont();
  }

  private updateFont() {
    const currentFont = this.fonts[this.currentFontIndex];
    
    // Update font name display
    if (this.elements.fontName) {
      this.elements.fontName.textContent = currentFont.name;
    }

    // Apply font to text displays
    if (this.elements.textDisplay) {
      this.elements.textDisplay.style.fontFamily = currentFont.family;
      this.elements.textDisplay.style.fontWeight = '500';
      this.elements.textDisplay.style.letterSpacing = 'normal';
    }
    if (this.elements.mobileTextDisplay) {
      this.elements.mobileTextDisplay.style.fontFamily = currentFont.family;
      this.elements.mobileTextDisplay.style.fontWeight = '500';
      this.elements.mobileTextDisplay.style.letterSpacing = 'normal';
    }

    // Update 3D key cap text to match font style
    this.keyboard.updateKeyCapFont(currentFont.family, currentFont.name);
  }

  private setupThemeToggle() {
    // Add click listener to slider knob for theme toggle
    this.elements.shadowAngle?.addEventListener('click', (e: MouseEvent) => {
      const slider = e.target as HTMLInputElement;
      const rect = slider.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const sliderWidth = rect.width;
      const thumbPosition = (parseFloat(slider.value) / 360) * sliderWidth;
      
      // Check if click is near the thumb (within 20px)
      if (Math.abs(clickX - thumbPosition) <= 20) {
        e.preventDefault();
        this.isDarkMode = !this.isDarkMode;
        this.applyTheme();
      }
    });
  }

  private setupTextInputListeners() {
    const handleInput = (element: HTMLElement) => {
      if (this.isUpdating) return;
      
      const text = element.textContent || '';
      
      // Track typing session for WPM calculation
      this.trackTypingSession(text);
      
      if (!this.hasInteracted && text.trim()) {
        this.hasInteracted = true;
      }

      if (text.length > this.maxCharacters) {
        element.textContent = text.slice(0, this.maxCharacters);
      }

      this.updateDisplays(text);
    };

    [this.elements.textDisplay, this.elements.mobileTextDisplay].forEach(element => {
      if (!element) return;
      
      element.addEventListener('input', () => {
        handleInput(element);
      });
      element.addEventListener('focus', () => {
        if (!this.hasInteracted) {
          element.textContent = '';
          this.updateDisplays('');
          this.hasInteracted = true;
        }
      });
      element.addEventListener('keydown', (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          this.triggerAIRemix();
        }
      });
      element.addEventListener('paste', (e: ClipboardEvent) => {
        e.preventDefault();
        const text = e.clipboardData?.getData('text') || '';
        const cleanText = text.replace(/\n/g, ' ').trim();
        
        if (!this.hasInteracted) {
          this.hasInteracted = true;
          element.textContent = '';
        }

        // For mobile, use a simpler approach to avoid cursor issues
        const isMobile = window.innerWidth <= 480;
        if (isMobile && element === this.elements.mobileTextDisplay) {
          const currentText = element.textContent || '';
          const newText = currentText + cleanText;
          element.textContent = newText.slice(0, this.maxCharacters);
        } else {
          const selection = window.getSelection();
          if (!selection) return;
          
          const range = selection.getRangeAt(0);
          const cursorPosition = range.startOffset;

          const currentText = element.textContent || '';
          const newText = currentText.slice(0, cursorPosition) + cleanText + currentText.slice(cursorPosition);
          element.textContent = newText.slice(0, this.maxCharacters);
        }
        
        this.updateDisplays(element.textContent || '');
      });
    });
  }

  private setupKeyboardListeners() {
    document.addEventListener('keydown', (e: KeyboardEvent) => {
      if (!this.elements.textDisplay?.matches(':focus') && !this.elements.mobileTextDisplay?.matches(':focus')) {
        this.handleUnfocusedKeyPress(e);
      }
    });

    document.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'Enter') {
        this.elements.previewAndPrint?.click();
      }
    });

    // Add spacebar trigger for Preview & Print (desktop only)
    document.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === ' ' || e.code === 'Space') {
        // Only trigger if not focused on text inputs and not on mobile
        if (!this.elements.textDisplay?.matches(':focus') && 
            !this.elements.mobileTextDisplay?.matches(':focus') &&
            window.innerWidth > 480) {
          e.preventDefault();
          this.showPreview();
        }
      }
    });

    // Add double tap detection for mobile
    this.setupMobileDoubleTap();
  }

  private handleUnfocusedKeyPress(e: KeyboardEvent) {
    const key = e.key.toLowerCase();
    const currentText = this.getDisplayText();
    
    if (e.key === 'Backspace') {
      if (currentText) {
        const newText = currentText.slice(0, -1);
        this.updateDisplays(newText);
        this.trackTypingSession(newText);
      }
      return;
    }

    // Skip space handling here since it's handled in setupKeyboardListeners for preview trigger
    if ((key === ' ' || e.code === 'Space') && window.innerWidth <= 480) {
      e.preventDefault();
      if (currentText.length < this.maxCharacters) {
        const newText = this.hasInteracted ? currentText + ' ' : ' ';
        this.updateDisplays(newText);
        this.trackTypingSession(newText);
        this.hasInteracted = true;
      }
      return;
    }

    if (this.keyboard.keyObjects[key] && currentText.length < this.maxCharacters) {
      this.hasInteracted = true;
      const newText = currentText + key;
      this.updateDisplays(newText);
      this.trackTypingSession(newText);
    }
  }

  private setupMobileDoubleTap() {
    // Implementation for mobile double tap
  }

  private setupPreviewListeners() {
    this.elements.previewAndPrint?.addEventListener('click', () => {
      this.showPreview();
    });

    this.elements.closePreview?.addEventListener('click', () => {
      this.hidePreview();
    });

    this.elements.printFromPreview?.addEventListener('click', () => {
      this.downloadPoster();
    });

    // Close preview modal when clicking outside
    this.elements.previewModal?.addEventListener('click', (e: MouseEvent) => {
      if (e.target === this.elements.previewModal) {
        this.hidePreview();
      }
    });

    // Handle Escape key to close preview
    document.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        // Check if preview modal is open
        if (this.elements.previewModal?.style.display === 'block') {
          e.preventDefault();
          this.hidePreview();
        }
      }
    });

    // Additional ESC key handler with event delegation for better reliability
    document.addEventListener('keyup', (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (this.elements.previewModal?.style.display === 'block') {
          e.preventDefault();
          e.stopPropagation();
          this.hidePreview();
        }
      }
    });
  }

  private async triggerAIRemix() {
    const aiButton = document.getElementById('aiButton') as HTMLButtonElement;
    if (!aiButton || aiButton.disabled) return;

    // Remove attention animation on first use
    if (this.aiButtonFirstUse) {
      aiButton.classList.remove('attention');
      this.aiButtonFirstUse = false;
    }
    
    const currentText = this.getDisplayText();
    
    if (!currentText || currentText === 'type something and click Reword or just hit enter') {
      const defaultText = 'Bend the grid. Break the rules. Let letters dance on empty space.';
      this.hasInteracted = true;
      await this.keyboard.animateTypingSequence(defaultText);
      this.updateCharacterBar(defaultText);
      return;
    }

    aiButton.disabled = true;
    aiButton.textContent = '✦Rewording...';
    
    try {
      // First, clear existing keys with backspace animation
      if (currentText && currentText.trim()) {
        await this.keyboard.animateBackspaceSequence(currentText);
      }
      
      // Then generate AI text after clearing is complete
      const modifiedText = await this.modifyTextWithAI(currentText);
      this.hasInteracted = true;
      
      // Animate typing the new AI-generated text
      await this.keyboard.animateTypingSequence(modifiedText);
      
      // Make preview button bounce 4 times after successful AI text generation
      setTimeout(() => {
        const previewButton = document.getElementById('previewAndPrint');
        if (previewButton) {
          previewButton.classList.remove('bounce'); // Remove if already present
          previewButton.classList.add('bounce');
          // Remove the bounce class after animation completes (0.8s * 4 = 3.2s)
          setTimeout(() => {
            previewButton.classList.remove('bounce');
          }, 3200);
        }
      }, 100);
    } catch (error) {
      console.error('AI Button Error:', error);
      this.showError('Unable to process text. Please try again.');
    } finally {
      aiButton.disabled = false;
      aiButton.textContent = 'Reword ✦';
    }
  }

  private setupAIButtonListener() {
    const aiButton = document.getElementById('aiButton');
    if (!aiButton) return;

    aiButton.addEventListener('click', async () => {
      await this.triggerAIRemix();
    });
  }

  private getDisplayText(): string {
    const text = this.elements.textDisplay?.textContent?.trim() || '';
    return this.hasInteracted ? text : '';
  }

  private updateDisplays(text: string) {
    const displayText = !this.hasInteracted && !text 
      ? 'type something and click Reword or just hit enter' 
      : text;
    
    // Set placeholder attribute for blinking cursor
    const isPlaceholder = !this.hasInteracted && !text;
    
    if (this.elements.textDisplay) {
      this.elements.textDisplay.textContent = displayText;
      if (isPlaceholder) {
        this.elements.textDisplay.setAttribute('data-placeholder', 'true');
      } else {
        this.elements.textDisplay.removeAttribute('data-placeholder');
      }
    }
    if (this.elements.mobileTextDisplay) {
      this.elements.mobileTextDisplay.textContent = displayText;
      if (isPlaceholder) {
        this.elements.mobileTextDisplay.setAttribute('data-placeholder', 'true');
      } else {
        this.elements.mobileTextDisplay.removeAttribute('data-placeholder');
      }
    }

    this.updateCharacterCount(text);
    this.updateKeyboardFromText(text);
    this.updateTypingSpeedDisplay();
  }

  private resetTextDisplays() {
    this.hasInteracted = false;
    this.updateDisplays('');
    this.resetTypingStats();
  }

  private updateCharacterCount(text: string) {
    const count = text.length;
    if (this.elements.characterCount) {
      this.elements.characterCount.textContent = `${count}/${this.maxCharacters} characters`;
    }
    
    if (this.elements.characterBarSegments) {
      this.updateCharacterBar(text);
    }
  }

  private resetTypingStats(): void {
    this.typingStats = {
      startTime: null,
      endTime: null,
      characterCount: 0,
      currentWPM: 0,
      isTyping: false
    };
    this.updateTypingSpeedDisplay();
  }
  
  private hidePreview(): void {
    if (this.elements.previewModal) {
      this.elements.previewModal.style.display = 'none';
    }
  }
  
  private downloadPoster(): void {
    // Implementation for downloading poster
    console.log('Download poster functionality will be implemented here');
  }

  private showPreview(): void {
    if (!this.elements.previewModal || !this.elements.previewImage) return;
    
    try {
      const canvas = this.generatePosterImage();
      this.elements.previewImage.src = canvas.toDataURL('image/png');
      this.elements.previewModal.style.display = 'block';
    } catch (error) {
      console.error('Error generating preview:', error);
      this.showError('Failed to generate preview. Please try again.');
    }
  }

  // Canvas utility method to draw rounded rectangles
  private roundRect(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number,
    fill: boolean = false,
    stroke: boolean = true
  ): void {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
    if (fill) {
      ctx.fill();
    }
    if (stroke) {
      ctx.stroke();
    }
  }

  // Draw a label for a segment in the character bar
  private drawSegmentLabel(
    ctx: CanvasRenderingContext2D,
    text: string,
    count: number,
    x: number,
    y: number,
    width: number,
    height: number,
    color: string = '#000',
    bgColor: string = '#fff'
  ): void {
    // Save the current context state
    ctx.save();
    
    // Draw background with rounded corners
    ctx.fillStyle = bgColor;
    this.roundRect(ctx, x, y, width, height, 4, true, false);
    
    // Set up text styling with dynamic font size
    let fontSize = Math.min(12, height * 0.6);
    let textWidth: number;
    
    // Include count in the label if it's greater than 1
    const displayText = count > 1 ? `${text} (${count})` : text;
    
    // Find the largest font size that fits
    do {
      ctx.font = `${fontSize}px system-ui, sans-serif`;
      textWidth = ctx.measureText(displayText).width;
      if (textWidth <= width - 10) break;
      fontSize -= 0.5;
    } while (fontSize > 8);
    
    // Set final text style
    ctx.fillStyle = color;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Calculate text position
    const textX = x + (width / 2);
    const textY = y + (height / 2);
    
    // Draw text
    ctx.fillText(text, textX, textY);
    
    // Restore the context state
    ctx.restore();
  }

  private updateTypingSpeedDisplay(): void {
    if (!this.elements.typingSpeedDisplay) return;
    
    const wpm = this.typingStats.currentWPM || 0;
    this.elements.typingSpeedDisplay.textContent = `${wpm} WPM`;
    
    // Optional: Add visual feedback based on typing speed
    if (wpm > 60) {
      this.elements.typingSpeedDisplay.style.color = '#4CAF50'; // Green for fast typing
    } else if (wpm > 30) {
      this.elements.typingSpeedDisplay.style.color = '#FFC107'; // Yellow for moderate
    } else {
      this.elements.typingSpeedDisplay.style.color = '#F44336'; // Red for slow
    }
  }

  private trackTypingSession(text: string): void {
    const now = Date.now();
    
    // Start new session if not already typing
    if (!this.typingStats.isTyping) {
      this.typingStats.startTime = now;
      this.typingStats.characterCount = 0;
      this.typingStats.isTyping = true;
    }
    
    // Update character count
    this.typingStats.characterCount = text.length;
    
    // Calculate WPM (assuming average word length of 5 characters)
    if (this.typingStats.startTime) {
      const minutes = (now - this.typingStats.startTime) / (1000 * 60);
      this.typingStats.currentWPM = Math.round((text.length / 5) / Math.max(0.1, minutes));
    }
    
    // Update typing speed display
    this.updateTypingSpeedDisplay();
  }

  private updateCharacterBar(text: string) {
    if (!this.elements.characterBarSegments) return;
    this.elements.characterBarSegments.innerHTML = '';
    if (!text || text === 'type something and click Reword or just hit enter' || !this.hasInteracted) return;

    const letterCount: { [key: string]: number } = {};
    text.toLowerCase().split('').forEach(char => {
      // Count all letters and numbers, not just keyboard keys that are loaded
      if (/[a-z0-9]/.test(char)) {
        letterCount[char] = (letterCount[char] || 0) + 1;
      }
    });

    // Only proceed if we have character counts
    if (Object.keys(letterCount).length === 0) return;

    // Calculate max characters based on available width
    const maxChars = this.calculateMaxCharactersForWidth(window.innerWidth);

    const sortedChars = Object.entries(letterCount)
      .sort(([,a], [,b]) => b - a)
      .slice(0, maxChars);

    const othersCount = Object.entries(letterCount)
      .slice(maxChars)
      .reduce((sum, [,count]) => sum + count, 0);

    sortedChars.forEach(([char, count], index) => {
      this.addCharacterBarSegment(char, count, index === 0, index === sortedChars.length - 1 && othersCount === 0);
    });

    if (othersCount > 0) {
      this.addOthersSegment(othersCount);
    }
  }

  private addCharacterBarSegment(char: string, count: number, isFirst: boolean, isLast: boolean) {
    if (!this.elements.characterBarSegments) return;

    const segment = document.createElement('div');
    segment.className = 'bar-segment';
    segment.style.flexGrow = count.toString();
    
    // Apply fill color with opacity based on count
    const fillColor = this.getCharacterFillColor(char, count);
    segment.style.background = fillColor;
    
    if (isFirst) {
      segment.style.borderTopLeftRadius = '4px';
      segment.style.borderBottomLeftRadius = '4px';
    }
    if (isLast) {
      segment.style.borderTopRightRadius = '4px';
      segment.style.borderBottomRightRadius = '4px';
    }

    const label = document.createElement('div');
    label.className = 'bar-label';
    label.textContent = `${char} (${count})`;

    const line = document.createElement('div');
    line.className = 'bar-line';

    segment.appendChild(line);
    segment.appendChild(label);
    this.elements.characterBarSegments.appendChild(segment);
  }

  private getCharacterFillColor(char: string, count: number): string {
    // Use character code to create a consistent color
    const charCode = char.charCodeAt(0);
    // Create a hue based on the character code (0-360)
    const hue = (charCode * 137.5) % 360; // Using golden angle for better distribution
    // Base saturation and lightness with some variation
    const saturation = 70 + (charCode % 20); // 70-90%
    const lightness = 50 + (charCode % 10) - 5; // 45-55%
    
    // Adjust opacity based on count
    const opacity = Math.min(0.2 + (count * 0.02), 0.8);
    
    return `hsla(${hue}, ${saturation}%, ${lightness}%, ${opacity})`;
  }

  private addOthersSegment(count: number) {
    if (!this.elements.characterBarSegments) return;

    const segment = document.createElement('div');
    segment.className = 'bar-segment';
    segment.style.flexGrow = count.toString();
    
    // Use white fill in dark mode, black in light mode for others segment
    const othersColor = this.isDarkMode ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.4)';
    segment.style.background = othersColor;
    segment.style.borderTopRightRadius = '4px';
    segment.style.borderBottomRightRadius = '4px';

    const label = document.createElement('div');
    label.className = 'bar-label';
    label.textContent = `others (${count})`;

    const line = document.createElement('div');
    line.className = 'bar-line';

    segment.appendChild(line);
    segment.appendChild(label);
    this.elements.characterBarSegments.appendChild(segment);
  }

  // Single implementation of calculateMaxCharactersForWidth
  private calculateMaxCharactersForWidth(width: number): number {
    // Calculate max characters based on available screen width
    // Each character segment needs ~60-100px minimum for readability
    // Account for margins and spacing
    
    if (width <= 320) return 2;      // Very small phones
    if (width <= 480) return 3;      // Small phones
    if (width <= 640) return 4;      // Large phones / small tablets
    if (width <= 900) return 5;      // Tablets / small desktops
    if (width <= 1200) return 6;     // Medium desktops
    return 7;                        // Large desktops
  }

  private updateKeyboardFromText(text: string) {
    if (this.isUpdating) return;
    this.isUpdating = true;
    
    try {
      this.keyboard.updateFromText(text);
    } catch (error) {
      console.error('Error updating keyboard:', error);
    } finally {
      this.isUpdating = false;
    }
  }

  private generatePosterImage(): HTMLCanvasElement {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Could not get canvas context');
    
    const width = this.renderer.domElement.width;
    const height = this.renderer.domElement.height;
    canvas.width = width;
    canvas.height = height;
    
    // Draw the 3D scene
    ctx.drawImage(this.renderer.domElement, 0, 0);
    
    // Add text overlay
    const text = this.getDisplayText();
    if (text) {
      this.drawPosterText(ctx, text, width, height);
    }
    
    return canvas;
  }

  private drawPosterText(ctx: CanvasRenderingContext2D, text: string, width: number, height: number) {
    const isMobile = window.innerWidth <= 480;
    
    // Calculate responsive font sizes based on viewport dimensions
    const baseSize = Math.min(width, height) * 0.08; // 8% of smaller dimension
    const titleSize = Math.max(36, Math.min(120, baseSize)); // Clamp between 36-120px
    const statsSize = isMobile ? titleSize * 0.4 : titleSize * 0.28; // Desktop: 30% smaller
    const labelSize = titleSize * 0.15; // Labels are 15% of title
    
    // Calculate responsive margins based on viewport dimensions
    const baseSideMargin = Math.min(width, height) * 0.08; // 8% of smaller dimension
    const baseTopMargin = Math.min(width, height) * 0.15; // 15% of smaller dimension
    const sideMargin = Math.max(24, Math.min(120, baseSideMargin)); // Clamp between 24-120px
    const topMargin = Math.max(50, Math.min(200, baseTopMargin)); // Clamp between 50-200px
    
    const config = {
      margin: {
        side: sideMargin,
        top: topMargin
      },
      title: {
        fontSize: titleSize,
        color: this.isDarkMode ? '#ffffff' : '#000000',
        lineHeight: Math.round(titleSize),
        maxWidth: isMobile ? width * 0.8 : width * 0.7
      },
      stats: {
        font: `500 ${Math.round(statsSize)}px system-ui`,
        fontSize: Math.round(statsSize),
        color: this.isDarkMode ? '#cccccc' : '#333333',
        spacing: isMobile ? 32 : 48
      },
      bar: {
        height: isMobile ? 12 : 18,
        spacing: isMobile ? 48 : 60,
        labelFont: `600 ${Math.round(labelSize)}px system-ui`,
        bottomMargin: isMobile ? 72 : 120,
        lineHeight: Math.round(labelSize * 1.5)
      }
    };

    // Calculate positions to prevent overlap
    const barY = height - config.bar.bottomMargin - 10;
    const titleEndY = this.drawTitle(ctx, text, config);
    const statsY = isMobile ? titleEndY + 20 : barY - config.stats.spacing - 64;
    
    this.drawStats(ctx, text, config, statsY);
    this.drawCharacterBar(ctx, text, config, width, height, isMobile);
  }

  private drawTitle(ctx: CanvasRenderingContext2D, text: string, config: any) {
    const currentFont = this.fonts[this.currentFontIndex];
    const fontSize = Math.round(config.title.fontSize);
    
    ctx.font = `500 ${fontSize}px ${currentFont.family}`;
    
    ctx.fillStyle = config.title.color;
    ctx.textAlign = 'left';
    
    const words = text.split(' ');
    const lines = this.getTextLines(words, ctx, config.title.maxWidth);
    
    let currentY = config.margin.top;
    lines.forEach(line => {
      ctx.fillText(line, config.margin.side, currentY);
      currentY += config.title.lineHeight;
    });

    return currentY;
  }

  private getTextLines(words: string[], ctx: CanvasRenderingContext2D, maxWidth: number): string[] {
    const lines: string[] = [];
    let currentLine = '';
    
    words.forEach(word => {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      const metrics = ctx.measureText(testLine);
      
      if (metrics.width > maxWidth) {
        lines.push(currentLine);
        currentLine = word;
      } else {
        currentLine = testLine;
      }
    });
    if (currentLine) lines.push(currentLine);
    
    return lines;
  }

  private drawStats(ctx: CanvasRenderingContext2D, text: string, config: any, yPosition: number) {
    const letterCount: { [key: string]: number } = {};
    text.toLowerCase().split('').forEach(char => {
      if (this.keyboard.keyObjects[char]) {
        letterCount[char] = (letterCount[char] || 0) + 1;
      }
    });
    
    const totalChars = Object.values(letterCount).reduce((sum, count) => sum + count, 0);
    const uniqueChars = Object.keys(letterCount).length;
   const currentFontName = this.fonts[this.currentFontIndex].name;
    
    ctx.font = config.stats.font;
    ctx.fillStyle = config.stats.color;
    ctx.textAlign = 'left';
   
   // Draw first line - character stats
   ctx.fillText(
     `${totalChars} characters · ${uniqueChars} unique keys`,
     config.margin.side,
     yPosition
   );
   
   // Draw second line - font in use
  // Use bold weight for the font name line
  ctx.font = `700 ${Math.round(config.stats.fontSize)}px system-ui`;
  const lineHeight = Math.round(config.stats.fontSize * 1.2); // Use actual font size for proper spacing
   ctx.fillText(
     `In use: ${currentFontName}`,
     config.margin.side,
     yPosition + lineHeight
   );
  }

  private drawCharacterBar(
    ctx: CanvasRenderingContext2D,
    text: string,
    config: {
      bar: { bottomMargin: number; height?: number };
      margin: { side: number };
    },
    width: number,
    height: number,
    _isMobile: boolean = false
  ): void {
    if (!config?.bar?.bottomMargin || !config?.margin?.side) {
      console.error('Invalid config object for drawCharacterBar');
      return;
    }

    const barY = height - config.bar.bottomMargin;
    const barWidth = width - (config.margin.side * 2);
    const barHeight = config.bar.height || 30; // Default height if not specified
    
    const letterCount: { [key: string]: number } = {};
    text.toLowerCase().split('').forEach(char => {
      if (/[a-z0-9]/.test(char)) {
        letterCount[char] = (letterCount[char] || 0) + 1;
      }
    });
    
    const totalChars = Object.values(letterCount).reduce((sum, count) => sum + count, 0);
    if (totalChars === 0) return;
    
    // Calculate max characters based on available width
    const maxChars = this.calculateMaxCharactersForWidth(width);
    
    const sortedChars = Object.entries(letterCount)
      .sort(([,a], [,b]) => (b as number) - (a as number));
    
    const topChars = sortedChars.slice(0, maxChars);
    const othersCount = sortedChars.slice(maxChars)
      .reduce((sum, [,count]) => sum + (count as number), 0);
    
    let currentX = config.margin.side;
    
    // Draw character segments
    topChars.forEach(([char, count], index) => {
      const segmentWidth = (count as number / totalChars) * barWidth;
      if (segmentWidth > 0) {
        this.drawCharacterSegment(
          ctx,
          char,
          count as number,
          currentX,
          barY,
          segmentWidth,
          barHeight,
          index === 0,
          index === topChars.length - 1 && othersCount === 0
        );
        currentX += segmentWidth;
      }
    });
    
    // Draw others segment if needed
    if (othersCount > 0) {
      const segmentWidth = (othersCount / totalChars) * barWidth;
      if (segmentWidth > 0) {
        this.drawOthersSegment(ctx, othersCount, currentX, barY, segmentWidth, barHeight);
      }
    }
  }

  private drawCharacterSegment(
    ctx: CanvasRenderingContext2D,
    char: string,
    count: number,
    x: number,
    y: number,
    width: number,
    height: number,
    isFirst: boolean = false,
    isLast: boolean = false
  ): void {
    // Ensure we have a valid character to draw
    if (!char || char.trim() === '') return;
    // Ensure minimum width for visibility
    const actualWidth = Math.max(width, 2);
    
    // Generate border color variation based on character and count
    const borderColor = this.getCharacterColor(char, count);
    
    // Draw outline only
    ctx.strokeStyle = borderColor;
    ctx.lineWidth = 1;
    ctx.beginPath();
    this.roundRect(
      ctx,
      x,
      y,
      actualWidth,
      height,
      6,
      isFirst,
      isLast
    );
    ctx.stroke();
    
    this.drawSegmentLabel(ctx, char, count, x, y, actualWidth, height, this.getCharacterColor(char, count));
  }

  private getCharacterColor(char: string, _count: number = 1): string {
    // Simple color hash based on character code
    const colors = [
      '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD',
      '#D4A5A5', '#FFD670', '#70D6FF', '#FF70A6', '#89CFF0'
    ];
    const charCode = char.charCodeAt(0);
    return colors[charCode % colors.length];
  }



  private drawOthersSegment(
    ctx: CanvasRenderingContext2D,
    count: number,
    x: number,
    y: number,
    width: number,
    height: number
  ): void {
    // Save the current context state
    ctx.save();
    
    // Ensure minimum width for visibility
    const actualWidth = Math.max(width, 2);
    
    // Draw background with rounded corners
    const bgColor = this.isDarkMode ? 'rgba(60, 65, 66, 0.1)' : 'rgba(0, 0, 0, 0.05)';
    this.roundRect(ctx, x, y, actualWidth, height, 6, true, false);
    ctx.fillStyle = bgColor;
    ctx.fill();
    
    // Draw outline for others segment
    const borderColor = this.isDarkMode ? 'hsl(0, 0%, 60%)' : 'hsl(0, 0%, 25%)';
    ctx.strokeStyle = borderColor;
    ctx.lineWidth = 1;
    this.roundRect(ctx, x, y, actualWidth, height, 6, false, true);
    ctx.stroke();
    
    // Draw label
    const textColor = this.isDarkMode ? '#ffffff' : '#000000';
    this.drawSegmentLabel(
      ctx,
      '...',
      count,
      x,
      y,
      actualWidth,
      height,
      textColor,
      'transparent'
    );
    
    // Restore context state
    ctx.restore();
  }




}