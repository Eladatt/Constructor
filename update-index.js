const fs = require('fs');
const path = require('path');

const guidesDir = path.join(__dirname, 'guides');
const indexPath = path.join(__dirname, 'index.html');

// Read all files in the guides directory
fs.readdir(guidesDir, (err, files) => {
    if (err) {
        console.error('Error reading guides directory:', err);
        return;
    }

    // Filter HTML files
    const guideFiles = files.filter(file => path.extname(file) === '.html');

    // Generate HTML for guide links
    const guideLinks = guideFiles.map(file => {
        const name = path.basename(file, '.html');
        return `<li><a href="guides/${file}" data-page="${name}">${name.replace(/-/g, ' ')}</a></li>`;
    }).join('\n');

    // Read the current index.html file
    fs.readFile(indexPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading index.html:', err);
            return;
        }

        // Replace the guide links section
        const updatedContent = data.replace(
            /<ul class="nav-links">[\s\S]*?<\/ul>/,
            `<ul class="nav-links">\n${guideLinks}\n</ul>`
        );

        // Write the updated content back to index.html
        fs.writeFile(indexPath, updatedContent, 'utf8', (err) => {
            if (err) {
                console.error('Error writing to index.html:', err);
                return;
            }
            console.log('index.html updated successfully');
        });
    });
});
