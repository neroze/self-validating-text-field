"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var JTextField = function (_React$Component) {
  _inherits(JTextField, _React$Component);

  function JTextField(props) {
    _classCallCheck(this, JTextField);

    var _this = _possibleConstructorReturn(this, (JTextField.__proto__ || Object.getPrototypeOf(JTextField)).call(this, props));

    _this.componentDidMount = function () {
      _this.setState({ awesome_field: _this.props.children.props.value });
    };

    _this.state = {
      awesome_field: ""
    };
    return _this;
  }

  _createClass(JTextField, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          validator = _props.validator,
          children = _props.children;
      var _children$props = children.props,
          rules = _children$props.rules,
          name = _children$props.name,
          label = _children$props.label,
          className = _children$props.className;

      var newChild = _react2.default.cloneElement(children, _extends({}, children.props, {
        value: this.state.awesome_field,
        onChange: function onChange(e) {
          e.persist();
          _this2.setState({ awesome_field: e.target.value });
          children.props.onChange(e);
          if (!validator.fieldValid(name)) {
            validator.showMessages();
            return;
          }
        }
      }));

      // children.props.name = 'updatedName'
      return _react2.default.createElement(
        "div",
        { className: className },
        label && _react2.default.createElement(
          "label",
          null,
          label
        ),
        newChild,
        validator.message(name, this.state.awesome_field, rules)
      );
    }
  }]);

  return JTextField;
}(_react2.default.Component);

JTextField.propTypes = {
  validator: _propTypes2.default.object.isRequired
};

exports.default = JTextField;