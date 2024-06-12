document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('mobile-menu');

    menuButton.addEventListener('click', function() {
        const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
        menuButton.setAttribute('aria-expanded', !isExpanded);
        menu.classList.toggle('hidden');
        
        // Toggle icons
        menuButton.querySelectorAll('svg').forEach(svg => svg.classList.toggle('hidden'));
    });

	// // ロゴの参照を取得
	// const logo = document.getElementById('logo');

	// ダークモードとライトモードの切り替え
	const toggleModeButton = document.getElementById('toggleMode');
	const moonIcon = document.getElementById('moonIcon');
	const sunIcon = document.getElementById('sunIcon');

	toggleModeButton.addEventListener('click', function () {
	if (document.documentElement.classList.contains('dark')) {
		document.documentElement.classList.remove('dark');
		moonIcon.classList.remove('hidden');
		sunIcon.classList.add('hidden');
		// logo.src = 'images/kim_labo_logo.png';
		localStorage.setItem('theme', 'light'); // ライトモードをローカルストレージに保存
	} else {
		document.documentElement.classList.add('dark');
		moonIcon.classList.add('hidden');
		sunIcon.classList.remove('hidden');
		// logo.src = 'images/kim_labo_logo_dark.png';
		localStorage.setItem('theme', 'dark'); // ダークモードをローカルストレージに保存
	}
	});

	// 初期モード設定
	const savedTheme = localStorage.getItem('theme'); // ローカルストレージからテーマを取得
	if (savedTheme === 'dark') {
	document.documentElement.classList.add('dark');
	moonIcon.classList.add('hidden');
	sunIcon.classList.remove('hidden');
	logo.src = 'images/kim_labo_logo_dark.png';
	} else {
	document.documentElement.classList.remove('dark');
	moonIcon.classList.remove('hidden');
	sunIcon.classList.add('hidden');
	logo.src = 'images/kim_labo_logo.png';
	}
});