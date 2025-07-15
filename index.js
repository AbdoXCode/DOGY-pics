import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.post("/random-dog", async (req, res) => {
  try {
    const response = await axios.get("https://dog.ceo/api/breeds/image/random");
    res.render("index.ejs", { img: response.data.message });
  } catch (error) {
    res.status(404).send("Request failed");
  }
});

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
