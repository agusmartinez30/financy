import React from "react";
import { useParams } from "react-router-dom";
import {} from "../../data";
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

  const handleDeleteCategory = (id) => {
    // Filtrar las categorías y actualizar el estado
    const updatedMovements = movements.filter((m) => m.id !== id);
    setMovements(updatedMovements);

    // obtener el total del monto
    let totalAmountMovements = 0;
    updatedMovements.map((m) => {
      totalAmountMovements = totalAmountMovements + parseInt(m.amount);
    });

    console.log("totalAmountMovements", totalAmountMovements);

    // Guardar el array actualizado en el localStorage
    localStorage.setItem("movements", JSON.stringify(updatedMovements));

    // actualizar el monto de la categoria elegida

    const categoriesStore = JSON.parse(localStorage.getItem("categories"));

    let idCategory = categoriesStore.find((c) => c.id == nameCategory);

    if (idCategory) {
      idCategory.amount = totalAmountMovements;
    }

    // Guarda el array actualizado en el localStorage
    localStorage.setItem("categories", JSON.stringify(categoriesStore));
  };

  return (
    <>
      <main className="w-full md:m-auto h-screen   p-6 bg-[#ACFADF]">
        <div className="w-full md:w-2/5 m-auto h-[60%]  md:h-[50%] grid items-center">
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
            <h3 className="text-4xl text-center uppercase font-bold text-[#000] ">
              {nameCategory}
            </h3>
          </header>

          <section className=" py-3 flex flex-col  gap-3">
            {!movements.length && (
              <p className="text-[#793FDF] text-xl text-center">
                No movements found.
              </p>
            )}
            {movements.reverse().map((d) => (
              <div className="card w-full bg-[#001C30] shadow-xl">
                <div className="p-6 d-flex flex items-center justify-between">
                  <div className=" flex flex-col gap-4">
                    <h2 className="card-title text-3xl text-[#687EFF]">
                      {d.name}
                    </h2>
                    <span className="text-md text-white font-semibold flex items-center gap-3 ">
                      {transformDate(d.createdAt)}
                    </span>
                  </div>
                  <div className="flex flex-col items-end gap-4">
                  <button
                    onClick={() => handleDeleteCategory(d.id)}
                    className=" btn-primary"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-trash"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#ff2825"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M4 7l16 0" />
                      <path d="M10 11l0 6" />
                      <path d="M14 11l0 6" />
                      <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                      <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                    </svg>
                  </button>
                  <p className="text-4xl text-bold text-gray-50">
                    ${d.amount.toLocaleString()}
                  </p>

                  </div>

                </div>
              </div>
            ))}
          </section>
        </div>
      </main>
    </>
  );
};

export default DetailCategory;
