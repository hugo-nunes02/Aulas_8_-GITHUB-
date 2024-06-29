window.onload = function() {
    // Alterar cor parágrafo da primeira seção
    document.getElementById("changeColorBtn").onclick = function() {
        var firstParagraph = document.querySelector("section:first-of-type p");
        if (firstParagraph) {
            firstParagraph.style.backgroundColor = "lightblue";
        }
    };

    // Marcar parágrafos da segunda seção
    document.getElementById("highlightAllBtn").onclick = function() {
        var paragraphs = document.querySelectorAll("section:nth-of-type(2) p");
        paragraphs.forEach(function(paragraph) {
            paragraph.classList.toggle("highlight");
        });
    };
};