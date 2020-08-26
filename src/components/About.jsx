import React from "react";
import aboutImg from "../assets/img/about.jpg";
import Heading from "./small-component/Heading";
import { Section } from "react-scroll-section";

export default function About() {
  return (
    <div>
      <Section id="about" className="container">
        <Heading title="About" />
        <div className="row justify-content-center">
          <div className="col-xl-5 col-md-6 order-md-1 order-1">
            <h1 className="">Lorem ipsum dolor adipisicing elit.?</h1>
            <p className="font-italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              odit veniam molestiae sapiente laboriosam ipsam cupiditate neque
              iure modi suscipit?
            </p>
            <ul>
              <li>
                <i className="icofont-check-circled"></i> Ullamco laboris nisi
                ut aliquip ex ea commodo consequat.
              </li>
              <li>
                <i className="icofont-check-circled"></i> Duis aute irure dolor
                in reprehenderit in voluptate velit.
              </li>
              <li>
                <i className="icofont-check-circled"></i> Ullamco laboris nisi
                ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate trideta storacalaperda mastiro dolore
                eu fugiat nulla pariatur.
              </li>
            </ul>
          </div>
          <div className="col-xl-5 col-md-6 order-md-2 order-2">
            <img src={aboutImg} className="img-fluid" alt="" />
          </div>
        </div>
      </Section>
      <section className="counter-section">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3 col-6 ">
              <span data-toggle="counter-up">232</span>
              <p>Clients</p>
            </div>
            <div className="col-md-3 col-6">
              <span data-toggle="counter-up">521</span>
              <p>Projects</p>
            </div>
            <div className="col-md-3 col-6">
              <span data-toggle="counter-up">1,463</span>
              <p>Hours Of Support</p>
            </div>
            <div className="col-md-3 col-6">
              <span data-toggle="counter-up">15</span>
              <p>Hard Workers</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
