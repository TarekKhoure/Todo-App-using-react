import React from 'react';
import './App.css';
import TodoItems from './component/todoItems/todoItems';
import AddItems from './component/addItem/addItem';

function App() {
  
  const items_array =[
    {id:1, name:"Tarek", age:23},
    {id:2, name:"Hamza", age:22},
    {id:3, name:"Ali"  , age:50}
  ]

  const [items, setItems] = React.useState(items_array)

  const deleteItem = (id) =>{
    // let listItems =[...items]
    // let i = listItems.findIndex(item => item.id === id)
    // listItems.splice(i,1) // to delete just one item
    // setItems(listItems)

    let itemsList = items.filter(item =>{
      return item.id !== id // when id = id then it return true so then filter method removes item from the list
    })
    setItems(itemsList)
  }

  const addItem = (item) =>{
    item.id = Math.random()
    let itemsList = [...items]
    itemsList.push(item)
    setItems(itemsList)
  }


  return (
    <div className="App container">
      <h1 style={{textAlign:"center"}}>Todo App</h1>
      <TodoItems items={items} deleteItem={deleteItem}/>
      <AddItems addItem={addItem}/>
    </div>
  );
}

export default App;
