// Sidebar
function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

// Scroll up button
function showBtn() {
    const topbtn = document.querySelector('.topbtn a:nth-child(2)')
    topbtn.style.display = 'block'
}

document.addEventListener('DOMContentLoaded', function () {
    const topBtn = document.querySelector('.topbtn');
    if (!topBtn) return;
    const SHOW_AFTER = 150; // pixel scroll untuk menampilkan tombol

    window.addEventListener('scroll', function () {
        if (window.scrollY > SHOW_AFTER) {
            topBtn.classList.add('visible');
        } else {
            topBtn.classList.remove('visible');
        }
    });
});