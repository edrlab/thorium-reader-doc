const path = require('path');
const mime = require('mime');
const nunjucks = require('nunjucks');
const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/resources");
  eleventyConfig.addPassthroughCopy("css");

  let nunjucksEnv = new nunjucks.Environment(
    new nunjucks.FileSystemLoader("src/_includes")
  );

  eleventyConfig.addFilter('mediaType', str => mime.getType(path.extname(str).slice(1)));

  eleventyConfig.addFilter('makeTocItemsForPage', page => 
    `<li><a href="${page.data.EPUBRoot}${page.data.page.url}index.xhtml">${page.data.title}}</a></li>`);

  eleventyConfig.addFilter('isArray', arr => arr instanceof Array);
  
  eleventyConfig.setLibrary("njk", nunjucksEnv);

  let markdownIt = require("markdown-it")({
    xhtmlOut: true,
    html: true
    breaks: true,
    linkify: true
  })
  .use(require('markdown-it-attrs'), {autofill: true});
  eleventyConfig.setLibrary("md", markdownIt);

  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "build/epub/EPUB"
    }
  };
};
