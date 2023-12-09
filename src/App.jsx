import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { staticsData } from "./data.jsx";
import ListMovements from "./components/listMovements/ListMovements.jsx";
import Add from "./components/add/Add.jsx";

function App() {
  const [statics, setStatics] = useState(staticsData);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("statics", statics);
  }, []);

  const handleAddCategory = (e) => {
    e.preventDefault();
    navigate("/category/create");
  };

  return (
    <>
      <main className=" w-full h-screen  md:m-auto   flex flex-col justify-between bg-[#fffdfd]">
        <div className="bg-[#001011] h-[30%]">
          <div className="w-[80%] m-auto py-9">
            <header className="d-flex flex justify-between gap-3 py-6 ">
              <h3 className="text-3xl font-semibold text-[#FFF] ">Finan<span className="text-[#7480FF]">cy</span></h3>
              <button onClick={(e) => navigate(`/add`)} className="hidden md:block btn btn-wide btn-primary">ADD</button>
              <Add />
            </header>

            <ListMovements />
            <Add />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
