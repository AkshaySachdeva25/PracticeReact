//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
import React, { useState } from "react";
import Convert from "./Convert";
import Dropdown from "./Dropdown";


const Translate = () => {

    const options = [
        {
            label: 'Afrikaans',
            value: 'af'
        },
        {
            label: 'Arabic',
            value: 'ar'
        },
        {
            label: 'Hindi',
            value: 'hi'
        }
    ]

    const [language, setLanguage] = useState(options[0])
    const [text,setText] = useState('')
    return (
    <div><br></br>
        <div className="ui form">
            <div className="field">
                <label className="text">Enter Text</label>
                <input value={text} onChange={(e) => setText(e.target.value)} />
            </div>
        </div><br></br>
        <Dropdown selected={language} onSelectedChange={setLanguage} options={options} label={"Select a language"}/>
        <hr></hr>
        <h3 className="ui header"> Outpout</h3> 
        <Convert text={text} language={language}/>
    </div>)
}

export default Translate;