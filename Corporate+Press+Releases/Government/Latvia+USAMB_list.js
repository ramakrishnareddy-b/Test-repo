//http://riga.usembassy.gov/press_releases4.html
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://riga.usembassy.gov/press_releases4.html"], function () {
    var urls = [];
    $(".middle-content-article ul > li a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});