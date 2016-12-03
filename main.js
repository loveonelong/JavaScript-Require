
var s = `let b = "ok"; function see(){alert(b);} 
//var a = 2
module.exports.see = see();
`;

decorate_fun = function (str) {
    return eval("(function (){" + s + "})")
}


function Module() {
    this.exports = {};
}

module = new Module(); 

function require(str) {

}
