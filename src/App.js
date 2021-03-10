import 'materialize-css/dist/css/materialize.min.css'

const  Component  = require("react").Component;
const Card = require("react-materialize").Card;
const CardTitle = require("react-materialize").CardTitle


const logo = require("./images/logotipo_link.png")
class App extends Component {

  
  render() {
    
    const card_imagem_link =
                             
                                <Card 
                                 header= 
                                 {
                                      <CardTitle image={logo.default}  className="red darker-3"/>
                                      
                                      
                                 } 
                                 
                                 
                                 > Cadastro </Card>
                             
                            
    return card_imagem_link;
  }
}

export default App;

