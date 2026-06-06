import React from "react";
import { useState, useEffect } from "react"
import About from "../Components/About";
import Facts from "../Components/Facts";
import Products from "../Components/Products";
import Testimonial from "../Components/Testimonial";
import CategorySlider from "../Components/CategorySlider"

import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import { getProduct } from "../Redux/ActionCreators/ProductActionCreators"
import { getMainCategory } from "../Redux/ActionCreators/MaincategoryActionCreators"
import { getSubCategory } from "../Redux/ActionCreators/SubcategoryActionCreators";
import { useDispatch, useSelector } from 'react-redux'
import { getBrand } from "../Redux/ActionCreators/BrandActionCreators"

export default function Home() {

    let [maincategory, setMaincategory] = useState([])
    let [subcategory, setSubcategory] = useState([])
    let [brand, setBrand] = useState([])
    let [product, setProduct] = useState([])

    let dispatch = useDispatch()
    let ProductStateData = useSelector((state) => state.ProductStateData)
    let MaincategoryStateData = useSelector((state) => state.MaincategoryStateData)
    let SubcategoryStateData = useSelector((state) => state.SubcategoryStateData)
    let BrandStateData = useSelector((state) => state.BrandStateData)

    let options = {
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        nav: false,
        items: 1
    }

    useEffect(() => {
        (() => {
            dispatch(getMainCategory())
            if (MaincategoryStateData.length)
                setMaincategory(MaincategoryStateData.filter((x) => x.active))
        })()
    }, [MaincategoryStateData.length])


    useEffect(() => {
        (() => {
            dispatch(getSubCategory())
            if (SubcategoryStateData.length)
                setSubcategory(SubcategoryStateData.filter((x) => x.active))
        })()
    }, [SubcategoryStateData.length])


    useEffect(() => {
        (() => {
            dispatch(getBrand())
            if (BrandStateData.length)
                setBrand(BrandStateData.filter((x) => x.active))
        })()
    }, [BrandStateData.length])

    useEffect(() => {
        (() => {
            dispatch(getProduct())
            if (ProductStateData.length)
                setProduct(ProductStateData.filter((x) => x.active))
        })()
    }, [ProductStateData.length])
    return (
        <>
            {/*<!-- Header Start --> */}
            <div className="container-fluid bg-dark p-0 mb-5">
                <div className="row g-0 flex-column-reverse flex-lg-row">

                    <div className="col-lg-6 p-0 wow fadeIn" data-wow-delay="0.1s">
                        <div className="header-bg h-100 d-flex flex-column justify-content-center p-5">
                            <h2 className="text-light mb-5 text-center">
                                Checkout Our Latest Fashion Products of Top Brands
                            </h2>
                            <div className="text-center pt-4 animated slideInDown">
                                <Link
                                    to="/shop"
                                    className="btn btn-primary py-sm-3 px-3 px-sm-5"
                                >
                                    Shop Now
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                        <Swiper modules={[Autoplay, Pagination]} loop={true} autoplay={{ delay: 3000, disableOnInteraction: false, }} pagination={{ clickable: true }}>
                            <SwiperSlide>
                                <img src="img/banner2.jpg" alt="Banner 3" className="w-100 h-100" style={{ objectFit: "cover", height: "500px" }} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="img/banner3.jpg" alt="Banner 2" className="w-100 h-100" style={{ objectFit: "cover", height: "500px" }} />
                            </SwiperSlide>

                            <SwiperSlide>
                                <img src="img/banner3.jpg" alt="bg-1" className="w-100 h-100" style={{ objectFit: "cover", height: "500px" }} />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>

            {/*<!-- Header End --> */}
            <CategorySlider data={maincategory} title="Maincategory" className="text-center" />
            <div className="container">
                {
                    maincategory.map((item) => {
                        return <Products key={item.id} title={item.name} data={product.filter((x) => x.maincategory === item.name).slice(0, 12)} />
                    })
                }
            </div>
            <CategorySlider data={subcategory} title="Subcategory" />
            <About />
            <CategorySlider data={brand} title="Brand" />
            <Facts />
            <Testimonial />
        </>
    )
}