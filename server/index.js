const express = require("express"),
      ctrl = require("./controllers/messages_controller")
      app = express()

  app.use(express.json())
  app.use(express.static(__dirname + "/../public/build"));

  app.get("/api/messages", ctrl.read)
  app.put("/api/messages/:id", ctrl.update)
  app.post("/api/messages", ctrl.create)
  app.delete("/api/messages/:id", ctrl.delete)

  const port = 3001
  app.listen(port, () => console.log("running on port " + port))

