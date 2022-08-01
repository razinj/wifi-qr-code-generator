// React
import { FC, ChangeEvent, useContext } from 'react'
// React to Print
import { useReactToPrint } from 'react-to-print'
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

  const updateHidePassword = (event: ChangeEvent<HTMLInputElement>) => {
    updateSettingsData({ ...settingsData, hidePasswordInCard: event.target.checked })
  }

  const handlePrint = useReactToPrint({
    content: () => displayCardComponentRef.current,
    documentTitle: `${settingsData.ssid} - WiFi QR Code`,
    removeAfterPrint: true,
    copyStyles: true,
    bodyClass: 'print_content',
    pageStyle: `
    .print_content {
      width: 600px;
      margin: 10px;
    }
    `,
  })

  return (
    <div className={styles.wrapper}>
      <div className={styles.section_wrapper}>
        <span>Basic Info</span>
        <div className={`${styles.input_wrapper} ${styles.text_input_wrapper}`}>
          <label htmlFor='ssid'>
            SSID<span className={styles.required}>*</span>
          </label>
          <input type='text' id='ssid' value={settingsData.ssid} onChange={updateSSID} />
        </div>
        <div className={`${styles.input_wrapper} ${styles.text_input_wrapper}`}>
          <label htmlFor='password'>Password</label>
          <input type='text' id='password' value={settingsData.password} onChange={updatePassword} />
        </div>
      </div>

      <div className={styles.section_wrapper}>
        <span>Configuration</span>
        <div className={styles.input_wrapper}>
          <input id='hiddenSSID' type='checkbox' name='hiddenSSID' onChange={updateHiddenSSID} />
          <label htmlFor='hiddenSSID'>Hidden SSID</label>
        </div>
        <div className={styles.input_wrapper}>
          <input
            id='hidePassword'
            type='checkbox'
            name='hidePassword'
            onChange={updateHidePassword}
            value={`${settingsData.hidePasswordInCard}`}
          />
          <label htmlFor='hidePassword'>Hide password in card</label>
        </div>
      </div>

      <div className={styles.section_wrapper}>
        <span>
          Authentication Type<span className={styles.required}>*</span>
        </span>
        <div className={styles.radio_input}>
          <input type='radio' id='auth_type_wep' name='auth_type' value='WEP' onChange={updateAuthType} />
          <label htmlFor='auth_type_wep'>WEP</label>
        </div>
        <div className={styles.radio_input}>
          <input type='radio' id='auth_type_wpa' name='auth_type' value='WPA' onChange={updateAuthType} />
          <label htmlFor='auth_type_wpa'>WPA, WPA2 or WPA3</label>
        </div>
        <div className={styles.radio_input}>
          <input type='radio' id='no_auth' name='auth_type' value='nopass' onChange={updateAuthType} />
          <label htmlFor='no_auth'>None</label>
        </div>
      </div>

      <div className={styles.button_wrapper}>
        <button
          onClick={handlePrint}
          className={styles.print_button}
          disabled={settingsData.ssid === '' || settingsData.authenticationType === ''}
        >
          print
        </button>
      </div>
    </div>
  )
}

export default Settings
