import React from 'react';
import PropTypes from 'prop-types';
import autoBind from '../../utils/index';

const defaultState = {
  name: '',
  price: '',
};

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.expenseToUpdate || defaultState;
    autoBind.call(this, ExpenseForm);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.props.type === 'createForm') {
      this.props.onComplete(this.state);
      this.setState(defaultState);
    } else {
      this.props.onComplete(this.state);
      this.props.onUpdate();
      this.setState(defaultState);
    }
  }

  handleChange(event) {
    const { name, value } = event.target;
    if (this.props.type === 'createForm') {
      this.setState({
        [name]: value,
        categoryId: this.props.parentId,
      });
    } else {
      this.setState({
        [name]: value,
      });
    }
  }

  render() {
    const inputClass = this.props.type === 'createForm' ? 'createForm' : 'updateForm';
    return (
      <form
        onSubmit={this.handleSubmit}
        className='expense-form'>

        <input
          type='text'
          name='name'
          placeholder='+ Expense'
          value={this.state.name}
          onChange={this.handleChange}
          className={inputClass}
        />
        <input
          type='number'
          name='price'
          placeholder='Cost'
          value={this.state.price}
          onChange={this.handleChange}
          className={inputClass.concat('Price')}
        />
        <button type='submit'>{this.props.type === 'updateForm' ? 'Update' : 'Submit'} </button>
      </form>
    );
  }
}

ExpenseForm.propTypes = {
  onComplete: PropTypes.func,
  parentId: PropTypes.string,
  type: PropTypes.string,
  onUpdate: PropTypes.func,
  expenseToUpdate: PropTypes.object,
};

export default ExpenseForm;
