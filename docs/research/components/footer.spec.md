# Component: Footer

## DOM Structure
```
<footer class="footer">
  <div class="container-db">
    <div class="footer-top">
      <div class="footer-logo-col">
        <img src="/public/images/databricks-logo-white.svg" alt="Databricks" />
        <p>The Data Intelligence Platform</p>
        <div class="social-links"><!-- social icons --></div>
      </div>
      <nav class="footer-columns">
        <div class="footer-col">
          <h4>Platform</h4>
          <ul>...</ul>
        </div>
        <div class="footer-col">
          <h4>Solutions</h4>
          <ul>...</ul>
        </div>
        <div class="footer-col">
          <h4>Learn</h4>
          <ul>...</ul>
        </div>
        <div class="footer-col">
          <h4>Company</h4>
          <ul>...</ul>
        </div>
      </nav>
    </div>
    <div class="footer-bottom">
      <p>© 2026 Databricks, Inc.</p>
      <div class="footer-legal">
        <a href="/privacy">Privacy Notice</a>
        <a href="/terms">Terms of Use</a>
        <a href="#" id="cookie-settings">Cookie Settings</a>
      </div>
    </div>
  </div>
</footer>
```

## Computed Styles (Default State)
- Background: #1B3139 (Gable Green)
- Color: rgba(255,255,255,0.7)
- Padding-top: 80px
- Padding-bottom: 40px

## Footer Column Headings
- Font: 13px Inter, weight 600, uppercase, letter-spacing 0.08em
- Color: #FFFFFF
- Margin-bottom: 16px

## Footer Links
- Font: 14px Inter, weight 400
- Color: rgba(255,255,255,0.6)
- Hover: color #FFFFFF, text-decoration: underline
- Line-height: 1.8

## Footer Bottom Bar
- Border-top: 1px solid rgba(255,255,255,0.12)
- Padding-top: 24px
- Font: 13px Inter, weight 400
- Color: rgba(255,255,255,0.5)
- Display: flex, justify-content: space-between

## Footer Columns Content

### Platform
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

### Solutions
- By Industry
- Financial Services
- Healthcare & Life Sciences
- Media & Entertainment
- Retail & CPG
- Public Sector
- Manufacturing
- Technology
- By Cloud
- AWS / Azure / Google Cloud

### Learn
- Documentation
- Tutorials
- Blog
- Events
- Certification
- Community
- Webinars
- Training

### Company
- About Us
- Customers
- Partners
- Newsroom
- Careers
- Contact Us
- Press Kit

## Assets
- /public/images/databricks-logo-white.svg (white version of logo)

## Text Content (verbatim)
- "© 2026 Databricks, Inc."
- "Privacy Notice"
- "Terms of Use"
- "Cookie Settings"

## Responsive Behavior
- Mobile (375px): single column stacked, accordion toggle per column
- Tablet (768px): 2-column grid
- Desktop (1024px+): logo col + 4-column grid

## Interaction Model
static (links only, no animations)
