const dayOfTheWeekEl = document.getElementById("dayoftheweek");
const currentTime = document.getElementById("currenttime");
const daysOfTheWeekArr = ["Sunday","Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"]


  function DateInfo(){  
    let dayIndex= new Date().getDay()
    dayOfTheWeekEl.innerText = daysOfTheWeekArr[dayIndex]
    const currentUTCInMilliseconds = new Date().getTime();
    currentTime.innerText = currentUTCInMilliseconds
}
setInterval(DateInfo,1000)