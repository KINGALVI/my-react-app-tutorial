import './App.css';

function App() {
  const products=[
    {name:'laptop',price:'14000'},
    {name:'phone',price:'24000'},
    {name:'watch',price:'34000'},
    {name:'tablet',price:'44000'},
  ]
  return (
    <div className="App">
      
      {/* steap-1 */}
      {
        products.map(product=> <Product name={product.name
        } price={product.price}></Product>)
      }

      {/* steap-2 */}
      {/* <Product name='laptop' price='393939'></Product>
      <Product name='phone' price='4999'></Product> */}
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