function setTime(time) {
  const d = new Date();
  let minutes = d.getMinutes();
  if (minutes < 10) minutes = '0' + minutes;
  let hours = d.getHours();
  if (hours < 10) hours = '0' + hours;
  time.text(hours + ":" + minutes);
  setTimeout(function() {
    setTime(time);
  }, 1000);
}

$(function() {
  setTime($("#time"))
});
