# Component: SummitSection

## DOM Structure
```
<section class="summit-section">
  <div class="container-db summit-inner">
    <div class="summit-content">
      <p class="eyebrow">Event</p>
      <h2>Data + AI Summit 2026</h2>
      <p class="subtitle">The premier 2026 AI event for the global data, analytics and AI community.</p>
      <ul class="summit-details">
        <li>June 15–18, 2026</li>
        <li>Moscone Center, San Francisco + Virtual</li>
        <li>800+ sessions, keynotes and training</li>
        <li>Early-bird pricing: 50% off through April 30</li>
      </ul>
      <a href="/dataaisummit" class="btn-primary">Register Now</a>
    </div>
    <div class="summit-image">
      <!-- Event visual / illustration -->
    </div>
  </div>
</section>
```

## Computed Styles (Default State)
- Background: #1B3139 (Gable Green dark)
- Color: #FFFFFF
- Padding: 96px 0
- Layout: 2-column grid (text left, visual right) on desktop

## Eyebrow
- Font: 12px Inter, weight 600, uppercase, letter-spacing 0.1em
- Color: #FF3621

## Heading (h2)
- Font: 40px–48px Inter, weight 700
- Color: #FFFFFF

## Subtitle
- Font: 18px Inter, weight 400
- Color: rgba(255,255,255,0.8)
- Margin-top: 16px

## Detail List
- Font: 16px Inter, weight 400
- Color: rgba(255,255,255,0.7)
- List-style: none, with custom marker (checkmark or dash in #FF3621)
- Gap: 8px between items
- Margin: 24px 0 32px

## CTA Button
- Background: #FF3621
- Color: #FFFFFF
- Padding: 14px 28px
- Border-radius: 4px
- Font: 16px Inter, weight 600
- Hover: background #E02E1A

## Assets
- Summit event illustration/photo (not available — use dark teal placeholder block)

## Text Content (verbatim)
Headline: "Data + AI Summit 2026"
Subtitle: "The premier 2026 AI event for the global data, analytics and AI community."
Details:
- "June 15–18, 2026"
- "Moscone Center, San Francisco + Virtual"
- "800+ sessions, keynotes and training"
- "Early-bird pricing: 50% off through April 30"
CTA: "Register Now"

## Responsive Behavior
- Mobile (375px): single column, text stacked, image hidden or below text
- Tablet (768px): single column or 60/40 split
- Desktop (1024px+): 2-column 50/50 grid

## Interaction Model
static (no scroll animation)
