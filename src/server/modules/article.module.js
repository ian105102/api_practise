// article.module.js
import mysql2 from 'mysql2';
import config from '../../config/config';
import jwt from 'jsonwebtoken';

const connectionPool = mysql2.createPool({
  connectionLimit: 10,
  host: config.mysqlHost,
  user: config.mysqlUserName,
  password: config.mysqlPass,
  database: config.mysqlDatabase
});




/* Article  POST 新增 */
const createArticle = (insertValues) => {
  return new Promise((resolve, reject) => {
    connectionPool.getConnection((connectionError, connection) => { // 資料庫連線
      if (connectionError) {
        reject(connectionError); // 若連線有問題回傳錯誤
      } else {
        connection.query('INSERT INTO Article SET ?', insertValues, (error, result) => { // Article資料表寫入一筆資料
          if (error) {
            console.error('SQL error: ', error); // 寫入資料庫有問題時回傳錯誤
            reject(error);
          } else if (result.affectedRows === 1) {
            resolve(`新增成功！ article_id: ${result.insertId}`); // 寫入成功回傳寫入id
          }
          connection.release();
        });
      }
    });
  });
};




/*  Article GET 取得  */
const selectArticle = () => {
    return new Promise((resolve, reject) => {
      connectionPool.getConnection((connectionError, connection) => { // 資料庫連線
        if (connectionError) {
          reject(connectionError); // 若連線有問題回傳錯誤
        } else {
          connection.query( // Article撈取所有欄位的值組
            `SELECT * FROM Article`, (error, result) => {
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




  const selectPersonalArticle = (token) => {
    return new Promise((resolve, reject) => {
      jwt.verify(token, 'my_secret_key', (err, payload) => {
        if(err) {
          reject(err);
        }else {
          connectionPool.getConnection((connectionError, connection) => { // 資料庫連線
          
            if (connectionError) {
              reject(connectionError); // 若連線有問題回傳錯誤
            } else {
              connection.query( // Article撈取所有欄位的值組
                `SELECT * FROM Article`, (error, result) => {
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
        }
      })
    });
  };




  const modifyArticle = (insertValues, userId) => {
    return new Promise((resolve, reject) => {
      connectionPool.getConnection((connectionError, connection) => { // 資料庫連線
        if (connectionError) {
          reject(connectionError); // 若連線有問題回傳錯誤
        } else { // Article資料表修改指定id一筆資料
          connection.query('UPDATE Article SET ? WHERE article_id = ?', [insertValues, userId], (error, result) => {
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
  


  
  const deleteArticle = (userId) => {
    return new Promise((resolve, reject) => {
      connectionPool.getConnection((connectionError, connection) => { // 資料庫連線
        if (connectionError) {
          reject(connectionError); // 若連線有問題回傳錯誤
        } else {
          connection.query( // Article撈取所有欄位的值組
          'DELETE FROM Article WHERE article_id = ?',userId, (error, result) => {
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


export default {
  createArticle,selectArticle,modifyArticle,deleteArticle,selectPersonalArticle
};