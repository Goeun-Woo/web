export default class Contact extends React.Component {
  state = {
    input: "",
    name: "",
    email: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <input name="name" onChange={this.handleChange} />
        <input name="email" onChange={this.handleChange} />
      </div>
    );
  }
}
