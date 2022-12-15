/*jshint esversion: 6 */
/*
 * grunt-changelog-to-html
 * https://github.com/devilcius/grunt-changelog-to-html
 *
 * Copyright (c) 2022 Marcos
 * Licensed under the MIT license.
 */

"use strict";
const path = require("path");
const fs = require("fs");
const marked = require("marked");
const { option } = require("grunt");

module.exports = function (grunt) {
  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask(
    "changelog_to_html",
    "Generates html files from markdown files",
    function () {
      // Merge task-specific and/or target-specific options with these defaults.
      let options = this.options({
        xhtml: true,
        silent: true,
        toLowerSnakeCase: false,
      });

      // Tansform file name to lower snake case
        function toLowerSnakeCase(str) {
            return str
                .replace(/([a-z])([A-Z])/g, "$1_$2")
                .replace(/[\s-]+/g, "_")
                .toLowerCase();
        }
            

      // Iterate over all specified markdown files and create html in destination folder.
      this.files.forEach(function (file) {
        file.src.forEach(function (src) {
          if (!grunt.file.exists(src)) {
            grunt.log.warn("Source file " + src + " not found.");
            return false;
          }
          try {
            let md = fs.readFileSync(src).toString();
            marked.setOptions({
              silent: options.silent,
              xhtml: options.xhtml,
            });
            let html = marked.parse(md);
            let htmlFileName = path.parse(src).name + ".html";
            if(options.toLowerSnakeCase) {
                htmlFileName = toLowerSnakeCase(htmlFileName);
            }
            grunt.file.write(file.dest + "/" + htmlFileName, html);
            grunt.log.writeln("File " + htmlFileName + " created successfully!");
          } catch (error) {
            grunt.log.error(error);
          }
        });
      });
    }
  );
};
