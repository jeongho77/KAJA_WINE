document.getElementById('menuButton').addEventListener('click', function() {
    var menuBar = document.getElementById('menuBar');
    if (menuBar.style.display === 'none') {
        menuBar.style.display = 'block';
        this.textContent = '메뉴 닫기';
    } else {
        menuBar.style.display = 'none';
        this.textContent = '메뉴 열기';
    }
}); 