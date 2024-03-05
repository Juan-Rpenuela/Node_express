const express = require("express");
const app = express();
const PORT = 6969
app.use(express.json());
const UserModel = require("./models/users");
const database = require("./database");
//GET--> Read || No Body
//POST--> Create || Body
//PATCH --> Update || Body
//DELETE --> Delete || No Body|
//POST /users/123
//BODY --> {"name": "minou" ,"age":"3"}
app.get("/users", (req, res) => {
    console.log(database.users);
    res.status(200);
    res.send(database.users);
});

app.post("/users", (req, res) => {
    const { email, name } = req.body;
    if (name !== undefined && email !== undefined) {
        res.status(200);
        res.send("Bien hecho");
        const NewUser = new UserModel(email, name);
        database.users.push(NewUser);
    }
    else {
        res.status(400);
        res.send("Falta usuario o email");
    }
});
app.delete("/users/:email",(req,res) => {
    const {email} = req.params
})

app.listen(PORT, () => {
    console.log(`listening on Port ${PORT}`);
});

