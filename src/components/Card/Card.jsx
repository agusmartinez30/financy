import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const Card = ({ category, onDeleteCategory  }) => {
  let getCategories = JSON.parse(localStorage.getItem("categories"));

  const navigate = useNavigate();


  return (
    <div className={`card rounded-6xl w-full bg-[#001C30] shadow-xl cursor-pointer`} key={category.id}>
      <div className="card-body">
        <div className="flex justify-between">
          <h2
            onClick={(e) => navigate(`/category/movementes/${category.name}`)}
            className="card-title text-2xl font-medium text-[#687EFF]"
          >
            {category.name}
          </h2>
          <button
            onClick={() => onDeleteCategory(category.id)}
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
        </div>
        <p className="text-3xl text-gray-50 font-bold"> ${category.amount}</p>
      </div>
    </div>
  );
};

export default Card;
