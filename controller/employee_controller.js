const {database} =require("../config/db");
const collection = database.collection("Employee");


const addEmpDataInDB = async (req,res) => {
    const details =req.body;
    const dataPush = await collection.insertMany(details);
    console.log(dataPush);
    res.send("Data added Successfully in DataBase");
};
const listOfEmp  = async (req,res) =>{
    const details =req.body;
    const dataList = await collection.find(details).toArray();
    console.log(dataList);
    res.json(dataList)
};
const empmoresalary = async (req, res) => {
    const details = req.body;
    const moresalary = await collection
      .find({ salary: { $gt: "30000" } })
      .toArray();
    console.log(moresalary);
    res.json(moresalary);
  };
const empMoreExpr = async (req, res) => {
    const details = req.body;
    const moreExpr = await collection
      .find({ overallExp: { $gt: "2" } })
      .toArray();
    console.log(moreExpr);
    res.json(moreExpr);
  };
  const graduateEmp = async (req, res) => {
    const details = req.body;
    const graduate = await collection
      .find({ yearGrad: { $gt: "2015" }, overallExp: { $gt: "1" } })
      .toArray();
    console.log(graduate);
    res.json(graduate);
  };
  const updateEmpSalary = async (req, res) => {
    const details = req.body;
    const updateSalary = await collection.updateMany(
      { salary: { $gt: "70000" } },
      { $set: { salary: "65000" } }
    );
    console.log(updateSalary);
    res.json(updateSalary);
  };
  
  const deleteEmp = async (req, res) => {
    const details = req.body;
    const deletedata = await collection.deleteMany({ lastCompany: "Y" });
    console.log(deletedata);
    res.send("Delete Successfully from the database");
  };
  
module.exports = { addEmpDataInDB, listOfEmp,empmoresalary,empMoreExpr,graduateEmp,updateEmpSalary,deleteEmp };