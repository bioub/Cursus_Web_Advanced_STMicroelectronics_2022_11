import { Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";
import Search from "./pages/Search";
import Menu from "./ui/Menu";

function App() {
  return (
    <div className="App">
      <Menu />
      <main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/products/:productId" component={ProductDetails} />
          <Route path="/products" component={Products} />
          <Route path="/search" component={Search} />
          <Route path="*" component={NotFound} />
        </Switch>
      </main>

    </div>
  );
}

export default App;
