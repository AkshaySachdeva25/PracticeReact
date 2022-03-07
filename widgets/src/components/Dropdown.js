import React, { useEffect, useRef, useState } from "react";

const Dropdown = ({options,selected,onSelectedChange,label}) => {

    const [open, setOpen] = useState(false)
    const ref = useRef();
    


    useEffect(() => {
        document.body.addEventListener('click',(event) => {
            if(ref.current.contains(event.target)){
                return;
            }else{
                setOpen(false);
            }
            
        })
    },[])

    const renderedOptions = options.map((option) => {
        if(option.value === selected.value) return null;
        return (
            <div className="item" key={option.value}
            onClick={() => onSelectedChange(option)}>
                {option.label}
            </div>
        );
    })

    return (
        <div className="ui form" ref={ref}>
            <div className="field">
                <label className="label">{label}</label>
                <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ?'visible active': ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown;