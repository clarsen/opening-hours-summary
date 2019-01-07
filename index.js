var sprintf = require('sprintf-js').sprintf

function hourToHHMM (hour) {
  let min = hour - Math.round(hour)
  if (min > 0) {
    return sprintf('%02d:%02d', Math.round(hour), min)
  } else {
    return sprintf('%02d', hour)
  }
}

function dayIntvToStr (days, start, end) {
  if (end > start) {
    return `${days[start]}-${days[end]}`
  } else {
    return days[start]
  }
}
module.exports.earliest = function (hours) {
  var days = ['M', 'Tu', 'W', 'Th', 'F', 'Sa', 'Su']
  var earliest = 24

  for (var i = 0; i < days.length; i++) {
    if (`${days[i]}(o)` in hours) {
      let open = hours[`${days[i]}(o)`]
      if (open === 0) {
        open = 24
      }
      if (open < earliest) {
        earliest = open
      }
    }
  }
  return earliest
}

module.exports.summarize = function (hours) {
  var days = ['M', 'Tu', 'W', 'Th', 'F', 'Sa', 'Su']

  var daysForInterval = {}

  for (var i = 0; i < days.length; i++) {
    if (`${days[i]}(o)` in hours) {
      let open = hourToHHMM(hours[`${days[i]}(o)`])
      let close = hourToHHMM(hours[`${days[i]}(c)`])
      let intv = `${open}-${close}`
      if (intv in daysForInterval) {
        daysForInterval[intv].push(i)
      } else {
        daysForInterval[intv] = [i]
      }
    }
  }

  // coalesce same intervals
  var compacted = []
  for (var intv in daysForInterval) {
    let dayidxes = daysForInterval[intv]
    let start = dayidxes[0]
    let end = dayidxes[0]
    var dayintvs = []
    for (var j = 1; j < dayidxes.length; j++) {
      if (dayidxes[j] === end + 1) {
        // keep extending
        end = dayidxes[j]
      } else {
        // emit interval and restart
        dayintvs.push(dayIntvToStr(days, start, end))
        start = end = dayidxes[j]
      }
    }
    // emit last interval
    dayintvs.push(dayIntvToStr(days, start, end))
    compacted.push(`${dayintvs} ${intv}`)
  }
  return compacted
}
