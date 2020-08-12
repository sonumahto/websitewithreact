import React from "react";
import heroImg from "../assets/img/hero-img.png";

export default function Hero() {
  return (
    <div>
      <section id="hero">
        <div className="container-fluid ">
          <div className="row justify-content-center ">
            <div className="col-10 col-xl-5 col-md-6 order-md-1 order-2 mt-5 ">
              <h1>Bettter Digital Experience With Techie</h1>
              <h2>
                We are team of talanted designers making websites with Bootstrap
              </h2>
              <div>
                <a href="/" class="btn-get-started scrollto">
                  Get Started
                </a>
              </div>
            </div>
            <div className="col-10 col-xl-4 col-md-6 hero-img order-md-2 order-1 mt-5 ">
              <img src={heroImg} className="img-fluid animated" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
