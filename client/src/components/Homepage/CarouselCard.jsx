import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function CarouselCard() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div className='carousel'>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel"
                        src="https://www.yit.edu.in/storage/files/kannada-sangama-2021/dsc_0242___sushanth__6QQa3_1637246350.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel"
                        src="https://www.yit.edu.in/storage/files/yen-splash-2018/splash4_1552971503.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel"
                        src="https://www.yit.edu.in/storage/files/yen-sambrama/dsc_0471_1637033589.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarouselCard