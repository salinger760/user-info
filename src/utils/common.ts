export const isNonNullable = <T>(value: T): value is NonNullable<T> => {
  if (value === null || value === void 0) return false
  return true
}

// date_job: formatDate(e, 'yyyy-MM-dd HH:mm:ss'),
export const formatDate = (date: Date, format: string) => {
  format = format.replace(/yyyy/g, String(date.getFullYear()))
  format = format.replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2))
  format = format.replace(/dd/g, ('0' + date.getDate()).slice(-2))
  format = format.replace(/HH/g, ('0' + date.getHours()).slice(-2))
  format = format.replace(/mm/g, ('0' + date.getMinutes()).slice(-2))
  format = format.replace(/ss/g, ('0' + date.getSeconds()).slice(-2))
  //format = format.replace(/SSS/g, ('00' + date.getMilliseconds()).slice(-3))
  return format
}
