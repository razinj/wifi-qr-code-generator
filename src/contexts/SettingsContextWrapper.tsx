// React
import { FC, useRef, ReactNode, useState, MutableRefObject } from 'react'
// Contexts
import { SettingsContext } from './SettingsContext'
// Models
import { SettingsData } from '../models/settings'

const SettingsContextWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  const displayCardComponentRef = useRef(null)

  const [settingsData, setSettingsData] = useState<SettingsData>({
    ssid: '',
    password: '',
    hiddenSSID: false,
    authenticationType: '',
    hidePasswordInCard: false,
  })

  const updateSettingsData = (data: SettingsData) => {
    setSettingsData(data)
  }

  const updateDisplayCardComponentRef = (ref: MutableRefObject<null>) => {
    displayCardComponentRef.current = ref.current
  }

  return (
    <SettingsContext.Provider
      value={{ displayCardComponentRef, updateDisplayCardComponentRef, settingsData, updateSettingsData }}
    >
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsContextWrapper
