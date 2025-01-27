import React from "react";
import "./style.css";
import mainCar from "../../images/main-car.png";

export const MainSection = () => {
  return (
    <div className="main-content pt-24 pb-44 ">
      <div className="container max-w-5xl my-0 mx-auto relative ">
        <div className="main-info max-w-3xl ">
          <h1 className="main-info-title text-7xl leading-none font-normal mb-10 ">
            Покорите дороги за рулём легендарных автомобилей!
          </h1>
          <p className="main-info-text max-w-md text-2xl leading-tight mb-16">
            От эксклюзивных спорткаров до гоночных шедевров — выбирайте мечту,
            садитесь за руль и ощутите мощь премиального авто на полную!
          </p>
          <button className="btn  ">Посмотреть автомобили</button>
        </div>
        <img
          className="main-image absolute top-[70px] right-[-576px] -z-10"
          src={mainCar}
          alt="maincar"
        />
      </div>
      <div className="black-block absolute w-[477px] h-[910px] top-0 bg-black -z-20  "></div>
    </div>
  );
};
