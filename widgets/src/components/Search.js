import React, { useEffect, useState } from "react";
import Axios from "axios";

const Search = () => {
    const [term, setTerm] = useState('Programming');
    const [results, setResults] = useState([])
    useEffect(() => {
        const search = async () => {
            const { data } =  await Axios.get("https://en.wikipedia.org/w/api.php", {
                 params:{
                     action: 'query',
                     list: 'search',
                     origin: '*',
                     format: 'json',
                     srsearch: term
                 }
             })
             setResults(data.query.search)
         };

         if(term && !results.length){
             search();
         }else{
            const timeoutId = setTimeout(() => {
                if(term){
                    search();   
                }
        }, 500);
       

        return() => {
            clearTimeout(timeoutId);
        }
         }
    },[term,results.length]);

    const renderedResult = results.map((result)=>{
        return <div key={result.pageid} className="item">
            <div className="right floated content">
                <a href={`https://en.wikipedia.org?curid=${result.pageid}`} className="ui primary button">Go</a>
            </div>
            <div className="content">
                <div className="header">
                    {result.title}
                </div>
                <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
            </div>
        </div>
    });
    
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input className="input" 
                        type="text" 
                        value={term} 
                        onChange={(e) => setTerm(e.target.value)} 
                    />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResult}
            </div>
        </div>
    )
}

export default Search;


/**
 * UseEffect Older Practice
 * 
 * const search = async () => {
           const { data } =  await Axios.get("https://en.wikipedia.org/w/api.php", {
                params:{
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            })
            setResults(data.query.search)
        };
        
        const timeoutId = setTimeout(() => {
                if(term){
                    search();   
                }
        }, 500);
 */