/*
    Logic：
        主要采用原生 JavaScript，
        只有在发送 Ajax 请求是才使用 JQuery
    
    ===
    1、登录注册页面的切换逻辑

    2、Ajax发送及接受响应逻辑
    ===
*/


// 封装选择器, 采用ES6箭头函数写法
const getSelector = ele => {
    return typeof ele === "string" ? document.querySelector(ele) : "";
}


// 登录注册载入

const containerShow = () => {
    var show = getSelector(".container")
    show.className += " container-show"
}


window.onload = containerShow;


// 登录注册页切换
((window, document) => {

    // 登录 -> 注册
    let toSignBtn = getSelector(".toSign"),
        toLoginBtn = getSelector(".toLogin")
        loginBox = getSelector(".login-box"),
        signBox = getSelector(".sign-box");
    
    toSignBtn.onclick = () => {
        loginBox.className += ' animate_login';
        signBox.className += ' animate_sign';
    }

    toLoginBtn.onclick = () => {
        loginBox.classList.remove("animate_login");
        signBox.classList.remove("animate_sign");
    }


})(window, document);

// 登录验证
((window, document) => {
    let loginBtn = getSelector(".login-btn"),
        signBtn = getSelector(".sign-btn");

    loginBtn.onclick = () => {
        let user = document.getElementById("login-user").value.trim();
        let pass = document.getElementById("login-password").value.trim();
        let errEl = document.querySelector(".login-box .form-error");
        if (!errEl) {
            errEl = document.createElement("p");
            errEl.className = "form-error";
            errEl.style.color = "#ff6b6b";
            errEl.style.fontSize = "13px";
            errEl.style.marginTop = "5px";
            errEl.style.textAlign = "center";
            loginBtn.before(errEl);
        }
        errEl.textContent = "";

        if (!user) { errEl.textContent = "请输入用户名"; return; }
        if (!pass) { errEl.textContent = "请输入密码"; return; }
        if (pass.length < 6) { errEl.textContent = "密码长度至少6位"; return; }
        alert("登录成功");
    }

    signBtn.onclick = () => {
        let user = document.getElementById("sign-user").value.trim();
        let pass = document.getElementById("sign-password").value.trim();
        let errEl = document.querySelector(".sign-box .form-error");
        if (!errEl) {
            errEl = document.createElement("p");
            errEl.className = "form-error";
            errEl.style.color = "#ff6b6b";
            errEl.style.fontSize = "13px";
            errEl.style.marginTop = "5px";
            errEl.style.textAlign = "center";
            signBtn.before(errEl);
        }
        errEl.textContent = "";

        if (!user) { errEl.textContent = "请输入用户名"; return; }
        if (user.length < 2) { errEl.textContent = "用户名至少2个字符"; return; }
        if (!pass) { errEl.textContent = "请输入密码"; return; }
        if (pass.length < 6) { errEl.textContent = "密码长度至少6位"; return; }
        alert("注册成功");
    }
})(window, document);

// Ajax 请求发送
