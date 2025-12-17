import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

import { EffectFade, Navigation, Pagination } from 'swiper/modules';


const Hero = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
                style={{backgroundColor : "#efefef"}}
            >
                <SwiperSlide style={{ display: "flex"}}>
                    <div className="container">
                        <div className="row" style={{ display: "flex", alignItems: "center" }}>
                            <div className="hero-content" style={{ width: "50%", height: "100%", justifyContent: "center" }}>
                                <h3 style={{ color: "#59ab6e", fontSize: "48px", marginRight: "8px" }}>Zay <span style={{ color: "#59ab6e", fontWeight: "200" }}>eCommerce</span></h3>
                                <h2 className='para' style={{ fontSize: "30px", color: "#212529", marginBottom: "8px", fontWeight: "300" }}>Tiny and Perfect eCommerce Template</h2>
                                <p className='paraa' style={{ fontSize: "18px", color: "#212529", marginBottom: "8px", fontWeight: "200" }}>Zay Shop is an eCommerce HTML5 CSS template with latest version of Bootstrap 5 (beta 1). This template is 100% free provided by TemplateMo website. Image credits go to Freepik Stories, Unsplash and Icons 8.</p>
                            </div>
                            <div className='hero-img' style={{ width: "50%" }}>
                                <img src="https://templatemo.com/templates/templatemo_559_zay_shop/assets/img/banner_img_01.jpg" alt="notfound" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{ display: "flex" }}>
                    <div className="container">
                        <div className="row" style={{ display: "flex", alignItems: "center" }}>
                            <div className="hero-content" style={{ width: "50%", height: "100%", justifyContent: "center" }}>
                                <h3 style={{ color: "#59ab6e", fontSize: "48px", marginRight: "8px",fontWeight : "500" }}>Proident occaecat</h3>
                                <h2 className='para' style={{ fontSize: "30px", color: "#212529", marginBottom: "8px", fontWeight: "300" }}>Aliquip ex ea commodo consequat</h2>
                                <p className='paraa' style={{ fontSize: "18px", color: "#212529", marginBottom: "8px", fontWeight: "200" }}>Zay Shop is an eCommerce HTML5 CSS template with latest version of Bootstrap 5 (beta 1). This template is 100% free provided by TemplateMo website. Image credits go to Freepik Stories, Unsplash and Icons 8.</p>
                            </div>
                            <div className='hero-img' style={{ width: "50%" }}>
                                <img src="https://templatemo.com/templates/templatemo_559_zay_shop/assets/img/banner_img_02.jpg" alt="notfound" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{ display: "flex" }}>
                    <div className="container">
                        <div className="row" style={{ display: "flex", alignItems: "center" }}>
                            <div className="hero-content" style={{ width: "50%", height: "100%", justifyContent: "center" }}>
                                <h3 style={{ color: "#59ab6e", fontSize: "48px", marginRight: "8px", fontWeight : "500" }}>Repr in voluptate</h3>
                                <h2 className='para' style={{ fontSize: "30px", color: "#212529", marginBottom: "8px", fontWeight: "300" }}>Aliquip ex ea commodo consequat</h2>
                                <p className='paraa' style={{ fontSize: "18px", color: "#212529", marginBottom: "8px", fontWeight: "200" }}>Zay Shop is an eCommerce HTML5 CSS template with latest version of Bootstrap 5 (beta 1). This template is 100% free provided by TemplateMo website. Image credits go to Freepik Stories, Unsplash and Icons 8.</p>
                            </div>
                            <div className='hero-img' style={{ width: "50%" }}>
                                <img src="https://templatemo.com/templates/templatemo_559_zay_shop/assets/img/banner_img_03.jpg" alt="notfound" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    )
}

export default Hero
