function setTime(time) {
  const d = new Date();
  let minutes = d.getMinutes();
  if (minutes < 10) minutes = '0' + minutes;
  time.text(d.getHours() + ":" + minutes);
  setTimeout(function() {
    setTime(time);
  }, 1000);
}

$(function() {
  setTime($("#time"))
});
