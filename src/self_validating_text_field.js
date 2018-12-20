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
    this.setState({ awesome_field: this.props.children.props.value });
  };

  render() {
    const {
      validator,
      children
    } = this.props;

    const { rules, name, label, className} = children.props;
    const newChild = React.cloneElement(
      children,
      {
        ...children.props,
        value: this.state.awesome_field,
        onChange: (e) => {
          e.persist()
          this.setState({ awesome_field: e.target.value })
          children.props.onChange(e);
          if (!validator.fieldValid(name)) {
            validator.showMessages();
            return;
          }
        }
      }
    )

    return (
      <div className={className}>
        {label && <label>{label}</label>}
        {newChild}
        {validator.message(name, this.state.awesome_field, rules)}
      </div>
    );
  }
}

JTextField.propTypes = {
  validator: PropTypes.object.isRequired,
  onChange: PropTypes.func
};

export default JTextField;
