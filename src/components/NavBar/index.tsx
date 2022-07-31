// React
import { FC } from 'react'
// Style
import styles from './style.module.css'

const NavBar: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <span className={styles.app_name}>WiFi QR Code Generator</span>
      </div>
      <div>
        <span>CTAs</span>
      </div>
    </div>
  )
}

export default NavBar
