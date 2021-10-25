import React from 'react';
import Logo from "./img/Logo.png";

export default function logo(){
    return(
        <div className="pr-3">
            <img src={Logo} width="100" height="45" alt="Logo BRV"/>
        </div>
    );
}