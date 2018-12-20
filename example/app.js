// class TextField extends React.Component {

// 	constructor(props) {
// 		super(props);
// 		this.handelChange = this.handelChange.bind(this);
// 		this.state = {
// 			awesome_field: ''
// 		}
// 	}

// 	handelChange() {

// 	}

//   render() {
// 		const {validator, onChange, name, placeholder, rules, label, className} = this.props;
//     return <div className={className}>
//     	{label && <label>{label}</label>}
//     	<input
// 				name={name}
// 				placeholder={placeholder}
// 				cols="33" 
// 				id='name'
// 				value={this.state.awesome_field}
// 				onChange={(e) => {
// 					this.setState({
// 						awesome_field: e.target.value
// 					})
// 					if (!validator.allValid()) {
// 						validator.showMessages();
// 						return
// 					}
// 					onChange(e.target.value)
// 				}}
// 			/>
// 			{validator.message(name, this.state.awesome_field, rules, 'form__errorlistitem')}
//     </div>;
//   }
// }
const validator = new SimpleReactValidator();

ReactDOM.render(
  <JTextField
  	label='Name'
  	className="error"
  	name="name"
  	validator={validator}
  	placeholder='Self validating Name field'
  	onChange={(value) => {
  		console.log('value-->', value);
  	}}
  	rules="required|min:4"
  	onKeyPress={(e) => {
  		console.log('-----', e);
  	}}
  />,
  document.getElementById('container')
);
