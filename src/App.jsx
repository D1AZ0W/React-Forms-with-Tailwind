import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Practices from "./PracticeTailwind";
import Form1 from "./forms/form1";
import Form2 from "./forms/form2";

function Home() {
  return (
    <div>
      <div className="my-4 flex h-20 w-full items-center justify-center rounded-md border-2 border-violet-600 bg-violet-200 p-6">
        <h1 className="text-center font-mono text-4xl font-extrabold text-blue-500">
          Forms created using Tailwind CSS
        </h1>
      </div>
      <div className="mt-2 text-lg text-green-400">
        This site contains all the forms created using React and Tailwind CSS.
        <br />
      </div>
      <div className="formCheck">Check the Forms Below:</div>
      <div className="flex justify-evenly gap-6 mt-2">
        <Link
          to="/Form1"
          className="formlinks  bg-purple-400 hover:bg-purple-800"
        >
          Form 1
        </Link>
        <Link to="/Form2" className="formlinks bg-amber-500 hover:bg-amber-800">
          Form 2
        </Link>
      </div>
      <br />
      <div className="flex flex-center">
        <Link
          to="/PracticeTailwind"
          className="formlinks bg-emerald-500 hover:bg-emerald-800"
        >
          Understanding Tailwind
        </Link>
      </div>
    </div>
  );
}
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PracticeTailwind" element={<Practices />} />
        <Route path="/Form1" element={<Form1 />} />
        <Route path="/Form2" element={<Form2 />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
