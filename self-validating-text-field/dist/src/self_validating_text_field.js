'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class JTextField extends _react2.default.Component {

	constructor(props) {
		super(props);
		this.handelChange = this.handelChange.bind(this);
		this.state = {
			awesome_field: ''
		};
	}

	handelChange() {}

	render() {
		const { validator, onChange, name, placeholder, rules, label, className, onKeyPress, onBlur } = this.props;
		return _react2.default.createElement(
			'div',
			{ className: className },
			label && _react2.default.createElement(
				'label',
				null,
				label
			),
			_react2.default.createElement('input', {
				name: name,
				placeholder: placeholder,
				cols: '33',
				id: 'name',
				value: this.state.awesome_field,
				onChange: e => {
					this.setState({
						awesome_field: e.target.value
					});
					onChange(e);
					if (!validator.fieldValid(name)) {
						validator.showMessages();
						return;
					}
				},
				onKeyPress: onKeyPress,
				onBlur: onBlur
			}),
			validator.message(name, this.state.awesome_field, rules, 'form__errorlistitem')
		);
	}
}

exports.default = JTextField;