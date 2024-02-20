    /* express.js */
    import express from 'express';
    import config from './config';
    import index from '../server/routes/index.route';
    import bodyParser from 'body-parser';
    import cors from 'cors';  
    import morgan from 'morgan';
    import APPError from '../server/helper/AppError';
    const cookieParser = require('cookie-parser');
    const session = require('express-session');
    const app = express();
    const corsOptions = {
      origin: 'http://127.0.0.1:3000',
      credentials: true,
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      optionsSuccessStatus: 204, // 一些瀏覽器需要設置 204
    };
    app.use(express.static('public'));
    app.use(cookieParser());
    app.use(cors(corsOptions));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true}));
    app.use(morgan('dev'));
    app.use(session({
      secret: '#CPKJShgQgd)W>Z:$j-6.:2fa:&Hg7',
      resave: false,
      saveUninitialized: true,
      cookie: {
          maxAge: 60 * 60 * 1000, // 設定 Session 存活時間為 1 小時（以毫秒為單位）
      },
  }));




    app.use((err, req, res, next) => {
      let errorMessage;
      let errorCode;
      let errorStatus;
      // express validation error 所有傳入參數驗證錯誤
      if (err instanceof expressValidation.ValidationError) {
        if (err.errors[0].location === 'query' || err.errors[0].location === 'body') {
          errorMessage = err.errors[0].messages;
          errorCode = 400;
          errorStatus = httpStatus.BAD_REQUEST;
        }
        const error = new APPError.APIError(errorMessage, errorStatus, true, errorCode);
        return next(error);
      }
      return next(err);
    });
    
    // error handler, send stacktrace only during development 錯誤後最後才跑這邊
    app.use((err, req, res, next) => {
      res.status(err.status).json({
        message: err.isPublic ? err.message : httpStatus[err.status],
        code: err.code ? err.code : httpStatus[err.status],
        stack: config.env === 'development' ? err.stack : {}
      });
      next();
    });

    app.use('/api', index);

    export default app;