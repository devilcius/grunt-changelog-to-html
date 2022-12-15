# grunt-changelog-to-html

> Generates an html file from CHANGELOG.md, or for the matter any markdown file

## Getting Started
This plugin requires Grunt `~1.0.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-changelog-to-html --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-changelog-to-html');
```

## The "changelog_to_html" task

### Overview
In your project's Gruntfile, add a section named `changelog_to_html` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  changelog_to_html: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.xhtml
Type: `boolean`
Default value: `false`

If true, emit self-closing HTML tags for void elements (<br/>, <img/>, etc.) with a "/" as required by XHTML

#### options.silent
Type: `boolean`
Default value: `'false'`

If true, the markdown parser does not throw any exception.

### options.toLowerSnakeCase
Type: `boolean`
Default value: `'false'`

If true, the output html file names is transformed in lower snake case

### Usage Examples

#### In a Spring boot directory tree:

```js
grunt.initConfig({
  changelog_to_html: {
    options: {
        xhtml: true,
        silent: false,
    },    
    your_target: {      
      files: {
        'src/main/resources/templates/fragment': ['./CHANGELOG.md'],
      }
    }
  },
});
```
The task will create an html file for each markdown file defined in target. So `CHANGELOG.md` will be converted to `CHANGELOG.html` in the selected folder:

```markdown
  # hello, grunt!
```
```html
    <h1>hello, grunt!</h1>
```
Then you could use it in your thymeleaf template:
```html
  <div th:replace="fragment/CHANGELOG"></div>
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
[See tags](https://github.com/devilcius/grunt-changelog-to-html/tags)
