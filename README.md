# 🌌 Aman's Portfolio

<div align="center">

```
    ╔═══════════════════════════════════════════════════════════╗
    ║                                                           ║
    ║     █████╗ ███╗   ███╗ █████╗ ███╗   ██╗               ║
    ║    ██╔══██╗████╗ ████║██╔══██╗████╗  ██║               ║
    ║    ███████║██╔████╔██║███████║██╔██╗ ██║               ║
    ║    ██╔══██║██║╚██╔╝██║██╔══██║██║╚██╗██║               ║
    ║    ██║  ██║██║ ╚═╝ ██║██║  ██║██║ ╚████║               ║
    ║    ╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝               ║
    ║                                                           ║
    ║            Full Stack Developer Portfolio                 ║
    ║         Built with Intention & Attention to Detail        ║
    ║                                                           ║
    ╚═══════════════════════════════════════════════════════════╝
```

[![Portfolio](https://img.shields.io/badge/Portfolio-Live-7c3aed?style=for-the-badge&logo=vercel&logoColor=white)](https://amantebriwal4321.github.io/)
[![GitHub](https://img.shields.io/badge/GitHub-amantebriwal4321-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/amantebriwal4321)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/aman-tebriwal-67855b354/)

</div>

---

## ✨ What Makes This Special

> A portfolio that **feels different** - where every hover, scroll, and interaction has been meticulously crafted to create moments of delight without screaming for attention.

```javascript
const portfolio = {
  philosophy: "Restraint over excess",
  focus: "Felt, not seen",
  approach: "Intentional interactions",
  result: "Quietly impressive"
}
```

---

## 🎨 Design Philosophy

<table>
<tr>
<td width="50%">

### **Subtle Sophistication**
- Dark blue palette (#1a1a2e)
- Rich purple accents (#7c3aed)
- Soft glows, not harsh neons
- Typography that breathes

</td>
<td width="50%">

### **Intentional Motion**
- 3D card tilts on hover
- Magnetic button effects
- Parallax hero section
- Floating particle system

</td>
</tr>
</table>

---

## 🚀 Features

### 🎭 **Interactive Elements**

<details>
<summary><b>💫 Magnetic Buttons</b></summary>

```javascript
// Buttons subtly follow your cursor
button.addEventListener('mousemove', (e) => {
  const deltaX = (x - centerX) / centerX;
  const deltaY = (y - centerY) / centerY;
  button.style.transform = `translate(${deltaX * 5}px, ${deltaY * 5}px)`;
});
```
</details>

<details>
<summary><b>🎴 3D Tilt Cards</b></summary>

```javascript
// Cards rotate based on cursor position
const rotateX = ((y - centerY) / centerY) * -10;
const rotateY = ((x - centerX) / centerX) * 10;
card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
```
</details>

<details>
<summary><b>✨ Particle System</b></summary>

```javascript
// 50 floating particles with interconnecting lines
// Organic movement patterns
// Purple-tinted ambient effect
```
</details>

<details>
<summary><b>🌊 Parallax Effects</b></summary>

```javascript
// Hero section moves at 0.5x scroll speed
// Creates depth illusion
// Fades out smoothly as you scroll
```
</details>

<details>
<summary><b>💡 Cursor Glow</b></summary>

```javascript
// 300px radial gradient follows cursor
// Subtle ambient lighting
// Purple tint matching theme
```
</details>

<details>
<summary><b>🎯 Staggered Reveals</b></summary>

```javascript
// Elements fade in with 100ms delays
// 60px initial offset
// 0.8s smooth timing
```
</details>

---

## 🛠️ Tech Stack

<div align="center">

| Category | Technologies |
|:--------:|:-------------|
| **Frontend** | ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) |
| **Frameworks** | ![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black) ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white) |
| **Styling** | ![Tailwind](https://img.shields.io/badge/Tailwind-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white) Custom CSS Animations |
| **Tools** | ![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white) ![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=flat-square&logo=visual-studio-code&logoColor=white) |
| **Other** | Canvas API • Intersection Observer • WebGL |

</div>

---

## 📂 Project Structure

```
portfolio/
│
├── 📄 index.html          # Semantic HTML structure
├── 🎨 style.css           # Design system + animations
├── ⚡ app.js              # Interactions + particle system
│
├── 🖼️ assets/
│   ├── game.png           # Simon Game screenshot
│   ├── project2new.jpg    # SignNova screenshot
│   ├── images-*.png       # Currency Converter
│   └── resume.png         # Resume/CV
│
└── 📚 docs/
    ├── ENHANCEMENTS.md    # Detailed changelog
    └── README.md          # You are here!
```

---

## 🎯 Featured Projects

<table>
<tr>
<td width="33%">

### 🎮 **Simon Game**
Memory-based pattern recognition with smooth state transitions and audio feedback.

**Tech:** JavaScript, CSS Grid, Web Audio API

[View Live →](https://amantebriwal4321.github.io/Simon-Game/)

</td>
<td width="33%">

### 🤟 **SignNova**
AI-powered sign language detection translating gestures to text/speech in real-time.

**Tech:** React, Python, OpenCV, WebSockets

[View Demo →](#)

</td>
<td width="33%">

### 💱 **Currency Converter**
Real-time currency conversion with live exchange rates and clean UX.

**Tech:** JavaScript, REST API, Async/Await

[View Live →](https://amantebriwal4321.github.io/Currency-Converter/)

</td>
</tr>
</table>

---

## 🎨 Design System

### Color Palette

```css
/* Sophisticated Dark Blues */
--dark-bg:       #1a1a2e  /* Primary Background */
--darker-bg:     #16213e  /* Deeper Sections */

/* Purple Accents */
--primary:       #7c3aed  /* Rich Purple */
--secondary:     #a78bfa  /* Light Purple */
--accent:        #f472b6  /* Pink Highlight */

/* Typography */
--text-light:    #f0f0f3  /* Primary Text */
--text-muted:    #b0b0ba  /* Secondary Text */

/* Components */
--card-bg:       rgba(255, 255, 255, 0.04)  /* Glass Effect */
--border:        rgba(255, 255, 255, 0.1)   /* Subtle Lines */
```

### Typography Scale

```
Hero:      56px  (3.5rem)  - clamp(2.5rem, 7vw, 3.5rem)
Section:   32px  (2rem)    - Cormorant Garamond
Body:      16px  (1rem)    - Poppins
Labels:    12px  (0.75rem) - Uppercase tracking
```

### Animation Timing

```javascript
const timing = {
  fast:     200ms,  // Hover states
  base:     400ms,  // Transitions  
  slow:     800ms,  // Reveals
  
  easing:   'cubic-bezier(0.4, 0, 0.2, 1)'  // Material smooth
}
```

---

## 🚦 Getting Started

### Quick Start

```bash
# Clone the repository
git clone https://github.com/amantebriwal4321/portfolio.git

# Navigate to directory
cd portfolio

# Open in browser
open index.html
```

### Development Server (Optional)

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve

# Using VS Code Live Server
# Install "Live Server" extension and click "Go Live"
```

### Customization

1. **Update Content** - Edit `index.html` sections
2. **Change Colors** - Modify CSS variables in `style.css` (lines 1-11)
3. **Adjust Animations** - Tune timing in `style.css` and `app.js`
4. **Add Projects** - Duplicate `.project-card` structure
5. **Replace Assets** - Add your images to root directory

---

## 🎬 Animation Showcase

### Before & After Comparison

| Aspect | Before | After |
|--------|--------|-------|
| **Colors** | Harsh black (#0f0f23) | Subtle blue (#1a1a2e) |
| **Hover** | Simple scale | 3D tilt + glow + scale |
| **Background** | Static gradient | Animated particles + gradient blobs |
| **Transitions** | 0.3s ease | 0.4-0.8s cubic-bezier |
| **Interactions** | Basic | Magnetic + parallax + cursor glow |
| **Reveals** | Instant | Staggered (100ms delays) |

### Performance Metrics

```
Initial Load:       < 2s
Time to Interactive: < 3s
FPS (animations):    60fps
Lighthouse Score:    95+ (Performance)
```

---

## 🧩 Code Highlights

### Particle System Implementation

```javascript
class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 1;
    this.speedX = Math.random() * 0.5 - 0.25;
    this.speedY = Math.random() * 0.5 - 0.25;
    this.opacity = Math.random() * 0.5 + 0.2;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    // Wrap around edges
    if (this.x > canvas.width) this.x = 0;
    if (this.y > canvas.height) this.y = 0;
  }

  draw() {
    ctx.fillStyle = `rgba(124, 58, 237, ${this.opacity})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}
```

### Magnetic Button Effect

```javascript
button.addEventListener('mousemove', (e) => {
  const rect = button.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  
  const deltaX = (x - centerX) / centerX;
  const deltaY = (y - centerY) / centerY;
  
  button.style.transform = `translate(${deltaX * 5}px, ${deltaY * 5}px) scale(1.05)`;
});
```

### 3D Card Tilt

```javascript
card.addEventListener('mousemove', (e) => {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  
  const rotateX = ((y - centerY) / centerY) * -10;
  const rotateY = ((x - centerX) / centerX) * 10;
  
  card.style.transform = `
    perspective(1000px) 
    rotateX(${rotateX}deg) 
    rotateY(${rotateY}deg) 
    translateY(-12px) 
    scale(1.05)
  `;
});
```

---

## 📱 Responsive Design

| Breakpoint | Width | Changes |
|------------|-------|---------|
| **Desktop** | > 900px | Full grid layout, all effects active |
| **Tablet** | 600-900px | Stacked cards, simplified animations |
| **Mobile** | < 600px | Single column, touch-optimized interactions |

### Mobile Optimizations

- ✅ Particle system scaled down (25 particles)
- ✅ Cursor effects disabled
- ✅ Touch-friendly button sizes (min 44px)
- ✅ Simplified 3D effects for performance
- ✅ Reduced animation complexity

---

## ⚡ Performance

### Optimization Techniques

```javascript
// Hardware-accelerated transforms
transform: translate3d(x, y, 0)  // vs translate(x, y)
transform: translateZ(0)         // Force GPU

// RequestAnimationFrame for smooth animations
function animate() {
  // Update logic
  requestAnimationFrame(animate);
}

// Intersection Observer for lazy reveals
const observer = new IntersectionObserver(callback, {
  threshold: 0.1,
  rootMargin: '-100px'
});
```

### Best Practices Applied

- ✅ CSS transforms over position changes
- ✅ `will-change` for frequently animated properties
- ✅ Debounced scroll handlers
- ✅ Optimized canvas rendering
- ✅ Minimal DOM queries

---

## 🎓 Learning Resources

### Concepts Demonstrated

- **Intersection Observer API** - Scroll-triggered animations
- **Canvas API** - Particle system rendering
- **CSS Custom Properties** - Design system implementation
- **CSS Transforms** - 3D effects and perspective
- **Cubic Bezier Easing** - Natural motion curves
- **Event Delegation** - Efficient event handling
- **RequestAnimationFrame** - Smooth animations

### Inspiration

- [Apple Design Principles](https://developer.apple.com/design/)
- [Material Design Motion](https://material.io/design/motion)
- [Awwwards](https://www.awwwards.com/) - For interaction patterns
- [Codrops](https://tympanus.net/codrops/) - For creative techniques

---

## 🤝 Contributing

Found a bug? Have a suggestion? Contributions are welcome!

```bash
# Fork the repository
# Create a feature branch
git checkout -b feature/amazing-feature

# Commit changes
git commit -m "Add amazing feature"

# Push to branch
git push origin feature/amazing-feature

# Open a Pull Request
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

```
MIT License

Copyright (c) 2025 Aman Tebriwal

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 🌟 Acknowledgments

- **Fonts:** [Poppins](https://fonts.google.com/specimen/Poppins) by Indian Type Foundry
- **Icons:** [Font Awesome](https://fontawesome.com/)
- **Animation Library:** [Typed.js](https://github.com/mattboldt/typed.js/)
- **Inspiration:** Modern web design principles and material motion

---

## 📬 Connect

<div align="center">

[![Portfolio](https://img.shields.io/badge/🌐_Portfolio-Visit-7c3aed?style=for-the-badge)](https://amantebriwal4321.github.io/)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github)](https://github.com/amantebriwal4321)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/aman-tebriwal-67855b354/)

---

<sub>Built with ❤️ and lots of ☕ by Aman Tebriwal</sub>

<sub>**"Design is not just what it looks like and feels like. Design is how it works."** - Steve Jobs</sub>

```
█▀▀ █▀▀█ █▀▀▄ █▀▀ 　 █░░░█ ░▀░ ▀▀█▀▀ █░░█ 　 ▀ █▀▀▄ ▀▀█▀▀ █▀▀ █▀▀▄ ▀▀█▀▀ 
█░░ █░░█ █░░█ █▀▀ 　 █▄█▄█ ▀█▀ ░░█░░ █▀▀█ 　 ░ █░░█ ░░█░░ █▀▀ █░░█ ░░█░░ 
▀▀▀ ▀▀▀▀ ▀▀▀░ ▀▀▀ 　 ░▀░▀░ ▀▀▀ ░░▀░░ ▀░░▀ 　 ░ ▀░░▀ ░░▀░░ ▀▀▀ ▀░░▀ ░░▀░░
```

</div>

---

<div align="center">

### 🚀 **Star this repo if you found it helpful!** ⭐

</div>
