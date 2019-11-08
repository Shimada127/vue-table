"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _RLTextFilter = _interopRequireDefault(require("./renderless/RLTextFilter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'TextFilter',
  props: ['column'],
  components: {
    RLTextFilter: _RLTextFilter["default"]
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];
    return h("r-l-text-filter", {
      attrs: {
        column: this.column
      },
      scopedSlots: {
        "default": function _default(props) {
          return h("input", {
            on: {
              "keyup": props.search(props.debounce)
            },
            "class": props.theme.input,
            attrs: {
              name: props.getColumnName(_this.column),
              type: "text",
              placeholder: props.display('filterBy', {
                column: props.getHeading(_this.column)
              })
            },
            domProps: {
              "value": props.query[_this.column]
            }
          });
        }
      }
    });
  }
};
exports["default"] = _default2;