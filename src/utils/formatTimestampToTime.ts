const formatTimestampToTime = (timestamp: Date) => {
  const date = new Date(timestamp);

  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const minutesStr = minutes < 10 ? "0" + minutes : minutes;

  const formattedTime = hours + ":" + minutesStr + " " + ampm;
  return formattedTime;
};

export default formatTimestampToTime;