export function checklogin() {
    axios
      .get("http://127.0.0.1:3000/api/user/checklogin", { withCredentials: true })
      .then(function (response) {
        document.body.style.display = "block";
        if (response.data.code == 200) {
            document.querySelector(".loginmessage").innerHTML = "登入成功";
          document.querySelector(".logintext").innerHTML =
            '<p>信箱:'+response.data.user.user_mail+'</p><p>名稱:'+response.data.user.user_name+'</p>'
            ;
          document.querySelector(".out").style.display = "flex";
          document.querySelectorAll(".in").forEach((element) => {
            element.style.display = "none";
          });
        } else {
          document.querySelectorAll(".in").forEach((element) => {
            element.style.display = "flex";
          });
          document.querySelector(".loginmessage").innerHTML = null;
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }