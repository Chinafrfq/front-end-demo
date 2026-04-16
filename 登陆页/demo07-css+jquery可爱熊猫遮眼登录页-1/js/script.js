$('#password').focusin(function () {
    $('form').addClass('up')
})
$('#password').focusout(function () {
    $('form').removeClass('up')
})

// 眼睛移动
$(document).on('mousemove', function (event) {
    var dw = $(document).width() / 15
    var dh = $(document).height() / 15
    var x = event.pageX / dw
    var y = event.pageY / dh
    $('.eye-ball').css({
        width: x,
        height: y
    })
})

// 表单验证
$('.btn').click(function () {
    var username = $('form .form-group:eq(0) .form-control').val().trim();
    var password = $('#password').val().trim();
    var alertEl = $('form .alert');
    alertEl.hide();

    if (!username) {
        alertEl.text('请输入用户名').show();
        $('form').addClass('wrong-entry');
        setTimeout(function () { $('form').removeClass('wrong-entry'); }, 3000);
        return;
    }
    if (!password) {
        alertEl.text('请输入密码').show();
        $('form').addClass('wrong-entry');
        setTimeout(function () { $('form').removeClass('wrong-entry'); }, 3000);
        return;
    }
    if (password.length < 6) {
        alertEl.text('密码长度至少6位').show();
        $('form').addClass('wrong-entry');
        setTimeout(function () { $('form').removeClass('wrong-entry'); }, 3000);
        return;
    }
    alert('登录成功');
})