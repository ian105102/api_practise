// article.route.js
import express from 'express';
import validate from 'express-validation';  
import articleCtrl from '../controllers/article.controller';
import paramValidation from '../../config/param-validation';
const router = express.Router();

const ensureToken = (req, res, next) => {
    const bearerHeader = req.headers.authorization;
    if (typeof bearerHeader !== 'undefined') {
      const bearer = bearerHeader.split(' '); // 字串切割
      const bearerToken = bearer[1]; // 取得 JWT
      req.token = bearerToken; // 在response中建立一個token參數
      next(); // 結束 Middleware 進入 articleCtrl.articlePersonalGet
    } else {
      res.status(403).send(Object.assign({ code: 403 }, { message: '您尚未登入！' })); // Header 查無 Rearer Token
    }
  };



router.get('/personal', ensureToken, articleCtrl.articlePersonalGet); /** 取得 Article 值組 */
router.route('/').post(validate(paramValidation.createArticle), articleCtrl.articlePost); /** 新增 Article 值組 */
router.route('/').get(articleCtrl.articleGet) /** 取得 Article 所有值組 */

router.route('/:article_id').put(articleCtrl.articlePut);
router.route('/:article_id').delete(articleCtrl.articleDelete); /** 刪除 Article 值組 */

export default router;