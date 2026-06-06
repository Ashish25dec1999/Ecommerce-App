import React, { useEffect, useState } from 'react'


import { Link } from 'react-router-dom';
export default function Category(props) {
    let options = {
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        nav: true,
        navText: ["<button class='btn btn-primary slider-btn' id='slider-btn1'><i class='fa fa-arrow-left'></button>", "<button class='slider-btn btn btn-primary' id='slider-btn2'><i class='fa fa-arrow-right'></button>"],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            1200: {
                items: 4
            },
            4000: {
                items: 5
            },
        }
    }
    return (
        <>
            {/* <div className="container-xxl py-2">
                <div className="container">
                    <h1 className=" text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Our {props.title}</h1>
                    <div className=" wow fadeInUp" data-wow-delay="0.1s">
                        <carousel {...options} className="d-flex justify-content-between">
                            {
                                props.data?.map((item) => {
                                    return <div key={item.id} className={props.title === "Brand" ? 'mx-5' : 'mx-2'}>
                                        <Link to={props.title === "Maincategory" ? `/shop?mc=${item.name}` : (props.title === "Subcategory" ? `/shop?sc=${item.name}` : `/shop?br=${item.name}`)}>
                                            {props.title === "Brand" ?
                                                <img src={`${process.env.REACT_APP_SERVER}${item.pic}`} height={150} width={"100%"} alt="" /> :
                                                <img src={`${process.env.REACT_APP_SERVER}${item.pic}`} height={200} width={"100%"} alt="" />}
                                            <h2 className='text-center'>{item.name}</h2>
                                        </Link>
                                    </div>
                                })
                            }

                        </carousel>
                    </div>
                </div>
            </div> */}
            <div id="categoryCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">

                    {[1, 2, 3].map((_, index) => (
                        <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`} >
                            <div className=" d-flex justify-content-around mx-5">
                                {
                                    props.data?.map((item) => {
                                        return <div key={item.id} className={props.title === "Brand" ? 'mx-5' : 'mx-2'}>
                                            <Link to={props.title === "Maincategory" ? `/shop?mc=${item.name}` : (props.title === "Subcategory" ? `/shop?sc=${item.name}` : `/shop?br=${item.name}`)}>
                                                {props.title === "Brand" ?
                                                    <img src={`${process.env.REACT_APP_SERVER}${item.pic}`} height={150} width={"100%"} alt="" /> :
                                                    <img src={`${process.env.REACT_APP_SERVER}${item.pic}`} height={200} width={"100%"} alt="" />}
                                                <h2 className='text-center'>{item.name}</h2>
                                            </Link>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    ))}
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#categoryCarousel" data-bs-slide="prev" >
                    <span className="carousel-control-prev-icon"></span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#categoryCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>
        </>
    )
}