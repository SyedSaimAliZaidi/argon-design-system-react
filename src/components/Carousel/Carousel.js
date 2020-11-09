import React, { Component } from 'react';

const data = [
    {
        id: "1",
        avatorImg: "/img/avatar-1.png",
        reviewer: "John Doe",
        address: "Los Angeles, California",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam rem sunt nulla ducimus expedita, incidunt laborum assumenda. Deleniti iste placeat nostrum incidunt rem laudantium, sapiente, cum, molestias unde, quidem labore.",
        icon_1: "fas fa-star",
        icon_2: "fas fa-star",
        icon_3: "fas fa-star",
        icon_4: "fas fa-star",
        icon_5: "far fa-star"
    },
    {
        id: "2",
        avatorImg: "/img/avatar-2.png",
        reviewer: "Jassica William",
        address: "Los Angeles, California",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam rem sunt nulla ducimus expedita, incidunt laborum assumenda. Deleniti iste placeat nostrum incidunt rem laudantium, sapiente, cum, molestias unde, quidem labore.",
        icon_1: "fas fa-star",
        icon_2: "fas fa-star",
        icon_3: "fas fa-star",
        icon_4: "fas fa-star",
        icon_5: "fas fa-star"
    },
    {
        id: "3",
        avatorImg: "/img/avatar-3.png",
        reviewer: "Johnson Smith",
        address: "Los Angeles, California",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam rem sunt nulla ducimus expedita, incidunt laborum assumenda. Deleniti iste placeat nostrum incidunt rem laudantium, sapiente, cum, molestias unde, quidem labore.",
        icon_1: "fas fa-star",
        icon_2: "fas fa-star",
        icon_3: "fas fa-star",
        icon_4: "fas fa-star",
        icon_5: "far fa-star"
    }
]

class ReviewSection extends Component {
    render() {
        return (
                        <div className="carousel">
                        {/* Single Testimonial */}
                        {data.map((item, idx) => {
                            return(
                                <div key={`rt_${idx}`} className="carousel-item carousel-fade ">
                                    <img src={item.avatorImg} className="" alt="" />
                                </div>
                            );
                        })}
                        </div>
        );
    }
}

export default ReviewSection;