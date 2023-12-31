import { useNavigate } from "react-router-dom";
import ListMovements from "./components/listMovements/ListMovements.jsx";
import Add from "./components/add/Add.jsx";

function App() {
  const navigate = useNavigate();

  return (
    <>
      <main className=" w-full h-screen  md:m-auto    flex-col justify-between bg-[#ACFADF]">
          <div className="w-[80%] m-auto">
            <header className="d-flex flex justify-between gap-3 py-6 ">
              <h3 className="text-6xl font-bold text-[#000] ">Finan<span className="text-[#7480FF]">cy</span></h3>
              <button onClick={(e) => navigate(`/add`)} className="hidden md:block btn btn-wide btn-primary">ADD</button>
              <Add />
            </header>
            <ListMovements />
            <Add />
          </div>
      </main>
    </>
  );
}

export default App;
