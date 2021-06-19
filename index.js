var assign = require('deep-assign');
var renderer = require('./lib/renderer');

hexo.config.sequence = assign(
  {
    raphael: "https://cdn.bootcss.com/raphael/2.2.8/raphael.min.js",
    webfont: "https://cdn.bootcss.com/webfont/1.6.28/webfontloader.js",
    snap: "https://cdn.bootcss.com/snap.svg/0.5.1/snap.svg-min.js",
    underscore: "https://cdn.bootcss.com/underscore.js/1.9.1/underscore-min.js",
    sequence:
      "https://cdn.bootcss.com/js-sequence-diagrams/1.0.6/sequence-diagram-min.js",
    css: "",
    options: {
      theme: "simple",
    },
  },
  hexo.config.sequence
);

hexo.extend.filter.register('before_post_render', renderer.render, 9);

