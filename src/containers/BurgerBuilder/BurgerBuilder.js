import * as React from 'react';
import Aux from '../../hoc/Auxx';

class BurgerBuilder extends React.Component {

  render() {
    return(
      <Aux>
        <div>Burger</div>
        <div>Build Controls</div>
      </Aux>
    );
  }
};

export default BurgerBuilder;