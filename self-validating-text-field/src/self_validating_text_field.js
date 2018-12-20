import React from "react";
import PropTypes from "prop-types";

class JTextField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      awesome_field: ""
    };
  }

  componentDidMount = () => {
    this.setState({ awesome_field: this.props.value });
  };

  render() {
    const {
      validator,
      onChange,
      name,
      placeholder,
      rules,
      label,
      className,
      onKeyPress,
      onBlur,
      value
    } = this.props;
    return (
      <div className={className}>
        {label && <label>{label}</label>}
        <input
          name={name}
          placeholder={placeholder || ""}
          cols="33"
          id="name"
          value={this.state.awesome_field}
          onChange={e => {
            this.setState({
              awesome_field: e.target.value
            });
            onChange(e);
            if (!validator.fieldValid(name)) {
              validator.showMessages();
              return;
            }
          }}
          onKeyPress={onKeyPress}
          onBlur={onBlur}
        />
        {validator.message(name, this.state.awesome_field, rules)}
      </div>
    );
  }
}

JTextField.propTypes = {
  validator: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  rules: PropTypes.string.isRequired
};

export default JTextField;
