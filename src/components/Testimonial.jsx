import React from "react";
import Heading from "./small-component/Heading";
import SwiperCore, { Autoplay, Pagination } from "swiper";

import { SwiperSlide, Swiper } from "swiper/react";
// import "swiper/components/navigation/navigation.sc

import userimg1 from "../assets/img/testimonalimg/testimonials-1.jpg";
import userimg2 from "../assets/img/testimonalimg/testimonials-2.jpg";
import userimg3 from "../assets/img/testimonalimg/testimonials-3.jpg";
import userimg4 from "../assets/img/testimonalimg/testimonials-4.jpg";
import userimg5 from "../assets/img/testimonalimg/testimonials-5.jpg";

const testimonialInfo = [
  {
    name: "Designer Name",
    position: "Designer",
    imgUrl: userimg1,
    testimonial:
      "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibhet. Maecen aliquam, risus at semper.",
  },
  {
    name: "Manager Name",
    position: "product manager",
    imgUrl: userimg2,
    testimonial:
      "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibhet. Maecen aliquam, risus at semper.",
  },
  {
    name: "Developer Name",
    position: "Developer",
    imgUrl: userimg3,
    testimonial:
      "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibhet. Maecen aliquam, risus at semper.",
  },
  {
    name: "db admin Name",
    position: "DataBase Administrator",
    imgUrl: userimg4,
    testimonial:
      "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibhet. Maecen aliquam, risus at semper.",
  },
  {
    name: "Owner Name",
    position: "CEO",
    imgUrl: userimg5,
    testimonial:
      "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibhet. Maecen aliquam, risus at semper.",
  },
];

const TestimonialCard = (props) => {
  return (
    <div className="testimonial-item">
      <p>
        <i className="icofont-quote-left"></i>
        {props.testimonial}
        <i className="icofont-quote-right"></i>
      </p>
      <img src={props.imgUrl} className="testimonial-img" alt="" />
      <h3>{props.name}</h3>
      <h4>{props.position}</h4>
    </div>
  );
};

function MutipleSlidesPerView() {
  SwiperCore.use([Autoplay, Pagination]);
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 2500 }}
        pagination={{ clickable: true, type: "bullets" }}
        breakpoints={{
          // when window width is >= 320px
          220: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          580: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // when window width is >= 640px
          840: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        {testimonialInfo.map((info) => {
          return (
            <SwiperSlide>
              <TestimonialCard
                name={info.name}
                imgUrl={info.imgUrl}
                position={info.position}
                testimonial={info.testimonial}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default function Testimonial() {
  return (
    <section id="testimonial" className="section-bg">
      <div className="container">
        <Heading title="Testimonials" />
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          error illum earum ex sint eius autem doloribus, harum similique quo
          facilis id obcaecati asperiores ullam impedit placeat alias rem. Nisi.
        </p>
        <div className="container">
          <MutipleSlidesPerView />
        </div>
      </div>
    </section>
  );
}
