//useEffect so it loads as soon as page loads
import React, { useState } from 'react';
//import back.png from '../back.png'
//import back from '../back.png' ;
import search from '../search.png'
import { Link } from 'react-router-dom';


function Wsb() {
  //1
  const [userinput, setUserinput] = useState();
  const [doginfo, setDoginfo] = useState();
  //4-repeat
  const [buttonpress,setButtonpress]=useState();
  const [data,setData]=useState([]);
  const grabdata = () => {
    fetch(
      `https://financialmodelingprep.com/api/v3/quote-short/${userinput}?apikey=a803146ea78e99da2239e79eaf613acf`
    )
      .then((response) => response.json())
      //.then(response => console.log(response))
      //. for objects and [] for arrays
      .then((response) => setDoginfo(response[0]))
      .catch((err) => console.error(err));
  }; //3-repeat
  const checkifchange = (e) => {
    setUserinput(e.target.value);
  };
 console.log(data);
  return (
    //2-repeat
    //you have to use . on line 27 becuase its an array of objects and you're fetching the individual objects inside
    //doginfo&& means if doginfo=doginfo then display ....{...}
    //props is only if you display onto a different component
<div className="bright">
<ul className="menu">
        <Link to="Homepage">
          <li>Home</li>
        </Link>
        <Link to="Basics">
          <li>Basics</li>
          </Link>
        <Link to="Wsb">
          <li>WSB</li>
        </Link>
      </ul>
    <div className="container">
    <div className="search-bar">
      <div className="button">
        <input type="text" placeholder="Search Ticker" onChange={checkifchange} />
        <button className="buttonid" onClick={grabdata} ><img src={search}></img></button>
      </div>
      </div>
    
   
   <div className="card">
        {doginfo && <h1 className="ticker">Ticker: {doginfo.symbol} </h1>}
        {doginfo && <h1>Price: {doginfo.price} </h1>}
        {doginfo && <h1>Volume: {doginfo.volume} </h1>}
        <div className="tickercard">{userinput==="TSLA"?<h1>{userinput} sucks</h1>:null}</div>
   </div>
    </div>

</div>

  );
  
}
export default Wsb;
