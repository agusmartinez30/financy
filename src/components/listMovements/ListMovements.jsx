import React from "react";
import { useState } from "react";
import Card from "../Card/Card.jsx";
import { useEffect } from "react";

const ListMovements = () => {
  const [statics, setStatics] = useState(
    JSON.parse(localStorage.getItem("categories")) || []
  );
  let [categories, setCategories] = useState([])

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

  const handleDeleteCategory = (id) => {
    // Filtrar las categorías y actualizar el estado
    const updatedCategories = categories.filter((category) => category.id !== id);
    setCategories(updatedCategories);

    // Guardar el array actualizado en el localStorage
    localStorage.setItem('categories', JSON.stringify(updatedCategories));
  };

  useEffect(() => {
    // Cargar las categorías desde el localStorage al montar el componente
    const storedCategories = JSON.parse(localStorage.getItem('categories')) || [];
    setCategories(storedCategories);
  }, []);

  return (
    <>
    <section className="grid grid-cols-1 md:grid-cols-3 flex-col py-4 gap-4  place-content-center ">
      
      {categories.map((category, idx) => (
        <Card  
          category={category} 
          onDeleteCategory={handleDeleteCategory}
        />
      ))}
     
      {/* <article
        onClick={(e) => handleAddCategory(e)}
        className="bg-[#000000] col-span-2 rounded-md grid place-content-center py-3"
      >
        <span className="text-md text-white ">ADD CATEGORY</span>
      </article> */}
    </section>
    {!statics.length && (
        <div className="relative top-8">

        <p className="text-[#000] text-xl text-center">
          No movements found.
          <br/>
          <span>add a category to get started</span>
        </p>
        </div>
      )}
    </>
  );
};

export default ListMovements;
