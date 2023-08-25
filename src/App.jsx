import "./App.css";
import MainSquare from "./components/MainSquare";

function App() {
  return (
    <>
      <h1 className="m-3 md:m-10">Designed by Amr Ghrbal</h1>
      <div className="w-full flex flex-col justify-center items-center">
        <MainSquare></MainSquare>
      </div>
    </>
  );
}

export default App;
