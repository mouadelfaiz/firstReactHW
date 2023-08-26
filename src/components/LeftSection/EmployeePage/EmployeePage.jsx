import EmployeeInfo from "../EmployeeInfo/EmployeeInfo";
import Header from "../Header/Header";

const EmployeePage = () => {
return (
  <div>
    <Header className="header" text="Employee"/>
    <EmployeeInfo/>
  </div>
)
}

export default EmployeePage;