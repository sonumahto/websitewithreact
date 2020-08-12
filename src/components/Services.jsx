import React from "react";
import Heading from "./small-component/Heading";
import ServicesCard from "./small-component/ServicesCard";
import ServiceCardInfo from "./servicesInfo";

export default function Services() {
  const cardInfo = new ServiceCardInfo();

  return (
    <section id="services" className="section-bg">
      <div className="container">
        <Heading title="Services" />
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit beatae
          nobis est suscipit dolore ad? Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Voluptate laudantium eveniet possimus quia? Fugit
          obcaecati, optio, tempore, adipisci debitis dolorum sint officiis
          voluptas laboriosam perspiciatis laudantium numquam quisquam saepe
          quibusdam.
        </p>
        <div className="row row-cols-md-3">
          <div className="col-lg-4">
            <ServicesCard
              colorStyle={cardInfo.colorStyleClass[0]}
              title={cardInfo.cardTitle[0]}
              iconClass={cardInfo.cardIconClass[0]}
              svg={cardInfo.cardSvgs[0]}
              desc={cardInfo.cardDesc[0]}
            />
          </div>
          <div className="col-lg-4">
            <ServicesCard
              colorStyle={cardInfo.colorStyleClass[1]}
              title={cardInfo.cardTitle[1]}
              iconClass={cardInfo.cardIconClass[1]}
              svg={cardInfo.cardSvgs[1]}
              desc={cardInfo.cardDesc[1]}
            />
          </div>
          <div className="col-lg-4">
            <ServicesCard
              colorStyle={cardInfo.colorStyleClass[2]}
              title={cardInfo.cardTitle[2]}
              iconClass={cardInfo.cardIconClass[2]}
              svg={cardInfo.cardSvgs[2]}
              desc={cardInfo.cardDesc[2]}
            />
          </div>
        </div>
        <div className="row row-cols-md-3">
          <div className="col-lg-4">
            <ServicesCard
              colorStyle={cardInfo.colorStyleClass[3]}
              title={cardInfo.cardTitle[3]}
              iconClass={cardInfo.cardIconClass[3]}
              svg={cardInfo.cardSvgs[3]}
              desc={cardInfo.cardDesc[3]}
            />
          </div>
          <div className="col-lg-4">
            <ServicesCard
              colorStyle={cardInfo.colorStyleClass[4]}
              title={cardInfo.cardTitle[4]}
              iconClass={cardInfo.cardIconClass[4]}
              svg={cardInfo.cardSvgs[4]}
              desc={cardInfo.cardDesc[4]}
            />
          </div>
          <div className="col-lg-4">
            <ServicesCard
              colorStyle={cardInfo.colorStyleClass[5]}
              title={cardInfo.cardTitle[5]}
              iconClass={cardInfo.cardIconClass[5]}
              svg={cardInfo.cardSvgs[5]}
              desc={cardInfo.cardDesc[5]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
