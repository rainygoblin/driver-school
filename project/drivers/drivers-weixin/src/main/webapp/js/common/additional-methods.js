$(document).ready(function () {
    // 邮政编码验证
    jQuery.validator.addMethod("isZipCode", function(value, element) {
        var tel = /^[0-9]{6}$/;
        return this.optional(element) || (tel.test(value));
    }, "请填写正确的邮政编码");
    // 手机号码验证
    jQuery.validator.addMethod("isMobile", function(value, element) {
        var length = value.length;
        var mobile = /^(13[0-9]{9})|(18[0-9]{9})|(14[0-9]{9})|(17[0-9]{9})|(15[0-9]{9})$/;
        return this.optional(element) || (length == 11 && mobile.test(value));
    }, "请填写正确的手机号码");
    // 电话号码验证
    jQuery.validator.addMethod("isTel", function(value, element) {
        var tel = /^\d{3,4}-?\d{7,9}$/; //电话号码格式010-12345678
        return this.optional(element) || (tel.test(value));
    }, "请填写正确的电话号码");
    // 联系电话(手机/电话皆可)验证
    jQuery.validator.addMethod("isPhone", function(value,element) {
        var length = value.length;
        var mobile = /^(((13[0-9]{1})|(15[0-9]{1}))+\d{8})$/;
        var tel = /^\d{3,4}-?\d{7,9}$/;
        return this.optional(element) || (tel.test(value) || mobile.test(value));

    }, "请填写正确的联系电话");
});