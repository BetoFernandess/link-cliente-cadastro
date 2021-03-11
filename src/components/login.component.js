const React = require("react");
const Component = require("react").Component;
const LoginDataService = require("../services/login.service")

const M = require("materialize-css");


const Col = require("react-materialize").Col
const TextInput = require("react-materialize").TextInput;

export default class Login extends Component {
    
    constructor(props) {
        super(props);

        this.onChangeLogin = this.onChangeLogin.bind(this);
        this.onChangePass = this.onChangePass.bind(this);


        this.newLogin = this.newLogin.bind(this);

        //JSON vazio
        this.state =
        {
            login: "",
            pass: ""
        };
    }
    onChangeLogin(e) {
        this.setState
            (
                {
                    login: e.target.value
                }
            );
       
    }
    onChangePass(e) {

        this.setState
            (
                {
                    pass: e.target.value
                }
            )
           
    }
    newLogin() {
        var data = {
            login: this.state.login,
            pass: this.state.pass
        }
        LoginDataService.login(data).then(response => {

            console.log(response);
        }

        ).catch(err => {console.log(err)}

        );



    }
    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }
    render() {
       const card_login = <Col >
            <TextInput
                id="TextInput-1"
                label="Login"
                value={this.state.login}
                onChange={this.onChangeLogin}
            />
            <TextInput
                id="TextInput-1"
                label="Senha"
                value={this.state.pass}
                password
                onChange={this.onChangePass}
            /> 
        </Col>
        return card_login
    }
}