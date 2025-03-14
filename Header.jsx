import React from "react";

const Header = () => {
    return (
        <>
            <header>
                <section className="container main-hero-container">
                    <div className="row">
                        <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-center">
                            <h1 className="display-2">
                                Online Payment Made <br /> Easy for you.
                            </h1>
                            <p className="main-hero-para ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.Repudiandae sit assumenda eos sint,
                                ratione nemo sequi perspiciatis corrupti in fugiat accusamus exercitationem Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet..</p>
                            <h3> Get realy access for you </h3>
                            <div className="input-group mt-3">
                                <input type="text"
                                    className="rounded-pill w-50 w-lg-75 me-3  p-2 form-control-text"
                                    placeholder="Enter your email"
                                />
                                <div className="input-group-button"> Get it now </div>
                            </div>
                        </div>
                        {/* ---------------------main header right side--------------*/}
                        <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
                            <img src="./images/hero1.jpg" alt="heroing" className="img-fluid" />
                            <img src="./images/hero4.jpg" alt="heroing4" className="img-fluid main-hero-img2" />
                        </div>
                    </div>
                </section>
            </header>
        </>
    )
}

export default Header;