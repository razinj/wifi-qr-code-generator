import { escapeChars } from './string'

describe('String Utils', () => {
  it('should escape illegal characters supplied', () => {
    const result = escapeChars('A value with characters to be escaped - , ; : " \\', [',', ':', ';', '"', '\\'])

    expect(result).toBe('A value with characters to be escaped - \\, \\; \\: \\" \\\\')
  })
})
