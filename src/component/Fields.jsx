import React, {useState} from 'react';
import PropTypes from 'prop-types';

import '../styles/Fields.css';

const Fields = ({ setDateTime }) => {

    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    const [loading, setLoading] = useState(false)

    const handleCountdown = () => {
        setLoading(true)
        const now = new Date()
        const dateTime = new Date(now.getFullYear(), now.getMonth(), days, hours, minutes, seconds)
        setDateTime(dateTime)
    }

    const handleReset = () => {
        setLoading(false)
        setDateTime(null)
    }

    return (
        <div className="fields">
            <div className="field">
                <label htmlFor="days">Jours</label>
                <input type="text" name="days" value={days} onChange={(e) => setDays(e.target.value)}/>
            </div>
            <div className="field">
                <label htmlFor="hours">Heures</label>
                <input type="text" name="hours" value={hours} onChange={(e) => setHours(e.target.value)}/>
            </div>
            <div className="field">
                <label htmlFor="minutes">Minutes</label>
                <input type="text" name="minutes" value={minutes} onChange={(e) => setMinutes(e.target.value)}/>
            </div>
            <div className="field">
                <label htmlFor="seconds">Secondes</label>
                <input type="text" name="seconds" value={seconds} onChange={(e) => setSeconds(e.target.value)}/>
            </div>
            <div className="field">
                <button className="btn-start" onClick={handleCountdown} disabled={loading}>Start</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
};

Fields.propTypes = {
    setDateTime: PropTypes.func.isRequired,
}

export default Fields;
