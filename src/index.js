import './index.sass';

const React = require('react');
const ReactDOM = require('react-dom');


const App = require('./App').default;
const serviceWorker = require("./serviceWorker");
const BrowserRouter = require("react-router-dom").BrowserRouter;

const Row = require("react-materialize").Row;

ReactDOM.render(
  <Row>
    
    <BrowserRouter>
      <App />
      
    </BrowserRouter>
    
  </Row> 
  
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.unregister();

