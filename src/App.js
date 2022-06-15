import React from 'react';
import './App.css';
import Anime from './Anime.js';
import data from "./data.js";
import Header from "./Header"
 

function App() {
  const [Data,setData] = React.useState(JSON.parse(localStorage.getItem("your-progres")) || 
  data) 

   React.useEffect(() => {
     localStorage.setItem("your-progres", JSON.stringify(Data))
 }, [Data])

  const [newInfo,setNewInfo] = React.useState({
    id: "4",
    title: "",
    status: "Probably finished",
    jutsu: "https://youtu.be/dQw4w9WgXcQ",
    startDate: "when it's started",
    endDate: "when it's ended",
    description: "",
    imageUrl: "https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec",
    number: 69,
    currently: 0,
    
})
 
  function Plus(id) {
    setData(item => {
        return item.map(item => {
            return item.id === id ? item.number > item.currently ?{...item, currently: item.currently++}:item: item
        })
    })
}
function Minus(id) {
    setData(item => {
        return item.map(item => {
            return item.id === id ? item.currently > 0 ?{...item, currently: item.currently -1}:item : item
        })
    })
}
function handleChange(event) {
    const {name, value, type, checked} = event.target
    setNewInfo(prevFormData => {
        return {
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }
    })
}

  const body = Data.map(item =>  {
    return(
        <Anime 
        key={item.id}
        {...item}
        Plus={Plus}
        Minus={Minus}
      
        />
    )
})

 return(
     <div className="app">
         <Header/>
         <h2>So about website, if you reach the last episode you'll be able to rate the anime and progres will stop growing. Also website stores your progres in your local storage so it wont refresh every time you visit my website. Website was made with React and everything is data driven, every anime made by reusable component and NOT hardcoded   </h2>
         {body}
     </div>
 )
}

export default App;
