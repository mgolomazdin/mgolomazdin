import React from "react";
import { Carousel } from "react-responsive-carousel";

import "./index.scss";

const Certificates = ({ display }) => {
    return (
        <section
            id="certificates"
            className={`main__section main__section--certificates ${display ? "main__section--display" : ""}`}
        >
            <h1 className="heading">Сертификаты</h1>
            <div className="certificates__carousel-wrapper">
                <Carousel
                    autoPlay={true}
                    dynamicHeight={true}
                    emulateTouch={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    showStatus={false}
                >
                    <div className="certificates__yandex"></div>
                    <div className="certificates__bankex"></div>
                </Carousel>
            </div>
        </section>
    );
};

export default Certificates;
