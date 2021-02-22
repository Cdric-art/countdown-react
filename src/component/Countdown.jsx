import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import Bloc from "./Bloc";

import '../styles/Countdown.css';

const Countdown = ({dataTime}) => {
    /**
     * Nombre de secondes dans une minute, une heure et une journée
     * @type {number}
     */
    const MINUTE = 60
    const HOUR = 60 * MINUTE
    const DAY = 24 * HOUR

    /**
     * Date définie en props en seconde
     * @type {number}
     */
    const launchDate = Date.parse(dataTime) / 1000

    const [days, setDays] = useState(null)
    const [hours, setHours] = useState(null)
    const [minutes, setMinutes] = useState(null)
    const [seconds, setSecondes] = useState(null)
    const [end, setEnd] = useState(false)

    const refreshCountdown = (difference) => {
        setDays(Math.floor(difference / DAY))
        setHours(Math.floor(difference % DAY / HOUR))
        setMinutes(Math.floor(difference % HOUR / MINUTE))
        setSecondes(Math.floor(difference % MINUTE))
    }

    useEffect(() => {
        const interval = window.setInterval(() => {
            window.requestAnimationFrame(() => {
                const difference = launchDate - Date.now() / 1000
                if (difference < 1) {
                    setEnd(true)
                    return clearInterval(interval)
                }
                refreshCountdown(difference)
            })
        }, 1000)

        return () => clearInterval(interval)

    }, [dataTime])

    return (
        <div className="container">
            <div className="content">
                {end ? (
                    <h2>End</h2>
                ) : (
                    <>
                        <h2>Coming soon !</h2>
                        <div className="timer">
                            <div className="bloc">
                                <Bloc time={days} type="Jours"/>
                            </div>
                            <div className="bloc">
                                <Bloc time={hours} type="Heures"/>
                            </div>
                            <div className="bloc">
                                <Bloc time={minutes} type="Minutes"/>
                            </div>
                            <div className="bloc">
                                <Bloc time={seconds} type="Secondes"/>
                            </div>
                        </div>
                    </>
                )
                }
            </div>
        </div>
    );
};

Countdown.propTypes = {
    dataTime: PropTypes.instanceOf(Date).isRequired,
}

export default Countdown;
