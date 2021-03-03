import React from 'react'
import {Pie } from 'react-chartjs-2'
import {useHistory} from 'react-router-dom'
import './Project1.css'
function Project1() {
    const history=useHistory();

const nextProject=()=>{
    history.push('/project2')
}

const maleData={
 labels:['Mumbai','Patna','Kanpur'],
 datasets:[
     {
         label:'Population',
         data:[200,1800,1850],
         backgroundColor:['rgba(255,99,132,0.6)','rgba(54,162,235,0.6)','rgba(255,206,86,0.6)']

     }
 ]  

}
const femaleData={
    labels:['Mumbai','Patna','Kanpur'],
    datasets:[
        {
            label:'Population',
            data:[2200,1500,1700],
            backgroundColor:['rgba(255,99,132,0.6)','rgba(54,162,235,0.6)','rgba(255,206,86,0.6)']
   
        }
    ]  
   
   }
  
   const totalData={
       labels:['Mumbai','Patna','Kanpur'],
       datasets:[
           {
               label:'Population',
               data:[4400,3300,3550],
               backgroundColor:['rgba(255,99,132,0.6)','rgba(54,162,235,0.6)','rgba(255,206,86,0.6)']
      
           }
       ]  
      
      }
    
 


    return (
        <div className="project1">
            <div className="row">
            <div className="chart1">
         <Pie
         data={maleData}
         options={{
             title:{
                 display:true,
                 text:'Male population in these cities',
                 fontSize:25

             }
         }}
         />  
         </div> 

         <div className="chart2">
         <Pie
         data={femaleData}
         options={{
             title:{
                 display:true,
                 text:'Female population in these cities',
                 fontSize:25

             }
         }}
         /> 
         </div>
         </div>
         <div className="row">
         <div className="chart3">
         <Pie
         data={totalData}
         options={{
             title:{
                 display:true,
                 text:'Total population in these cities',
                 fontSize:25

             }
         }}
         /> 
         </div>
         </div>
         <div className="btn">
         <button onClick={()=>nextProject()} >Next assignment </button>
         </div>

        </div>
    )
}

export default Project1
