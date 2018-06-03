import React from 'react';
import PropTypes from 'prop-types';
import autoBind from '../../utils/';

const defaultState = {
  title: '',
  cost: '',
};

class SectionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.section || defaultState;
    autoBind.call(this, SectionForm);
  }
  //-----------------------------------------------------
  // MEMBER FUNCTIONS
  //-----------------------------------------------------
  handleChange(event) {
    const { value, name } = event.target;
    if (name === 'title') {
      this.setState({ title: value });
    }
    if (name === 'cost') {
      this.setState({ cost: value });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState(defaultState);
  }
  //-----------------------------------------------------
  // LIFE CYCLE HOOKS
  //-----------------------------------------------------
  render() {
    const buttonText = this.props.section ? 'Update' : 'Create';
    return (
      <form
        onSubmit={this.handleSubmit}
        className='section-form'>

        <input
          type='text'
          name='title'
          placeholder='Expense'
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input
          type='number'
          name='cost'
          placeholder='Cost'
          value={this.state.cost}
          onChange={this.handleChange}
        />
        <button type='submit'>{buttonText} Expense</button>

      </form>
    );
  }
}

SectionForm.propTypes = {
  onComplete: PropTypes.func,
  section: PropTypes.object, // Vinicio - used to update sections
};

// Vinicio - you could bind your form to state in here

export default SectionForm;
