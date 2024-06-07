document.addEventListener('DOMContentLoaded', function () {
    let slideIndex = 0;
    let isDragging = false;
    let startPos = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let animationID = 0;
    let autoSlideTimeout;

    const slides = document.getElementsByClassName("mySlides");

    function showSlides(n) {
        slideIndex += n;
        if (slideIndex > slides.length) { slideIndex = 1; }
        if (slideIndex < 1) { slideIndex = slides.length; }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
        slides[slideIndex - 1].style.transform = "translateX(0)";
        resetAutoSlideTimer();
    }

    function plusSlides(n) {
        showSlides(n);
    }

    function resetAutoSlideTimer() {
        clearTimeout(autoSlideTimeout);
        autoSlideTimeout = setTimeout(() => plusSlides(1), 5000); // 5秒ごとにスライドを切り替え
    }

    document.querySelector('.prev').addEventListener('click', function () {
        plusSlides(-1);
    });

    document.querySelector('.next').addEventListener('click', function () {
        plusSlides(1);
    });

    // ドラッグイベントを追加
    for (let slide of slides) {
        slide.addEventListener('mousedown', touchStart);
        slide.addEventListener('touchstart', touchStart);
        slide.addEventListener('mouseup', touchEnd);
        slide.addEventListener('mouseleave', touchEnd);
        slide.addEventListener('touchend', touchEnd);
        slide.addEventListener('mousemove', touchMove);
        slide.addEventListener('touchmove', touchMove);
    }

    function touchStart(event) {
        isDragging = true;
        startPos = getPositionX(event);
        animationID = requestAnimationFrame(animation);
        event.preventDefault(); // デフォルト動作を無効にする
        clearTimeout(autoSlideTimeout); // タイマーをクリアする
    }

    function touchEnd(event) {
        isDragging = false;
        cancelAnimationFrame(animationID);
        const movedBy = currentTranslate - prevTranslate;

        if (movedBy < -100) {
            plusSlides(1);
        } else if (movedBy > 100) {
            plusSlides(-1);
        } else {
            slides[slideIndex - 1].style.transform = `translateX(0)`;
        }
        currentTranslate = 0;
        prevTranslate = 0;
        resetAutoSlideTimer(); // タイマーをリセットする
        event.preventDefault(); // デフォルト動作を無効にする
    }

    function touchMove(event) {
        if (isDragging) {
            const currentPosition = getPositionX(event);
            currentTranslate = prevTranslate + currentPosition - startPos;
            slides[slideIndex - 1].style.transform = `translateX(${currentTranslate}px)`;
        }
        event.preventDefault(); // デフォルト動作を無効にする
    }

    function getPositionX(event) {
        return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
    }

    function animation() {
        if (isDragging) {
            requestAnimationFrame(animation);
        }
    }

    // 初回のスライド表示を開始
    showSlides(1);

    // ロゴの参照を取得
    const logo = document.querySelector('.header-logo img');

    // ダークモードとライトモードの切り替え
    const toggleModeButton = document.getElementById('toggleMode');
    toggleModeButton.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');
        if (document.body.classList.contains('dark-mode')) {
            toggleModeButton.src = 'images/sun.jpeg';
            logo.src = 'images/kim_labo_logo_dark.png';
            localStorage.setItem('theme', 'dark'); // ダークモードをローカルストレージに保存
        } else {
            toggleModeButton.src = 'images/moon.jpg';
            logo.src = 'images/kim_labo_logo.png';
            localStorage.setItem('theme', 'light'); // ライトモードをローカルストレージに保存
        }
    });

    // 初期モード設定
    const savedTheme = localStorage.getItem('theme'); // ローカルストレージからテーマを取得
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
		toggleModeButton.src = 'images/sun.jpeg';
        logo.src = 'images/kim_labo_logo_dark.png';
    } else {
        document.body.classList.add('light-mode');
		toggleModeButton.src = 'images/moon.jpg';
        logo.src = 'images/kim_labo_logo.png';
    }
});
