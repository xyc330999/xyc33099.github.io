Date.prototype.format = function (fmt) {
    var o = {
        "y+": this.getFullYear, //年
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds() //秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" +o[k]).length)));
    return fmt;
}
setInterval("document.getElementById('dateTime').innerHTML = (new Date()).format('yyyy-MM-dd hh:mm:ss');", 1000);

var ipt1 = document.querySelector('.ipt1');
var message1 = document.querySelector('.message1');
ipt1.onblur = function() {
    if (ipt1.value.length < 6 || ipt1.value.length > 16) {
        message1.className = 'message1 wrong';
        message1.innerHTML = '您输入的位数不对要求6~16位';
    } else {
        message1.className = 'message1 right';
        message1.innerHTML = '您输入的正确';
    }
}
var ipt2 = document.querySelector('.ipt2');
var message2 = document.querySelector('.message2');
ipt2.onblur = function() {
    if (ipt2.value.length < 6 || ipt2.value.length > 16) {
        message2.className = 'message2 wrong';
        message2.innerHTML = '您输入的位数不对要求6~16位';
    } else {
        message2.className = 'message2 right';
        message2.innerHTML = '您输入的正确';
    }
}
var ipt3 = document.querySelector('.ipt3');
var message3 = document.querySelector('.message3');
ipt3.onblur = function() {
    if (ipt3.value.length < 6 || ipt3.value.length > 16) {
        message3.className = 'message3 wrong';
        message3.innerHTML = '您输入的位数不对要求6~16位';
    } else {
        message3.className = 'message3 right';
        message3.innerHTML = '您输入的正确';
    }
}