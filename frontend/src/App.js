import "./App.css";
import axios from "axios";
import cloud from './constant/Image/cloud.png'
import air from './constant/Image/air.png'
import cloudSun from './constant/Image/cloudSun.png'
import Visibility from './constant/Image/Visibility.png'
import Haze from './constant/Image/Haze.png'
import smoke from './constant/Image/smoke.png'
import rain from './constant/Image/rain.png'
import Sun from './constant/Image/Sun.png'
import windSpeed from './constant/Image/windSpeed.png'
import { IoSearch } from "react-icons/io5";
import { useState } from "react";



function App() {




  let [data,setData] = useState('')
  let [inputData,setinputData] = useState('')
  let handleSearch=async()=>{
    let data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputData}&appid=3ebf3515e639c7f877f0ab2272475533`)
        setData(data)  
  }
    // console.log(data.data.name
    //   )

  
    console.log(data.data)
    // console.log(data.data?.weather[0].description)
  



  return (
    <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100vw",
      height: "100vh",
    }}
  >
    <div className="container">
      <div style={{ display: "flex", gap: "1rem" }}>
        <input placeholder="City name" value={inputData} onChange={(e)=>setinputData(e.target.value)} type="text" style={{borderRadius:'2%',border: 'none',outline:'none',paddingLeft:'5px',paddingRight:'5px',fontSize:'20px',paddingTop:'2px',paddingBottom:'2px'}} />
        <div style={{ position: "relative" }}>
          <div
            style={{
              backgroundColor: "cadetblue",
              width: "1.7rem",
              height: "1.7rem",
              borderRadius:'50%',
            }}
          ></div>
          <IoSearch
            style={{
              color: "white",
              position: "absolute",
              fontSize: "1.2rem",
              right:4,
              top:4,cursor:'pointer'
            }}
            onClick={handleSearch}
          />
        </div>
      </div>
      <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
      {/* <div>{data.data?.weather[0]?.description}</div> */}
      <div style={{fontSize:'25px', color:'gray',marginTop:'2px',fontWeight:'bold'}}>{data.data.name}</div>
      <div style={{fontSize:'20px',marginTop:'2px',fontWeight:'bold'}}>{data?.data?.weather[0]?.main}</div>
        {/* <img src={cloud} style={{width:'150px',height:'150px'}}/>
        <img src={air} style={{width:'100px',height:'100px'}}/>
        <img src={cloudSun} style={{width:'100px',height:'100px'}}/> */}
        {data.data?.weather[0].main && data.data?.weather[0].main == 'Haze' && 
        <img src={Haze} style={{width:'100px',height:'100px'}}/>
        }

        {data.data?.weather[0].main && data.data?.weather[0].main == 'Clear' && <img src={Sun} style={{width:'100px',height:'100px'}}/>}


        {data.data?.weather[0].main && data.data?.weather[0].main == 'Smoke' && <img src={smoke} style={{width:'150px',height:'150px', borderRadius:'50%'}}/>}

      </div>
      {data?.data?.wind.speed && <div style={{display:'flex',justifyContent:'space-around',alignItems:'center'}}>

            <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            <img src={windSpeed} style={{width:'4.2rem'}}/>
            <div>{data?.data?.wind.speed} km/h</div>
            </div>


            <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            <img src={Visibility} style={{width:'3.7rem'}}/>
            <div>{data?.data.visibility} meters</div>
            </div>
      </div>}
    </div>
  </div>
  );
}

export default App;
