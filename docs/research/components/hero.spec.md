# Component: Hero

## DOM Structure
```
<section class="hero">
  <div class="container-db">
    <div class="hero-content">
      <h1>The Data Intelligence Platform</h1>
      <p>More than 15,000 organizations worldwide — including Block, Comcast, Condé Nast,
         Rivian, Shell, and over 60% of the Fortune 500 — rely on the Databricks Data
         Intelligence Platform to take control of their data and put it to work with AI.</p>
      <div class="hero-ctas">
        <a href="/try-databricks" class="btn-primary">Try Databricks</a>
        <a href="/contact" class="btn-outline">Get a demo</a>
      </div>
    </div>
  </div>
</section>
```

## Computed Styles (Default State)
- Background: #F9F7F4 (Spring Wood) or dark variant #1B3139
- Padding: 100px 0 80px
- Text alignment: center (or left-aligned with right image)

## Heading (h1)
- Font: 52px–64px Inter, weight 700 (ExtraBold)
- Color: #1B3139
- Line-height: 1.15
- Letter-spacing: -0.02em
- Max-width: ~760px (centered)

## Body paragraph
- Font: 18px–20px Inter, weight 400
- Color: #4A4742 (neutral-600)
- Line-height: 1.6
- Max-width: ~640px (centered)
- Margin-top: 24px

## CTA Buttons
Primary ("Try Databricks"):
- Background: #FF3621
- Color: #FFFFFF
- Border-radius: 4px
- Padding: 14px 28px
- Font: 16px Inter, weight 600
- Hover: background #E02E1A, slight scale(1.02)

Outline ("Get a demo"):
- Background: transparent
- Border: 2px solid #1B3139
- Color: #1B3139
- Padding: 12px 26px
- Font: 16px Inter, weight 600
- Hover: border-color #FF3621, color #FF3621

## States
### Button Hover
- Primary: background #E02E1A
- Outline: border-color #FF3621, color #FF3621

## Assets
- Possible hero background graphic or illustration (not confirmed — may be pure text)

## Text Content (verbatim)
Headline: "The Data Intelligence Platform"

Body: "More than 15,000 organizations worldwide — including Block, Comcast, Condé Nast, Rivian, Shell, and over 60% of the Fortune 500 — rely on the Databricks Data Intelligence Platform to take control of their data and put it to work with AI."

CTA 1: "Try Databricks"
CTA 2: "Get a demo"

## Responsive Behavior
- Mobile (375px): font-size 32px, single-column, buttons stack vertically
- Tablet (768px): font-size 44px, buttons side-by-side
- Desktop (1440px): font-size 56px–64px, centered layout, max-width 900px

## Interaction Model
static (no scroll-driven animation assumed)
