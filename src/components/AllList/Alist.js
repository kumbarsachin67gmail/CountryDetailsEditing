import React from 'react';
import Aitem from './Aitem';
import AllListColumns from './AllListColumns'

export default function Alist({value}) {
    const { filteredDetails } = value;
    return (
      <div className="App contr">
           
        <div class="input-icons">
       
          <input
            type="text"
            placeholder="Search by City, State, District    "
            className="boxWid"
            onChange={(e) => {
              value.setSearch(e.target.value);
            }}
          />
        </div>
        <AllListColumns/>
          {filteredDetails.map((item) => {
              return <Aitem key={item.id} item={item} value={value} />;
          })}
      </div>
    );
    
}