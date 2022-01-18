//alert('test')
// スライダー
const mySwiper = new Swiper('.swiper-container', {

    loop: true,

    // 表示させるスライド数 [初期値:1]
    slidesPerView: 2.7,
    // 一度に移動させるスライド数 [初期値:1]
    slidesToScroll: 1,
    //間隔
    spaceBetween: 40,
    dots: true,
    speed: 300,

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    breakpoints: {
        // 1px以上767px以下の場合
        1: {
            slidesPerView: 1.29,
            //間隔
            spaceBetween: 20,
        },
        // 980px以上の場合
        768: {
            slidesPerView: 2.7,
        },
        // 1200px以上の場合
        1247: {
            slidesPerView: 2.7,
        }
    }

});


//ハンバーガーメニュー
$('.drawer_icon').on('click', function () {
    $(this).toggleClass('is-active');
    $('.hamburger_icon').toggleClass('is-active');
    $('.drawer_content_menu').toggleClass('is-active');
    $('.drawer_background').toggleClass('is-active');
});


////
//QAドローワー
$(function () {
    $(".qa_item_question").on("click", function () {
        console.log(this);
        $(this).next(".qa_item_answer").slideToggle(300);
        $(this).find(".qa_item_question_button").toggleClass("is-active");
    });
});
//$(function () {
//    $(".qa_item_question_button").on("click", function () {
//        $(this).parents(".qa_item_body").find(".qa_item_answer").slideToggle(300);
//       $(this).toggleClass("is-active");
//   });
//});


// $(function () {
//    $(".qa_item_question_button").on("click", function () {
//        $(this).parents(".qa_item_body").find(".qa_item_answer").slideToggle(300);
//       $(this).toggleClass("is-active");
//     });
// });


//トップへ戻る
$(function () {
    var pagetop = $('#totop');
    // ボタン非表示
    pagetop.hide();

    // 100px スクロールしたらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body, html').animate({ scrollTop: 0 }, 500);
        return false;
    });
});

//スムーススクロール
$(function () {
    $('a[href^="#"]').click(function () {
        var speed = 400;
        var offsetY = 30;
        var target = $(this).attr('href');
        var position = $(target).offset().top - offsetY;
        $('html, body').animate({
            scrollTop: position
        }, speed);
        return false;
    });
});




//送信フォーム
let $form = $('#js_form')
$form.submit(function (e) {
    $.ajax({
        url: $form.attr('action'),
        data: $form.serialize(),
        type: "POST",
        dataType: "xml",
        statusCode: {
            0: function () {
                //送信に成功したときの処理 
                $(".end-message").slideDown();
                $("form_send_button").fadeOut();

            },
            200: function () {
                //送信に失敗したときの処理 
                $(".false-message").slideDown();
            }
        }
    });
    return false;
});

//送信フォーム色変更¥
$(function () {
    let $submit = $('#js_submit')
    $('#js_form input, #js_form textarea').on('change', function () {
        if (
            //空ではない
            $('#js_form input[type="text"]').val() !== ""&&
            $('#js_form input[type="email"]').val() !== ""&&
            $('#js_form input[type="entry.1322201968"]').val() !== ""&&
            $('#js_form input[name="entry.52756391"]').prop('checked') &&

            //チェックボックス
            $('#js_form input[name="entry.1930309125"]').prop('checked') === true

        ) 
        
        {
            //全て入力された時ボタンが押せる状態
            $submit.prop('disabled', false)
            $submit.addClass('-active')
        } else {
            //全て入力されていない
            $submit.prop('disabled', true)
            $submit.removeClass('-active')
        }
    })
});
