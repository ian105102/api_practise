
import mysql2 from 'mysql2';
import config from '../../config/config';
import bcrypt from 'bcrypt';
import AppError from '../helper/AppError';
import jwt from 'jsonwebtoken';
const connectionPool = mysql2.createPool({
  connectionLimit: 10,
  host: config.mysqlHost,
  user: config.mysqlUserName,
  password: config.mysqlPass,
  database: config.mysqlDatabase
});


const createUser = (insertValues) => {
  return new Promise((resolve, reject) => {
    // 檢查帳號是否已存在
    connectionPool.query('SELECT COUNT(*) AS count FROM User WHERE user_mail = ?', insertValues.user_mail, (checkError, checkResult) => {
      if (checkError) {
        reject({ code: 500, status: 'error', message: '檢查帳號時發生錯誤', error: checkError });
      } else {
        if (checkResult[0].count > 0) {
          reject({ code: 400, status: 'error', message: '帳號已存在，請選擇其他帳號' });
        } else {
          // 插入新使用者
          connectionPool.query('INSERT INTO User SET ?', insertValues, (error, result) => {
            if (error) {
              reject({ code: 500, status: 'error', message: '新增使用者時發生錯誤', error });
            } else if (result.affectedRows === 1) {
              resolve({ code: 200, status: 'success', message: `新增成功！ article_id: ${result.insertId}` });
            }
          });
        }
      }
    });
  });
};

// const createUser = (insertValues) => {
//   return new Promise((resolve, reject) => {
//     connectionPool.getConnection((connectionError, connection) => { // 資料庫連線
//       if (connectionError) {
//         reject(connectionError); // 若連線有問題回傳錯誤
//       } else {
//         connection.query('INSERT INTO User SET ?', insertValues, (error, result) => { // User資料表寫入一筆資料
//           if (error) {
//             console.error('SQL error: ', error);
//             reject(error); // 寫入資料庫有問題時回傳錯誤
//           } else if (result.affectedRows === 1) {
//             resolve(`新增成功！ article_id: ${result.insertId}`); // 寫入成功回傳寫入id
//           }
//           connection.release();
//         });
//       }
//     });
//   });
// };

const selectUser = () => {
    return new Promise((resolve, reject) => {
      connectionPool.getConnection((connectionError, connection) => { // 資料庫連線
        if (connectionError) {
          reject(connectionError); // 若連線有問題回傳錯誤
        } else {
          connection.query( // Article撈取所有欄位的值組
            `SELECT * FROM User`, (error, result) => {
              if (error) {
                console.error('SQL error: ', error);
                reject(error); // 寫入資料庫有問題時回傳錯誤
              } else {
                resolve(result); // 撈取成功回傳 JSON 資料
              }
              connection.release();
            }
          );
        }
      });
    });
  };
  
  const modifyUser = (insertValues, userId) => {
    return new Promise((resolve, reject) => {
      connectionPool.getConnection((connectionError, connection) => { // 資料庫連線
        if (connectionError) {
          reject(connectionError); // 若連線有問題回傳錯誤
        } else { // Article資料表修改指定id一筆資料
          connection.query('UPDATE User SET ? WHERE User_id = ?', [insertValues, userId], (error, result) => {
            if (error) {
              console.error('SQL error: ', error);// 寫入資料庫有問題時回傳錯誤
              reject(error);
            } else if (result.affectedRows === 0) { // 寫入時發現無該筆資料
              resolve('請確認修改Id！');
            } else if ( result.info.match('Changed: 1')) { // 寫入成功
              resolve('資料修改成功');
            } else { 
              //console.log(result);
              resolve('資料無異動');
            }
            connection.release();
          });
        }
      });
    });
  };
  

  const deleteUser = (userId) => {
    return new Promise((resolve, reject) => {
      connectionPool.getConnection((connectionError, connection) => { // 資料庫連線
        if (connectionError) {
          reject(connectionError); // 若連線有問題回傳錯誤
        } else {
          connection.query( // Article撈取所有欄位的值組
          'DELETE FROM User WHERE User_id = ?',userId, (error, result) => {
              if (error) {
                console.error('SQL error: ', error);// 資料庫存取有問題時回傳錯誤
                reject(error);
              } else if (result.affectedRows === 1) {
                resolve('刪除成功！');
              } else {
                resolve('刪除失敗！');
              }
              connection.release();
            }
          );
        }
      });
    });
  };


const selectUserLogin = (insertValues) =>{
    return new Promise((resolve, reject) =>{
        connectionPool.getConnection((connectionError, connection) =>{
            if(connectionError){
                reject(connectionError);
            }else{
                connection.query(`SELECT * FROM User WHERE user_mail = ?`,insertValues.user_mail,(error,result) =>{
                        if(error){
                            reject(error);
                        }else if(Object.keys(result).length===0){
                            resolve(new AppError.LoginError1());
                        }else{
                            const dbHashPassword = result[0].user_password;
                            const userPassword = insertValues.user_password;
                            bcrypt.compare(userPassword,dbHashPassword).then((res) =>{
                                if(res){
                                  const payload = {
                                    user_id: result[0].user_id,
                                    user_name: result[0].user_name,
                                    user_mail: result[0].user_mail
                                  };
                                  const token = jwt.sign({ payload, exp: Math.floor(Date.now() / 1000) + (60 * 15) }, '?d/2+#b=*YM5rRfSys8y+%GF@3h#-T');
                                  resolve(Object.assign({ code: 200 }, { message: '登入成功', token,payload } ));
                                }else{
                                    resolve(new AppError.LoginError2());
                                }
                            })
                        }
                        connection.release();
                    }
                )
            }
        })
    })
};




export default {
    createUser,selectUser,modifyUser,deleteUser,selectUserLogin,
};