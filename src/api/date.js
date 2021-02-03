export const changeDate = date => {
  console.log(date)
  date = new Date(date);
  if (!date) {
    return undefined;
  } else {
    // var date = new Date(date);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? "0" + m : m;
    var d = date.getDate();
    d = d < 10 ? "0" + d : d;
    return y + "-" + m + "-" + d;
  }
};
export const changeDateToSecond = date => {
  if (!date) {
    return undefined;
  } else {
    // var date = new Date(date);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? "0" + m : m;
    var d = date.getDate();
    d = d < 10 ? "0" + d : d;
    return y + "-" + m + "-" + d + " 00:00:00";
  }
};

export const changeDateToSecond2 = date => {
  if (!date) {
    return undefined;
  } else {
    // var date = new Date(date);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? "0" + m : m;
    var d = date.getDate();
    d = d < 10 ? "0" + d : d;

    var h = date.getHours();
    h = h < 10 ? "0" + h : h;
    var mm = date.getMinutes();
    mm = mm < 10 ? "0" + mm : mm;
    var s = date.getSeconds();
    s = s < 10 ? "0" + s : s;
    return y + "-" + m + "-" + d + " " + h + ":" + mm + ":" + s;
  }
};

//获得本周五到下周日
export const getThisWeekStart = weeklyStartTime => {
  weeklyStartTime = new Date(weeklyStartTime);
  //先求星期几
  var c = changeDate(weeklyStartTime);
  var b = new Date(Date.parse(c.replace(/\-/g, "/")));
  let weeklyStartTime2;
  //如果星期大于等于5
  if (b.getDay() >= 5) {
    //第一步，将截止日期求出来

    weeklyStartTime2 = new Date(weeklyStartTime);
    weeklyStartTime2.setDate(weeklyStartTime2.getDate() - b.getDay() + 15);
    weeklyStartTime2 = changeDate(weeklyStartTime2);

    //第二步，将起始日期求出来

    weeklyStartTime.setDate(weeklyStartTime.getDate() - b.getDay() + 5);
    weeklyStartTime = changeDate(weeklyStartTime);
  } else {
    //第一步，将截止日期求出来

    weeklyStartTime2 = new Date(weeklyStartTime);
    weeklyStartTime2.setDate(weeklyStartTime2.getDate() - b.getDay() + 8);
    weeklyStartTime2 = changeDate(weeklyStartTime2);

    //第二步，将起始日期求出来

    weeklyStartTime.setDate(weeklyStartTime.getDate() - b.getDay() - 2);
    weeklyStartTime = changeDate(weeklyStartTime);
  }
  return weeklyStartTime2;
};
//获得本周一到下周一
export const getThisWeekStartTwo = weeklyStartTime => {
  //先求星期几
  var c = changeDate(weeklyStartTime);
  var b = new Date(Date.parse(c.replace(/\-/g, "/")));
  console.log("选择的日期是星期", b.getDay());
  let weeklyStartTime2;
  //第一步，将截止日期求出来
  weeklyStartTime2 = new Date(weeklyStartTime);
  console.log(weeklyStartTime2.getDate());
  if (b.getDay() > 0) {
    weeklyStartTime2.setDate(weeklyStartTime2.getDate() - b.getDay() + 7);
    weeklyStartTime2 = changeDate(weeklyStartTime2);

    //第二步，将起始日期求出来

    weeklyStartTime.setDate(weeklyStartTime.getDate() - b.getDay() + 1);
    weeklyStartTime = changeDate(weeklyStartTime);
  } else {
    weeklyStartTime2.setDate(weeklyStartTime2.getDate() - b.getDay());
    weeklyStartTime2 = changeDate(weeklyStartTime2);

    //第二步，将起始日期求出来

    weeklyStartTime.setDate(weeklyStartTime.getDate() - b.getDay() -6);
    weeklyStartTime = changeDate(weeklyStartTime);
  }

  return weeklyStartTime2;
};


// 日期加减 
export const addDate = (date,days) => { 
  var d=new Date(date); 
  d.setDate(d.getDate()+days); 
  var m=d.getMonth()+1; 
  return d.getFullYear()+'-'+m+'-'+d.getDate(); 
} 

// 获得上一个周五
export const getLastFriday = (date) => { 
  var d=new Date(date); 
  var c = changeDate(d);
  var b = new Date(Date.parse(c.replace(/\-/g, "/")));
  let returnDate = new Date();
  console.log("星期:",b.getDay())
  if(b.getDay() == 0)
  {
    returnDate = addDate(d,-9);
  }else{
    returnDate = addDate(d,-b.getDay()-2);
  }
  return returnDate;
} 