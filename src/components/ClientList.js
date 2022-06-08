import React, { Component } from 'react'
import ClientForm from './ClientForm'

export default class TransactionList extends Component {
  state = {
    currentIndex: -1,
    list: this.returnList()
  }

  returnList () {
    if (localStorage.getItem('transactions') === null)
      localStorage.setItem('transactions', JSON.stringify([]))
    return JSON.parse(localStorage.getItem('transactions'))
  }

  onAddOrEdit = (data) => {
    let list = this.returnList()
    
    if (this.state.currentIndex === -1) 
      list.push(data)
    
    else 
      list[this.state.currentIndex] = data
      localStorage.setItem('transactions', JSON.stringify(list))
      this.setState({list, currentIndex: -1})
  }

  handleEdit = index => {
    this.setState({
      currentIndex: index
    })
  }

  handleDelete = index => {
    let list = this.returnList() 
    list.splice(index,1)
    localStorage.setItem('transactions', JSON.stringify(list))
      this.setState({list, currentIndex: -1})
  }

  render() {
    return (
      <div>
        <ClientForm 
          onAddOrEdit = {this.onAddOrEdit}
          currentIndex = {this.state.currentIndex}
          list = {this.state.list}
        />
        <table>
          <tbody>
            {
              this.state.list.map((item, index) => {
                return <tr key='index' className='table'>
                    <td className='table--row'>{item.clientName}</td>
                    <td className='table--row'>{item.clientEmail}</td>
                    <td className='table--row'>{item.clientCalls}</td> 
                    <td className='table--row'>{item.clientOffers}</td>
                    <td className='table--row'>
                      <button 
                      onClick={() => this.handleEdit(index)} 
                      className='button'
                      >
                        Edit
                      </button>
                    </td>

                    <td className='table--row'>
                      <button 
                        onClick={() => this.handleDelete(index)}
                        className='button'
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}
