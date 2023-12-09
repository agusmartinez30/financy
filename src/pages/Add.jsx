import React from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();
  return (
    <>
      <main className=" w-full md:m-auto h-screen   p-6 bg-[#fffdfd]">
        <div className="w-full md:w-1/2 m-auto h-[60%]  md:h-[50%] grid items-center ">
          <header className="w-full text-center flex gap-6 py-6 ">
            <button onClick={() => navigate("/")}>
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
          <section className="w-full md:w-1/2 md:h-[80%]  grid content m-auto  gap-4  ">
            <h2 className="text-[#000] text-center text-xl">
              What do you want to add?
            </h2>

            <button
              onClick={(e) => navigate(`/add/category`)}
              className="btn btn-primary "
            >
              Category
            </button>
            <button
              onClick={(e) => navigate(`/add/movementes`)}
              className="btn btn-primary "
            >
              Movement
            </button>
          </section>
        </div>
      </main>
    </>
  );
};

export default Add;
