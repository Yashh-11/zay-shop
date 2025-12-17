import React from 'react'

const Categories = () => {
    return (
        <>
            <section>
                <div className='categories'>
                    <div className="container" style={{ padding: "48px 12px" }}>
                        <div className="row">
                            <div className="col-12">
                                <div className="categories-heading">
                                    <h2 style={{ fontSize: "48px", fontWeight: "200", textAlign: "center", color: "#212529", marginBottom: "8px" }}>Categories of The Month</h2>
                                    <p style={{ color: "#212529", fontSize: "18px", fontWeight: "300", marginBottom: "1rem", textAlign: "center" }}>
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt<br /> mollit anim id est laborum.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex item-center" style={{marginTop : "16px"}}>
                            <div className="col-4">
                                <img src="https://templatemo.com/templates/templatemo_559_zay_shop/assets/img/category_img_01.jpg" alt="" style={{width : "100%",borderRadius : "50%",padding : "48px"}}/>
                                <h5 style={{textAlign : "center",marginBottom : "1rem", color : "black", fontSize : "1.25rem",fontWeight : "500"}}>Watches</h5>
                                <div style={{textAlign : "center"}}>
                                <button type="submit" style={{border : "solid,#59ab6e",borderRadius : "7px",}}> <a href="" style={{backgroundColor : "#59ab6e",color:"white",padding : "6px 12px",fontSize : "18px",display : "inline-block",textDecoration : "none"}}>
                                    Go Shop
                                </a></button>
                                </div>
                            </div>
                            <div className="col-4">
                                <img src="https://templatemo.com/templates/templatemo_559_zay_shop/assets/img/category_img_02.jpg" alt="" 
                                style={{width : "100%",borderRadius : "50%",padding : "48px"}}/>
                                <h5 style={{textAlign : "center",marginBottom : "1rem", color : "black", fontSize : "1.25rem",fontWeight : "500"}}>Shoes</h5>
                                <div style={{textAlign : "center"}}>
                                <button type="submit" style={{border : "solid,#59ab6e",borderRadius : "7px"}}> <a href="" style={{backgroundColor : "#59ab6e",color:"white",padding : "6px 12px",fontSize : "18px",display : "inline-block",textDecoration : "none"}}>
                                    Go Shop
                                </a></button>
                                </div>
                            </div>
                            <div className="col-4">
                                <img src="https://templatemo.com/templates/templatemo_559_zay_shop/assets/img/category_img_03.jpg" alt=""
                                style={{width : "100%",borderRadius : "50%",padding : "48px"}} />
                                <h5 style={{textAlign : "center",marginBottom : "1rem", color : "black", fontSize : "1.25rem",fontWeight : "500"}}>Accesories</h5>
                                <div style={{textAlign : "center"}}>
                                <button type="submit" style={{border : "solid,#59ab6e",borderRadius : "7px"}}> <a href="" style={{backgroundColor : "#59ab6e",color:"white",padding : "6px 12px",fontSize : "18px",display : "inline-block",textDecoration : "none"}}>
                                    Go Shop
                                </a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Categories
