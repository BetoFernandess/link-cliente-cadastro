import './index.sass';

const React = require('react');
const ReactDOM = require('react-dom');


const App = require('./App').default;
const Route = require("react-router-dom").Route;
const Switch = require("react-router-dom").Switch;
const serviceWorker = require("./serviceWorker");
const BrowserRouter = require("react-router-dom").BrowserRouter;

const Row = require("react-materialize").Row;
const Col = require("react-materialize").Col;

const Login = require("./components/login.component")
const Menu = require("./components/menu.component")
const Register = require("./components/register.component")

ReactDOM.render(
  <Row>
    <Col s={6} offset-s = {3} >
    <BrowserRouter>


      <App />

    </BrowserRouter>
    </Col>
    <Switch>
      <Route exact path={["/", "/login"]} component={Login} />
      <Route exact path="/menu" component={Menu} />
      <Route path="/register" component={Register} />
    </Switch>
  </Row> 
  
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.unregister();

