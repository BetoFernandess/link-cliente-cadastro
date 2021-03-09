 const React = require("react");
 const  Component  = require("react").Component;
 const LoginDataService = require("../services/login.service")

 const Row = require('react-materialize').Row;
const Col = require('react-materialize').Col; 

export default class Login extends Component 
{
    constructor(props)
    {
        super(props);

        this.onChangeLogin.bind(this);
        this.onChangePass.bind(this);

        
        this.newLogin.bind(this);

        //JSON vazio
        this.state = 
        {
            login:"",
            pass:""
        };
    }
    onChangeLogin(e)
    {
        this.setState
        (
            {
                login:e.target.value
            }
        );
    }
    onChangePass(e)
    {
        
        this.setState
        (
            {
                pass:e.target.value
            }
        )
    }
    newLogin()
    {
        var data = {
            login:this.state.login,
            pass:this.state.pass
        }
        LoginDataService.login(data).then(response => {

            console.log(response);
        }

        ).catch(

        );



    }
}