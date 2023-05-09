export default function AvailableTimes(props) {
  const availableTimes = props.data.map((time) => {
    return <option key={time}>{time}</option>;
  });
  return availableTimes;
}
