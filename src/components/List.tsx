 import React from "react";
 import { IState as IProps } from './Interfaces'

 


 const List: React.FC<IProps> = ({people})=>{
     const renderList = ():JSX.Element[]=>{
         return people.map((person,i)=>{
            return (
                <li className="List" key={i}>
                <div className="List-header">
                    <img src={person.url} alt="" />
                    <h2>{person.name}</h2>
                </div>
                <p>{person.age}</p>
                <p>{person.note}</p>
             </li>
            )
         })
     }
     return (
         <ul>
           {renderList()}
         </ul>
     )
 }
 export default List