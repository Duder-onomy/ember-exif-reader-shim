'use strict';

const mergeTrees = require('broccoli-merge-trees');
const path = require('path');
const Funnel = require('broccoli-funnel');
const fastbootTransform = require('fastboot-transform');
const resolve = require('resolve');

module.exports = {
  name: 'ember-exif-reader-shim',

  treeForVendor(existingTree) {
    let trees = [];

    if (existingTree) {
      trees.push(existingTree);
    }

    let exifreaderPath = path.dirname(
      resolve.sync('exifreader', { basedir: this.project.root })
    );

    exifreaderPath = fastbootTransform(new Funnel(exifreaderPath, {
      files: ['exif-reader.js'],
      destDir: 'exifreader'
    }));

    trees.push(exifreaderPath);

    return new mergeTrees(trees);
  },

  included() {
    this._super(arguments);
    this.import('vendor/exifreader/exif-reader.js');

    this.import('vendor/exif-reader-shim.js', {
      exports: {
        exifreader: ['default']
      }
    });
  },
};
