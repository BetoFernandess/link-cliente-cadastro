const React = require("react");
const Component = require("react").Component;
const LoginDataService = require("../services/login.service")

const Card = require("react-materialize").Card
const TextInput = require("react-materialize").TextInput;

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.onChangeLogin.bind(this);
        this.onChangePass.bind(this);


        this.newLogin.bind(this);

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
    render() {
       const card_login = <Card>
            <TextInput
                id="TextInput-1"
                label="Login"
            />
            <TextInput
                id="TextInput-1"
                label="Senha"
                password
            />
        </Card>
        return card_login
    }
}