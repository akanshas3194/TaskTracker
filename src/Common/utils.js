import moment from 'moment';
export const dateFormatter = (formate, date = new Date()) => {
    date = new Date(date)
  return  moment(date).format(formate)
}

export const timerFunction=(startDate, endDate)=>{
  startDate =  moment(startDate).add(1 ,'h')
  var duration = moment.duration(endDate.diff(startDate));
   
    const formatedTime  =  [
      ('0' + duration.hours()).slice(-2),
      ('0' + duration.minutes()).slice(-2),
  ].join(':')
    return formatedTime;
}

export const splitTimer=(fullTime)=>{
  return [hours, minutes] = fullTime.split(':').map(Number);

}
 