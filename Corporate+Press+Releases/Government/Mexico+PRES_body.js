// Mexico
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://en.presidencia.gob.mx/articles-press/society-is-understanding-the-progress-of-our-economy-which-explains-the-majoritys-support-of-the-project-promoted-by-the-government-enrique-pena-nieto/",
    function () {
        var ps = $(".blog-post .post-content .last-update-date")[0].innerText.split(":")[1].trim();
        $(".blog-post .post-content footer").remove();
        return {
            title: $(".blog-post .post-title")[0].innerText,
            published_s: ps,
            body: $(".blog-post .post-content")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);