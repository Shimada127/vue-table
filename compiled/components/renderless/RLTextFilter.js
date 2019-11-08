"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  name: 'RLTextFilter',
  inject: ['opts', 'search', 'query', 'theme', 'getHeading', 'display', 'getColumnName'],
  props: ['column'],
  render: function render(h) {
    return this.$scopedSlots["default"]({
      debounce: this.opts().debounce,
      theme: this.theme,
      search: this.search,
      query: this.query(),
      getHeading: this.getHeading,
      getColumnName: this.getColumnName,
      display: this.display
    });
  }
};
exports["default"] = _default;