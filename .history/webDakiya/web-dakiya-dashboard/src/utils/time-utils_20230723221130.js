const leftPad = (a) => (a < 10 ? `0${  a}` : a.toString());

exports.formatDate = (time, withTime) => {
    const monthArray = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const dateInt =
      typeof time === 'number' ? time : Math.floor(new Date(time).getTime());
    const date = leftPad(new Date(dateInt).getDate());
    const month = monthArray[new Date(dateInt).getMonth()];
    const year = new Date(dateInt).getFullYear();
  
    let formattedDate = `${date}-${month}-${year}`;
    if (withTime) {
      const hour = leftPad(new Date(dateInt).getHours());
      const minutes = leftPad(new Date(dateInt).getMinutes());
      formattedDate = `${formattedDate}, ${hour}:${minutes}`;
    }
    return formattedDate;
  };
  