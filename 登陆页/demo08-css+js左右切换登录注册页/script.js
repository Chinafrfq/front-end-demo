document.querySelector('.img__btn').addEventListener('click', function() {
    document.querySelector('.dowebok').classList.toggle('s--signup')
})

function showFormError(form, message) {
    var errEl = form.querySelector('.form-error');
    if (!errEl) {
        errEl = document.createElement('p');
        errEl.className = 'form-error';
        errEl.style.color = '#ff6b6b';
        errEl.style.fontSize = '13px';
        errEl.style.marginTop = '5px';
        errEl.style.textAlign = 'center';
        form.querySelector('.submit').before(errEl);
    }
    errEl.textContent = message;
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// 登录验证
document.querySelector('.sign-in .submit').addEventListener('click', function() {
    var form = document.querySelector('.sign-in');
    var inputs = form.querySelectorAll('input');
    var email = inputs[0] ? inputs[0].value.trim() : '';
    var password = inputs[1] ? inputs[1].value.trim() : '';

    if (!email) {
        showFormError(form, '请输入邮箱');
        return;
    }
    if (!validateEmail(email)) {
        showFormError(form, '邮箱格式不正确');
        return;
    }
    if (!password) {
        showFormError(form, '请输入密码');
        return;
    }
    if (password.length < 6) {
        showFormError(form, '密码长度至少6位');
        return;
    }
    showFormError(form, '');
    alert('登录成功');
})

// 注册验证
document.querySelector('.sign-up .submit').addEventListener('click', function() {
    var form = document.querySelector('.sign-up');
    var inputs = form.querySelectorAll('input');
    var username = inputs[0] ? inputs[0].value.trim() : '';
    var email = inputs[1] ? inputs[1].value.trim() : '';
    var password = inputs[2] ? inputs[2].value.trim() : '';

    if (!username) {
        showFormError(form, '请输入用户名');
        return;
    }
    if (!email) {
        showFormError(form, '请输入邮箱');
        return;
    }
    if (!validateEmail(email)) {
        showFormError(form, '邮箱格式不正确');
        return;
    }
    if (!password) {
        showFormError(form, '请输入密码');
        return;
    }
    if (password.length < 6) {
        showFormError(form, '密码长度至少6位');
        return;
    }
    showFormError(form, '');
    alert('注册成功');
})