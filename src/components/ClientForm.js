import React, { Component } from 'react'

export default class TransactionForm extends Component {
  state = {
    ...this.returnStateObject()
  }

  returnStateObject(){
    if(this.props.currentIndex === -1)
      return {
        clientName:'',
        clientEmail: '',
        clientOffers: '',
        clientCalls: '', 
      }

      else 
        return this.props.list[this.props.currentIndex]
  }

  componentDidUpdate(prevProps){
    if (prevProps.currentIndex !== this.props.currentIndex || prevProps.list.length !== this.props.list.length)
      this.setState({...this.returnStateObject()})
  }

  handleInputChange = e => {
    this.setState ({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.onAddOrEdit(this.state)
  }

  render() {
    return (
     <form onSubmit = {this.handleSubmit} autoComplete='off' className='form'>
       <input 
          name='clientName' 
          className='form--field'
          placeholder='Name' 
          type='text'
          value={this.state.clientName} 
          onChange = {this.handleInputChange} 
          required
        />
        <br />

        <input 
          name='clientEmail' 
          className='form--field'
          placeholder='clientEmail' 
          type={'email'}
          value={this.state.clientEmail} 
          onChange = {this.handleInputChange} 
        />
        <br />

        <input 
          name='clientCalls' 
          className='form--field'
          placeholder='clientCalls' 
          value={this.state.clientCalls} 
          onChange = {this.handleInputChange} 
          required
        />
        <br />

        <input 
          name='clientOffers' 
          className='form--field'
          placeholder='clientOffers' 
          value={this.state.clientOffers} 
          onChange = {this.handleInputChange} 
        />

        <br />
        
        <button type='submit' className='form--field button'>submit</button>

     </form>
    )
  }
}
