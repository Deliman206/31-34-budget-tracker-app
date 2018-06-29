import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as categoryActions from '../../action/category';
import * as expenseActions from '../../action/expense';
import CategoryForm from '../category-form/category-form';
import Category from '../category/category';
import ExpenseForm from '../expense-form/expense-form';
import Expense from '../expense/expense';

class Landing extends React.Component {
  render() {
    const {
      categories, categoryCreate, expenses, expenseCreate,  
    } = this.props;
    return (
      <div className='landing'>
        <CategoryForm onComplete={categoryCreate} type='newForm' className='headerForm'/>
        {
          categories.map((currentCategory, i) => 
          <div key={i}>
            <Category category={currentCategory}/>
            {/* <p>{currentCategory.price}</p> */}
            <ExpenseForm type='createForm' onComplete={expenseCreate} parentId={currentCategory.id}/>
            {
              expenses.map((currentExpense, j) => {
                if (currentExpense.categoryId === currentCategory.id) {
                  return <Expense 
                    key={j} 
                    expense={currentExpense} 
                    updateExpense={this.props.expenseUpdate}
                    destroy={this.props.expenseDestroy}
                  />;
                }
                return undefined;
              })
            }
          </div>)
        }
      </div>
    );
  }
}

Landing.propTypes = {
  categories: PropTypes.array,
  categoryCreate: PropTypes.func,
  expenses: PropTypes.array,
  expenseCreate: PropTypes.func,
  expenseUpdate: PropTypes.func,
  expenseDestroy: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    categories: state.category,
    expenses: state.expense,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    categoryCreate: data => dispatch(categoryActions.create(data)),
    expenseCreate: data => dispatch(expenseActions.create(data)),
    expenseUpdate: data => dispatch(expenseActions.update(data)),
    expenseDestroy: data => dispatch(expenseActions.destroy(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
