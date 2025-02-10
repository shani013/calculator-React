import Button from "./Button"
import styles from './ButtonsContainer.module.css'
export default function ButtonsContainer({showClickedButton}) {
      const buttons = ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.','Del'];

  return (
    <div className={styles.buttonsContainer}>
      {buttons.map((button) => (
        <Button title={button} showClickedButton={showClickedButton} />
      ))}
    </div>
  )
}
