import React, { useState, useCallback, useMemo } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

function App() {
  const [listTitle, setListTitle] = useState('My List');
  const [order, setOrder] = useState(false);

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  const changeSortOrder = useCallback(()=>{
    setOrder(prevState => !prevState);
  }, [])

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  let text = 'Sort to Descending Order';

  if (order) {
    text = 'Sort to Ascending Order'
  }

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} order={order}/>
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={changeSortOrder}>{text}</Button>
    </div>
  );
}

export default App;
