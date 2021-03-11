import 'materialize-css/dist/css/materialize.min.css'

const  Component  = require("react").Component;
const Card = require("react-materialize").Card;
const CardTitle = require("react-materialize").CardTitle

const Route = require("react-router-dom").Route;
const Switch = require("react-router-dom").Switch;



const Login = require("./components/login.component")
const Menu = require("./components/menu.component")
const Register = require("./components/register.component")


const logo = require("./images/logotipo_link.png")

class App extends Component {

  
  render() {
    
    const card_imagem_link =
                             
                                <Card 
                                 header= 
                                 {
                                      <CardTitle image={logo.default}  className="red darker-3" />
                                      
                                      
                                 } 
                                 
                                 
                                 > Cadastro
                               </Card>

    const router =       <Switch>
                                  <Route exact path={["/", "/login"]} component={Login} />
                                  <Route exact path="/menu" component={Menu} />
                                  <Route path="/register" component={Register} />
                                </Switch>
                            
    return card_imagem_link+router ;
  }
}

export default App;

