// React
import { useContext, useEffect, useRef, useState } from 'react'
// QRCode
import { QRCodeCanvas } from 'qrcode.react'
// Contexts
import { SettingsContext } from '../../contexts/SettingsContext'
// Utils
import { escapeChars } from '../../utils/string'
// Style
import styles from './style.module.css'

const DisplayCard = () => {
  const localComponentRef = useRef(null)
  const [value, setValue] = useState<string>('')
  const { settingsData, updateDisplayCardComponentRef } = useContext(SettingsContext)

  useEffect(() => {
    const { ssid, password, authenticationType, hiddenSSID } = settingsData

    const escapedSSID = escapeChars(ssid)
    const escapedPassword = escapeChars(password)

    setValue(`WIFI:T:${authenticationType};S:${escapedSSID};P:${escapedPassword};H:${hiddenSSID};;`)
  }, [settingsData])

  useEffect(() => {
    if (localComponentRef) updateDisplayCardComponentRef(localComponentRef)
  }, [localComponentRef, updateDisplayCardComponentRef])

  return (
    <div ref={localComponentRef} className={styles.wrapper}>
      <div className={styles.top_section_wrapper}>
        <div className={styles.qr_code_wrapper}>
          <QRCodeCanvas value={value} fgColor={'#393d47'} />
        </div>
        <div className={styles.info_wrapper}>
          {settingsData.ssid === '' && <span className={styles.no_data_msg}>Please fill in the form above!</span>}
          {settingsData.ssid !== '' && (
            <>
              <span>
                <span className={styles.info_title}>WiFi</span>&nbsp;<span>{settingsData.ssid}</span>
              </span>
              {!settingsData.hidePasswordInCard && settingsData.password !== '' && (
                <span>
                  <span className={styles.info_title}>Password</span>&nbsp;<span>{settingsData.password}</span>
                </span>
              )}
            </>
          )}
        </div>
      </div>
      <hr />
      <div className={styles.bottom_section_wrapper}>
        <span className={styles.bottom_hint_text}>Scan to connect</span>
      </div>
    </div>
  )
}

export default DisplayCard
