const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}


const parseParams = function (param) {
  let paramStr = "";
  for (let key in param) {
    paramStr += "&" + key + "=" + param[key];
  }
  return paramStr.substr(1);
}


module.exports = {
  formatTime: formatTime,
  qs: parseParams
}
