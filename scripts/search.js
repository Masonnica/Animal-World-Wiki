(function () {
    const CACHE_KEY = 'cache_animal_index';
    const INDEX_PATH = 'assets/data/index.js';

    let index = [];

    // ─── Load index ───
    function loadIndex(callback) {
        // Xoá script cũ nếu đã load trước đó
        const old = document.getElementById('animal-index');
        if (old) old.remove();

        // Xoá biến global cũ để tránh dùng dữ liệu cũ
        window.ANIMAL_INDEX = undefined;

        const script = document.createElement('script');
        script.id = 'animal-index';
        script.src = 'assets/data/index.js?' + Date.now(); // ?Date.now() buộc load lại mỗi lần
        script.onload = function () {
            index = window.ANIMAL_INDEX || [];
            callback(index);
        };
        script.onerror = function () {
            console.error('Search: không tải được index.js');
        };
        document.body.appendChild(script);
    }

    // ─── Tìm kiếm ───
    function search(keyword) {
        if (!keyword || keyword.trim() === '') return [];

        const q = keyword.toLowerCase().trim();

        return index.filter(animal => {
            return (
                animal.vnname.toLowerCase().includes(q) ||
                animal.scname.toLowerCase().includes(q) ||
                animal.tags.toLowerCase().includes(q)
            );
        });
    }

    // ─── Render kết quả ───
    function renderResults(results, dropdown) {
        dropdown.innerHTML = '';

        if (results.length === 0) {
            dropdown.innerHTML = `
        <div class="search-empty">
            <p>Không tìm thấy kết quả</p>
        </div>
        `;
            return;
        }

        results.forEach(animal => {
            const item = document.createElement('div');
            item.className = 'search-item';
            item.innerHTML = `
        <span class="search-item-vn">${animal.vnname}</span>
        <span class="search-item-sc">${animal.scname}</span>
        `;
            item.addEventListener('click', function () {
                window.location.href = `wiki.html?search=${animal.id}`;
            });
            dropdown.appendChild(item);
        });
    }

    // ─── Khởi tạo input ───
    function initSearch(input) {
        if (!input) return;

        // Tạo dropdown
        const dropdown = document.createElement('div');
        dropdown.className = 'search-dropdown';
        input.parentElement.style.position = 'relative';
        input.parentElement.appendChild(dropdown);

        let debounceTimer;

        // Typing
        input.addEventListener('input', function () {
            clearTimeout(debounceTimer);
            const q = input.value.trim();

            if (q.length < 2) {
                dropdown.classList.remove('open');
                return;
            }

            debounceTimer = setTimeout(function () {
                const results = search(q);
                renderResults(results, dropdown);
                dropdown.classList.add('open');
            }, 250); // chờ 250ms sau khi gõ xong mới tìm
        });

        // Nhấn Enter → chuyển thẳng đến trang wiki
        input.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' && input.value.trim()) {
                dropdown.classList.remove('open');
                window.location.href = `wiki.html?search=${encodeURIComponent(input.value.trim())}`;
            }
            // Nhấn ESC → đóng dropdown
            if (e.key === 'Escape') {
                dropdown.classList.remove('open');
                input.blur();
            }
        });

        // Click ra ngoài → đóng dropdown
        document.addEventListener('click', function (e) {
            if (!input.parentElement.contains(e.target)) {
                dropdown.classList.remove('open');
            }
        });
    }

    // ─── Khởi động ───
    loadIndex(function () {
        // Gắn vào tất cả input tìm kiếm trong trang
        document.querySelectorAll('.search-input').forEach(input => {
            initSearch(input);
        });
    });

})();