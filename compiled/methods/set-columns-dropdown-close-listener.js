'use strict';

module.exports = function () {
  var _this = this;

  if (this.opts.columnsDropdown) {

    var stopProp = function stopProp(e) {
      return e.stopPropagation();
    };
    var handler = function handler() {
      if (_this.displayColumnsDropdown) {
        _this.displayColumnsDropdown = false;
      }
    };

    this.$refs.columnsdropdown.addEventListener('click', stopProp);
    document.addEventListener('click', handler);

    this.$once('hook:beforeDestroy', function () {
      console.log("destory listerns");
      document.removeEventListener('click', handler);
      _this.$refs.columnsdropdown.removeEventListener('click', stopProp);
    });
  }
};