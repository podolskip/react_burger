import * as React from 'react';
import classes from './BurgerIngridient.css';
import PropTypes from 'prop-types';

class BurgerIngridient extends React.Component {
  constructor( props ) {
    super( props );
    this.ingredient = null;
  }
  
  render() {
    switch ( this.props.type ) {
    case( 'bread-bottom' ):
      this.ingredient = <div className={classes.BreadBottom}></div>;
      break;
    case ( 'bread-top' ):
      this.ingredient = (
        <div className={classws.BreadTop}>
          <div className={classes.Seeds1}></div>
          <div className={classes.Seeds2}></div>
        </div>
      );
      break;
    case ( 'meat' ):
      this.ingredient = <div className={classes.Meat}></div>;
      break;
    case ( 'cheese' ):
      this.ingredient = <div className={classes.Cheese}></div>;
      break;
    case ( 'beacon' ):
      this.ingredient = <div className={classes.Beacon}></div>;
      break;
    case ( 'salad' ):
      this.ingredient = <div className={classes.Salad}></div>;
      break;
    default:
      this.ingredient = null;
      break;
    }
  
    return this.ingredient;
  };
    
};

BurgerIngridient.propTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngridient;