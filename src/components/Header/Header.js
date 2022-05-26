import React from 'react'
import "./Header.css"
import cardHeaderImg from "../../assets/svg/card-header-menu.svg";
import myImage from "../../assets/images/myImage.jpeg";
function Header() {
    return (
        <div className="header">
            <div className="right-side">
                <div className="header-title">
                    <img src={cardHeaderImg} alt="card header image" />
                    <h2>برمجة ادراة الوثائق</h2>
                </div>
                <span className="breadcrumb">
                    <span>وزارة البيئة والمياه والزراعة</span>
                    <span className="flex mr-5">
                        <i className="pi pi-chevron-circle-left ml-1 mt-1"></i>
                        <span>الرئيسية</span>
                    </span>
                </span>
            </div>
            <div className="left-side">
                <i className="pi pi-bell bell"></i>
                <div className="user">
                    <img className="img-circle" style={{ width: "50xp", height: "50px" }} src={myImage} alt="personal image" />
                    <h3>ممدوح محمود</h3>
                    <div className="arrow"></div>
                </div>
            </div>
        </div>
    )
}

export default Header