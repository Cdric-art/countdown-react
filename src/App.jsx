import React, {useState} from 'react'

import Fields from "./component/Fields";
import Countdown from "./component/Countdown";

import logo from './logo.svg'
import './styles/App.css'


function App() {

    const [dateTime, setDateTime] = useState(null)

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1>Countdown</h1>
                <Fields setDateTime={setDateTime}/>
            </header>
            <main>
                {dateTime && <Countdown dataTime={dateTime}/>}
            </main>
        </div>
    )
}

export default App
