window.addEventListener("load", () => {
    const grid = new Isotope("section", {
        itemSelector: "article",
        columWidth: "article",
        transitionDuration: ".5s"
    });

    const btns = document.querySelectorAll("main ul li");
    btns.forEach( btn => {
        btn.addEventListener("click", e => {
            e.preventDefault();

            // .on 이 있으면 반환하도록(버튼 재활성화 안되도록)
            const isOn = e.currentTarget.classList.contains("on");
            if(isOn) return;

            activation(e);                
        });
    });

    function activation(event){
        // 버튼 활성화
        for(let btn of btns) btn.classList.remove("on");
        event.currentTarget.classList.add("on");
        // 갤러리 이미지 설정
        const btn_a = event.currentTarget.querySelector("a");
        const a_href = btn_a.getAttribute("href");
        // 필터 기능으로 이미지 필터링
        grid.arrange({filter: a_href});
    }
});