import React from "react";

export default function ServicesCard(props) {
    return (
        <div>
            <div className="services-card">
                <div className={"svg-icon " + props.colorStyle}>
                    {props.svg}
                    <i className={props.iconClass}></i>
                </div>
                <div>
                    <h4>{props.title}</h4>
                    <p>{props.desc}</p>
                </div>
            </div>
        </div>
    );
}
