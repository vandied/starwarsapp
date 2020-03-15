import React from "react";
import './PersonDetails.css';

const PersonDetails = () => {
    return (
        <div className="person">
            <div className="personImg">
                <img/>
            </div>
            <div className="personDetails">
            <h4>R2-D2</h4>
                <ul className="detailsList">
                    <li className="detailsListItem">Gender <span>male</span></li>
                    <li className="detailsListItem">Birth <span>Year43</span></li>
                    <li className="detailsListItem">Eye Color <span>red</span></li>
                </ul>
            </div>
        </div>
    )
};
export default PersonDetails;
