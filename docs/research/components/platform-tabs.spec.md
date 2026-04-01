# Component: PlatformTabs

## DOM Structure
```
<section class="platform-tabs">
  <div class="container-db">
    <h2>One unified platform. Every data and AI workload.</h2>
    <div class="tabs-nav" role="tablist">
      <button role="tab" aria-selected="true">Data Engineering</button>
      <button role="tab">Data Warehousing</button>
      <button role="tab">Machine Learning</button>
      <button role="tab">AI & Analytics</button>
      <button role="tab">Governance</button>
      <button role="tab">Apps & Sharing</button>
    </div>
    <div class="tabs-content">
      <!-- Active panel -->
      <div role="tabpanel" class="tab-panel active">
        <!-- Feature card content -->
      </div>
    </div>
  </div>
</section>
```

## Section Heading
- Font: 40px–48px Inter, weight 700
- Color: #1B3139
- Text-align: center
- Margin-bottom: 48px

## Tab Navigation
- Display: flex, gap 0, border-bottom: 1px solid #EDEAE5
- Tab button font: 15px Inter, weight 500
- Tab button color (default): #6B6760
- Tab button padding: 12px 24px
- Active tab: color #1B3139, border-bottom 2px solid #FF3621, font-weight 600
- Hover: color #1B3139

## Tab Panel Layout
- Display: grid, 2 columns (text left, image right) on desktop
- Gap: 64px
- Padding-top: 48px

## Feature Panel Content per Tab

### Tab 1: Data Engineering (Lakeflow)
Eyebrow: "Lakeflow"
Headline: "Meet no-code ETL."
Body: "Relying only on data engineers for production-grade pipelines creates a bottleneck. Lakeflow Designer lets teams build robust data pipelines visually — no code, no bottlenecks."
CTA: "Explore Lakeflow" → /product/lakeflow

### Tab 2: Data Warehousing (Databricks SQL)
Eyebrow: "Databricks SQL"
Headline: "Eliminate legacy warehouse costs."
Body: "Eliminate legacy warehouse costs and lower TCO with an open, intelligent data warehouse. Serverless data warehousing on open lake data, with governance and AI built-in."
CTA: "Explore Databricks SQL" → /product/databricks-sql

### Tab 3: Machine Learning (Mosaic AI)
Eyebrow: "Mosaic AI"
Headline: "Build AI agents that continuously improve."
Body: "Build AI agents that continuously improve quality and accuracy, optimized on your data. Agent Bricks — domain-specific synthetic data generation, task-aware evaluation, and automated optimization."
CTA: "Explore Mosaic AI" → /product/machine-learning

### Tab 4: AI & Analytics (AI/BI)
Eyebrow: "AI/BI"
Headline: "The next generation of analytics is here."
Body: "From natural language dashboard creation to deep conversational analytics with Genie, this is BI built on AI from the start. Now, everyone can explore data and uncover insights."
CTA: "Explore AI/BI" → /product/ai-bi

### Tab 5: Data Governance (Unity Catalog)
Eyebrow: "Unity Catalog"
Headline: "One governance layer for everything."
Body: "Maintain compliance across data, models, dashboards, and agents. Get deeper insight into your data all in one unified, open governance layer."
CTA: "Explore Unity Catalog" → /product/unity-catalog

### Tab 6: Apps & Sharing (Databricks Apps)
Eyebrow: "Databricks Apps"
Headline: "Build, deploy, and scale data apps."
Body: "Build, deploy, and scale interactive data intelligence apps within your fully governed and secure Databricks environment to rapidly deliver user-facing tools."
CTA: "Explore Databricks Apps" → /product/databricks-apps

## Eyebrow Text (per panel)
- Font: 12px Inter, weight 600, uppercase, letter-spacing 0.08em
- Color: #FF3621

## Panel Headline
- Font: 32px–40px Inter, weight 700
- Color: #1B3139

## Panel Body
- Font: 17px Inter, weight 400
- Color: #4A4742
- Line-height: 1.65

## Panel CTA Link
- Font: 15px Inter, weight 600
- Color: #FF3621
- Text-decoration: none
- Hover: underline
- Arrow: → icon inline

## Assets
- Tab panel images (screenshots/illustrations per feature) — placeholders acceptable as colored blocks

## Responsive Behavior
- Mobile (375px): tabs become horizontal scroll strip; panels single-column
- Tablet (768px): tabs wrap; panels 1 column
- Desktop (1024px+): tabs in one row; panels 2-column grid

## Interaction Model
click-driven (tab switching)
