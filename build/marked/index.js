/**
 * 编译doc md文件
 * class="not-markdown"不会编译
 */
'use strict'
/**
 * Modules
 */

var fs = require('fs'),
    path = require('path'),
    cheerio = require('cheerio'),
    highlightJS = require('highlight.js'),
    marked = require('marked');

// Synchronous highlighting with highlight.js
marked.setOptions({
    highlight: function(code) {
        return highlightJS.highlightAuto(code).value;
    }
});

/**
 * Load files
 */

function loadFiles() {
    let dir = path.join(__dirname, '../../doc/pages/'),
        files = {},
        list = [],
        file, i, l;
    // console.log(dir);
    let travel = (dir) => {
        fs.readdirSync(dir)
            .forEach((file) => {
                let pathname = path.join(dir, file);
                // console.info(pathname,fs.statSync(pathname).isDirectory());
                if (fs.statSync(pathname).isDirectory()) {
                    travel(pathname);
                } else {
                    if (path.extname(file) === '.md') {
                        list.push(pathname);
                    }
                }
            });
    };
    travel(dir);
    i = 0;
    l = list.length;
    for (; i < l; i++) {
        file = list[i];
        // console.log(path.basename(file));
        let text = fs.readFileSync(file, 'utf8');
        let $text=cheerio.load(''+text,{decodeEntities: false});
        //取出不使用markdown样式的部分
        
        

        $text('pre').each(function(i, elem) {
            // console.log($text(this).html())
           // let language=$text(this).hasClass('html')?'html':'javascript';
           let code=(highlightJS.highlightAuto($text(this).html()).value);
           // console.log(code)
           $text(this).html('<code style="width:100%;color:#fff">'+code+'</code>');
           // $text(this).html(code);
        });
        let notMarkdownHTML=$text('.not-markdown').html();
        notMarkdownHTML=notMarkdownHTML?notMarkdownHTML:'';
        
        $text('.not-markdown').html('');
        //marked 
        let markedHtml=marked($text.html(),{ lineNumbers: true });
        let $text2=cheerio.load(''+markedHtml,{decodeEntities: false});
        let content='<div class="markdown-body">' + $text2.html() + '</div>'+notMarkdownHTML;
        fs.writeFileSync(file.replace(/[^.]+$/, 'html'), content);
    }

    return list;
}

module.exports = loadFiles;
