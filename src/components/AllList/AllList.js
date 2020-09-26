import React, { Component } from 'react'
import Empty from './Empty';
import {DetailConsumer} from '../../Context';
import Alist from './Alist';
// import Search from './Search';

class AllList extends Component {
    render() {
        return (
            <section>
                <DetailConsumer>
                
               {value=>{
                
                   const {detail} = value;
                   
                   if(detail.length>0){
                       return (
                           <React.Fragment>
                               {/* <Search value={value}/>      */}
                       
                        <Alist value={value}/>
                        </React.Fragment>
                        
                       )
                   }
                   else{
                       return (
                       <React.Fragment>
                       
                           <Empty/>
                       </React.Fragment>
                       )
                   }
              
               }}
               
                </DetailConsumer>
                
                
            </section>
        )
    }
}

export default AllList;
