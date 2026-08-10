/** +7 (999) 999-99-99 — маска собирается из цифр, всё лишнее отбрасывается. */
export function formatPhone(raw: string): string {
  let digits = raw.replace(/\D/g, '')
  if (digits.startsWith('8')) digits = `7${digits.slice(1)}`
  if (!digits.startsWith('7')) digits = `7${digits}`
  digits = digits.slice(0, 11)

  const rest = digits.slice(1)
  let out = '+7'
  if (rest.length > 0) out += ` (${rest.slice(0, 3)}`
  if (rest.length >= 3) out += ') '
  if (rest.length > 3) out += rest.slice(3, 6)
  if (rest.length > 6) out += `-${rest.slice(6, 8)}`
  if (rest.length > 8) out += `-${rest.slice(8, 10)}`
  return out
}

/** В российском номере 11 цифр вместе с семёркой. */
export function isPhoneComplete(value: string): boolean {
  return value.replace(/\D/g, '').length === 11
}

export const PHONE_ERROR = 'Номер введён не полностью. Нужно 10 цифр после +7.'
export const CONSENT_ERROR = 'Без согласия на обработку данных мы не сможем вам ответить.'
