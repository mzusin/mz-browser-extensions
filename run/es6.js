import fs from 'fs';
import path from 'path';
import esbuild from 'esbuild';
import esbuildWatchPlugin from './esbuild-plugins/esbuild-watch-plugin.js';

const packageJson = fs.readFileSync(path.join(process.cwd(), './package.json'), 'utf-8');
let version = '1.0.0';

try {
    const parsed = JSON.parse(packageJson);
    version = parsed.version;
} catch (ex) {}

const settings = {
    platform: 'neutral',
    format: 'esm',
    entryPoints: ['./src/index.ts'],
    bundle: true,
    minify: true,
    target: ['es6'],
    // sourcemap: 'linked', // external
    outfile: './dist/mz-browser-extensions.min.js',
    plugins: [],
    banner: {
        js: `/* 
mz-browser-extensions v${ version }
TypeScript-based library for managing browser extensions.
https://github.com/mzusin/mz-browser-extensions  
Copyright (c) 2023-present, Miriam Zusin          
*/`,
    }
};

const args = process.argv.slice(2);
const watch = args.length > 1 && args[1].trim().toLowerCase() === 'watch';

if(watch){
    // ------------- watch ---------------
    (async () => {
        settings.plugins.push(esbuildWatchPlugin);
        settings.define = { 'process.env.NODE_ENV': `'dev'` }; // dev, production
        const ctx = await esbuild.context(settings);
        await ctx.watch();
        console.log('Watching...');
    })();
}
else{
    esbuild
        .build(settings)
        .then(result => {
            console.log('Done.');
        })
        .catch(() => process.exit(1));
}