import { parseISO, format } from "date-fns";

export default function Date({ dateString }) {
  // const date = parseISO(dateString);
  // console.log(date);
  // const dateFormated = format(date, "LLLL dd, yyyy");
  return <time dateTime={dateString}>{dateString}</time>;
}
