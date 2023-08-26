import EmployeeListItem from "../EmployeeListItem/EmployeeListItem";
import employeeList from "./employeeList.css"

const EmployeeList = () => {
  const employeeListItems = [
    { id: 1,image: "./src/components/images/face1.jpg", name: "James King", job: "President and CEO" },{ id: 2,image: "./src/components/images/face3.jpg", name: "Julie Taylor", job: "VP of Marketing" },
    { id: 3,image: "./src/components/images/face2.jpg", name: "Eugene Lee", job: "CFO" },
    { id: 4,image: "./src/components/images/face4.jpg", name: "Maria Williams", job: "VP of Engineering" },
    { id: 5,image: "https://as1.ftcdn.net/v2/jpg/02/18/96/20/1000_F_218962089_yhRnVKTr3q4Dzvi0Pe2nbXxmB5CYW2GK.jpg", name: "Ray Moore", job: "VP of Sales" },
    { id: 6,image: "https://cdn4.vectorstock.com/i/1000x1000/73/23/educated-smart-women-circular-icon-graphic-vector-19277323.jpg", name: "Sara Jones", job: "QA Manager" },]
  return (
    <div className="EmployeeList">
      {employeeListItems.map((e) => {
        return <EmployeeListItem image={e.image} name={e.name} job={e.job}/>
      })}
    </div>
  )
}

export default EmployeeList;