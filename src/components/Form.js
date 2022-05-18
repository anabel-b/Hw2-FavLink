import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
    // link name and URL
    this.state = {name: "" , URL: "" }
  }

  handleNameChange = (event) => {
    this.setState({
    name: event.target.value 
    })
  }
  handleURLChange = (event) => {
    this.setState({
    URL: event.target.value

    })
  }


  onFormSubmit = (event) => {
    event.preventDefault();
    const submission = {
      name: this.state.name,
      URL: this.state.URL
    }
    this.props.handleSubmit(submission);
    this.setState({name: "", URL: ""})
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
        <label for="name">Name</label>
        <input
          type = "text"
          onChange={this.handleNameChange}
          value={this.state.name}
          />
          <label for="URL">URL</label>
          <input
          type = "text"
          onChange={this.handleURLChange}
          value={this.state.URL}
          />

            <button type="submit"> Submit</button>

      </form>
    )
  }
}

export default Form
