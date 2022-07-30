// React
import { createContext } from 'react'
// Models
import { SettingsContextType } from '../models/settings-context'

const SettingsContext = createContext<SettingsContextType>({} as SettingsContextType)

export { SettingsContext }
