const messageList = []
let id = 0;


module.exports = {

  create: (req,res) => {
    let { text, time } = req.body
    const message= {
      id,
      text,
      time
    }
    messageList.push(message);
    id++
    res.status(200).send(messageList);
  },

  read: (req, res) => {
    res.status(200).send(messageList);
  },

  update: (req, res) => {
    let messageObj = messageList.find(message => +req.params.id === message.id)

      messageObj = {
        id: messageObj.id,
        text: req.body.text || messageList.text,
        time: messageObj.time
      }
    res.status(200).send(messageList)
  },

  delete:(req,res) => {
    let index = messageList.findIndex(element => req.params.id === element.id)
    messageList.splice(index,1);
    res.status(200).send(messageList);
  }


}