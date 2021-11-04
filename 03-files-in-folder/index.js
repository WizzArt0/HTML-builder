const fs = require('fs');
const path = require('path');

const folder = path.join(__dirname, 'secret-folder')

fs.readdir(folder, (err, files) => {
    if (err) {
        console.log(err);

    } else {
        files.forEach(file => {
            let currentFile = path.join(folder, file);

            fs.stat(currentFile, function (err, stats) {
                if (stats.isFile()) {

                    const ext = path.extname(currentFile);
                    const name = path.basename(currentFile, ext);
                    const size = stats["size"];
                    console.log(`${name} - ${ext.substring(1)} - ${size}b`);
                }
            })
        });
    }
})