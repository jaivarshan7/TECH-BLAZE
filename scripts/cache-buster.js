const fs = require('fs');
const path = require('path');

// Configuration
const ROOT_DIR = '.';
const EXTENSIONS = ['.html'];
const IGNORE_DIRS = ['node_modules', '.git', 'dist'];

function getFiles(dir, files = []) {
    const fileList = fs.readdirSync(dir);
    for (const file of fileList) {
        const name = `${dir}/${file}`;
        const stat = fs.statSync(name);

        if (stat.isDirectory()) {
            if (!IGNORE_DIRS.includes(file)) {
                getFiles(name, files);
            }
        } else {
            if (EXTENSIONS.includes(path.extname(name))) {
                files.push(name);
            }
        }
    }
    return files;
}

console.log('Starting cache busting...');

try {
    const files = getFiles(ROOT_DIR);
    const timestamp = Date.now();
    let updatedFilesCount = 0;

    files.forEach(file => {
        try {
            let content = fs.readFileSync(file, 'utf8');
            let originalContent = content;

            // Regex to match href="..." or src="..." ending in .css or .js
            // formatting: look for href/src, quote, path ending in css/js, optional existing query, quote
            // We want to capture the path without the query string.
            const regex = /(href|src)=["']([^"']+\.(css|js))(\?v=[^"']*)?["']/gi;

            content = content.replace(regex, (match, attr, filePath, ext) => {
                // Check if it's an external link (http/https) - skip them
                if (filePath.startsWith('http://') || filePath.startsWith('https://') || filePath.startsWith('//')) {
                    return match;
                }

                return `${attr}="${filePath}?v=${timestamp}"`;
            });

            if (content !== originalContent) {
                fs.writeFileSync(file, content, 'utf8');
                console.log(`Updated: ${file}`);
                updatedFilesCount++;
            }
        } catch (error) {
            console.error(`Error processing ${file}:`, error);
        }
    });

    console.log(`Cache busting complete. Updated ${updatedFilesCount} files with timestamp v=${timestamp}`);

} catch (e) {
    console.error("Error in cache busting script:", e);
    process.exit(1);
}
