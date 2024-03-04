import React from "react";
import './HeaderNavigation.css';
import smallLeft from '../../assets/icons/small-left.png';
import smallRight from '../../assets/icons/small-right.png';
import searchImg from '../../assets/icons/search.png'

const HeaderNavigation = () => {
    return (
        <nav className="header__navigation">
            <div className="navigation">
                <button className="arrow-left">
                    <img src={smallLeft} alt="Arrow left" />
                </button>
                <button className="arrow-left">
                    <img src={smallRight} alt="Arrow right" />
                </button>
            </div>
                
            <div className="header__search">
                <img src={searchImg} alt="" />
                <input id="input-search" type="text" maxlength="800" placeholder="O que você quer ouvir?" />
            </div>  
            
            <div className="header__login">
                <button type="button" className="subscribe">Inscreva-se</button>
                <button type="button" className="login">Entrar</button>
            </div>
        </nav>
    )
}

export default HeaderNavigation;