import React from "react";
import { Section } from "react-scroll-section";
import Heading from "./small-component/Heading";
import { TextField, TextareaAutosize } from "@material-ui/core";

const ContactCards = () => (
  <div className="card text-center">
    <i className="icofont-location-pin"></i>
    <h3>Our Address</h3>
    <p>Lorem ipsum dolor sit amet consectetur.</p>
  </div>
);

export default function Contact() {
  return (
    <div>
      <Section id="contact" className="container">
        <Heading title="Contact us" />
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
          repellat omnis, rem itaque deleniti ipsam culpa ipsum inventore
          nostrum ad expedita est, exercitationem aliquid? Esse sit delectus
          voluptate laudantium quas nulla doloribus eos amet rerum nam ex,
          repellendus ipsam, consequatur distinctio aliquam maiores officia
          dolorem rem commodi ducimus sequi corrupti?
        </p>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <ContactCards />
              <div>
                <iframe
                  title="Our Address"
                  className="mb-4 mb-lg-0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112125.38650720376!2d77.14065360956484!3d28.572215099000882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1598376154082!5m2!1sen!2sin"
                  frameBorder="0"
                  style={{ border: 0, width: "100%", height: "384px" }}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="row">
                <div className="col-6">
                  <ContactCards />
                </div>
                <div className="col-6">
                  <ContactCards />
                </div>
              </div>
              <div className="p-3">
                <form action="">
                  <div className="row row-cols-2">
                    <div className="col-6">
                      <input
                        type="text"
                        name="name"
                        className="form-control d-flex"
                        id="name"
                        placeholder="Your Name"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 4 chars"
                      />
                    </div>
                    <div className="col-6">
                      <input
                        type="email"
                        name="email"
                        className="form-control d-flex"
                        placeholder="Your Email"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 4 chars"
                      />
                    </div>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 8 chars of subject"
                    />
                  </div>
                  <div>
                    <textarea
                      className="form-control"
                      name="message"
                      rows="5"
                      data-rule="required"
                      data-msg="Please write something for us"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-primary" type="submit">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
