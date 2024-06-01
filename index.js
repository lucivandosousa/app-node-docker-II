const express = require("express")

const app = express()

const port = 3000

app.get("/", (req, res) => {
  res.status(200).send("API com Express e Docker")
})

app.listen(port, () => console.log(`Server listening on port ${port}`))