# Behaviors & Interactions — databricks.com

## Navigation
- **Trigger:** hover/click on "Platform", "Solutions", "Learn", "Company"
- **Behavior:** Mega-menu dropdown opens (multi-column)
- **States:** default → hover (link color change) → open (dropdown visible)
- **Mobile:** Collapses to hamburger menu

## Announcement Banner
- **Trigger:** "×" button click
- **Behavior:** Banner dismisses (slides up or fades out)
- **State:** visible by default, hidden after dismiss (persisted in localStorage)

## Customer Logo Bar
- **Trigger:** none (auto-play)
- **Behavior:** Infinite horizontal scroll of customer logos
- **Direction:** left-scroll, continuous, pauses on hover

## Platform Tabs
- **Trigger:** click tab label
- **Behavior:** Tab content panel switches, active tab gets red-orange underline/indicator
- **States:** default tab = "Data Engineering" (Lakeflow)
- **Interaction model:** click-driven

## CTA Buttons
- **Primary "Try Databricks":** bg #FF3621 → hover slightly darker (#E02E1A)
- **Secondary "Get a demo":** outline/ghost → hover bg fill

## Feature Cards (inside PlatformTabs)
- **Trigger:** hover
- **Behavior:** slight elevation (box-shadow increase), possible background color shift

## Footer Links
- **Trigger:** hover
- **Behavior:** underline appears, color shifts to #FF3621
