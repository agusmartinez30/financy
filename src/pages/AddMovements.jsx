import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddMovements = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("categories"));
    if (!data) data = [];
    setCategories(data);
  }, []);

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

    let movements = {
      id: name,
      name: name,
      amount: amount,
      category: category,
      bgColor: obtenerColorAleatorio(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    let movementsStore = JSON.parse(localStorage.getItem("movements")) || [];

    // Agrega el nuevo objeto al array
    movementsStore.push(movements);

    // Guarda el array actualizado en el localStorage
    localStorage.setItem("movements", JSON.stringify(movementsStore));

    // actualizar el monto de la categoria elegida

    const categoriesStore = JSON.parse(localStorage.getItem("categories"));

    let idCategory = categoriesStore.find((c) => c.id == category);

    if (idCategory) {
      idCategory.amount = parseInt(idCategory.amount) + parseInt(amount);
    }

    // Guarda el array actualizado en el localStorage
    localStorage.setItem("categories", JSON.stringify(categoriesStore));

    navigate("/");
  };

  return (
    <main className=" w-full md:w-1/2 md:m-auto h-screen p-6 bg-[#fffdfd]">
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
      <h2 className="text-[#000] text-center text-xl">Add new movements</h2>
      <section className="grid  content-center py-6 gap-6 ">
        <form className="grid gap-6" onSubmit={(e) => saveData(e)}>
          <div className="">
            <label className="form-control w-full">
              <div className="label">
                <span className="text-md text-[#000]">Category</span>
              </div>
              <select
                onChange={(e) => setCategory(e.target.value)}
                className="select select-bordered w-full"
              >
                <option>Select category</option>

                {categories.length &&
                  categories.map((c) => <option>{c.name}</option>)}
                {!categories.length && <option>Not categories found</option>}
              </select>
            </label>
          </div>
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
          <div className="">
            <label className="form-control w-full">
              <div className="label">
                <span className="text-md text-[#000]">Amount</span>
              </div>
              <input
                type="number"
                placeholder="..."
                className="input input-bordered w-full"
                onChange={(e) => setAmount(e.target.value)}
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
            <button  className="btn btn-primary w-full" >ADD</button>
          </footer>
        </form>
      </section>
    </main>
  );
};

export default AddMovements;
