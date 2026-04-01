# Component: Nav

## DOM Structure
```
<nav class="nav" role="navigation">
  <div class="container-db nav-inner">
    <a class="nav-logo" href="/">
      <img src="/public/images/databricks-logo.svg" alt="Databricks" />
    </a>
    <ul class="nav-links">
      <li class="nav-item has-dropdown">Platform</li>
      <li class="nav-item has-dropdown">Solutions</li>
      <li class="nav-item has-dropdown">Learn</li>
      <li class="nav-item has-dropdown">Company</li>
      <li class="nav-item"><a href="/pricing">Pricing</a></li>
    </ul>
    <div class="nav-ctas">
      <a href="/login" class="btn-ghost">Log In</a>
      <a href="/try-databricks" class="btn-primary">Try Databricks</a>
    </div>
    <button class="nav-hamburger" aria-label="Open menu" />
  </div>
  <!-- Dropdown panels rendered below -->
</nav>
```

## Computed Styles (Default State)
- Background: #FFFFFF
- Border-bottom: 1px solid #EDEAE5
- Height: 76px
- Position: sticky, top: 0
- Z-index: 100
- Display: flex, align-items: center
- Box-shadow: none (default), 0 2px 8px rgba(0,0,0,0.08) on scroll

## Nav Links
- Font: 15px Inter, weight 500
- Color: #1B3139
- Padding: 0 16px
- Cursor: pointer

## States
### Link Hover
- Color: #FF3621

### Dropdown Open
- Trigger: hover or click on nav item with dropdown
- Mega-menu panel appears below nav
- Background: #FFFFFF
- Box-shadow: 0 8px 32px rgba(0,0,0,0.12)
- Border-top: 2px solid #FF3621

## Primary CTA Button ("Try Databricks")
- Background: #FF3621
- Color: #FFFFFF
- Border-radius: 4px
- Padding: 10px 20px
- Font: 15px Inter, weight 600
- Hover: background #E02E1A

## Ghost Button ("Log In")
- Background: transparent
- Color: #1B3139
- Hover: color #FF3621

## Dropdown: Platform (columns)
Column 1 — Products:
- Data Engineering
- Data Warehousing
- Machine Learning
- Streaming
- Mosaic AI
- Lakeflow
- Lakebase
- Unity Catalog
- Delta Sharing
- Databricks SQL
- AI/BI
- Databricks Apps

## Dropdown: Solutions (columns)
Column 1 — By Industry:
- Financial Services
- Healthcare & Life Sciences
- Media & Entertainment
- Retail & CPG
- Public Sector
- Manufacturing
- Technology

Column 2 — By Use Case:
- Data Engineering
- Data Warehousing
- Generative AI
- Machine Learning
- Data Governance
- Real-Time Analytics
- Marketing Analytics

Column 3 — By Cloud:
- AWS
- Azure
- Google Cloud

## Dropdown: Learn
- Documentation
- Tutorials
- Blog
- Events
- Certification
- Community
- Webinars

## Dropdown: Company
- About Us
- Customers
- Partners
- Newsroom
- Careers
- Contact Us
- Press Kit

## Assets
- Logo: /public/images/databricks-logo.svg (download from brand kit)

## Responsive Behavior
- Mobile (375px): hamburger menu, logo only visible in top bar
- Tablet (768px): hamburger menu
- Desktop (1024px+): full horizontal nav with dropdowns

## Interaction Model
hover-driven (dropdowns), click-driven (mobile menu)
