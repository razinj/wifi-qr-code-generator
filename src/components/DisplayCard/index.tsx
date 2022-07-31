// React
import { useContext, useEffect, useRef, useState } from 'react'
// QRCode
import { QRCodeCanvas } from 'qrcode.react'
// Contexts
import { SettingsContext } from '../../contexts/SettingsContext'
// Style
import styles from './style.module.css'

const DisplayCard = () => {
  const { settingsData, updateDisplayCardComponentRef } = useContext(SettingsContext)
  const [value, setValue] = useState<string>('')

  const localComponentRef = useRef(null)

  useEffect(() => {
    const localValue = `WIFI:T:${settingsData.authenticationType};S:${settingsData.ssid};P:${settingsData.password};H:${settingsData.hiddenSSID}`
    setValue(localValue.concat(';;'))
    console.log('QR code value: ', localValue.concat(';;'))
  }, [settingsData])

  useEffect(() => {
    if (localComponentRef) updateDisplayCardComponentRef(localComponentRef)
  }, [localComponentRef, updateDisplayCardComponentRef])

  return (
    <div ref={localComponentRef} className={styles.wrapper}>
      <div className={styles.top_section_wrapper}>
        <div className={styles.qr_code_wrapper}>
          <QRCodeCanvas value={value} />
        </div>
        <div className={styles.info_wrapper}>
          {settingsData.ssid.trim() !== '' && (
            <>
              <span>
                <span className={styles.info_title}>WiFi</span>&nbsp;<span>{settingsData.ssid}</span>
              </span>
              <span>
                <span className={styles.info_title}>Password</span>&nbsp;<span>{settingsData.password}</span>
              </span>
            </>
          )}
          {settingsData.ssid.trim() === '' && <span>Please fill in the form above!</span>}
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
