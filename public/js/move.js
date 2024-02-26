import { checklogin } from "./cheak.js";
const inputpassword = document.querySelector(".inputpassword");
const cheakpassword = document.querySelector(".cheakpassword");
const loginButton = document.querySelector(".loginclick");
const loginmessage = document.querySelector(".loginmessage");
const userpage = document.querySelector(".userpage");
const createmessage = document.querySelector(".createmessage");
const clicklogin = document.querySelectorAll(".ch")[0];
const clickcreate = document.querySelectorAll(".ch")[1];
const clickclose = document.querySelectorAll(".close");
const clickout = document.querySelector(".out");
const createclick = document.querySelector(".createclick");
const input = document.querySelector(".createclick");
clickout.addEventListener("click", () => {
  axios
    .get("http://127.0.0.1:3000/api/user/logout", { withCredentials: true })
    .then(function (response) {
      if (response.data.code == 200) {
        document.querySelector(".logintext").innerHTML = null;
        document.querySelector(".out").style.display = "none";
        document.querySelectorAll(".in").forEach((element) => {
          element.style.display = "flex";
        });
      }
    })
    .catch(function (error) {
      console.log(error);
    });
});
loginButton.addEventListener("click", () => {
  var userdata = {
    user_mail: document.querySelector(".loginaccount").value,
    user_password: document.querySelector(".loginpassword").value,
  };

  document.querySelector(".loginaccount").value = "";
  document.querySelector(".loginpassword").value = "";
  axios
    .post("http://127.0.0.1:3000/api/user/login", userdata, {
      withCredentials: true,
    })
    .then(function (response) {
      if (response.data.code == 200) {
        checklogin();
        localStorage.setItem("token", response.data.token);
        loginmessage.innerHTML = "登入成功";
        userpage.classList.remove("loginshow");
        loginmessage.classList.add("login");
        loginmessage.classList.remove("notlogin");
        //window.open('user.html', "_blank");
      } else {
        loginmessage.innerHTML = "密碼或帳號錯誤!!";
        loginmessage.classList.add("notlogin");
        loginmessage.classList.remove("login");
      }
    })
    .catch(function (error) {
      loginmessage.innerHTML = "登入失敗";
      loginmessage.classList.add("notlogin");
      loginmessage.classList.remove("login");
      console.log(error);
    });
});

createclick.addEventListener("click", () => {
    document.querySelector(".t3").classList.remove("notsame");
  if ( inputpassword.value === cheakpassword.value ) {
    var userdata = {
        user_name: document.querySelector(".createname").value,
        user_mail: document.querySelector(".createaccount").value,
        user_password: document.querySelector(".createpassword").value,
      };
    
    console.log(userdata);
    axios
      .post("http://127.0.0.1:3000/api/user", userdata)
      .then(function (response) {
        console.log(response);

        switch (response.data.code) {
          case 200:
            createmessage.innerHTML = "創建成功";
            createmessage.classList.add("login");
            createmessage.classList.remove("notlogin");
            break;
          case 400:
            createmessage.innerHTML = "帳號已存在";
            break;
        }
      })
      .catch(function (error) {
        createmessage.innerHTML = "創建失敗";
        createmessage.classList.add("notlogin");
        createmessage.classList.remove("login");
        console.log(error);
      });

  }else{
    createmessage.innerHTML = "創建失敗";
  }
  document.querySelector(".inputpassword").value = "";
  document.querySelector(".createname").value = "";
  document.querySelector(".createaccount").value = "";
  document.querySelector(".cheakpassword").value = "";
});

clicklogin.addEventListener("click", () => {
  loginmessage.innerHTML = " ";
  document.querySelector(".login").classList.toggle("loginshow");
  document.querySelector(".create").classList.remove("createshow");
});
clickcreate.addEventListener("click", () => {
  document.querySelector(".create").classList.toggle("createshow");
  document.querySelector(".login").classList.remove("loginshow");
});

clickclose.forEach((element) => {
  element.addEventListener("click", () => {
    document.querySelector(".createmessage").innerHTML = "";
    document.querySelector(".loginmessage").innerHTML = "";
    document.querySelector(".login").classList.remove("loginshow");
    document.querySelector(".create").classList.remove("createshow");
  });
});

cheakpassword.addEventListener("blur", (e) => {
  if (inputpassword.value !== e.target.value) {
    document.querySelector(".t3").classList.add("notsame");
  } else {
    document.querySelector(".t3").classList.remove("notsame");
  }
});

inputpassword.addEventListener("blur", (e) => {
  if (cheakpassword.value !== e.target.value) {
    document.querySelector(".t3").classList.add("notsame");
  } else {
    document.querySelector(".t3").classList.remove("notsame");
  }
});
