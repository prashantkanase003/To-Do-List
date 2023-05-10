import './App.css';
import { React, useState } from 'react'
import List from './List';


function App() {

  const [currentItem, setCurrentItem] = useState('')
  const [itemList, updateItemList] = useState([]) 

  const onchangeHandler =(e) =>{
    console.log("current value", e.target.value)
    setCurrentItem(e.target.value)
  };
  const addItemToList = () =>{
    updateItemList([...itemList, {item : currentItem, key: Date.now()}])
    setCurrentItem("")
  }


  return (
    <div className="App">
      <header className='App-header'>
      <h1>TO-DO LIST</h1>
        <div className='wrapper'>
          <div className='input-wrapper'>
            <input value={currentItem} onChange={onchangeHandler}/>
            <button onClick={addItemToList}>+</button>
          </div>
          <List itemList={itemList} updateItemList={updateItemList} />
        </div>
     </header>
    </div>
  );
}

export default App;
