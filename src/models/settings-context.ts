// React
import { MutableRefObject } from 'react'
// Models
import { SettingsData } from './settings'

export type SettingsContextType = {
  settingsData: SettingsData
  updateSettingsData: (settingsData: SettingsData) => void
  displayCardComponentRef: MutableRefObject<null>
  updateDisplayCardComponentRef: (ref: MutableRefObject<null>) => void
}
