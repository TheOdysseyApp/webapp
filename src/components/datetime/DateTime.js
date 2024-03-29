import DateTimePicker from "react-datetime-picker";
import './DateTime.css'
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

export const DateTime = ({onChange, value, label}) => {
    return (
        <div className='date-time'>
            <p>{label}</p>
            <DateTimePicker onChange={onChange} value={value} disableClock={true} minDetail='year' clearIcon={null}/>
        </div>
    )
}