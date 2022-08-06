export const escapeChars = (value: string, charsToEscape: string[] = [',', ':', ';', '"', '\\']): string => {
  let escapedValue = ''

  Array.from(value).forEach((valueChar: string) => {
    if (charsToEscape.includes(valueChar)) escapedValue += `\\${valueChar}`
    else escapedValue += valueChar
  })

  return escapedValue
}
