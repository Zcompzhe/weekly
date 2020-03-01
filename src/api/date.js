export const changeDate = date => {
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

//获得本周五到下周五
export const getThisWeekStart = weeklyStartTime => {
  //先求星期几
  var c = changeDate(weeklyStartTime);
  var b = new Date(Date.parse(c.replace(/\-/g, "/")));
  console.log("选择的日期是星期", b.getDay());
  let weeklyStartTime2;
  //如果星期大于等于5
  if (b.getDay() >= 5) {
    //第一步，将截止日期求出来

    weeklyStartTime2 = new Date(weeklyStartTime);
    weeklyStartTime2.setDate(weeklyStartTime2.getDate() - b.getDay() + 12);
    weeklyStartTime2 = changeDate(weeklyStartTime2);

    //第二步，将起始日期求出来

    weeklyStartTime.setDate(weeklyStartTime.getDate() - b.getDay() + 5);
    weeklyStartTime = changeDate(weeklyStartTime);
  } else {
    //第一步，将截止日期求出来

    weeklyStartTime2 = new Date(weeklyStartTime);
    weeklyStartTime2.setDate(weeklyStartTime2.getDate() - b.getDay() + 5);
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
