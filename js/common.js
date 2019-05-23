//跳转消息
$('.tz-nav-bottom > div:nth-child(1)').tap(function(){
    $(".van-toast").css("display","-webkit-box");
    $(".van-overlay").css("display","-webkit-box");
    self.location='index.html';
})
//跳转消息
$('.tz-nav-bottom > div:nth-child(2)').tap(function(){
    $(".van-toast").css("display","-webkit-box");
    $(".van-overlay").css("display","-webkit-box");
    self.location='message.html';
})
//跳转个人中心
$('.tz-nav-bottom > div:nth-child(3)').tap(function(){
    $(".van-toast").css("display","-webkit-box");
    $(".van-overlay").css("display","-webkit-box");
    self.location='login.html';
})
$(".backBtn").tap(function () {
    $(".van-toast").css("display", "-webkit-box");
    $(".van-overlay").css("display", "-webkit-box");
    window.history.back(-1);
})