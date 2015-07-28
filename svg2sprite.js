var SVGSpriter = require('svg-sprite');
var fs = require('fs');
var mkdirp = require('mkdirp');
var path = require('path');

var spriter = new SVGSpriter({
    dest: 'out',
    log: 'verbose',
    mode: {
        css: {
            render: {
                css: true
            }
        }
    },
    shape: {
        id: {
            // separator: '-----'
        },
        spacing: {
            padding: 0
        },
        transform: ['svgo']
    },
    svg: {

    },
    variables: {

    }
});

spriter.add('svg/rank1.svg', 'rank1.svg', fs.readFileSync('./svg/rank1.svg', {encoding: 'utf-8'}));
spriter.add('svg/rank2.svg', 'rank2.svg', fs.readFileSync('./svg/rank2.svg', {encoding: 'utf-8'}));

spriter.compile(function(error, result) {
    for (var type in result.css) {
        // Recursively create directories as needed
        mkdirp.sync(path.dirname(result.css[type].path));

        // Write the generated resource to disk
        fs.writeFileSync(result.css[type].path, result.css[type].contents);
    }
});

// var exec = require('child_process').exec;

// exec('./node_modules/.bin/gulp', function () {
//     console.log('it is ok');
// })

