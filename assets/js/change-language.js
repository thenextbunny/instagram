/* EN - Checks if the user selected any language in select and redirects to the chosen page. */
/* PT-BR - Verifica se o usuário selecionou algum idioma no select e redireciona para a página escolhida. */
const selectLanguage = document.querySelector("select");

selectLanguage.addEventListener('change', () => {
    language = selectLanguage.value;
    
    switch (language) {
        case "en":
            location = "index.html";
            break;
        case "es-la":
            location = "es-la.html";
            break;
        case "it": 
            location = "it.html";
            break;
        case "pt-br":
            location = "pt-br.html";
        break;
        case "fr":
            location = "fr.html";
        break;
    }
});