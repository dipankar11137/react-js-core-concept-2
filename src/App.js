import logo from './logo.svg';
import './App.css';

function App() {

  const products = [
    { name: 'Laptop', Price: 45000 },
    { name: 'Phone', Price: 75000 },
    { name: 'Watch', Price: 3000 },
    { name: 'Tablet', Price: 25000 },
  ]
  return (
    <div className="App">
      {
        products.map(product => <Product name={product.name} price={product.Price}></Product>)
      }


      {/* <Product name="Laptop" price="60000"></Product>
      <Product name="Phone" price="80000"></Product>
      <Product name="Watch" price="3500"></Product> */}
    </div>
  );
}

function Product(props) {
  return (
    <div className="product">
      <h2>Name : {props.name}</h2>
      <h5>Price : {props.price}</h5>
    </div>
  )
}
export default App;




// upor ar mal clean ar janno aii jaiga raklam