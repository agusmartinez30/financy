import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const navigate = useNavigate();

  function obtenerColorAleatorio() {
    // Array de colores disponibles
    var colores = [
      "#ff5733",
      "#33ff57",
      "#5733ff",
      "#ff3366",
      "#33a1ff",
      "#ffcc33",
    ];

    // Obtener un índice aleatorio del array
    var indiceAleatorio = Math.floor(Math.random() * colores.length);

    // Devolver el color correspondiente al índice aleatorio
    return colores[indiceAleatorio];
  }

  const saveData = (e) => {
    e.preventDefault();

    let category = {
      id: name,
      name: name,
      amount: 0,
      bgColor: obtenerColorAleatorio(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    let categoriasStore = JSON.parse(localStorage.getItem("categories")) || [];

    // Agrega el nuevo objeto al array
    categoriasStore.push(category);

    // Guarda el array actualizado en el localStorage
    localStorage.setItem("categories", JSON.stringify(categoriasStore));

    navigate("/");
  };

  return (
    <main className="w-full md:m-auto h-screen   p-6 bg-[#fffdfd]">
      <div className="w-full md:w-2/5 m-auto h-[60%]  md:h-[50%] grid items-center">
        <header className="w-full text-center flex gap-6 py-6 ">
          <button onClick={() => navigate("/add")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-chevron-left"
              width="35"
              height="35"
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
        </header>
        <h2 className="text-[#000] text-center text-xl">Add new category</h2>
        <section className="grid content-center py-6  gap-4 ">
          <form onSubmit={(e) => saveData(e)}>
            <div className="">
              <label className="form-control w-full">
                <div className="label">
                  <span className="text-md text-[#000]">Description</span>
                </div>
                <input
                  type="text"
                  placeholder="..."
                  className="input input-bordered input-accent w-full "
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
            </div>
            {/* <div>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Amount</span>
            </div>
            <input
              type="number"
              placeholder="..."
              className="input input-bordered w-full "
              onChange={(e) => handleAmount(e)}
            />
          </label>
        </div> */}
            <footer className="py-6">
              <button className="btn btn-primary w-full">ADD</button>
            </footer>
          </form>
        </section>
      </div>
    </main>
  );
};

export default AddCategory;
