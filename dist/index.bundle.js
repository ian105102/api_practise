/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/config/config.js":
/*!******************************!*\
  !*** ./src/config/config.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! joi */ \"joi\");\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(joi__WEBPACK_IMPORTED_MODULE_0__);\n\n// require and configure dotenv, will load vars in .env in PROCESS.ENV\n(__webpack_require__(/*! dotenv */ \"dotenv\").config)();\n\n// 建立每個變數 joi 驗證規則\nconst envVarSchema = joi__WEBPACK_IMPORTED_MODULE_0___default().object().keys({\n  NODE_ENV: joi__WEBPACK_IMPORTED_MODULE_0___default().string().default('development').allow('development', 'production'),\n  // 字串且預設值為development 並只允許兩種參數\n  PORT: joi__WEBPACK_IMPORTED_MODULE_0___default().number().default(8080),\n  // 數字且預設值為 8080\n  MYSQL_PORT: joi__WEBPACK_IMPORTED_MODULE_0___default().number().default(3306),\n  //數字且預設值為3306\n  MYSQL_HOST: joi__WEBPACK_IMPORTED_MODULE_0___default().string().default('127.0.0.1'),\n  //字串取預設值為127.0.0.1\n  MYSQL_USER: joi__WEBPACK_IMPORTED_MODULE_0___default().string(),\n  // 字串\n  MYSQL_PASS: joi__WEBPACK_IMPORTED_MODULE_0___default().string(),\n  // 字串\n  MYSQL_NAME: joi__WEBPACK_IMPORTED_MODULE_0___default().string(),\n  // 字串\n  VERSION: joi__WEBPACK_IMPORTED_MODULE_0___default().string() // 字串\n}).unknown().required();\n\n// process.env 撈取 .env 內的變數做 joi 驗證\nconst {\n  error,\n  value: envVars\n} = envVarSchema.validate(process.env);\nif (error) {\n  throw new Error(`Config validation error: ${error.message}`);\n}\nconst config = {\n  version: envVars.VERSION,\n  // API版本\n  env: envVars.NODE_ENV,\n  // 開發模式(development、production)\n  port: envVars.PORT,\n  // API 阜號\n  mysqlPort: envVars.MYSQL_PORT,\n  // 連接阜號(MYSQL_PORT)\n  mysqlHost: envVars.MYSQL_HOST,\n  // 主機名稱 (MYSQL_HOST)\n  mysqlUserName: envVars.MYSQL_USER,\n  // 用戶名稱 (MYSQL_USER)\n  mysqlPass: envVars.MYSQL_PASS,\n  // 資料庫密碼(MYSQL_PASS)\n  mysqlDatabase: envVars.MYSQL_DATABASE // 資料庫名稱(MYSQL_DATABASE)\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);\n\n//# sourceURL=webpack://ex4/./src/config/config.js?");

/***/ }),

/***/ "./src/config/express.js":
/*!*******************************!*\
  !*** ./src/config/express.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ \"./src/config/config.js\");\n/* harmony import */ var _server_routes_index_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../server/routes/index.route */ \"./src/server/routes/index.route.js\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _server_helper_AppError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../server/helper/AppError */ \"./src/server/helper/AppError.js\");\n/* express.js */\n\n\n\n\n\n\n\nconst cookieParser = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\nconst session = __webpack_require__(/*! express-session */ \"express-session\");\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nconst corsOptions = {\n  origin: 'http://127.0.0.1:3000',\n  credentials: true,\n  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',\n  optionsSuccessStatus: 204 // 一些瀏覽器需要設置 204\n};\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default()[\"static\"]('public'));\napp.use(cookieParser());\napp.use(cors__WEBPACK_IMPORTED_MODULE_4___default()(corsOptions));\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default().json());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default().urlencoded({\n  extended: true\n}));\napp.use(morgan__WEBPACK_IMPORTED_MODULE_5___default()('dev'));\napp.use(session({\n  secret: '#CPKJShgQgd)W>Z:$j-6.:2fa:&Hg7',\n  resave: false,\n  saveUninitialized: true,\n  cookie: {\n    maxAge: 60 * 60 * 1000 // 設定 Session 存活時間為 1 小時（以毫秒為單位）\n  }\n}));\napp.use((err, req, res, next) => {\n  let errorMessage;\n  let errorCode;\n  let errorStatus;\n  // express validation error 所有傳入參數驗證錯誤\n  if (err instanceof expressValidation.ValidationError) {\n    if (err.errors[0].location === 'query' || err.errors[0].location === 'body') {\n      errorMessage = err.errors[0].messages;\n      errorCode = 400;\n      errorStatus = httpStatus.BAD_REQUEST;\n    }\n    const error = new _server_helper_AppError__WEBPACK_IMPORTED_MODULE_6__[\"default\"].APIError(errorMessage, errorStatus, true, errorCode);\n    return next(error);\n  }\n  return next(err);\n});\n\n// error handler, send stacktrace only during development 錯誤後最後才跑這邊\napp.use((err, req, res, next) => {\n  res.status(err.status).json({\n    message: err.isPublic ? err.message : httpStatus[err.status],\n    code: err.code ? err.code : httpStatus[err.status],\n    stack: _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].env === 'development' ? err.stack : {}\n  });\n  next();\n});\napp.use('/api', _server_routes_index_route__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);\n\n//# sourceURL=webpack://ex4/./src/config/express.js?");

/***/ }),

/***/ "./src/config/param-validation.js":
/*!****************************************!*\
  !*** ./src/config/param-validation.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! joi */ \"joi\");\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(joi__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  // POST /api/article\n  createArticle: {\n    body: {\n      user_id: joi__WEBPACK_IMPORTED_MODULE_0___default().number().required(),\n      // 數字＋必填\n      article_title: joi__WEBPACK_IMPORTED_MODULE_0___default().string().required(),\n      // 字串＋必填\n      article_tag: joi__WEBPACK_IMPORTED_MODULE_0___default().string().required(),\n      // 字串＋必填\n      article_content: joi__WEBPACK_IMPORTED_MODULE_0___default().string().min(20).required() // 文章長度至少20字\n    }\n  },\n  // POST /api/user\n  createUser: {\n    body: {\n      user_name: joi__WEBPACK_IMPORTED_MODULE_0___default().string().required(),\n      // 字串＋必填\n      user_mail: joi__WEBPACK_IMPORTED_MODULE_0___default().string().email().trim().required(),\n      // 限定email格式並移除多餘空白\n      user_password: joi__WEBPACK_IMPORTED_MODULE_0___default().string().regex(/[a-zA-Z0-9]{6,30}$/).required() // 最小長度6最大30，只允許英文大小寫和數字\n    }\n  }\n});\n\n//# sourceURL=webpack://ex4/./src/config/param-validation.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config/config */ \"./src/config/config.js\");\n/* harmony import */ var _config_express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config/express */ \"./src/config/express.js\");\n\n\nif (__webpack_require__.c[__webpack_require__.s]) {\n  // listen on port config.port\n  _config_express__WEBPACK_IMPORTED_MODULE_1__[\"default\"].listen(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port, () => {\n    console.log(`server started on  port http://127.0.0.1:${_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port} (${_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].env})`);\n  });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_config_express__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n//# sourceURL=webpack://ex4/./src/index.js?");

/***/ }),

/***/ "./src/server/controllers/article.controller.js":
/*!******************************************************!*\
  !*** ./src/server/controllers/article.controller.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modules_article_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/article.module */ \"./src/server/modules/article.module.js\");\n// article.controller.js\n\n\n/* Article  POST 新增 */\nconst articlePost = (req, res) => {\n  // 取得新增參數\n  const insertValues = req.body;\n  _modules_article_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createArticle(insertValues).then(result => {\n    res.send(result); // 成功回傳result結果\n  }).catch(err => {\n    return res.send(err);\n  }); // 失敗回傳錯誤訊息\n};\n\n/*  Article GET 取得  */\nconst articleGet = (req, res) => {\n  _modules_article_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].selectArticle().then(result => {\n    res.send(result); // 成功回傳result結果\n  }).catch(err => {\n    return res.send(err);\n  }); // 失敗回傳錯誤訊息\n};\nconst articlePut = (req, res) => {\n  // 取得修改id\n  const userId = req.params.article_id;\n  // 取得修改參數\n  const insertValues = req.body;\n  _modules_article_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].modifyArticle(insertValues, userId).then(result => {\n    res.send(result); // 回傳修改成功訊息\n  }).catch(err => {\n    return res.send(err);\n  }); // 失敗回傳錯誤訊息\n};\nconst articleDelete = (req, res) => {\n  // 取得刪除id\n  const userId = req.params.article_id;\n  _modules_article_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteArticle(userId).then(result => {\n    res.send(result); // 回傳刪除成功訊息\n  }).catch(err => {\n    return res.send(err);\n  }); // 失敗回傳錯誤訊息\n};\nconst articlePersonalGet = (req, res) => {\n  _modules_article_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].selectPersonalArticle(req.token).then(result => {\n    res.send(result); // 成功回傳result結果\n  }).catch(err => {\n    return res.status(401).send(err);\n  }); // 失敗回傳錯誤訊息\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  articlePost,\n  articleGet,\n  articlePut,\n  articleDelete,\n  articlePersonalGet\n});\n\n//# sourceURL=webpack://ex4/./src/server/controllers/article.controller.js?");

/***/ }),

/***/ "./src/server/controllers/user.controller.js":
/*!***************************************************!*\
  !*** ./src/server/controllers/user.controller.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modules_user_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/user.module */ \"./src/server/modules/user.module.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helper_AppError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper/AppError */ \"./src/server/helper/AppError.js\");\n// article.controller.js\n\n\n\n\n/* Article  POST 新增 */\nconst userPost = (req, res) => {\n  // 取得新增參數\n  const insertValues = {\n    user_name: req.body.user_name,\n    user_mail: req.body.user_mail,\n    user_password: bcrypt__WEBPACK_IMPORTED_MODULE_1___default().hashSync(req.body.user_password, 10) // 密碼加密\n  };\n  _modules_user_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createUser(insertValues).then(result => {\n    res.send(result); // 成功回傳result結果\n  }).catch(err => {\n    return res.send(err);\n  }); // 失敗回傳錯誤訊息\n};\n\n/*  Article GET 取得  */\nconst userGet = (req, res) => {\n  _modules_user_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].selectUser().then(result => {\n    res.send(result); // 成功回傳result結果\n  }).catch(err => {\n    return res.send(err);\n  }); // 失敗回傳錯誤訊息\n};\nconst userPut = (req, res) => {\n  // 取得修改id\n  const userId = req.params.user_id;\n  // 取得修改參數\n  const insertValues = req.body;\n  _modules_user_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].modifyUser(insertValues, userId).then(result => {\n    res.send(result); // 回傳修改成功訊息\n  }).catch(err => {\n    return res.send(err);\n  }); // 失敗回傳錯誤訊息\n};\nconst userDelete = (req, res) => {\n  // 取得刪除id\n  const userId = req.params.user_id;\n  _modules_user_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteUser(userId).then(result => {\n    res.send(result); // 回傳刪除成功訊息\n  }).catch(err => {\n    return res.send(err);\n  }); // 失敗回傳錯誤訊息\n};\nconst userLogin = (req, res, next) => {\n  // 取得帳密\n  const insertValues = req.body;\n  _modules_user_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].selectUserLogin(insertValues).then(result => {\n    console.log(result.payload);\n    if (result.payload !== undefined) {\n      req.session.user = {\n        user_id: result.payload.user_id,\n        user_name: result.payload.user_name,\n        user_mail: result.payload.user_mail\n      };\n      res.cookie('sessionId', req.sessionID, {\n        maxAge: 86400000,\n        httpOnly: true\n      });\n    }\n    res.send({\n      code: result.code,\n      message: result.message,\n      token: result.token\n    }); // 成功回傳result結果\n  }).catch(error => {\n    next(error);\n  }); // 失敗回傳錯誤訊息\n};\nconst cheackLogin = (req, res, next) => {\n  console.log(req.session.user);\n  if (req.session.user) {\n    res.json({\n      code: 200,\n      status: 'success',\n      message: '您已成功登錄！',\n      user: req.session.user\n    });\n  } else {\n    res.json({\n      code: 401,\n      status: 'error',\n      message: '請先登錄以訪問該頁面。'\n    });\n  }\n};\nconst logout = (req, res, next) => {\n  req.session.destroy(err => {\n    if (err) {\n      console.error(err);\n      res.status(500).json({\n        code: 500,\n        status: 'error',\n        message: '登出失败'\n      });\n    } else {\n      res.clearCookie('connect.sid');\n      res.clearCookie('sessionId');\n      res.json({\n        code: 200,\n        status: 'success',\n        message: '登出成功'\n      });\n    }\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  userPost,\n  userGet,\n  userPut,\n  userDelete,\n  userLogin,\n  cheackLogin,\n  logout\n});\n\n//# sourceURL=webpack://ex4/./src/server/controllers/user.controller.js?");

/***/ }),

/***/ "./src/server/helper/AppError.js":
/*!***************************************!*\
  !*** ./src/server/helper/AppError.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http-status */ \"http-status\");\n/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http_status__WEBPACK_IMPORTED_MODULE_0__);\n\n\n/**\r\n * @extends Error\r\n */\nclass ExtendableError extends Error {\n  constructor(message, status, isPublic, code) {\n    super(message);\n    this.message = message;\n    this.name = this.constructor.name;\n    this.status = status;\n    this.isPublic = isPublic;\n    this.code = code;\n    this.isOperational = true; // This is required since bluebird 4 doesn't append it anymore.\n    Error.captureStackTrace(this, this.constructor.name);\n  }\n}\n/**\r\n * 信箱尚未註冊 Error\r\n * @extends ExtendableError\r\n */\nclass LoginError1 extends ExtendableError {\n  /**\r\n   * Creates an API error.\r\n   * @param {string} message - Error message.\r\n   * @param {number} status - HTTP status code of error.\r\n   * @param {boolean} isPublic - Whether the message should be visible to user or not.\r\n   */\n  constructor(message = '信箱尚未註冊！', status = (http_status__WEBPACK_IMPORTED_MODULE_0___default().NOT_FOUND), isPublic = true, code = 401) {\n    super(message, status, isPublic, code);\n    this.name = 'LoginError';\n  }\n}\n/**\r\n * 密碼錯誤 Error.\r\n * @extends ExtendableError\r\n */\nclass LoginError2 extends ExtendableError {\n  /**\r\n   * Creates an API error.\r\n   * @param {string} message - Error message.\r\n   * @param {number} status - HTTP status code of error.\r\n   * @param {boolean} isPublic - Whether the message should be visible to user or not.\r\n   */\n  constructor(message = '您輸入的密碼有誤！', status = (http_status__WEBPACK_IMPORTED_MODULE_0___default().NOT_FOUND), isPublic = true, code = 401) {\n    super(message, status, isPublic, code);\n    this.name = 'LoginError';\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  LoginError1,\n  LoginError2\n});\n\n//# sourceURL=webpack://ex4/./src/server/helper/AppError.js?");

/***/ }),

/***/ "./src/server/modules/article.module.js":
/*!**********************************************!*\
  !*** ./src/server/modules/article.module.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mysql2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2 */ \"mysql2\");\n/* harmony import */ var mysql2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/config */ \"./src/config/config.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n// article.module.js\n\n\n\nconst connectionPool = mysql2__WEBPACK_IMPORTED_MODULE_0___default().createPool({\n  connectionLimit: 10,\n  host: _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mysqlHost,\n  user: _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mysqlUserName,\n  password: _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mysqlPass,\n  database: _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mysqlDatabase\n});\n\n/* Article  POST 新增 */\nconst createArticle = insertValues => {\n  return new Promise((resolve, reject) => {\n    connectionPool.getConnection((connectionError, connection) => {\n      // 資料庫連線\n      if (connectionError) {\n        reject(connectionError); // 若連線有問題回傳錯誤\n      } else {\n        connection.query('INSERT INTO Article SET ?', insertValues, (error, result) => {\n          // Article資料表寫入一筆資料\n          if (error) {\n            console.error('SQL error: ', error); // 寫入資料庫有問題時回傳錯誤\n            reject(error);\n          } else if (result.affectedRows === 1) {\n            resolve(`新增成功！ article_id: ${result.insertId}`); // 寫入成功回傳寫入id\n          }\n          connection.release();\n        });\n      }\n    });\n  });\n};\n\n/*  Article GET 取得  */\nconst selectArticle = () => {\n  return new Promise((resolve, reject) => {\n    connectionPool.getConnection((connectionError, connection) => {\n      // 資料庫連線\n      if (connectionError) {\n        reject(connectionError); // 若連線有問題回傳錯誤\n      } else {\n        connection.query(\n        // Article撈取所有欄位的值組\n        `SELECT * FROM Article`, (error, result) => {\n          if (error) {\n            console.error('SQL error: ', error);\n            reject(error); // 寫入資料庫有問題時回傳錯誤\n          } else {\n            resolve(result); // 撈取成功回傳 JSON 資料\n          }\n          connection.release();\n        });\n      }\n    });\n  });\n};\nconst selectPersonalArticle = token => {\n  return new Promise((resolve, reject) => {\n    jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().verify(token, 'my_secret_key', (err, payload) => {\n      if (err) {\n        reject(err);\n      } else {\n        connectionPool.getConnection((connectionError, connection) => {\n          // 資料庫連線\n\n          if (connectionError) {\n            reject(connectionError); // 若連線有問題回傳錯誤\n          } else {\n            connection.query(\n            // Article撈取所有欄位的值組\n            `SELECT * FROM Article`, (error, result) => {\n              if (error) {\n                console.error('SQL error: ', error);\n                reject(error); // 寫入資料庫有問題時回傳錯誤\n              } else {\n                resolve(result); // 撈取成功回傳 JSON 資料\n              }\n              connection.release();\n            });\n          }\n        });\n      }\n    });\n  });\n};\nconst modifyArticle = (insertValues, userId) => {\n  return new Promise((resolve, reject) => {\n    connectionPool.getConnection((connectionError, connection) => {\n      // 資料庫連線\n      if (connectionError) {\n        reject(connectionError); // 若連線有問題回傳錯誤\n      } else {\n        // Article資料表修改指定id一筆資料\n        connection.query('UPDATE Article SET ? WHERE article_id = ?', [insertValues, userId], (error, result) => {\n          if (error) {\n            console.error('SQL error: ', error); // 寫入資料庫有問題時回傳錯誤\n            reject(error);\n          } else if (result.affectedRows === 0) {\n            // 寫入時發現無該筆資料\n            resolve('請確認修改Id！');\n          } else if (result.info.match('Changed: 1')) {\n            // 寫入成功\n            resolve('資料修改成功');\n          } else {\n            //console.log(result);\n            resolve('資料無異動');\n          }\n          connection.release();\n        });\n      }\n    });\n  });\n};\nconst deleteArticle = userId => {\n  return new Promise((resolve, reject) => {\n    connectionPool.getConnection((connectionError, connection) => {\n      // 資料庫連線\n      if (connectionError) {\n        reject(connectionError); // 若連線有問題回傳錯誤\n      } else {\n        connection.query(\n        // Article撈取所有欄位的值組\n        'DELETE FROM Article WHERE article_id = ?', userId, (error, result) => {\n          if (error) {\n            console.error('SQL error: ', error); // 資料庫存取有問題時回傳錯誤\n            reject(error);\n          } else if (result.affectedRows === 1) {\n            resolve('刪除成功！');\n          } else {\n            resolve('刪除失敗！');\n          }\n          connection.release();\n        });\n      }\n    });\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  createArticle,\n  selectArticle,\n  modifyArticle,\n  deleteArticle,\n  selectPersonalArticle\n});\n\n//# sourceURL=webpack://ex4/./src/server/modules/article.module.js?");

/***/ }),

/***/ "./src/server/modules/user.module.js":
/*!*******************************************!*\
  !*** ./src/server/modules/user.module.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mysql2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2 */ \"mysql2\");\n/* harmony import */ var mysql2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/config */ \"./src/config/config.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _helper_AppError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper/AppError */ \"./src/server/helper/AppError.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst connectionPool = mysql2__WEBPACK_IMPORTED_MODULE_0___default().createPool({\n  connectionLimit: 10,\n  host: _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mysqlHost,\n  user: _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mysqlUserName,\n  password: _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mysqlPass,\n  database: _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mysqlDatabase\n});\nconst createUser = insertValues => {\n  return new Promise((resolve, reject) => {\n    // 檢查帳號是否已存在\n    connectionPool.query('SELECT COUNT(*) AS count FROM User WHERE user_mail = ?', insertValues.user_mail, (checkError, checkResult) => {\n      if (checkError) {\n        reject({\n          code: 500,\n          status: 'error',\n          message: '檢查帳號時發生錯誤',\n          error: checkError\n        });\n      } else {\n        if (checkResult[0].count > 0) {\n          reject({\n            code: 400,\n            status: 'error',\n            message: '帳號已存在，請選擇其他帳號'\n          });\n        } else {\n          // 插入新使用者\n          connectionPool.query('INSERT INTO User SET ?', insertValues, (error, result) => {\n            if (error) {\n              reject({\n                code: 500,\n                status: 'error',\n                message: '新增使用者時發生錯誤',\n                error\n              });\n            } else if (result.affectedRows === 1) {\n              resolve({\n                code: 200,\n                status: 'success',\n                message: `新增成功！ article_id: ${result.insertId}`\n              });\n            }\n          });\n        }\n      }\n    });\n  });\n};\n\n// const createUser = (insertValues) => {\n//   return new Promise((resolve, reject) => {\n//     connectionPool.getConnection((connectionError, connection) => { // 資料庫連線\n//       if (connectionError) {\n//         reject(connectionError); // 若連線有問題回傳錯誤\n//       } else {\n//         connection.query('INSERT INTO User SET ?', insertValues, (error, result) => { // User資料表寫入一筆資料\n//           if (error) {\n//             console.error('SQL error: ', error);\n//             reject(error); // 寫入資料庫有問題時回傳錯誤\n//           } else if (result.affectedRows === 1) {\n//             resolve(`新增成功！ article_id: ${result.insertId}`); // 寫入成功回傳寫入id\n//           }\n//           connection.release();\n//         });\n//       }\n//     });\n//   });\n// };\n\nconst selectUser = () => {\n  return new Promise((resolve, reject) => {\n    connectionPool.getConnection((connectionError, connection) => {\n      // 資料庫連線\n      if (connectionError) {\n        reject(connectionError); // 若連線有問題回傳錯誤\n      } else {\n        connection.query(\n        // Article撈取所有欄位的值組\n        `SELECT * FROM User`, (error, result) => {\n          if (error) {\n            console.error('SQL error: ', error);\n            reject(error); // 寫入資料庫有問題時回傳錯誤\n          } else {\n            resolve(result); // 撈取成功回傳 JSON 資料\n          }\n          connection.release();\n        });\n      }\n    });\n  });\n};\nconst modifyUser = (insertValues, userId) => {\n  return new Promise((resolve, reject) => {\n    connectionPool.getConnection((connectionError, connection) => {\n      // 資料庫連線\n      if (connectionError) {\n        reject(connectionError); // 若連線有問題回傳錯誤\n      } else {\n        // Article資料表修改指定id一筆資料\n        connection.query('UPDATE User SET ? WHERE User_id = ?', [insertValues, userId], (error, result) => {\n          if (error) {\n            console.error('SQL error: ', error); // 寫入資料庫有問題時回傳錯誤\n            reject(error);\n          } else if (result.affectedRows === 0) {\n            // 寫入時發現無該筆資料\n            resolve('請確認修改Id！');\n          } else if (result.info.match('Changed: 1')) {\n            // 寫入成功\n            resolve('資料修改成功');\n          } else {\n            //console.log(result);\n            resolve('資料無異動');\n          }\n          connection.release();\n        });\n      }\n    });\n  });\n};\nconst deleteUser = userId => {\n  return new Promise((resolve, reject) => {\n    connectionPool.getConnection((connectionError, connection) => {\n      // 資料庫連線\n      if (connectionError) {\n        reject(connectionError); // 若連線有問題回傳錯誤\n      } else {\n        connection.query(\n        // Article撈取所有欄位的值組\n        'DELETE FROM User WHERE User_id = ?', userId, (error, result) => {\n          if (error) {\n            console.error('SQL error: ', error); // 資料庫存取有問題時回傳錯誤\n            reject(error);\n          } else if (result.affectedRows === 1) {\n            resolve('刪除成功！');\n          } else {\n            resolve('刪除失敗！');\n          }\n          connection.release();\n        });\n      }\n    });\n  });\n};\nconst selectUserLogin = insertValues => {\n  return new Promise((resolve, reject) => {\n    connectionPool.getConnection((connectionError, connection) => {\n      if (connectionError) {\n        reject(connectionError);\n      } else {\n        connection.query(`SELECT * FROM User WHERE user_mail = ?`, insertValues.user_mail, (error, result) => {\n          if (error) {\n            reject(error);\n          } else if (Object.keys(result).length === 0) {\n            resolve(new _helper_AppError__WEBPACK_IMPORTED_MODULE_3__[\"default\"].LoginError1());\n          } else {\n            const dbHashPassword = result[0].user_password;\n            const userPassword = insertValues.user_password;\n            bcrypt__WEBPACK_IMPORTED_MODULE_2___default().compare(userPassword, dbHashPassword).then(res => {\n              if (res) {\n                const payload = {\n                  user_id: result[0].user_id,\n                  user_name: result[0].user_name,\n                  user_mail: result[0].user_mail\n                };\n                const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default().sign({\n                  payload,\n                  exp: Math.floor(Date.now() / 1000) + 60 * 15\n                }, '?d/2+#b=*YM5rRfSys8y+%GF@3h#-T');\n                resolve(Object.assign({\n                  code: 200\n                }, {\n                  message: '登入成功',\n                  token,\n                  payload\n                }));\n              } else {\n                resolve(new _helper_AppError__WEBPACK_IMPORTED_MODULE_3__[\"default\"].LoginError2());\n              }\n            });\n          }\n          connection.release();\n        });\n      }\n    });\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  createUser,\n  selectUser,\n  modifyUser,\n  deleteUser,\n  selectUserLogin\n});\n\n//# sourceURL=webpack://ex4/./src/server/modules/user.module.js?");

/***/ }),

/***/ "./src/server/routes/article.route.js":
/*!********************************************!*\
  !*** ./src/server/routes/article.route.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express-validation */ \"express-validation\");\n/* harmony import */ var express_validation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express_validation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _controllers_article_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/article.controller */ \"./src/server/controllers/article.controller.js\");\n/* harmony import */ var _config_param_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/param-validation */ \"./src/config/param-validation.js\");\n// article.route.js\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nconst ensureToken = (req, res, next) => {\n  const bearerHeader = req.headers.authorization;\n  if (typeof bearerHeader !== 'undefined') {\n    const bearer = bearerHeader.split(' '); // 字串切割\n    const bearerToken = bearer[1]; // 取得 JWT\n    req.token = bearerToken; // 在response中建立一個token參數\n    next(); // 結束 Middleware 進入 articleCtrl.articlePersonalGet\n  } else {\n    res.status(403).send(Object.assign({\n      code: 403\n    }, {\n      message: '您尚未登入！'\n    })); // Header 查無 Rearer Token\n  }\n};\nrouter.get('/personal', ensureToken, _controllers_article_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].articlePersonalGet); /** 取得 Article 值組 */\nrouter.route('/').post(express_validation__WEBPACK_IMPORTED_MODULE_1___default()(_config_param_validation__WEBPACK_IMPORTED_MODULE_3__[\"default\"].createArticle), _controllers_article_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].articlePost); /** 新增 Article 值組 */\nrouter.route('/').get(_controllers_article_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].articleGet); /** 取得 Article 所有值組 */\n\nrouter.route('/:article_id').put(_controllers_article_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].articlePut);\nrouter.route('/:article_id').delete(_controllers_article_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].articleDelete); /** 刪除 Article 值組 */\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://ex4/./src/server/routes/article.route.js?");

/***/ }),

/***/ "./src/server/routes/index.route.js":
/*!******************************************!*\
  !*** ./src/server/routes/index.route.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mysql2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mysql2 */ \"mysql2\");\n/* harmony import */ var mysql2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mysql2__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../config/config */ \"./src/config/config.js\");\n/* harmony import */ var _article_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./article.route */ \"./src/server/routes/article.route.js\");\n/* harmony import */ var _user_route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.route */ \"./src/server/routes/user.route.js\");\n\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\n\n/* GET localhost:[port]/api page. */\nrouter.get('/', (req, res) => {\n  res.send(`此路徑是: localhost:${_config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].port}/api`);\n});\nrouter.use('/user', _user_route__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nrouter.use('/article', _article_route__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n\n/* mysql連線測試 */\nrouter.get('/sqlTest', (req, res) => {\n  const connectionPool = mysql2__WEBPACK_IMPORTED_MODULE_1___default().createPool({\n    // 建立一個連線池\n    connectionLimit: 10,\n    // 限制池子連線人數\n    host: _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mysqlHost,\n    // 主機名稱\n    user: _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mysqlUserName,\n    // 用戶名稱 \n    password: _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mysqlPass,\n    // 資料庫密碼\n    database: _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mysqlDatabase // 資料庫名稱\n  });\n  connectionPool.getConnection((err, connection) => {\n    //建立一個連線若錯誤回傳err\n    if (err) {\n      res.send(err);\n      console.log('連線失敗！');\n    } else {\n      res.send('連線成功！');\n      console.log(connection);\n    }\n  });\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://ex4/./src/server/routes/index.route.js?");

/***/ }),

/***/ "./src/server/routes/user.route.js":
/*!*****************************************!*\
  !*** ./src/server/routes/user.route.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express-validation */ \"express-validation\");\n/* harmony import */ var express_validation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express_validation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _controllers_user_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/user.controller */ \"./src/server/controllers/user.controller.js\");\n/* harmony import */ var _config_param_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/param-validation */ \"./src/config/param-validation.js\");\n// article.route.js\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route('/').post(express_validation__WEBPACK_IMPORTED_MODULE_1___default()(_config_param_validation__WEBPACK_IMPORTED_MODULE_3__[\"default\"].createUser), _controllers_user_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].userPost);\nrouter.route('/').get(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].userGet);\nrouter.route('/:user_id').put(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].userPut);\nrouter.route('/:user_id').delete(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].userDelete);\nrouter.route('/login').post(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].userLogin);\nrouter.route('/checklogin').get(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].cheackLogin);\nrouter.route('/logout').get(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].logout);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://ex4/./src/server/routes/user.route.js?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("body-parser");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("cookie-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("express-session");

/***/ }),

/***/ "express-validation":
/*!*************************************!*\
  !*** external "express-validation" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("express-validation");

/***/ }),

/***/ "http-status":
/*!******************************!*\
  !*** external "http-status" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("http-status");

/***/ }),

/***/ "joi":
/*!**********************!*\
  !*** external "joi" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("joi");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("morgan");

/***/ }),

/***/ "mysql2":
/*!*************************!*\
  !*** external "mysql2" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("mysql2");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;