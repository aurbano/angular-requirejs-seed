![Angular Requirejs Bower Grunt](http://urbanoalvarez.es/angular-requirejs-bower-grunt/assets/logo.png)
> Starter project with Angularjs Requirejs Bower Grunt and Bootstrap

![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)
![Dependencies](https://img.shields.io/david/aurbano/angular-requirejs-bower-grunt.svg?style=flat-square)
![Badges](https://img.shields.io/badge/uses-badges-blue.svg?style=flat-square)

## Getting started

Fork or Clone this project, rename and run the following to set your environment up. You'll need [npm](http://nodejs.org/download/) and [grunt](http://gruntjs.com/installing-grunt) for this to work.

First install dependencies:

```sh
$ npm install -g grunt-cli
$ npm install -g bower
$ npm install
$ bower install
```

Now just open `index.html` in your browser and let the magic happen!

## Add/Remove Dependencies

We are using [bower](http://bower.io/) to handle all the dependencies, to add a new one you can run any of the following:

```sh
# registered package
$ bower install jquery
# GitHub shorthand
$ bower install desandro/masonry
# Git endpoint
$ bower install git://github.com/user/package.git
# URL
$ bower install http://example.com/script.js
```

Once you are done, you need to update the routes in Requirejs for them to be available.
Don't worry though, Grunt will do that for you, on the default task. Just run:

```sh
$ grunt
```

## Building

To test locally you develop the Angularjs app inside `app/` and the run `index.html` in your browser.

Once you have something good going you can build it automatically with grunt:

```
$ grunt build
```

Behind the scenes grunt will:

1. Delete the `build/` folder
2. Minify and concatenate the app using Requirejs' optimizer
3. Point the Requirejs script in `index.html` to the built file
4. Copy the `assets/` folder and `bootstrap` to the `build` folder

To test open `build/index.html` in your browser.

## Deploying

At the moment the sample is configured to deploy itself to Github Pages, to deploy simply run:

```sh
$ grunt deploy
```

Other sites like heroku, openshift, or virtually anything could be easily configured, if you do so please send a pull request.

## Contributing/Roadmap

Some pending tasks/ideas I have for this sample app are:

- Multiple deploy options exposed as `$ grunt deploy <service>`
- Functional Angularjs app with several views, providers...
- Non bootstrap option
- Make this into a Yeoman generator

## Meta
Developed by [Alejandro U. Alvarez](http://urbanoalvarez.es) - MIT License
