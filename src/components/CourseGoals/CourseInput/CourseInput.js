import React, { useState } from 'react';
import styles from './CourseInput.module.css';
import Button from '../../UI/Button/Button';

/*
using styled components approach: 
// eg: we can use multiple components in a file.
const FormControl = styled.div`
margin: 0.5rem 0;

  // here '&' tells styled-components that it is talking about 'label' that is inside of this 'div'. so //instead of writing .form-control label { }, we write & label{ }

& label {       
  color: ${props => (props.invalid ? 'red' : 'black')};           
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

  // same for .form-control input { }

& input {
  display: block;
  width: 100%;
  border: 1px solid ${props => (props.invalid ? 'red' : '#ccc')};     
  // we are using props for setting styles dynamically in line 24
  font: inherit;
  background: ${props => (props.invalid ? '#ffd7d7' : 'transparent')};
  line-height: 1.5rem;
  padding: 0 0.25rem;
}

  // .form-control input:focus { }

& input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}

/* these both are the css classes that we add only if user's input is invalid...  

  // .form-control.invalid input{ }
&.invalid input{
  // no need of this code
}

  // .form-control.invalid label{ }

&.invalid label{
  // no need of this code
}
`;
*/

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);


  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  /* using styled component approach for scoping styles...
    return (
      <form onSubmit={formSubmitHandler}>
        {/* <FormControl className={!isValid && 'invalid'}>}
        {/* line 80 means if 'is not valid'(!isValid), invalid syntax will be added. we need the full css code above in this way. }
        {/* alternative for line 80 }
        <FormControl invalid={!isValid} > 
         {/* setting props in line 83 and these props can be used for dynamic styling. we need above css code but from line 41 to 54, we don't need becoz we will set that css dynamically through props. (eg - line 14, 25, 28 )}
          <label >Course Goal</label>
          <input type="text" onChange={goalInputChangeHandler} />
        </FormControl>
        <Button type="submit">Add Goal</Button>
      </form>
    );
  };
  */


  // using css module approach for scoping styles:
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label >Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};
export default CourseInput;
