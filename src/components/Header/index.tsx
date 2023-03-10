import logo from '../../assets/logo.svg'

import styles from './styles.module.css'

export function Header() {
  return (
    <div className={styles.container}>
      <img src={logo} alt="Todo App" />
    </div>
  )
}
