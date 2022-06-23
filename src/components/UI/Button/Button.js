import React from 'react';
// 2. CSS modules: for making styles scoped...
import styles from './Button.module.css';

const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};


/* 1. styled components: the first method to make styles scoped...
// styling using styled-components package: 
import styled from 'styled-components';
const Button = styled.button`
     // while setting css properties through styled-components, we remove class names and {}.
  width: 100%;
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  @media (min-width: 768px){
    width: auto;
  }

     // .button:focus {  // this is psedu selector
     // for this syntax, we use &: this tells the package that u want a special case - special psedu selector.
  &:focus { 
    outline: none;
  }

     // .button:hover,    // same for hover
     // .button:active { }
  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }

`;

// 1. this is called attacked template literal. here, 'button' is a method on this 'styled' object. 'styled' is an object imported from this 'styled-components' and there we can access the 'button' method. instead of adding '()' in this end, we add ``. This will be excuted as a method in the end behidn the scene and Whatever we pass in between ``, will be passed into this method.
// 2. this button method will return the new button component. this styled 'package' has methods for all the html components (eg - styled.p``, styled.div``, styled.h1`` etc) here we have button.
// 3. In between ``, we pass styles for the button. here this 'button' does not have any class so we don't need to provide class or id selectors. Finally, all the styles automatically will effect 'button'.  
// 4. the button which is returned, also by default applies all the props you will pass to your own button component 'const Button';
// 5. how styled-components work: automatically, it wrap up all our styles in a class that is unique so that it cannot affect other components in the app. 

*/

export default Button;
