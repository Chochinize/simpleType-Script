import React,{ useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

export  interface IState {
  people:{
    name:  string;
    age: number;
    url: string;
    note?: string;
  }[]
}
function App() {



const [people,setPeople] = useState<IState['people']>([
  {
    name: 'leborne',
    age: 35,
    url:'https://medmagbg.com/image/cache/catalog/producti/medicinski-instrumentarium/bbrekovidno-legenche-600x315w.jpg',
    note:' Some notes everywhere'
  }
])


  return (
    <div className="App">
      <h1>People invited to my Party</h1>
      <List people={people}  />
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
