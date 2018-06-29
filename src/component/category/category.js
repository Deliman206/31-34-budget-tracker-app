import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryForm from '../category-form/category-form';
import * as categoryActions from '../../action/category';
import autoBind from '../../utils/index';
import './category.scss';


class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editting: false,
    };
    autoBind.call(this, Category);
  }

  handleUpdate() {
    this.setState({
      editting: false,
    });
  }

  render() {
    const {
      category,
      key,
      categoryRemove,
      categoryUpdate,
    } = this.props;

    return (
      <div className='category' key={key}>
        <h1>
          {
            this.state.editting ? 
            <CategoryForm 
              category={category} 
              onComplete={categoryUpdate} 
              onUpdate={this.handleUpdate}
              type='updateForm'
            /> :
            category.title
          }
        </h1>
        {
          !this.state.editting ? 
          <button onClick={() => this.setState({ editting: true })}>update</button> : 
          undefined
        }
        <button onClick={() => categoryRemove(category)}> X </button>
      </div>
    );
  }
}

Category.propTypes = {
  category: PropTypes.object,
  key: PropTypes.number,
  categoryRemove: PropTypes.func,
  categoryUpdate: PropTypes.func,
  expenses: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    expenses: state.expense,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    categoryRemove: data => dispatch(categoryActions.remove(data)),
    categoryUpdate: data => dispatch(categoryActions.update(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);

