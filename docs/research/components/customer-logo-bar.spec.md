# Component: CustomerLogoBar

## DOM Structure
```
<section class="logo-bar">
  <div class="container-db">
    <p class="logo-bar-eyebrow">
      Trusted by 15,000+ organizations worldwide, including over 60% of the Fortune 500
    </p>
  </div>
  <div class="logo-track-wrapper">
    <div class="logo-track animate-scroll-logos">
      <!-- logos duplicated for seamless loop -->
      <img src="/public/images/logo-block.svg" alt="Block" />
      <img src="/public/images/logo-comcast.svg" alt="Comcast" />
      <img src="/public/images/logo-conde-nast.svg" alt="Condé Nast" />
      <img src="/public/images/logo-rivian.svg" alt="Rivian" />
      <img src="/public/images/logo-shell.svg" alt="Shell" />
      <!-- ... more logos ... -->
      <!-- duplicate set for infinite loop -->
    </div>
  </div>
</section>
```

## Computed Styles (Default State)
- Background: #FFFFFF or #F9F7F4
- Padding: 48px 0 56px
- Logo track: display flex, gap 64px, align-items center
- Logo images: height 28–36px, width auto, filter grayscale(1), opacity 0.6
- On hover: filter grayscale(0), opacity 1 (transition 0.3s)

## Eyebrow Text
- Font: 14px Inter, weight 500
- Color: #6B6760 (neutral-500)
- Text-align: center
- Margin-bottom: 32px
- Letter-spacing: 0.02em

## Logo Scroll Animation
- Animation: `scroll-logos` 30s linear infinite (defined in globals.css)
- Pauses on hover: animation-play-state: paused
- Track width: ~200% (original + duplicate logos for seamless loop)

## States
### Logo Hover
- filter: grayscale(0)
- opacity: 1
- transition: all 0.3s ease

### Track Hover
- animation-play-state: paused

## Assets (to download)
- /public/images/logo-block.svg
- /public/images/logo-comcast.svg
- /public/images/logo-conde-nast.svg
- /public/images/logo-rivian.svg
- /public/images/logo-shell.svg
(additional Fortune 500 logos as available)

## Text Content (verbatim)
"More than 15,000 organizations worldwide, including over 60% of the Fortune 500, rely on Databricks."

## Responsive Behavior
- All viewports: horizontal scroll strip, overflow hidden
- Mobile: logos slightly smaller (~24px height)
- Animation speed same across breakpoints

## Interaction Model
time-driven (auto-scroll), hover-driven (pause on hover)
