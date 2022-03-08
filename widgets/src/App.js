import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Header from "./components/Header";
import Route from "./components/Route";
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
            <Header />
            <Route path="/">
                <Accordion items={items}/>
            </Route>
            <Route path="/search">
                <Search />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
            <Route path="/dropdown">
                <Dropdown label="Select a color" options={options} selected={selected} onSelectedChange={setSelected}/>
            </Route>
        </div>
    )
}

export default App;