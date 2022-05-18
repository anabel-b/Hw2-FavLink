import React from 'react'
import Table from './Table';
import Form from './Form';

// https://youtu.be/RKl2uS0GC2M?t=1392
class LinkContainer extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        favLink: []
      }
  }

  handleRemove = (index) => {  
    var array = [...this.state.favLink];
    array.splice(index, 1);
    this.setState({favLink:array})
      

  }

  handleSubmit = (favLink) => {

    this.setState(prevState => ({favLink: [...prevState.favLink, favLink]}))
  }

  render() {
    return (
      <div className="container">
        <h1>My Favorite Links</h1>
        <p>Add a new url with a name and link to the table.</p>
        <Table linkData = {this.state.favLink} 
        removeLink = {this.handleRemove}/>

        <br />

        <h3>Add New</h3>
        <Form handleSubmit = {this.handleSubmit}/>

      </div>
    )
  }
}

export default LinkContainer
