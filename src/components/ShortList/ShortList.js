import React, { Component } from 'react'
import ShortListColums from './ShortListColums';
import Empty from './Empty';
import {DetailConsumer} from '../../Context';
import Slist from './Slist';

class ShortList extends Component {
    render() {
        return (
            <section>
                <DetailConsumer>
                
               {value=>{
                
                   const {shortlist} = value;
                   if(shortlist.length>0){
                       return (
                           <React.Fragment>
                        <ShortListColums/>
                        <Slist value={value}/>
                        </React.Fragment>
                        
                       )
                   }
                   else{
                       return <Empty/>
                   }
              
               }}
               
                </DetailConsumer>
                
                
            </section>
        )
    }
}

export default ShortList;
