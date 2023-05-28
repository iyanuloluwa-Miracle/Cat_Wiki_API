const router = require('express').Router();
const userController = require('../controllers/userController')

router.get('/', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});
router.get('/breeds', userController.getBreeds)
router.get('/breeds/search', userController.searchBreeds)
router.get('/breeds/:id/photos', userController.viewBreeds)
router.get('/top-friendly', userController.topFriendlyBreeds)
router.get('/intelligent', userController.intelligentBreeds)



module.exports = router;
