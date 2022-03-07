import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";
import Translate from "./components/Translate";

const items = [
    {
        title : 'What is React ? ',
        content: 'React is a frontend javascript frontend'
    },
    {
        title : 'Why use React ? ',
        content: 'React is a favorite JS frontend javascript frontend'
    },
    {
        title : 'How do you use React ? ',
        content: 'You use react by creating comonents'
    }
]

const options = [
    {
        label: 'The Color red',
        value: 'Red'
    },
    {
        label: 'The Color Green',
        value: 'Green'
    },
    {
        label: 'The Color Blue',
        value: 'Blue'
    }
]



const App = () =>{

    const [selected, setSelected] = useState(options[0])
    return (
        <div>
            {/* <Dropdown selected={selected} onSelectedChange={setSelected} options = {options} /> */}
            <Translate/>
        </div>
    )
}

export default App;