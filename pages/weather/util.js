
const formatTime = date => {
  const hour = date.getHours();
  const minute = date.getMinutes();
  return hour + ":" + minute
}
module.exports = {
  formatTime: formatTime
}