import styles from './Button.module.css';
const Button = ({title,showClickedButton}) =>
{
  return (
    <>
      <button className={styles.button} onClick={()=>showClickedButton(title)} >{ title}</button>
    </>
  )
}
export default Button;