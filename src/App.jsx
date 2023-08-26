import "./App.css";
import EmployeePage from "./components/LeftSection/EmployeePage/EmployeePage";
import HomePage from "./components/RightSection/HomePage/HomePage";

  

function App() {
  return (
    <div className="App">
      <div className="HomePage">
        <HomePage/>
      </div>
      <div className="EmployeePage">
        <EmployeePage />
      </div>
    </div>
  );
}

export default App;
