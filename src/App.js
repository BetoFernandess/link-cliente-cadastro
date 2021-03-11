import 'materialize-css/dist/css/materialize.min.css'

const Component = require("react").Component;
const Img = require("react-image").Img
const Col = require("react-materialize").Col;

const Route = require("react-router-dom").Route;
const Switch = require("react-router-dom").Switch;



const Login = require("./components/login.component").default
const Menu = require("./components/menu.component").default
const Register = require("./components/register.component").default


const logo = require("./images/logotipo_link.png")

class App extends Component {


  render() {

    const card_imagem_link =
      <Col s={6} offset-s={3} >
        <Img src={logo.default} unloader={"Link Informática"} />
        <Switch>
          <Route exact path={["/", "/login"]} component={Login} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/register" component={Register} />
        </Switch>

      </Col>

    return card_imagem_link;
  }
}

export default App;

