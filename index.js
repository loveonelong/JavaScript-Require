var str1 = `var a = 5;
            var b = 6;
            var ss = require(str2);
            function seeA() {
            console.log(a);
            }
            function seeB() {
            console.log(b);
            }
            console.log(ss);
            module.exports.a = seeA;
            module.exports.b = seeB;
            module.exports.s = ss.see;
            `

var str2 = `var a = 11;
            function see(){
                console.log(a);
            }
            module.exports.see = see;
            `

function Module(url) {
    this.id = url;
    this.exports = {};
}

// 全局require函数
function require(url) {
    return decorator(url);
}

// require装饰器
function decorator(str){
    return eval(`(function (module) {`
        +str+
        `return module.exports
    })(new Module("id"))`
    )
}

abc = require(str1);

console.log(abc)
abc.a();
abc.b();
abc.s();