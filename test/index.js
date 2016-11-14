'use strict'
/**
 * Modules
 */

var fs = require('fs'),
    path = require('path'),
    marked = require('marked');

// Synchronous highlighting with highlight.js
marked.setOptions({
    highlight: function(code) {
        return require('highlight.js').highlightAuto(code).value;
    }
});


/**
 * Load Tests
 */

function load() {
    var dir = __dirname + '/tests',
        files = {},
        list=[], file, i, l;
    //
    dir = path.join(__dirname, '../src/bootstrap/');
    fs
        .readdirSync(dir).forEach(function(file) {
            console.log('var ' + file + ' = require("./' + file + '");');
           list.push(file)
        });
      console.log(list);
    return files;
}

load();
exports.load = load;
