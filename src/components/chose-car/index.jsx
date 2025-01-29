import React from "react";
import "./style.css";
import logoCar from "../../images/1.png";

export const ChooseCar = () => {
  return (
    <div className="choose-car bg-black w-[100vw] h-auto   ">
      <div className="container max-w-7xl my-0 mx-auto relative bg-black w-[100vw]">
        <h2 className="cars-title text-6xl font-normal ">
          Выберите автомобиль
        </h2>
        <div className="cars-content flex pt-14" id="cars-content">
          <aside className="cars-filter mr-20">
            <ul className="flex flex-col gap-y-4 list-none">
              <li className="active">Все марки</li>
              <li>Lamborghini</li>
              <li>Ferrari</li>
              <li>Porsche</li>
              <li>BMW</li>
              <li>Mercedes</li>
              <li>Chevrolet</li>
              <li>Audi</li>
              <li>Ford</li>
            </ul>
          </aside>
          <div className="cars-items flex flex-col gap-y-7">
            <article className="car bg-almost-black p-5 flex">
              <img className="car-img max-w-xl" src={logoCar} alt="car" />
              <div class="car-details ml-6 flex flex-col">
                <h4 className="text-3xl font-bold leading-tight mb-5">
                  BMW M4 Competition
                </h4>
                <p className="text-base text-almost-white leading-tight tracking-normal h-full  ">
                  Идеальный баланс скорости и стиля. BMW M4 Competition — 510
                  л.с. и драйв, созданный для покорения трасс и городских улиц.
                </p>
                <div class="car-action mt-auto">
                  <ul className="list-none flex justify-between mb-5">
                    <li>
                      <div className="car-period text-base leading-tight text-almost-white mb-1">
                        На 1 сутки
                      </div>
                      <div className="car-price text-2xl leading-tight">
                        1450 $
                      </div>
                    </li>
                    <li>
                      <div class="car-period text-base leading-tight text-almost-white mb-1">
                        На 1-3 суток
                      </div>
                      <div class="car-price text-2xl leading-tight">
                        1300 ${" "}
                        <span className="text-base leading-tight text-almost-white">
                          /сутки
                        </span>
                      </div>
                    </li>
                    <li>
                      <div class="car-period text-base leading-tight text-almost-white mb-1">
                        На 3+ суток
                      </div>
                      <div class="car-price text-2xl leading-tight">
                        1100 ${" "}
                        <span className="text-base leading-tight text-almost-white">
                          /сутки
                        </span>
                      </div>
                    </li>
                  </ul>
                  <a class="btn white-button w-full" href="#order">
                    Забронировать
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};
