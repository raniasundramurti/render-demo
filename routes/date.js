import express from 'express';
var router = express.Router();

/* GET api/getTime listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  console.log("Getting time!");
  res.type("txt")
  res.send(getTime())
});

/* GET api/getTime/json */
router.get('/json', (req, res) => {
  console.log("Getting time (as JSON)!");
  res.type("json");
  res.send({
    "now": getTime()
  })
})

function getTime() {
  return new Date();
}

export default router;
