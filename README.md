# self-validating-text-field
Self Validating test field

```
import React, { Fragment } from "react";
import InputField from "self-validating-text-field";
import SimpleReactValidator from "simple-react-validator";

export default class extends React.Component {
  state = {
    email: "neerooz@gmail.com"
  };

  componentDidMount = () => {
    const validator = new SimpleReactValidator();
    this.setState({ validator });
  };

  submit = () => {
    if (this.validator.allValid()) {
      alert("You submitted the form and stuff!");
    } else {
      this.validator.showMessages();
      // rerender to show messages for the first time
      this.forceUpdate();
    }
  };

  render() {
    console.log("this.Validator", this.state.validator);
    return (
      <Fragment>
        {this.state.validator && (
          <InputField
            name="name"
            validator={this.state.validator}
            placeholder={"Name"}
            onChange={e => {
              const { value } = e.target;
              console.log("----------->", value);
            }}
            rules={"required|email"}
            value={this.state.email}
          />
        )}

        <button onClick={this.submit}>Submit</button>
      </Fragment>
    );
  }
}

```