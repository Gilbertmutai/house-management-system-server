
const express = request("express");
const mysql = require("mysql");
const app = express();
const pool = mysql.createPool({
    host: "localhost",
    user: "foo",
    password: "password",
    database: "house_management_system"
});

app.get("/api/customer", (req,res)=>{
    pool.query("SELECT customer_id, name, email, phone_no, image, distription FROM customer ", (error, rows) => {
        if (error){
            return res.status(500).json({error});
        }

        res.json(rows);
    });
});

app.listen(9000, () => console.log("App listening on port 9000"));