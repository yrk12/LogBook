import React from "react";
import "./index.scss";
import AddEmployee from "./addEmployee";
import ShowAllData from "./showAllEmployees";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";


function AdminDashBoard(){
  
  React.useEffect(() => {
    getAllEmployees();
  }, [])
  var [dataSet, setDataSet] = React.useState(false);
  var[allData, setAllData] = React.useState([]);
  var [isAddEmployeeShow, setIsEmployee] = React.useState(false);
  function handleAddEmployee(){
    setIsEmployee(!isAddEmployeeShow);
  }

  const getAllEmployees = async () => {
    var response = await axios.get("/getEmployees");
    setAllData(response.data);
    setDataSet(true);
    // console.log(response);
  } 


    const isAdmin = useSelector((state) => state.isAdmin);
    // console.log(isAdmin);
    if(isAdmin === false){
        return (
            <div>
                Please Login with Admin id
            </div>
        )
    }
    return (
      <div className="admin">
        <div className="top-part">
          <h3>All Employees</h3>
          <button onClick = {handleAddEmployee}>Add + </button>
        </div>
       {dataSet && <ShowAllData props = {allData}/>}
        {isAddEmployeeShow && <AddEmployee/>}
       
      </div>
    );
};

export default AdminDashBoard;

