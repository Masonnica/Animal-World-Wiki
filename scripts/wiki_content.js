const search = new URLSearchParams(window.location.search).get('search');
const path = `assets/data/${search}.js`;
const script = document.createElement('script');

script.id = 'load';
script.src = path;
script.onload = onload || function () { };
document.body.appendChild(script);

// ─── TABLE OF CONTENT NAVIGATION ───
function initTableOfContent() {
    const sections = [
        { id: 'appearance', link: document.querySelector('#table-content a[href="#appearance"]') },
        { id: 'lifestyle', link: document.querySelector('#table-content a[href="#lifestyle"]') },
        { id: 'biography', link: document.querySelector('#table-content a[href="#biography"]') },
    ];

    // Gán id cho từng section trong #content
    document.querySelector('#content .appearance').id = 'appearance';
    document.querySelector('#content .lifestyle').id = 'lifestyle';
    document.querySelector('#content .biography').id = 'biography';

    // Click vào link → scroll đến section
    sections.forEach(({ id, link }) => {
        if (!link) return;
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const el = document.getElementById(id);
            const offset = 76; // 56px header + 20px khoảng thở
            const top = el.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        });
    });

    // Scroll → cập nhật active link
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const link = document.querySelector(`#table-content a[href="#${entry.target.id}"]`);
            if (!link) return;
            if (entry.isIntersecting) {
                // Xoá active khỏi tất cả
                document.querySelectorAll('#table-content a').forEach(a => a.classList.remove('active'));
                // Thêm active vào link hiện tại
                link.classList.add('active');
            }
        });
    }, {
        rootMargin: '-30% 0px -60% 0px', // kích hoạt khi section ở vùng giữa màn hình
        threshold: 0,
    });

    // Quan sát từng section
    sections.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
    });
}

initTableOfContent();
