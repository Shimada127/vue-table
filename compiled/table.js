"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var methods = require('./mixins/methods');

var computed = require('./mixins/computed');

var directives = require('./mixins/directives');

var beforeDestroy = require('./mixins/before-destroy');

function _default() {
  return {
    methods: methods,
    computed: computed,
    directives: directives,
    beforeDestroy: beforeDestroy
  };
}