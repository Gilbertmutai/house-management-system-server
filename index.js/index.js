
const express = request("express");
const mysql = require("mysql");
const app = express();
const pool = mysql.createPool({
    host: "localhost",
    user: "foo",
    password: "password",
    database: "house_management_system"
});

app.get("/api/house", (req,res)=>{
    pool.query("SELECT id, name FROM house ", (error, rows) => {
        if (error){
            return res.status(500).json({error});
        }

        res.json(rows);
    });
});

app.listen(9000, () => console.log("App listening on port 9000"));