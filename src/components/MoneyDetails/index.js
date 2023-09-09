// Write your code here
import {Component} from 'react'
import './index.css'

class MoneyDetails extends Component {
  render() {
    const {historyContainer} = this.props
    let income = 0
    let expenses = 0
    historyContainer.forEach(element => {
      if (element.typeText === 'Income') {
        income += parseInt(element.amountInput)
      } else {
        expenses += parseInt(element.amountInput)
      }
    })
    const total = income - expenses
    return (
      <div className="details-list">
        <div className="list bal">
          <div>
            <img
              className="details-icon"
              src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
              alt="balance"
            />
          </div>
          <div>
            <p className="detail-type">Your Balance</p>
            <p data-testid="balanceAmount" className="money">
              Rs {total}
            </p>
          </div>
        </div>
        <div className="list inc">
          <div>
            <img
              className="details-icon"
              src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
              alt="income"
            />
          </div>
          <div>
            <p className="detail-type">Your Income</p>
            <p data-testid="incomeAmount" className="money">
              Rs {income}
            </p>
          </div>
        </div>
        <div className="list exp">
          <div>
            <img
              className="details-icon"
              src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
              alt="expenses"
            />
          </div>
          <div>
            <p className="detail-type">Your Expenses</p>
            <p data-testid="expensesAmount" className="money">
              Rs {expenses}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyDetails
