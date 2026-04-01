# Component: AnnouncementBanner

## DOM Structure
```
<div class="announcement-banner">
  <div class="container-db">
    <p>
      <strong>Data + AI Summit 2026</strong> — Registration Now Open.
      Early-bird pricing: 50% off through April 30.
      June 15–18, 2026 | San Francisco + Virtual
      <a href="/dataaisummit">Register Now →</a>
    </p>
    <button aria-label="Dismiss">×</button>
  </div>
</div>
```

## Computed Styles (Default State)
- Background: #1B3139 (Gable Green)
- Color: #FFFFFF
- Font: 14px Inter, weight 400
- Padding: 12px 0
- Display: flex, align-items: center, justify-content: center
- Position: relative (above sticky nav)

## States
### Hover (link)
- Trigger: mouse enter on "Register Now"
- Changes: text-decoration: underline; color: #FF3621

### Dismissed
- Trigger: click ×
- Changes: display: none (or height → 0 with transition)

## Assets
None

## Text Content
"Data + AI Summit 2026 — Registration Now Open. Early-bird pricing: 50% off through April 30. June 15–18, 2026 | San Francisco + Virtual"
CTA: "Register Now"

## Responsive Behavior
- Mobile (375px): text may truncate or wrap to 2 lines; smaller font ~12px
- Tablet (768px): single line
- Desktop (1440px): single line, centered

## Interaction Model
click-driven (dismiss button)
