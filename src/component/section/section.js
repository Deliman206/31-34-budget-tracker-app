import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SectionForm from '../section-form/section-form';
import * as sectionActions from '../../action/section';

import CardForm from './../card-form/card-form';
import Card from '../card/card';
// TODO: Making Card Component to import here
import * as cardActions from '../../action/card';

class Section extends React.Component {
  render() {
    const {
      cards,
      cardCreate,
      section,
      key,
      sectionRemove,
      sectionUpdate,
    } = this.props;
    
    let sectionCards = null;
    if (this.props.cards) {
      sectionCards = cards[section.id];
    }
    return (
      <div className='section' key={key}>
        <h1> { section.title } </h1>
        <button onClick={() => sectionRemove(section)}> Delete </button>
        <SectionForm section={section} onComplete={sectionUpdate}/>
        <CardForm section={section} onComplete={cardCreate} />
        {
          this.props.cards ? <div className="card-list">
          { sectionCards.map(card => <Card card={card} key={card.id} />) }
        </div> : <div className="card-list"></div>
        }
       
      </div>
    );
  }
}

Section.propTypes = {
  cards: PropTypes.object,
  cardCreate: PropTypes.func,
  section: PropTypes.object,
  key: PropTypes.number,
  sectionRemove: PropTypes.func,
  sectionUpdate: PropTypes.func,
};

const mapStateToProps = state => ({
  cards: state.cards,
});
 

const mapDispatchToProps = (dispatch) => {
  return {
    cardCreate: data => dispatch(cardActions.createAction(data)),
    sectionRemove: data => dispatch(sectionActions.remove(data)),
    sectionUpdate: data => dispatch(sectionActions.update(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Section);

