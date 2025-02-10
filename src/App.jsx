import Display from './components/Display'
import styles from '/src/App.module.css'
import ButtonsContainer from './components/ButtonsContainer'
import { useState } from 'react'

function App() {
  const [disVal, setDisVal] = useState('');
  const showClickedButton = (buttonText) =>
  {
    
    if (buttonText === 'C') {
      setDisVal('');
    }
    else if (buttonText === '=')
    {
      try {
      // Safely evaluate the expression
      let calculation = eval(disVal);
      setDisVal(calculation.toString()); // Convert the result to string
    } catch (error) {
      // Handle syntax errors
      setDisVal('Error'); // Display 'Error' in the calculator
      
    }
    }
    else if (buttonText === 'Del')
    {
      let tempVal = disVal.slice(0, -1);
      setDisVal(tempVal);
    }
    else {
      // If the display is already a result, replace the value with the clicked button
    if (disVal === 'Error' || disVal === '') {
      setDisVal(buttonText);
    } else {
      let tempVal = disVal + buttonText; // Add the clicked button's value to the current display
      setDisVal(tempVal);
    } 
    }
  }
  return (
    <>
      <div className={styles.main}>
        <Display showVal={disVal} ></Display>
        <ButtonsContainer showClickedButton={showClickedButton} ></ButtonsContainer>
      </div>
    </>
  )
}

export default App
