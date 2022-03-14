// Rendering Lists
// http://localhost:3000/isolated/exercise/07.js

import * as React from 'react'

const allItems = [
  {id: 'apple', value: '🍎 apple'},
  {id: 'orange', value: '🍊 orange'},
  {id: 'grape', value: '🍇 grape'},
  {id: 'pear', value: '🍐 pear'},
]

function App() {
  const [items, setItems] = React.useState(allItems)

  function addItem() {
    const itemIds = items.map(i => i.id)
    setItems([...items, allItems.find(i => !itemIds.includes(i.id))])
  }

  function removeItem(item) {
    setItems(items.filter(i => i.id !== item.id))
  }

  return (
    <div className="keys">
      <button disabled={items.length >= allItems.length} onClick={addItem}>
        add item
      </button>
      <ul style={{listStyle: 'none', paddingLeft: 0}}>
        {items.map(item => (
          // 🐨 add a key prop to the <li> below. Set it to item.id
          <li key={item.id}>
            <button onClick={() => removeItem(item)}>remove</button>{' '}
            <label htmlFor={`${item.id}-input`}>{item.value}</label>{' '}
            <input id={`${item.id}-input`} defaultValue={item.value} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App

//If we add,change,remove some elements of array,so react doesnt hav any idea what causes
//the particular change in JSX you're returning all it knows the JSX is changed so it does its best to 
//update the dom based on changes you've provided but the default value or the value of elements will not be kept
//up to date by react even if we provide the new default value for this.so sometimes it guesses right but it might be
//wrong sometimes. 
//So we add a key prop so react will know if we have remove change or add any item in array since it track the element over time

//provide a unique key,but dont provide the random generating a key since it needs to be consistent for the react element that is 
//representing the particular item. so having the id is preferable since it is unique for each of these items.but if you dont have it then
//maybe generate the id for items before rendering them or you could use something else about the item that is unique. but don't 
//try to use the index of item for key,since it will display the default behaviour i.e, inconsistent as before.