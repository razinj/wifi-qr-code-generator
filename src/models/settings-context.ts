import { MutableRefObject } from 'react'
import { SettingsData } from './settings'

export type SettingsContextType = {
  settingsData: SettingsData
  updateSettingsData: (settingsData: SettingsData) => void
  displayCardComponentRef: MutableRefObject<null>
  updateDisplayCardComponentRef: (ref: MutableRefObject<null>) => void
}
