// Breitburn Energy Partners LP
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://ir.breitburn.com/releasedetail.cfm?ReleaseID=925091",
    function () {
        return {
            title: $("#ndq-article h1")[0].innerText.trim(),
            published_s: $("#ndq-article .ndq-leftcol")[0].innerText.trim(),
            body: $("#ndq-article #ndq-releasebody")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);