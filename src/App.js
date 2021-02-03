import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { useDispatch } from 'react-redux';
import './App.css';
import { getElement } from './js/actions';

function App() {
  const dispatch = useDispatch();
  const [donnée , setDonnée] = useState([
    {
      visits: "10",
      actions: "12",
      visitors: "15",
      visitsConverted: "0",
    },
    {
      visits: "9",
      actions: "5",
      visitors: "10",
      visitsConverted: "0",
    },
    {
      visits: "15",
      actions: "6",
      visitors: "17",
      visitsConverted: "0",
    },
    {
      visits: "20",
      actions: "16",
      visitors: "18",
      visitsConverted: "0",
    },
    {
      visits: "30",
      actions: "25",
      visitors: "29",
      visitsConverted: "0",
    },
    {
      visits: "35",
      actions: "20",
      visitors: "26",
      visitsConverted: "0",
    },
    {
      visits: "33",
      actions: "22",
      visitors: "30",
      visitsConverted: "0",
    },
    {
      visits: "45",
      actions: "41",
      visitors: "40",
      visitsConverted: "0",
    },
    {
      visits: "18",
      actions: "18",
      visitors: "15",
      visitsConverted: "0",
    },
    {
      visits: "14",
      actions: "13",
      visitors: "14",
      visitsConverted: "0",
    },
    {
      visits: "32",
      actions: "33",
      visitors: "30",
      visitsConverted: "0",
    },
    {
      visits: "38",
      actions: "20",
      visitors: "34",
      visitsConverted: "0",
    },
    {
      visits: "50",
      actions: "40",
      visitors: "46",
      visitsConverted: "0",
    },
    {
      visits: "60",
      actions: "50",
      visitors: "26",
      visitsConverted: "0",
    },
    {
      visits: "48",
      actions: "14",
      visitors: "35",
      visitsConverted: "0",
    }
  ])
  const state = {
    labels: donnée.map(el=> Number(el.visitors)),
    datasets: [
      {
        label: 'visitors',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: donnée.map(el=> Number(el.visitors)),
      }
    ]
  }
  console.log("state" , state.datasets[0].data);
  const upData = (e) => {
    e.preventDefault();
    dispatch(getElement());
    // setDonnée({...donnée , })
  };
  useEffect(()=>{
    // setTimeout(,90000 )
    dispatch(getElement());
  }, [])

  return (
    <div className="App">
    <div> <span>Active Users In Real Time </span> </div>
    <div style={{width:'800px' , height:'1500px', margin:'100px auto'}}>
    <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }} 
        />
    </div>
    </div>
  );
}

export default App;
