import React from 'react';
import Sitem from './Sitem';

export default function Slist({value}) {
    const {shortlist} = value;
        return (
            <div>
               
                {shortlist.map((item)=>{
                    return <Sitem key={item.id} item={item} value={value}/>
                })}
                
            </div>
        )
    
}

