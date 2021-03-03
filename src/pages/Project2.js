import React,{useEffect} from 'react'
import Values from '../dataFiles/data.json'
import {Bar } from 'react-chartjs-2'
import{useHistory} from 'react-router-dom'
import './Project2.css'
function Project2() {
    const history=useHistory();

    const xlabels=[];
    const ylabels=[];


    const data={
        labels:xlabels,
        datasets:[
            {
                label:'Letters',
                data:ylabels,
                backgroundColor:['rgba(255,99,132,0.6)','rgba(54,162,235,0.6)','rgba(255,206,86,0.6)','rgba(75,192,192,0.6)','rgba(153,102,255,0.6)','rgba(255,99,132,0.6)','rgba(255,159,64,0.6)','rgba(255,99,132,0.6)','rgba(54,162,235,0.6)','rgba(255,206,86,0.6)','rgba(75,192,192,0.6)','rgba(153,102,255,0.6)','rgba(255,99,132,0.6)','rgba(255,159,64,0.6)','rgba(255,99,132,0.6)','rgba(54,162,235,0.6)','rgba(255,206,86,0.6)','rgba(75,192,192,0.6)','rgba(153,102,255,0.6)','rgba(255,99,132,0.6)','rgba(255,159,64,0.6)','rgba(255,99,132,0.6)','rgba(54,162,235,0.6)','rgba(255,99,132,0.6)','rgba(54,162,235,0.6)']
       
            }
        ]  
       
       }
     
  
     


    return (
        <div className="project2">
        {  Values.map((value)=>{
        xlabels.push(value.Letter);
})}
{  Values.map((value)=>{
        ylabels.push(value.Freq);
})}
     
            <Bar
         data={data}
         options={{
             title:{
                 display:true,
                 text:'Frequency of Alphabets',
                 fontSize:40
                

             },
             legend:{
                 display:true,
                 position:'right',
             }
         }}
         />  
         <div className="turn">
             <div>
            <button onClick={()=>{history.push('/project1')}}>Previous Assignment</button>
            </div>
            <div>
         <button onClick={()=>{history.push('/project3')}} >Next Assignment</button>
         </div>
         </div>
        </div>
    )
}

export default Project2
