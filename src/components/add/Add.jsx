import React from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();

  const handleAdd = (e) => {
    e.preventDefault();
    alert("ADD BILLS");
  };

  return (
    <footer className="md:hidden  fixed bottom-10 left-0 w-[100%] p-4 grid place-content-center ">
      <button onClick={(e) => navigate(`/add`)} className="btn btn-wide btn-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-plus"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#ffffff"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 5l0 14" />
          <path d="M5 12l14 0" />
        </svg>
      </button>
    </footer>
  );
};

// onClick={(e) => navigate(`/add`)}
export default Add;
