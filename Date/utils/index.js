export const MINIMUM_DATE = "1880-01-01"

/**
 * Convert date to required string format
 * @param date date value.
 * @param format format to be converted to.
 * @returns return [ DD/MM/YYYY or YYYY-MM-DD ]
 */
export const dateToString = (date, format = "-") => {
  let month = ("0" + (date.getMonth() + 1)).slice(-2)
  let day = ("0" + date.getDate()).slice(-2)
  return format === "-"
    ? [date.getFullYear(), month, day].join("-")
    : [month, day, date.getFullYear()].join("/")
}

/**
 * Validate DD/MM/YYYY or YYYY-MM-DD date format
 * @param dateStr date string value.
 * @param format current format to be validated.
 * @returns return converted date string.
 */
export const validateDate = (dateStr, format = "/") => {
  if (!dateStr) return null
  const date = dateStr.split(format)
  return !isNaN(+date[0]) && !isNaN(+date[1]) && !isNaN(+date[2])
}

/**
 * Change date format from MM/DD/YYYY to YYYY-MM-DD
 * @param dateStr date string value
 * @returns return converted date string
 */
export const changeToDateFormat = (dateStr) => {
  if (!dateStr) return null
  const date = dateStr.split("/")
  return [date[2], date[0], date[1]].join("-")
}

/**
 * Change date format from YYYY-MM-DD to MM/DD/YYYY
 * @param dateStr date string value
 * @returns return converted date string (MM/DD/YYYY)
 */
export const changeToMaskedFormat = (dateStr) => {
  if (!dateStr) return null
  const date = dateStr.split("-")
  return [date[1], date[2], date[0]].join("/")
}

/**
 * Get the maximum date based on the minimum age required
 * @param minAge required minimum age
 * @returns max date
 */
export const getMaxDate = (minAge) => {
  let nYearAgo = new Date()
  nYearAgo.setTime(nYearAgo.valueOf() - minAge * 365 * 24 * 60 * 60 * 1000)
  return nYearAgo
}

export const isLower = (curr, maxDateStr) => {
  const maxDate = new Date(maxDateStr)
  const currDate = new Date(curr)
  return currDate.getTime() <= maxDate.getTime() ? true : false
}

/**
 * Get range array with arithmetic progression
 * @param start Start point of range
 * @param stop end point of range
 * @param step range step
 * @returns array
 */
export const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step)
