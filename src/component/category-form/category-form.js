import React from 'react';
import PropTypes from 'prop-types';
import autoBind from '../../utils/';

const defaultState = {
  title: '',
  price: 0,
};

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.category || defaultState;
    autoBind.call(this, CategoryForm);
  }
  //-----------------------------------------------------
  // MEMBER FUNCTIONS
  //-----------------------------------------------------
  handleChange(event) {
    const { value, name } = event.target;
    if (name === 'title') {
      this.setState({ title: value });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.props.type === 'updateForm') {
      this.props.onUpdate();
    }
    this.props.onComplete(this.state);
    this.setState(defaultState);
  }
  //-----------------------------------------------------
  // LIFE CYCLE HOOKS
  //-----------------------------------------------------
  render() {
    const buttonText = this.props.category ? 'Update' : '+';
    const inputClass = this.props.type === 'newForm' ? 'newForm' : 'updateForm';
    return (
      <form
        onSubmit={this.handleSubmit}
        className='category-form'>

        <input
          type='text'
          name='title'
          placeholder='+ Category'
          value={this.state.title}
          onChange={this.handleChange}
          className={inputClass}
        />
        <button type='submit'>{buttonText} Category {buttonText === 'Update' ? 'Title' : undefined}</button>
      </form>
    );
  }
}

CategoryForm.propTypes = {
  onComplete: PropTypes.func,
  onUpdate: PropTypes.func,
  category: PropTypes.object,
  type: PropTypes.string,
};

export default CategoryForm;
