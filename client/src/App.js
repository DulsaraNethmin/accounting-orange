import ReactDOM from 'react-dom';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import Home from './routs/Home';
import Cashsl from './routs/Cashsl';
import Login from './routs/Login';
import Creditsl from './routs/Creditsl';
import Cashpr from './routs/Cashpr';
import Salesre from './routs/Salesre';
import Purchasere from './routs/Purchasere';
import Creditpr from './routs/Creditpr';
import Register from './routs/Register';
import Dashboard from './routs/Dashboard';
import Analysis from './routs/Analysis';


//hello


const App = () => {

return(
    <div>
        
        <Router>
            <Route exact path='/'><Home/></Route>

            <Route  path='/login'><Login/></Route>

            <Route  path='/dash.board'><Dashboard/></Route>
            
            <Route path='/register'><Register/></Route>
    
            <Route path='/cash.sale'><Cashsl/></Route>
        
            <Route path='/credit.sale'><Creditsl/></Route>
   
            <Route path='/cash.purchase'><Cashpr/></Route>

            <Route path='/sales.return'><Salesre/></Route>

            <Route path='/purchase.return'><Purchasere/></Route>
 
            <Route path='/credit.purchase'><Creditpr/></Route>

            <Route path='/analysis'><Analysis/></Route>
        </Router>

    </div>
)

}

export default App;