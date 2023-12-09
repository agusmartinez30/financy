import React from "react";
import { useParams } from "react-router-dom";
import { debtExpenses } from "../data";
import { useState } from "react";
import { useEffect } from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const DetailCategory = () => {
  const [movements, setMovements] = useState([]);
  let { nameCategory } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    let movementsStore = JSON.parse(localStorage.getItem("movements"));
    if (!movementsStore) movementsStore = [];
    let movements = movementsStore.filter((m) => m.category == nameCategory);
    console.log("movements", movements);
    setMovements(movements);
  }, []);

  const transformDate = (date) => {
    let fechaMoment = moment(date);
    let dateFormat = fechaMoment.format("MM/DD/YYYY HH:mm");

    return dateFormat;
  };

  return (
    <>
      <main className=" w-full md:w-1/2 h-screen md:m-auto  p-6 bg-[#fffdfd] ">
        <header className=" flex flex-col gap-3">
          <button onClick={() => navigate("/")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-chevron-left"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#000"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15 6l-6 6l6 6" />
            </svg>
          </button>
          <h3 className="text-xl text-center font-semibold text-[#000] ">
            {nameCategory}
          </h3>
        </header>

        <section className=" py-3 flex flex-col  gap-3">
          {!movements.length && (
            <p className="text-[#793FDF] text-xl text-center">
              No movements found.
            </p>
          )}
          {movements
            .reverse()
            .map((d) => (
              <div className="card w-full bg-[#225560] shadow-xl">
                <div className="p-6 d-flex flex items-center justify-between">
                  <div>
                    <h2 className="card-title text-xl text-gray-50">
                      {d.name}
                    </h2>
                    <span className="text-md text-white font-semibold flex items-center gap-3 ">
                      {transformDate(d.createdAt)}
                    </span>
                  </div>

                  <p className="text-2xl text-bold text-gray-50">
                    ${d.amount.toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
        </section>
      </main>
    </>
  );
};

export default DetailCategory;
