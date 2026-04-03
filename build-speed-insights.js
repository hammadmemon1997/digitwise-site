// Build script to bundle Speed Insights for static HTML
import { build } from 'esbuild';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

try {
  await build({
    entryPoints: [join(__dirname, 'speed-insights.js')],
    bundle: true,
    minify: true,
    format: 'iife',
    outfile: join(__dirname, 'speed-insights-bundle.js'),
    platform: 'browser',
  });
  console.log('✓ Speed Insights bundle created successfully');
} catch (error) {
  console.error('Error building Speed Insights bundle:', error);
  process.exit(1);
}
