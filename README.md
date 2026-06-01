# KTR Brand Studio

Brand voice, design reference, and CSS package manager for Kitchen Table Restaurants.

## Live Site

https://YOUR-ORG.github.io/ktr-brand-studio

> Update `vite.config.ts` and this README with your actual GitHub org/repo name before deploying.

## Setup

```bash
pnpm install
pnpm dev        # local dev server
pnpm build      # production build → /dist
pnpm preview    # preview production build locally
```

## GitHub Pages Deployment

1. Push this repo to GitHub
2. Go to **Settings → Pages → Source** and select **GitHub Actions**
3. Update the `base` repo name in `vite.config.ts` if your repo isn't named `ktr-brand-studio`
4. Push to `main` — the Actions workflow builds and deploys automatically

## Data & Persistence

- **localStorage** — all edits auto-save to the browser's localStorage under `ktr-brand-studio-v1`
- **initial-data.json** — `public/initial-data.json` seeds first-time visitors with the full KTR brand data
- **Export** — use the Export button in the sidebar to download a `.json` snapshot of all brand data
- **Import** — use the Import button to load a previously exported `.json` file (useful for sharing updates between team members)
- **Reset** — resets localStorage back to the `initial-data.json` defaults

## Sharing Updates Between Team Members

Since each person's edits live in their own browser's localStorage, to share changes:

1. The person who made changes clicks **Export** → downloads `ktr-brand-studio-YYYY-MM-DD.json`
2. Shares the file with the team (Slack, email, Drive)
3. Others click **Import** and select the file → their studio updates immediately

For a fully shared real-time experience, the `initial-data.json` in `/public` can be updated and committed to the repo — all first-time visitors (or anyone who clicks Reset) will get the latest version.

## Project Structure

```
src/
  App.tsx                    # Root — brand state, layout
  brandData.ts               # Pre-generated voice/design/CSS for all 9 brands
  types.ts                   # TypeScript types
  hooks/
    useBrandStore.ts         # localStorage persistence hook
  components/
    BrandSidebar.tsx         # Left nav — brand list, export/import/reset
    BrandWorkspace.tsx       # Main content area — tab router
    AddBrandDialog.tsx       # New brand modal
    tabs/
      OverviewTab.tsx        # URL, status, description, notes
      SourcesTab.tsx         # File/URL/text source management
      VoiceTab.tsx           # Voice attributes, tone guidelines, writing samples
      DesignTab.tsx          # Color palette, typography, design principles
      CSSTab.tsx             # CSS package — code view + preview
public/
  initial-data.json          # Seed data for all 9 KTR brands
.github/
  workflows/
    deploy.yml               # GitHub Actions → Pages deployment
```
