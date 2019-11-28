import React from 'react';
import "./Input.scss";

function Input(props) {
    return (
        <div className="Input">
            <div className="Input--title">
                {props.title}
            </div>
                {
                    props.type === "text" && <input required={props.required} className="Input--body Input--body__text" type={props.type} value={props.value} onChange={e => props.onHandleChange(e.target.value)} />
                }
                {
                    props.type === "password" && <input required={props.required} className="Input--body Input--body__password" type={props.type} value={props.value} onChange={e => props.onHandleChange(e.target.value)} />
                }
                {
                    props.type === "email" && <input required={props.required} className="Input--body Input--body__email" type={props.type} value={props.value} onChange={e => props.onHandleChange(e.target.value)} />
                }
            <div className="Input--footer">
                {props.error && <p className="Input--footer__error">{props.error}</p>}
            </div>
        </div>
    );
}

export default Input;