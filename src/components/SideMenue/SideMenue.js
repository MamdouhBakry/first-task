import React from 'react';
import environmentMinisitryImage from "../../assets/images/وكالة المياه.PNG";
import "./SideMenue.css";
import ManagementSetting from "../../assets/svg/manuals-management-settings-filled.svg";

function SideMenue() {
    return (
        <>
            <div className="side-menue-header">
                <img src={environmentMinisitryImage} alt="Environment Minintry Image" />
            </div>
            <div className="side-menue">
                <ul>
                    <li>
                        <a className="flex" href="#">
                            <i className="pi pi-home ml-3"></i>
                            <p>الرئيسية</p>
                        </a>
                        <span className="side-border"></span>
                    </li>
                    <li className="active">
                        <a className="flex" href="#">
                            <i style={{ color: "#fff" }} className="pi pi-bars ml-3"></i>
                            <p style={{ color: "#fff" }}>ادارة المشروعات</p>
                        </a>
                        <span className="side-border"></span>
                    </li>
                    <li>
                        <a className="flex" href="#">
                            <i className="pi pi-user ml-3"></i>
                            <p style={{ color: "#fff !important" }}>ادارة المستخدمين</p>
                        </a>
                        <span className="side-border"></span>
                    </li>
                    <li>
                        <a className="flex" href="#">
                            <img className="ml-3" src={ManagementSetting} alt="Managment Setting" />
                            <p>اعدادات النظام</p>
                        </a>
                        <span className="side-border"></span>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default SideMenue