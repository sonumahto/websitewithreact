import React from "react";
import Heading from "./small-component/Heading";
import featureImg from "../assets/img/features.svg";

const ListTile = (props) => (
  <div className="tile mt-5 mt-lg-0">
    <i class={props.iconClass}></i>
    <h4>{props.title}</h4>
    <p>{props.desc}</p>
  </div>
);

const listdata = [
  {
    iconClass: "icofont-responsive",
    title: "Responsive Design",
    desc:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odrepellat asperiores consectetur voluptatem eos dignissimos similique earum praesentium rerum dolores",
  },
  {
    iconClass: "icofont-bulb-alt",
    title: "Inovation",
    desc:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odrepellat asperiores consectetur voluptatem eos dignissimos similique earum praesentium rerum dolores",
  },
  {
    iconClass: "icofont-live-support",
    title: "24x7 Live Support",
    desc:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odrepellat asperiores consectetur voluptatem eos dignissimos similique earum praesentium rerum dolores'",
  },
  {
    iconClass: "icofont-money",
    title: "Value For Money",
    desc:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odrepellat asperiores consectetur voluptatem eos dignissimos similique earum praesentium rerum dolores'",
  },
];

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="container">
        <Heading title="Features" />
        <p className="text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
          repellat asperiores consectetur voluptatem eos dignissimos similique
          earum praesentium rerum dolores? Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Quam nam nobis optio distinctio numquam
          eum ut deleniti dolores quas rerum culpa cumque ipsa, dicta, error
          temporibus rem cupiditate at nisi.
        </p>

        <div className="row row-cols-lg-2">
          <div className="col-lg-6 order-1 order-lg-0">
            {listdata.map((data) => {
              return (
                <ListTile
                  title={data.title}
                  desc={data.desc}
                  iconClass={data.iconClass}
                />
              );
            })}
          </div>
          <div className="col-lg-6 order-0 order-lg-1">
            <div className="featureImg">
              <img className="img-fluid" src={featureImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
