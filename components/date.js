import { parseISO, format } from 'date-fns'

export default function Date({ dateString }) {
  const date = parseISO(dateString)
  const dateFormated = format(date, 'LLL dd, yyyy')
  return <time dateTime={dateString}>{dateFormated}</time>
}
