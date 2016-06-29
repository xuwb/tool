(function() {
    var config = {
        base: './src',
        alias: {
            util: 'common/util'
        },
        debug: true,
        charset: 'utf-8'
    }
    seajs.config(config);
    if(typeof define === 'function') {
        define(function(require, exports, module) {
            return config;
        })
    }
    return config;
})();
