$('#password').focusin(function(){
    // 密码框选中
    $('.login-box').addClass('up');
}).focusout(function(){
    // 密码框非选中
    $('.login-box').removeClass('up');
})
// 眼球移动
$(document).on('mousemove',function(e){
    let dw=$(document).width() / 10;
    let dh=$(document).height() / 18;
    let x=e.pageX / dw;
    let y=e.pageY / dh;
    $('.eye-ball').css({
        left:x,
        top:y
    })
})

// 登录按钮验证
$('.login-box button').click(function(){
    var username = $('.login-box .ipt-box:eq(0) input').val().trim();
    var password = $('#password').val().trim();
    var errEl = $('#login-error');
    if (errEl.length === 0) {
        errEl = $('<p id="login-error" style="color:#ff6b6b;font-size:13px;margin-top:5px;text-align:center;min-height:18px;"></p>');
        $('.login-box button').before(errEl);
    }
    errEl.text('');

    if (!username) {
        errEl.text('请输入用户名');
        return;
    }
    if (!password) {
        errEl.text('请输入密码');
        return;
    }
    if (password.length < 6) {
        errEl.text('密码长度至少6位');
        return;
    }
    alert('登录成功');
})