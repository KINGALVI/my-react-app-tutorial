import { useState } from 'react';
import './App.css';

function App() {
  const products = [
    { name: 'laptop', price: '14000' },
    { name: 'phone', price: '24000' },
    { name: 'watch', price: '34000' },
    { name: 'tablet', price: '44000' },
  ]
  return (
    <div className="App">

      {/* steap-1 */}
      {
        products.map(product => <Product name={product.name
        } price={product.price}></Product>)
      }

      {/* steap-2 */}
      {/* <Product name='laptop' price='393939'></Product>
      <Product name='phone' price='4999'></Product> */}

      {/* how to add a plush button in react */}
      <Counter></Counter>
    </div>
  );
}

function Product(props) {
  return (
    <div className='product'>
      <h3>Name : {props.name}</h3>
      <p>Price: {props.price}</p>
    </div>

  );
}

// how to add a plush and minush button in react
function Counter() {
  const [count, setCount] = useState(0);
  const increaseCount = () =>
    setCount(count+1);

  const decreaseCount=()=>setCount(count-1)
  
  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={increaseCount}>increase</button>
      <button onClick={decreaseCount}>decrease</button>
    </div>
  )
}

export default App;