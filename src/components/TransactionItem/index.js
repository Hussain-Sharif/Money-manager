// Write your code here
import {Component} from 'react'
import './index.css'

class TransactionItem extends Component {
  onDelete = () => {
    const {each, deleteItem} = this.props
    deleteItem(each.id)
  }

  render() {
    const {each} = this.props
    return (
      <li className="item">
        <div className="paras">
          <p className="head1">{each.titleInput}</p>
          <p className="head2">Rs. {each.amountInput}</p>
          <p className="head3">{each.typeText}</p>
        </div>
        <button
          onClick={this.onDelete}
          data-testid="delete"
          type="button"
          className="delete-btn"
        >
          <img
            className="delete-icon"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
          />
        </button>
      </li>
    )
  }
}

export default TransactionItem
