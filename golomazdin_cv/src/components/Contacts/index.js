import React from "react";

import Type from "../Type";
import "./index.scss";

const Contacts = ({ display }) => {
    return (
        <section
            id="contacts"
            className={`main__section main__section--contacts ${display ? "main__section--display" : ""}`}
        >
            <div className="flex-wrapper">
                <h1 className="heading">Контакты</h1>

                <span className="centered">
                    <b>Email:</b>{" "}
                    <a className="link" href="mailto:golomash@gmail.com">
                        golomash@gmail.com
                    </a>
                </span>
            </div>
        </section>
    );
};

export default Contacts;
