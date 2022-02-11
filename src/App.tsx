import React,{ useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { Box } from './components/context/Box';
import { IState, IData } from './components/Interfaces';
function App() {



const [people,setPeople] = useState<IState['people']>([
  {
    name: 'leborne',
    age: 35,
    url:'https://medmagbg.com/image/cache/catalog/producti/medicinski-instrumentarium/bbrekovidno-legenche-600x315w.jpg',
    note:' Some notes everywhere'
  }
])
const [data,setData] = useState<IData['data']>([

  {
    iD:35,
    city: 'Milano'
  }
])


  return (
    <div className="App">
      <h1>People invited to my Party</h1>
      <List people={people}  />
      <AddToList people={people} setPeople={setPeople} data={data} />
      <ThemeContextProvider>
        <Box/>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
