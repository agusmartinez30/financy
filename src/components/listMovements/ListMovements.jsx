import React from "react";
import { staticsData } from "../../data.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ListMovements = () => {
  const [statics, setStatics] = useState(
    JSON.parse(localStorage.getItem("categories")) || []
  );
  const navigate = useNavigate();

  const colors = ["#54457f", "#77bfa3", "#b4e33d", "#7a306c", "#2274a5"];

  function generarNumeroAleatorio(maximo) {
    // Math.random() devuelve un número decimal entre 0 (inclusive) y 1 (exclusivo)
    // Multiplicamos por (maximo + 1) para incluir el máximo en los posibles resultados
    // Math.floor() redondea hacia abajo para obtener un número entero
    return Math.floor(Math.random() * (maximo + 1));
  }

  const getClass = () => {
    var numeroAleatorio = generarNumeroAleatorio(colors.length);
    console.log("numeroAleatorio", numeroAleatorio);
    let bgColor = colors[numeroAleatorio];
    let classReturn = `card w-full bg-[${bgColor}] shadow-xl`;

    console.log("classReturn", classReturn);

    return classReturn;
  };

  return (
    <section className="flex flex-col py-3 gap-2 ">
      {!statics.length && (
        <p className="text-[#793FDF] text-xl text-center">
          No movements found.
          <br/>
          <span>add a category to get started</span>
        </p>
      )}
      {statics.map((d, idx) => (
        <div
          className={`card w-full bg-[#225560] shadow-xl`}
          key={d.id}
          onClick={(e) => navigate(`/category/movementes/${d.name}`)}
        >
          <div className="card-body">
            <h2 className="card-title text-2xl font-medium text-gray-50">
              {d.name}
            </h2>
            <p className="text-3xl text-gray-50 font-bold">
              {" "}
              ${d.amount.toLocaleString()}
            </p>
          </div>
        </div>

        // <article
        //   key={d.id}
        //   onClick={(e) => navigate(`/category/movementes/${d.name}`)}
        //   className={` bg-[#687EFF] w-full h[120px] p-4`}
        // >
        //   {d.finalAmount && (
        //     <span className="text-3xl text-white ">{d.finalAmount} K</span>
        //   )}
        //   <div className="flex justify-between items-center">
        //     <span className="text-6xl text-white font-semibold">
        //       {d.amount} k
        //     </span>
        //     <span className="text-3xl text-white ">{d.name}</span>
        //   </div>
        // </article>
      ))}
      {/* <article
        onClick={(e) => handleAddCategory(e)}
        className="bg-[#000000] col-span-2 rounded-md grid place-content-center py-3"
      >
        <span className="text-md text-white ">ADD CATEGORY</span>
      </article> */}
    </section>
  );
};

export default ListMovements;
