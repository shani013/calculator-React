import styles from './Display.module.css';
const Display = ({showVal}) =>
{
  return (
    <>
      <textarea type="text" className={styles.display} value={showVal} readOnly/>
    </>
  )
}
export default Display;