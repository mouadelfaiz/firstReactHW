import employeeInfo from "./employeeInfo.css"
const EmployeeInfo = () => {
  return (
    <div className="EmployeeInfo">
      <div className="employeeName">
        <img src="\src\components\images\face3.jpg" alt="" />
        <ul>
          <li><h3>Julie Taylor</h3></li>
          <li><p>VP of Marketing</p></li>
        </ul>
      </div>
      <div className="details">
        <h3 className="headline">Call Office</h3>
        <p className="para">781-000-0002</p>
      </div>
      <div className="details">
      <h3 className="headline">Call Mobile</h3>
        <p className="para">781-000-0002</p>
      </div>
      <div className="details">
      <h3 className="headline">SMS</h3>
        <p className="para">781-000-0002</p>
      </div>
      <div className="details bottom">
      <h3 className="headline">Email</h3>
        <p className="para">781-000-0002</p>
      </div>
    </div>
  )
}

export default EmployeeInfo