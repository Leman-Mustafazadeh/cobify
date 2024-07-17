const express = require("express");
const mongoose = require("mongoose");
// const CONNECTION_STRING =
//   "mongodb+srv://laman:laman2004@cluster0.mbrvjt8.mongodb.net/";
// const DB_PASSWORD = "laman2004";
// const DB_USERNAME = "laman";
const PORT = 5050;
const cors = require("cors");
const app = express();
app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.json());

const demoSchema = new mongoose.Schema(
  {
    imgSrc: String,
    price: Number,
    name: String,
    title: String,
  },
  { timestamps: true }
);

const Model = mongoose.model("Demo", demoSchema);

app.get('/demo', async (req, res) => {
  const found = await Model.find()
  try { res.send(found) }
  catch { res.send("cannt get") }
})
app.get('/demo/:id', async (req, res) => {
  const { id } = req.params
  const found = await Model.findById(id)
  try { res.send(found) }
  catch { res.send("cannt get") }
})
app.post('/demo', async (req, res) => {
  const newItem = new Model(req.body)
  newItem.save()
  try { res.send(newItem) }
  catch { res.send("cannt get") }
})
app.delete('/demo/:id', async (req, res) => {
  const { id } = req.params
  const delit = await Model.findByIdAndDelete(id)
  try { res.send(delit) }
  catch { res.send("cannt del") }
})

app.patch("/demo/:id", async (req, res) => {
  const { id } = req.params;
  await Model.findByIdAndUpdate(id, req.body);
  const demos =  await Model.findById(id);
  res.send({
    message: "posted",
    data: demos,
  });
});




const userSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
  },
  { timestamps: true }
);
const UserModel = mongoose.model("Users", userSchema);

app.get('/users', async (req, res) => {
  const found = await UserModel.find()
  try { res.send(found) }
  catch { res.send("cannt get") }
})
app.get('/users/:id', async (req, res) => {
  const { id } = req.params
  const found = await UserModel.findById(id)
  try { res.send(found) }
  catch { res.send("cannt get") }
})
app.post('/users', async (req, res) => {
  const newItem = new UserModel(req.body)
  newItem.save()
  try { res.send(newItem) }
  catch { res.send("cannt get") }
})
app.delete('/users/:id', async (req, res) => {
  const { id } = req.params
  const delit = await UserModel.findByIdAndDelete(id)
  try { res.send(delit) }
  catch { res.send("cannt del") }
})

app.patch("/users/:id", async (req, res) => {
  const { id } = req.params;
  await Model.findByIdAndUpdate(id, req.body);
  const demos =  await UserModel.findById(id);
  res.send({
    message: "posted",
    data: demos,
  });
});








mongoose
  .connect("mongodb+srv://laman:laman123@data.66kt1cu.mongodb.net/")
  .then(() => console.log("connected"));

// mongoose.connect(CONNECTION_STRING).then(() => console.log("Connected!"));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});