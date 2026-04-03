# Vercel Speed Insights Setup

This project now includes Vercel Speed Insights to track web performance metrics.

## What was added:

1. **Package files:**
   - `package.json` - Manages the @vercel/speed-insights dependency
   - `package-lock.json` - Locks dependency versions

2. **Source files:**
   - `speed-insights.js` - Source code that initializes Speed Insights
   - `build-speed-insights.js` - Build script to bundle Speed Insights for browsers

3. **Generated bundle:**
   - `speed-insights-bundle.js` - Minified bundle loaded by all HTML pages

4. **HTML updates:**
   - All 27 HTML files now include `<script defer src="/speed-insights-bundle.js"></script>` before `</body>`

## How it works:

The bundle automatically:
- Tracks Core Web Vitals (LCP, FID, CLS, FCP, TTFB, INP)
- Only sends data in production (not in development)
- Uses minimal bandwidth (~1.5KB minified)
- Loads asynchronously with `defer` attribute

## Viewing metrics:

1. Deploy the site to Vercel
2. Enable Speed Insights in your Vercel project dashboard
3. After users visit your site, view performance data in the Speed Insights dashboard

## Maintenance:

To update Speed Insights:
```bash
npm install @vercel/speed-insights@latest
npm run build
```

The bundle will be regenerated automatically after `npm install` via the `postinstall` script.
