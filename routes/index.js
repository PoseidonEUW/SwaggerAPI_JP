const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});

// router.listen(3000, () => {
//   console.log('Server listening on port 3000');
// });

module.exports = router;
