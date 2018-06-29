import React from 'react';
import PropTypes from 'prop-types';
import autoBind from '../../utils/index';
import ExpenseForm from '../expense-form/expense-form';
import './expense.scss';

class Expense extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editting: false,
    };
    autoBind.call(this, Expense);
  }

  handleUpdate() {
    if (this.state.editting === false) {
      this.setState({
        editting: true,
      });
    } else {
      this.setState({
        editting: false,
      });
    }
  }
  handleExpenseUpdate(data) {
    this.props.updateExpense(data);
  }
  handleDestroy() {
    this.props.destroy(this.props.expense);
  }


  render() {
    return (
      <div className='expense'>
        <h3>{this.props.expense.name}</h3>
        <p>$ {this.props.expense.price}</p>
        {
          !this.state.editting ? <div>
            <button onClick={this.handleUpdate}>Edit</button> 
            <button onClick={this.handleDestroy}>X</button>
          </div> :
          undefined
        }
        {
          this.state.editting ?
           <ExpenseForm 
            type='updateForm' 
            onUpdate={this.handleUpdate}
            expenseToUpdate={this.props.expense}
            onComplete={this.handleExpenseUpdate}
            /> : 
           undefined
        }
      </div>
    );
  }
}

Expense.propTypes = {
  expense: PropTypes.object,
  updateExpense: PropTypes.func,
  destroy: PropTypes.func,
};

export default Expense;
