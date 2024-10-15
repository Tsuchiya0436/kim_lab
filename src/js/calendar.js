document.addEventListener("DOMContentLoaded", function() {
    let currentYear = new Date().getFullYear();
    let currentMonth = new Date().getMonth();

    function createCalendar(year, month) {
        const calendar = document.getElementById('calendar');
        const currentMonthDisplay = document.getElementById('currentMonth');
        
        // 年月を表示
        currentMonthDisplay.textContent = `${year}年${String(month + 1).padStart(2, '0')}月`;

        calendar.innerHTML = ''; // カレンダーをリセット
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        // 曜日ヘッダー
        const weekdays = ['日', '月', '火', '水', '木', '金', '土'];
        weekdays.forEach(day => {
            const dayElem = document.createElement('div');
            dayElem.className = 'font-bold text-center';
            dayElem.textContent = day;
            calendar.appendChild(dayElem);
        });

        // 最初の空白
        for (let i = 0; i < firstDay; i++) {
            const emptyCell = document.createElement('div');
            emptyCell.className = 'p-2';
            calendar.appendChild(emptyCell);
        }

        // 日付を追加
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month, day);
            const dayElem = document.createElement('div');
            dayElem.className = 'p-2 border border-gray-300 text-center rounded';
            dayElem.textContent = day;

            // 火曜(2), 水曜(3), 金曜(5)にハイライトと受付時間を追加
            if (date.getDay() === 2 || date.getDay() === 3 || date.getDay() === 5) {
                dayElem.classList.add('bg-pink-100', 'text-pink-700', 'font-bold');
                dayElem.title = '受付日';

                // 曜日に応じた受付時間を表示
                const timeElem = document.createElement('div');
                if (date.getDay() === 2 || date.getDay() === 5) {
                    timeElem.textContent = "昼休";
                } else if (date.getDay() === 3) {
                    timeElem.textContent = "3限";
                }
                timeElem.className = 'text-sm text-gray-600 mt-1';
                dayElem.appendChild(timeElem);
            }

            calendar.appendChild(dayElem);
        }
    }

    // ボタンのクリックイベントで月を変更
    document.getElementById('prevMonth').addEventListener('click', function() {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        createCalendar(currentYear, currentMonth);
    });

    document.getElementById('nextMonth').addEventListener('click', function() {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        createCalendar(currentYear, currentMonth);
    });

    // 最初のカレンダーを生成
    createCalendar(currentYear, currentMonth);
});
