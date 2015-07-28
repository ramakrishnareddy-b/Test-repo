/* Moving from -> Corporate Press Releases/USA Hollyfrontier Corporation_list.js */ 
// Hollyfrontier Corporation
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://investor.hollyfrontier.com/releasedetail.cfm?ReleaseID=920255",
    function () {
        return {
            title: jQuery("#ndq-article h1")[0].innerText.trim(),
            published_s: jQuery("#ndq-article .ndq-leftcol")[0].innerText.trim(),
            body: jQuery("#ndq-article #ndq-releasebody")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);