const articles = document.querySelectorAll("article");
const aside = document.querySelector("aside");
const closeBtn = document.querySelector(".closeBtn");


articles.forEach( article => {
    const imgSrc = article.querySelector("article img").getAttribute('src');
    const imgAlt = article.querySelector("article img").getAttribute('alt');

    article.addEventListener("mouseenter", e => {
        e.currentTarget.querySelector("img").setAttribute('src', imgSrc +".gif");
        e.currentTarget.querySelector("img").setAttribute('alt', imgAlt);
    });
    article.addEventListener("mouseleave", e => {
        e.currentTarget.querySelector("img").setAttribute('src', imgSrc);
        e.currentTarget.querySelector("img").setAttribute('alt', imgAlt);
    });

    article.addEventListener("click", e => {
        const tit = e.currentTarget.querySelector("h2").innerHTML;
        const con = e.currentTarget.querySelector("p").innerText;
        
        aside.querySelector("h2").innerHTML = tit;
        aside.querySelector("p").innerText = con;
        aside.querySelector("img").setAttribute('src', imgSrc +".gif");
        aside.querySelector("img").setAttribute('alt', imgAlt);
        aside.classList.add('on');
    });

    closeBtn.addEventListener("click", () => {
        aside.classList.remove('on');
    });
});