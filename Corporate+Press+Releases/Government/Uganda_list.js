//http://www.oilinuganda.org/categories/features/companies
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.oilinuganda.org/categories/features/companies"], function () {
    var urls = [];
    $("#posts > ul > li > h3 > a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});