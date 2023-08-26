import employeeListItem from "./employeeListItem.css"


const EmployeeListItem = (props) => {
  return (
    <div className="EmployeeListItem">
            <img src={props.image} alt="" />
            <ul>
              <li id="first">{props.name}</li>
              <li id="second">{props.job}</li>
            </ul>
    </div>
  )
}

export default EmployeeListItem;