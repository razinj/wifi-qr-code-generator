// React
import { FC } from 'react'
// Components
import Settings from './components/Settings'
import DisplayCard from './components/DisplayCard'
// Contexts
import SettingsContextWrapper from './contexts/SettingsContextWrapper'

const App: FC = () => {
  return (
    <SettingsContextWrapper>
      <Settings />
      <DisplayCard />
    </SettingsContextWrapper>
  )
}

export default App
