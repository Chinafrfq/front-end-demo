/* DaTouWang URL: www.datouwang.com */
$('.email').on('change keyup paste', function () {
    if ($(this).val()) {
        $('.icon-paper-plane').addClass('next')
    } else {
        $('.icon-paper-plane').removeClass('next')
    }
})

$('.next-button').hover(function () {
    $(this).css('cursor', 'pointer')
})

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showRegError(message) {
    var errEl = $('#reg-error');
    if (errEl.length === 0) {
        errEl = $('<p id="reg-error" style="color:#ff6b6b;font-size:13px;margin-top:5px;text-align:center;"></p>');
        $('.registration-form form').append(errEl);
    }
    errEl.text(message);
}

$('.next-button.email').click(function () {
    var email = $('.email').val().trim();
    if (!email) {
        showRegError('请输入电子邮箱');
        return;
    }
    if (!validateEmail(email)) {
        showRegError('邮箱格式不正确');
        return;
    }
    showRegError('');
    $('.email-section').addClass('fold-up')
    $('.password-section').removeClass('folded')
})

$('.password').on('change keyup paste', function () {
    if ($(this).val()) {
        $('.icon-lock').addClass('next')
    } else {
        $('.icon-lock').removeClass('next')
    }
})

$('.next-button').hover(function () {
    $(this).css('cursor', 'pointer')
})

$('.next-button.password').click(function () {
    var password = $('.password').val().trim();
    if (!password) {
        showRegError('请输入密码');
        return;
    }
    if (password.length < 6) {
        showRegError('密码长度至少6位');
        return;
    }
    showRegError('');
    $('.password-section').addClass('fold-up')
    $('.repeat-password-section').removeClass('folded')
})

$('.repeat-password').on('change keyup paste', function () {
    if ($(this).val()) {
        $('.icon-repeat-lock').addClass('next')
    } else {
        $('.icon-repeat-lock').removeClass('next')
    }
})

$('.next-button.repeat-password').click(function () {
    var password = $('.password').val().trim();
    var repeatPassword = $('.repeat-password').val().trim();
    if (!repeatPassword) {
        showRegError('请再次输入密码');
        return;
    }
    if (password !== repeatPassword) {
        showRegError('两次输入的密码不一致');
        return;
    }
    showRegError('');
    $('.repeat-password-section').addClass('fold-up')
    $('.success').css('marginTop', 0)
})
