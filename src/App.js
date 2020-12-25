import './App.css';
import { Route } from 'react-router';
import ProductLoopContainer from './components/ProductsLoop/ProductLoopContainer';
import ProductItemContainer from './components/ProductItem/ProductItemContainer';

function App() {
  return (
    <div className="App">
      <div className="container">
        <main className="mainContent">
          <Route exact path="/" render={() => <ProductLoopContainer />} />
          <Route exact path="/catalog/:prodictId?" render={() => <ProductItemContainer />} />
        </main>
      </div>      
    </div>
  );
}

export default App;
