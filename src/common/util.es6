'use strict';

define(function(require, exports, module) {

	// 变量
	const limit = {};
	const WIN = window;
	const DOC = WIN.document;
	const BODY = DOC.body;
	const objectProto = Object.prototype;
	const arrayProto = Array.prototype;
	const stringProto = String.prototype;
	const functionProto = Function.prototype;

	// 即 var definePropery = Object.defineProperty;
	const { defineProperty, is, assign, keys, values, entries } = Object;

	module.exports = {
		
		// obj:      时间字符串
		// showTime: 是否显示时分秒
		// IsMi:     是否显示毫秒
		formatDateTime: function(obj, showTime, IsMi) {   
	        var myDate = new Date(obj);   
	        var year = myDate.getFullYear();  
	        var month = ("0" + (myDate.getMonth() + 1)).slice(-2);  
	        var day = ("0" + myDate.getDate()).slice(-2);  
	        var h = ("0" + myDate.getHours()).slice(-2);  
	        var m = ("0" + myDate.getMinutes()).slice(-2);  
	        var s = ("0" + myDate.getSeconds()).slice(-2);   
	        var mi = ("00" + myDate.getMilliseconds()).slice(-3);  
	        if(!showTime) {
	        	return year + "-" + month + "-" + day;
	        }
	        if (IsMi) {   
	            return year + "-" + month + "-" + day + " " + h + ":" + m + ":" + s;   
	        }   
	        else {   
	            return year + "-" + month + "-" + day + " " + h + ":" + m + ":" + s + "." + mi;   
	        }
	    },
	    // 返回 max 和 mix 之间的随机数
	    randomBy: function(max, mix) {
	    	var result = 0;
	    	switch(arguments.length) {
	    		case 1: 
	    			result = parseInt(Math.random() * max + 1);
	    			break;
	    		case 2: 
	    			result = parseInt(Math.random() * (max - mix + 1) + mix);
	    			break;
	    	}
	    	return result;
	    }
	}
})