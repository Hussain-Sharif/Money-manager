import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import TransactionItem from '../TransactionItem/index'
import MoneyDetails from '../MoneyDetails/index'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: '',
    typeId: transactionTypeOptions[0].optionId,
    historyContainer: [],
  }

  titleChange = event => {
    this.setState({titleInput: event.target.value})
  }

  amountChange = event => {
    this.setState({amountInput: event.target.value})
  }

  typeChange = event => {
    this.setState({typeId: event.target.value})
    console.log(event.target.value)
  }

  submitTransaction = event => {
    event.preventDefault()

    // console.log(event.target.value)
    this.setState(prev => {
      const newTranc = {
        titleInput: prev.titleInput,
        amountInput: prev.amountInput,
        id: uuidv4(),
        typeText:
          prev.typeId === transactionTypeOptions[0].optionId
            ? transactionTypeOptions[0].displayText
            : transactionTypeOptions[1].displayText,
      }
      return {
        historyContainer: [...prev.historyContainer, newTranc],
        titleInput: '',
        amountInput: '',
        typeId: transactionTypeOptions[0].optionId,
      }
    })
  }

  deleteItem = id => {
    this.setState(prev => {
      const filtered = prev.historyContainer.filter(each => each.id !== id)
      return {historyContainer: filtered}
    })
  }

  render() {
    const {titleInput, amountInput, typeId, historyContainer} = this.state
    console.log(historyContainer)
    return (
      <div className="bg">
        <div className="card">
          <div className="profile">
            <h1 className="p-head">Hi, Richard</h1>
            <p className="p-para">
              Welcome back to your{' '}
              <span className="website-name">Money Manager</span>
            </p>
          </div>
          <MoneyDetails historyContainer={historyContainer} />
          <div className="transaction-container">
            <form onSubmit={this.submitTransaction} className="form">
              <div className="t-part1">
                <h1 className="head-p1">Add Transaction</h1>
                <label className="label-name" htmlFor="title">
                  TITLE
                </label>
                <input
                  placeholder="TITLE"
                  onChange={this.titleChange}
                  type="text"
                  id="title"
                  className="input-enter"
                  value={titleInput}
                />
                <label className="label-name" htmlFor="amount">
                  AMOUNT
                </label>
                <input
                  placeholder="AMOUNT"
                  onChange={this.amountChange}
                  type="text"
                  id="amount"
                  className="input-enter"
                  value={amountInput}
                />
                <label className="label-name" htmlFor="type">
                  TYPE
                </label>
                <select
                  id="type"
                  onChange={this.typeChange}
                  className="input-enter"
                  value={typeId}
                >
                  <option value={transactionTypeOptions[0].optionId}>
                    Income
                  </option>
                  <option value={transactionTypeOptions[1].optionId}>
                    Expenses
                  </option>
                </select>
                <button type="submit" className="btn-p1">
                  Add
                </button>
              </div>
            </form>
            <div className="t-part2">
              <h1 className="head-part2">History</h1>
              <div className="main-up-2">
                <p className="head">Title</p>
                <p className="head">Amount</p>
                <p className="head">Type</p>
              </div>
              <ul className="main-part2">
                {historyContainer.map(each => (
                  <TransactionItem
                    key={each.id}
                    each={each}
                    deleteItem={this.deleteItem}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
