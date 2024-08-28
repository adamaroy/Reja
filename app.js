console.log("Web serverini boshlash");
const express = require("express");
const app = express();

const fs = require("fs");

// let user;
// fs.readFile("database/user.json", "utf8", (err, data) => {
//     if (err) {
//         console.error("Error reading user data:", err); // Debug log
//     } else {
//         user = JSON.parse(data);
//         console.log("User data loaded:", user); // Debug log
//     }
// });

// MongoDB chaqirish
const db = require("./server").db();
const mongodb = require("mongodb");

// 1 : KIRISH CODELARI
app.use(express.static("public")); // kirib kelayotgan har bir request uchun public folder ochiq
app.use(express.json()); // REST API uchun work
app.use(express.urlencoded({ extended: true })); // formdan biror narsa post qilsa express server qabul qiladi (yozilmasa express ignore qiladi)

// 2 : Session ga bogliq codelar

// 3 : Views ga bogliq codelar
app.set("views", "views"); // views folderdan viewsni qidiradi
app.set("view engine", "ejs"); // view engineda ejs ishlat buyrugi! // ejs orqali HTML frontend yasaladi backend ichida

// 4: Routinga bogliq codelar

app.post("/create-item", (req, res) => { // post databasega malumotni jonatadi va db ga yozadi
    console.log("Received data for /create-item:", req.body); // Debug log
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({ reja: new_reja }, (err, result) => {
        if (err) {
            console.error("Error inserting data into DB:", err); // Debug log
            res.status(500).json({ error: "Failed to insert item" });
        } else {
            console.log("Data inserted into DB:",result); // Debug log
            res.json({ _id: result.insertedId, reja: new_reja });
        }
    });
});

app.post("/delete-item", (req, res) => {
    const id = req.body.id;
    console.log("Received id for /delete-item:", id); // Debug log
    db.collection("plans").deleteOne({ _id: new mongodb.ObjectId(id) }, (err, data) => {
        if (err) {
            console.error("Error deleting item:", err); // Debug log
            res.status(500).json({ error: "Failed to delete item" });
        } else {
            console.log("Item deleted:", data); // Debug log
            res.json({ state: "Success" });
        }
    });
    // console.log(id);
    // res.end("done");
});

app.post("/edit-item", (req, res) => {
    const data = req.body;
    console.log("Received data for /edit-item:", data); // Debug log
    db.collection("plans").findOneAndUpdate(
        { _id: new mongodb.ObjectId(data.id) },
        { $set: { reja: data.new_input } },
        (err, data) => {
            if (err) {
                console.error("Error updating item:", err); // Debug log
                res.status(500).json({ state: "error" });
            } else {
                console.log("Item updated:", data); // Debug log
                res.json({ state: "success" });
            }
        }
    );
    // res.end("done");
});

app.post("/delete-all", (req, res) => {
    console.log("Received request to delete all plans."); // Debug log

    if (req.body.delete_all) {
        console.log("delete_all flag is true. Proceeding to delete plans."); // Debug log

        db.collection("plans").deleteMany({}, (err, result) => {
            if (err) {
                console.error("Error deleting data from DB:", err); // Error log
                return res.status(500).json({ state: "Error deleting data" });
            }

            console.log("Successfully deleted plans from DB."); // Debug log
            res.json({ state: "hamma rejalar ochirildi" });
        });
    }
    // No else block needed
});


app.get("/", (req, res) => { // get databasedan malumot olib oqish uchun ishlatadi
    console.log("GET request to /"); // Debug log
    db.collection("plans").find().toArray((err, data) => {
        if (err) {
            console.error("Error fetching data from DB:", err); // Debug log
            res.status(500).end("something went wrong");
        } else {
            console.log("Data fetched from DB:", data); // Debug log
            res.render("reja", { items: data });
        }
    });
});

// app.get('/author', (req, res) => {
//     console.log("GET request to /author"); // Debug log
//     res.render("author", { user: user });
// });

module.exports = app;
