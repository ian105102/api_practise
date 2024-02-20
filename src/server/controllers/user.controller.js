// article.controller.js
import userModule from '../modules/user.module';
import bcrypt from 'bcrypt';
import APPError from '../helper/AppError';

/* Article  POST 新增 */
const userPost = (req, res) => {
  // 取得新增參數
  const insertValues = {
    user_name: req.body.user_name,
    user_mail: req.body.user_mail,
    user_password: bcrypt.hashSync(req.body.user_password, 10) // 密碼加密
  };

  userModule.createUser(insertValues).then((result) => {
    res.send(result); // 成功回傳result結果
  }).catch((err) => { return res.send(err); }); // 失敗回傳錯誤訊息
};

/*  Article GET 取得  */
const userGet = (req, res) => {
  userModule.selectUser().then((result) => {
    res.send(result); // 成功回傳result結果
  }).catch((err) => { return res.send(err); }); // 失敗回傳錯誤訊息
};

const userPut = (req, res) => {
  // 取得修改id
  const userId = req.params.user_id;
  // 取得修改參數
  const insertValues = req.body;
  userModule.modifyUser(insertValues, userId).then((result) => {
    res.send(result); // 回傳修改成功訊息
  }).catch((err) => { return res.send(err); }); // 失敗回傳錯誤訊息
};


const userDelete = (req, res) => {
  // 取得刪除id
  const userId = req.params.user_id;
  userModule.deleteUser(userId).then((result) => {
    res.send(result); // 回傳刪除成功訊息
  }).catch((err) => { return res.send(err); }); // 失敗回傳錯誤訊息
};

const userLogin = (req, res, next) => {
  // 取得帳密
  const insertValues = req.body;
  userModule.selectUserLogin(insertValues).then((result) => {
    console.log(result.payload);
    if (result.payload !== undefined) {
       req.session.user = {user_id:result.payload.user_id, user_name:result.payload.user_name,user_mail:result.payload.user_mail}; 
       res.cookie('sessionId', req.sessionID, { maxAge: 86400000, httpOnly: true });
     }
    res.send({code:result.code,message:result.message,token:result.token}); // 成功回傳result結果
  }).catch((error) => { next(error); }); // 失敗回傳錯誤訊息
};



const cheackLogin = (req, res, next) => {
  console.log(req.session.user);
  if (req.session.user) {
    res.json({ code: 200, status: 'success', message: '您已成功登錄！', user: req.session.user });
  } else {
    res.json({ code: 401, status: 'error', message: '請先登錄以訪問該頁面。' });
  }
};


const logout = (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ code: 500, status: 'error', message: '登出失败' });
    } else {
      res.clearCookie('connect.sid');
      res.clearCookie('sessionId');
      res.json({ code: 200, status: 'success', message: '登出成功' });
    }
  });
};

export default {
  userPost,userGet,userPut,userDelete,userLogin,cheackLogin,logout
};