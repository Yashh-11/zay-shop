import React from 'react'

const Products = () => {
    return (
        <>
            <section style={{ padding: "60px 0", background: "#e9eef5" }}>

                <div style={{ textAlign: "center", maxWidth: "900px", margin: "0 auto 40px" }}>
                    <h2 style={{ fontSize: "48px", fontWeight: "200", marginBottom: "10px", color: "#212529" }}>
                        Featured Product
                    </h2>
                    <p style={{ color: "#212529", fontSize: "18px", lineHeight: "1.6",fontWeight : "300" }}>
                        Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        <br />
                        Excepteur sint occaecat cupidatat non proident.
                    </p>
                </div>

                <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                    <div style={{ display: "flex", gap: "24px", justifyContent: "center" }}>

                        <div
                            style={{
                                width: "33.33%",
                                background: "#fff",
                                borderRadius: "6px",
                                overflow: "hidden",
                                boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
                            }}
                        >
                            <img
                                src="https://templatemo.com/templates/templatemo_559_zay_shop/assets/img/feature_prod_01.jpg"
                                alt=""
                                style={{ width: "100%", display: "block" }}
                            />
                            <div style={{ padding: "20px" }}>
                                <div style={{ color: "#f1c40f", fontSize: "18px" }}>★★★★☆</div>
                                <div style={{ float: "right", color: "#adb5bd" }}>$240.00</div>
                                <h3 style={{ fontSize: "22px", fontWeight: 400, margin: "10px 0", color: "#212529" }}>
                                    Gym Weight
                                </h3>
                                <p style={{ color: "#6c757d", fontSize: "15px", lineHeight: "1.6" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.
                                </p>
                                <p style={{ color: "#adb5bd", fontSize: "14px", marginTop: "10px" }}>
                                    Reviews (24)
                                </p>
                            </div>
                        </div>
                        
                        <div
                            style={{
                                width: "33.33%",
                                background: "#fff",
                                borderRadius: "6px",
                                overflow: "hidden",
                                boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
                            }}
                        >
                            <img
                                src="https://templatemo.com/templates/templatemo_559_zay_shop/assets/img/feature_prod_02.jpg"
                                alt=""
                                style={{ width: "100%", display: "block" }}
                            />
                            <div style={{ padding: "20px" }}>
                                <div style={{ color: "#f1c40f", fontSize: "18px" }}>★★★☆☆</div>
                                <div style={{ float: "right", color: "#adb5bd" }}>$480.00</div>
                                <h3 style={{ fontSize: "22px", fontWeight: 400, margin: "10px 0", color: "#212529" }}>
                                    Cloud Nike Shoes
                                </h3>
                                <p style={{ color: "#6c757d", fontSize: "15px", lineHeight: "1.6" }}>
                                    Aenean gravida dignissim finibus. Nullam ipsum diam, posuere vitae pharetra sed.
                                </p>
                                <p style={{ color: "#adb5bd", fontSize: "14px", marginTop: "10px" }}>
                                    Reviews (48)
                                </p>
                            </div>
                        </div>

                        <div
                            style={{
                                width: "33.33%",
                                background: "#fff",
                                borderRadius: "6px",
                                overflow: "hidden",
                                boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
                            }}
                        >
                            <img
                                src="https://templatemo.com/templates/templatemo_559_zay_shop/assets/img/feature_prod_03.jpg"
                                alt=""
                                style={{ width: "100%", display: "block" }}
                            />
                            <div style={{ padding: "20px" }}>
                                <div style={{ color: "#f1c40f", fontSize: "18px" }}>★★★★★</div>
                                <div style={{ float: "right", color: "#adb5bd" }}>$360.00</div>
                                <h3 style={{ fontSize: "22px", fontWeight: 400, margin: "10px 0", color: "#212529" }}>
                                    Summer Addides Shoes
                                </h3>
                                <p style={{ color: "#6c757d", fontSize: "15px", lineHeight: "1.6" }}>
                                    Curabitur ac mi sit amet diam luctus porta. Phasellus pulvinar sagittis diam.
                                </p>
                                <p style={{ color: "#adb5bd", fontSize: "14px", marginTop: "10px" }}>
                                    Reviews (74)
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>




        </ >
    )
}

export default Products
