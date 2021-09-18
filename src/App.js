import {useState, useEffect} from 'react';
import Item from './Components/Item';
import menu from './data';

    function capitalize(string) {
      let strings = string.split(' ');
      let fixedString = "";
        for(let i = 0; i < strings.length; i++){
          let cap = strings[i][0].toUpperCase();
          let newString = strings[i].substring(1, string.length);
          newString = cap + newString
          if(i === 0) {
            fixedString = fixedString + newString;
          } else {
            fixedString = fixedString + " " + newString;
          }
        }
        console.log(fixedString);
        return fixedString;
    }

function App() {
  const [data, setData] = useState([...menu]);

  const filterData = (category) => {
        setData([...menu]);
        setData([...menu].filter((item) => item.category === category));
  }

  useEffect(()=>{
    setData([...menu]);
  }, []);

  console.log(data);

  return (
    <div className="App">
      <h1 id="centered">Our Menu</h1>
      <hr id="centered" />
      <div className="navDiv">
        <nav>
          <a href={"#" + undefined} onClick={()=>{setData([...menu])}} className="list">All</a>
          <a href={"#" + undefined} onClick={()=>{filterData('breakfast')}} className="list">Breakfast</a>
          <a href={"#" + undefined} onClick={()=>{filterData('lunch')}} className="list">Lunch</a>
          <a href={"#" + undefined} onClick={()=>{filterData('shakes')}} className="list">Shakes</a>
        </nav>
      </div>
      <div className="grid">
      {data.map((item) => {
        return <Item key={item.id} title={capitalize(item.title)} category={item.category} price={item.price} img={item.img} desc={item.desc} />
      })}
      </div>
    </div>
  );
}

export default App;
