require("dotenv").config();
const express = require("express");
const mysql = require("mysql");
const app = express();
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api/customer", (req, res) => {
    pool.query("SELECT customer_id, name, email, phone_no, image, description FROM customer", (error, rows) => {
        if (error) {
            return res.status(500).json({ error });
        }

        res.json(rows);
    });
});

app.get("/api/customer/:id", (req, res) => {
    pool.query(
        " SELECT customer_id, name, email, phone_no, image, description FROM customer WHERE customer_id = ?",
        [req.params.id],
        (error, rows) => {
            if (error) {
                return res.status(500).json({ error });
            }

            res.json(rows);
        }
    );
});

app.get("/api/house", (req, res) => {
    pool.query("SELECT house_id, name, image, description, customer_id FROM house", (error, rows) => {
        if (error) {
            return res.status(500).json({ error });
        }

        res.json(rows);
    });
});

app.get("/api/house/:id", (req, res) => {
    pool.query(
        " SELECT house_id, name, image, description, customer_id FROM house WHERE house_id = ?",
        [req.params.id],
        (error, rows) => {
            if (error) {
                return res.status(500).json({ error });
            }

            res.json(rows);
        }
    );
});

app.get("/api/house_location", (req, res) => {
    pool.query("SELECT location, street, house_id FROM house_location", (error, rows) => {
        if (error) {
            return res.status(500).json({ error });
        }

        res.json(rows);
    });
});



app.post("/api/customer", (req, res) => {
    const customer = req.body;
    console.log(customer);

    // if ( !name ||!email || !phone_no || !image || !description) {
    //     return res.status(400).json({ error: "Invalid payload" });
    // }

    pool.query(
        "INSERT INTO customer (name, email, phone_no, image, description) VALUES ( ?, ?, ?, ?, ?)",
        [customer.name, customer.email, customer.phone_no, customer.image, customer.description],
        (error, results) => {
            if (error) {
                return res.status(500).json({ error });
            }

            res.json(results.insertId);
        }
    );
});

app.put("/api/customer/:id", (req, res) => {
    const customer = req.body;

    if (!customer.name || customer.email || customer.phone_no || customer.image || customer.description ) {
        return res.status(400).json({ error: "Invalid payload" });
    }

    pool.query(
        "UPDATE INTO customer SET name =?, email =?, phone_id =?, image =?, description =? WHERE id =?",
        [customer.name, customer.email, customer.phone_no, customer.image, customer.description, req.params.id],
        (error, results) => {
            if (error) {
                return res.status(500).json({ error });
            }

            res.json(results.changedRows);
        }
    );
});

app.listen(9000, () => console.log("App listening on port 9000"));