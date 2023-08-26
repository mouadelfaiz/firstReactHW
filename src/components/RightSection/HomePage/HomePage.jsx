import Header from "../../LeftSection/Header/Header";
import EmployeeList from "../EmployeeList/EmployeeList";
import SearchBar from "../searchBar/SearchBar";

const HomePage = () => {
  return (
    <div>
      <Header text="Employee Directory"/>
      <SearchBar/>
      <EmployeeList/>
    </div>
  )
}

export default HomePage;