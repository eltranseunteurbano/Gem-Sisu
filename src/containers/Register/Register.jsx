import React, { useState } from 'react';
import "./Register.scss";
import * as Routes from '../../constants/Routes';
import img2 from '../../assets/images/2.jpg';
import { useHistory } from 'react-router-dom';
import Input from '../../components/Input/Input';
import { createUser, signIn } from '../../services/firebaseService';

const Register = (props) => {

    const [username, setUsername] = useState("");
    const [errorUsername, setErrorUsername] = useState(null);

    const [email, setEmail] = useState("");
    const [errorEmail, setErrorEmail] = useState(null);

    const [password, setPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState(null);

    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorConfirmPassword, setErrorConfirmPassword] = useState(null);

    let history = useHistory();

    const onHandleSubmit = async (e) => {
        e.preventDefault();
        resetErrors();
        if (password !== confirmPassword) {
            setErrorPassword("Las contraseñas deben coincidir.");
            setErrorConfirmPassword("Las contraseñas deben coincidir.");
        } else {
            try {
                const userCreated = await createUser(username, email, password);
                const currentUser = await signIn(email, password);
                
                history.push(Routes.HOME);
            } catch (error) {
                setErrorEmail("El correo ya se encuentra registrado.");
            }
        }
    };

    const resetErrors = () => {
        setErrorUsername(null);
        setErrorEmail(null);
        setErrorPassword(null);
        setErrorConfirmPassword(null);
    };

    return (
        <div className="main">
            <div className="login" >
                <p>Register</p>
                <form onSubmit={onHandleSubmit}>
                    <Input title="Username" value={username} onHandleChange={setUsername} type={"text"} error={errorUsername} required={true} />
                    <Input title="Email" value={email} onHandleChange={setEmail} type={"email"} error={errorEmail} required={true} />
                    <Input title="Password" value={password} onHandleChange={setPassword} type={"password"} error={errorPassword} required={true} />
                    <Input title="Confirm Password" value={confirmPassword} onHandleChange={setConfirmPassword} type={"password"} error={errorConfirmPassword} required={true} />
                    <input className="btn" type="submit" value="Sign Up" />
                </form>
                <p className="letter">Do you already have an account?<a href={Routes.LOGIN}> Log In</a></p>
            </div>
            <div className="fondo">
                <img src={img2} alt="" className="img" />
            </div>
        </div>
    );
};

export default Register;