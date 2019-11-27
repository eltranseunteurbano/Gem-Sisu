import React, { useState } from 'react';
import './Login.scss';
import { signIn } from '../../services/firebaseService';
import Input from '../../components/Input/Input';
import img1 from '../../assets/images/1.jpg';
import * as Routes from '../../constants/Routes';
import { useHistory } from 'react-router-dom';


const Login = props => {

    const [email, setEmail] = useState("");
    const [errorEmail, setErrorEmail] = useState(null);
    const [password, setPassword] = useState("");

    let history = useHistory();

    const onHandleSubmit = async (e) => {
        setErrorEmail(null);
        e.preventDefault();
        try {
            await signIn(email, password);
            history.push(Routes.HOME);
        } catch (error) {
            setErrorEmail("Correo y/o contraseña incorrectos.");
        }
    };

    return (
        <div className="main">
            <div className="fondo">
                <img src={img1} alt="" className="img" />
            </div>
            <div className="login" >
                <p>Login</p>
                <form onSubmit={onHandleSubmit}>
                    <Input title="Email" value={email} onHandleChange={setEmail} type={"email"} error={errorEmail} />
                    <Input title="Password" value={password} onHandleChange={setPassword} type={"password"} />
                    <input type="submit" value="Log In" />
                </form>
                <p>You don't have an account yet! <a href={Routes.REGISTER}>Sign up</a></p>
            </div>
        </div>
    );
};

export default Login;