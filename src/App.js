import {useState} from 'react';
import Item from './Components/Item';
import menu from './data';

function App() {
  //const [data, setData] = useState(menu);
  //setData([]);
  console.log(menu[0].img);

  return (
    <div className="App">
      <Item id={menu[0].id} title={menu[0].title} category={menu[0].category} price={menu[0].price} img={menu[0].img} desc={menu[0].desc} />
      <Item id={menu[1].id} title={menu[1].title} category={menu[1].category} price={menu[1].price} img={menu[1].img} desc={menu[1].desc} />
    </div>
  );
}

export default App;
