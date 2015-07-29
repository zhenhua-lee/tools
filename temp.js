var exec = require('child_process').exec;

exec('node run bundle', function () {
    console.log('running...');
})