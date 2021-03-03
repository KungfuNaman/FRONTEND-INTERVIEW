import React,{useState,useEffect} from 'react'
import './Project3.css'
import axios from '../axios'
import {Bar} from 'react-chartjs-2'
import {useHistory} from 'react-router-dom'
function Project3() {
const history=useHistory();

const [list,setList]=useState([]);

useEffect(() => {
    const sync = async () => {
        await axios.get("/retrieve/values").then((res) => {
          console.log(res.data);
          setList(res.data);
        });
      };
    sync();
}, [])   
const xlabels=[];
const ylabels=[];
const data={
    labels:xlabels,
    datasets:[
        {
            label:'Customers',
            data:ylabels,
            backgroundColor:['rgba(255,99,132,0.6)','rgba(54,162,235,0.6)','rgba(255,206,86,0.6)','rgba(75,192,192,0.6)','rgba(153,102,255,0.6)','rgba(255,99,132,0.6)','rgba(255,159,64,0.6)','rgba(255,99,132,0.6)','rgba(54,162,235,0.6)','rgba(255,206,86,0.6)','rgba(75,192,192,0.6)','rgba(153,102,255,0.6)','rgba(255,99,132,0.6)','rgba(255,159,64,0.6)','rgba(255,99,132,0.6)','rgba(54,162,235,0.6)','rgba(255,206,86,0.6)','rgba(75,192,192,0.6)','rgba(153,102,255,0.6)','rgba(255,99,132,0.6)','rgba(255,159,64,0.6)','rgba(255,99,132,0.6)','rgba(54,162,235,0.6)','rgba(255,99,132,0.6)','rgba(54,162,235,0.6)','rgba(255,99,132,0.6)','rgba(255,159,64,0.6)','rgba(255,99,132,0.6)']
   
        }
    ]  
   
   }
 
  
    return (


          
        <div className="project3">
            {  list.map((value)=>{
        xlabels.push(value.name);
})}
{  list.map((value)=>{
        ylabels.push(value.sales);
})}
{console.log(xlabels,ylabels)}
        
        
        
<Bar
         data={data}
         options={{
             title:{
                 display:true,
                 text:'SALES VS CUSTOMERS',
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
            <button onClick={()=>{history.push('/project2')}}>Previous Assignment</button>
            </div>
            
         </div>
        
        
        
        
        
        
        
        
        </div>
    )
}

export default Project3
