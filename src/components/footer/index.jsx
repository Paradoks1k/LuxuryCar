import React from "react";
import "./style.css";
import logoIcon from "../../images/logo.png";
import orderCar from "../../images/order-car.png";

export const Footer = () => {
  const carField = document.getElementById("car");
  const nameField = document.getElementById("name");
  const phoneField = document.getElementById("phone");

  return (
    <div className="order-footer">
      <div className="order pt-40 pb-32" id="order">
        <div className="container max-w-5xl relative">
          <img
            className="order-img absolute -top-6 left-[-530px] "
            src={orderCar}
            alt="ordercar"
          />
          <form className="ml-[714px] max-w-[486px]">
            <h3 className="text-6xl font-normal mb-10">
              Забронируйте автомобиль
            </h3>
            <p className="text-2xl leading-tight text-almost-white mb-14 max-w-[455px]">
              Заполните контактные данные, и мы перезвоним вам для обсуждения
              деталей и подтверждения бронирования
            </p>
            <div className="order-form max-w-[344px]">
              <input type="text" placeholder="Автомобиль" id="car" />
              <input type="text" placeholder="Ваше имя" id="name" />
              <input type="text" placeholder="Ваш телефон" id="phone" />
              <button className="btn" type="button" id="order-action">
                Забронировать
              </button>
            </div>
          </form>
        </div>
      </div>
      <footer className="footer ">
        <div className="container max-w-5xl flex justify-between items-center">
          <div className="logo">
            <img className="logo-img " src={logoIcon} alt="logo" />
          </div>
          <div className="rights text-sm leading-[90%] -tracking-normal font-bold uppercase ">
            Все права защищены
          </div>
        </div>
      </footer>
    </div>
  );
};
