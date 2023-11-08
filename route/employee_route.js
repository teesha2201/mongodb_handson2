const { addEmpDataInDB, listOfEmp,empmoresalary,empMoreExpr,graduateEmp,updateEmpSalary,deleteEmp} =require("../controller/employee_controller");



const Route = require("express").Router();

Route.post("/empolyeeAdd", addEmpDataInDB);

Route.get("/listOfEmployee", listOfEmp);

Route.get("/moresalary", empmoresalary);

Route.get("/moreExp",empMoreExpr);

Route.get("/graduateemp", graduateEmp);

Route.put("/updatesalary", updateEmpSalary);

Route.delete("/deleteemployee", deleteEmp);

module.exports = Route;