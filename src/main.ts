const path = require('path');
const fs = require('fs');

const startDirectory = '/home/jsdev/bachasalsa/'

const dirnames = fs.readdirSync(startDirectory)
for (let dir of dirnames){
    // console.log(file)
    if (fs.lstatSync(path.resolve(startDirectory, dir)).isDirectory()) {
        console.log('Directory: '+path.join(startDirectory, dir))
        let directory = path.join(startDirectory, dir)
        let filenames = fs.readdirSync(directory)
        for (let file of filenames){
            console.log(file)
        }
    }
}

//FIXME features:
// - create trak class
// - more


// forEach(file: string => {

//     } else {
//         console.log('File: ' + file);
//     }
// });