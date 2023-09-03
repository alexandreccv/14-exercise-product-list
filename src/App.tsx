import './App.css';
import ProductsList from './components/ProductsList';
import products from './data';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <ProductsList>
        {products.map((produc) => <Product key={ produc.id } productInfo={ produc } />)}
      </ProductsList>
    </div>
  );
}

export default App;
