# Page Topology — databricks.com

**Target URL:** https://databricks.com  
**Recon date:** 2026-04-01  
**Access method:** Indexed search data (direct access blocked by proxy)

## Section Map (top → bottom)

| # | Component Name | Type | Complexity |
|---|---|---|---|
| 1 | `AnnouncementBanner` | Dismissable strip | Simple |
| 2 | `Nav` | Sticky mega-menu nav | Complex |
| 3 | `Hero` | Full-width hero | Medium |
| 4 | `CustomerLogoBar` | Auto-scroll logo strip | Simple |
| 5 | `PlatformTabs` | Tabbed feature showcase | Complex |
| 6 | `SummitSection` | Event promo + CTA | Medium |
| 7 | `Footer` | Multi-column link grid | Medium |

## Notes
- Nav is sticky (position: sticky top-0)
- Announcement banner sits ABOVE the nav
- Logo bar is likely an infinite CSS marquee/scroll
- PlatformTabs has at minimum 6 tabs (Data Engineering, Data Warehousing, ML, AI/BI, Governance, Apps)
- No confirmed smooth-scroll library (Lenis/Locomotive) — assume CSS scroll-behavior
