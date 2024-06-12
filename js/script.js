document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

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