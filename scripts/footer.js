(function () {
    function renderFooter() {
        const container = document.getElementById('footer-container');
        if (!container) {
            console.error('Footer: không tìm thấy #footer-container');
            return;
        }

        container.innerHTML = `
            <!DOCTYPE html>
            <html lang="en">

            <head>
                <meta charset="UTF-8">
                <title>Footer</title>
                <link rel="stylesheet" href="styles/footer.css">
            </head>

            <body>
            <footer>
                <div class="footer-inner">
                    <div>
                        <div class="footer-brand-name">Thế Giới Động Vật</div>
                        <p class="footer-brand-desc">Nền tảng tra cứu kiến thức về động vật hoang dã, đưa con người lại gần với
                            thiên nhiên hơn.</p>
                    </div>
                    <div class="footer-col">
                        <h4>Khám phá</h4>
                        <ul>
                            <li><a href="#">Bản đồ thế giới</a></li>
                            <li><a href="#">Theo châu lục</a></li>
                            <li><a href="#">Loài nguy cấp</a></li>
                            <li><a href="#">Danh mục loài</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Thông tin</h4>
                        <ul>
                            <li><a href="#">Về dự án</a></li>
                            <li><a href="#">Nguồn dữ liệu</a></li>
                            <li><a href="#">Liên hệ</a></li>
                            <li><a href="#">Đóng góp</a></li>
                        </ul>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p class="footer-note">Dự Án Từ Điển Thế Giới Động Vật.</p>
                    <div class="footer-members">
                        <div class="footer-members-label">Thành viên thực hiện</div>
                        <div class="member-list">
                            <div class="member-item">Dương Anh Khôi<span>Phát triển</span></div>
                            <div class="member-item">Đặng Kim Ngọc<span>Nội dung</span></div>
                            <div class="member-item">Võ Ngọc Lam Sơn<span>Nội dung</span></div>
                        </div>
                    </div>
                </div>
            </footer>
            </body>
            </html>
        `;
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderFooter);
    } else {
        renderFooter();
    }
})();