import express from "express";

const app = express();

app.get("/", async (req, res) => {
    console.log("node server1 is running");
    res.json({message: "node server1 is running"});
});


// Port
const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});