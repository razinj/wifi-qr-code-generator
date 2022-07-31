// React
import { FC } from 'react'
// Components
import NavBar from '../components/NavBar'
import Settings from '../components/Settings'
import DisplayCard from '../components/DisplayCard'
// Contexts
import SettingsContextWrapper from '../contexts/SettingsContextWrapper'
// Style
import styles from './style.module.css'

const App: FC = () => {
  return (
    <div className={styles.app_wrapper}>
      <div className={styles.wrapper}>
        <SettingsContextWrapper>
          <NavBar />
          <Settings />
          <DisplayCard />
        </SettingsContextWrapper>
      </div>
    </div>
  )
}

export default App
