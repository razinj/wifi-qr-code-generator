// React
import { FC, ChangeEvent, useContext } from 'react'
// React to Print
import ReactToPrint from 'react-to-print'
// Contexts
import { SettingsContext } from '../../contexts/SettingsContext'
// Style
import styles from './style.module.css'

const Settings: FC = () => {
  const { displayCardComponentRef, settingsData, updateSettingsData } = useContext(SettingsContext)

  const updateSSID = (event: ChangeEvent<HTMLInputElement>) => {
    updateSettingsData({ ...settingsData, ssid: event.target.value })
  }

  const updatePassword = (event: ChangeEvent<HTMLInputElement>) => {
    updateSettingsData({ ...settingsData, password: event.target.value })
  }

  const updateHiddenSSID = (event: ChangeEvent<HTMLInputElement>) => {
    updateSettingsData({ ...settingsData, hiddenSSID: event.target.checked })
  }

  const updateAuthType = (event: ChangeEvent<HTMLInputElement>) => {
    updateSettingsData({ ...settingsData, authenticationType: event.target.value })
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputs_wrapper}>
        <div className={styles.input_wrapper}>
          <label htmlFor='ssid'>SSID:</label>
          <input type='text' id='ssid' value={settingsData.ssid} onChange={updateSSID} />
        </div>
        <div className={styles.input_wrapper}>
          <label htmlFor='password'>Password:</label>
          <input type='text' id='password' value={settingsData.password} onChange={updatePassword} />
        </div>
        <div className={`${styles.input_wrapper} ${styles.checkbox_input} ${styles.checkbox_input_wrapper}`}>
          <input id='hiddenSSID' type='checkbox' name='hiddenSSID' onChange={updateHiddenSSID} />
          <label htmlFor='hiddenSSID'>Hide SSID</label>
        </div>
        <div className={`${styles.input_wrapper} ${styles.radio_input_wrapper}`}>
          <span>Auth Type:</span>
          <div className={` ${styles.radio_input}`}>
            <input type='radio' id='auth_type_wep' name='auth_type' value='WEP' onChange={updateAuthType} />
            <label htmlFor='auth_type_wep'>WEP</label>
          </div>
          <div className={` ${styles.radio_input}`}>
            <input type='radio' id='auth_type_wpa' name='auth_type' value='WPA' onChange={updateAuthType} />
            <label htmlFor='auth_type_wpa'>WPA, WPA2 or WPA3</label>
          </div>
          <div className={` ${styles.radio_input}`}>
            <input type='radio' id='no_auth' name='auth_type' value='nopass' onChange={updateAuthType} />
            <label htmlFor='no_auth'>None</label>
          </div>
        </div>
      </div>

      <ReactToPrint trigger={() => <button>Print this out!</button>} content={() => displayCardComponentRef.current} />
    </div>
  )
}

export default Settings
