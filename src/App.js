import './App.css';

function App() {
  return (
    <div className="App">
      <Product name='laptop'></Product>
      <Product name='phone' price='4999'></Product>
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

export default App;