import {Route, Switch} from 'react-router-dom'
import Home from './Component/Home'
import AllProducts from './Component/AllProducts'
import ProductDetails from './Component/ProductDetails'
import Header from './Component/Header'
import NavBar from './Component/NavBar'
import NotFound from './Component/NotFound'

const App = () => (
  <>
    <NavBar />
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/all" component={AllProducts} />
      <Route exact path="/detail" component={ProductDetails} />
      <Route component={NotFound} />
    </Switch>
  </>
)
export default App
