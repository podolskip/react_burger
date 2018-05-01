// ES6 ESLint
import * as React from 'react';
import Auxx from '../../hoc/Auxx';
import classes from './Layout.css';

const layout = ( props ) => {
  return (
    <Auxx>
      <div >Tool, side Drower, back drop</div>
      <main className={classes.Content}>
        {props.children}
      </main>
    </Auxx>
  );    
};

export default layout;