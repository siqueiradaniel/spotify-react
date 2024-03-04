import React from "react";
import HeaderNavigation from "../HeaderNavigation/HeaderNavigation";
import MainContent from "../MainContent/MainContent";
import './MainContainer.css'

const MainContainer = () => {
    return (
        <div className="main__container">
            <HeaderNavigation />
            <MainContent />
        </div>
    )
}

export default MainContainer;