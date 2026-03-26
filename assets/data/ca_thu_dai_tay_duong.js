// 11. Cá thu Đại Tây Dương
const scname = "Scomber Scombrus";
const vnname = "Cá thu Đại Tây Dương";
const tags = "Tây Âu";
const appearance = "- Cơ thể thon dài và thuôn nhọn\n- Lưng màu xanh đậm với nhiều vạch đen gợn sóng\n- Bụng màu bạc sáng\n- Vây nhỏ nằm phía sau vây lưng và vây hậu môn\n- Chiều dài thường khoảng 30–50 cm, nặng khoảng 0,5–2 kg";
const lifestyle = "Cá thu Đại Tây Dương sống trong vùng biển ôn đới của Bắc Đại Tây Dương và dọc bờ biển Tây Âu. Chúng thường bơi theo đàn lớn và di cư theo mùa để tìm thức ăn và sinh sản. Thức ăn chủ yếu gồm cá nhỏ, sinh vật phù du và các loài giáp xác. Loài cá này bơi rất nhanh và hoạt động chủ yếu ở tầng nước giữa.";
const biography = "Scomber scombrus là một loài cá biển quan trọng đối với ngành đánh bắt của nhiều quốc gia Tây Âu. Chúng đã được khai thác từ lâu làm thực phẩm và xuất hiện phổ biến trong nhiều món ăn truyền thống. Nhờ khả năng sinh sản cao và phân bố rộng, quần thể cá thu Đại Tây Dương vẫn khá ổn định, mặc dù việc quản lý khai thác vẫn rất cần thiết để bảo vệ nguồn lợi.";

function addList(list, selector) {
    for (let i = 0; i < list.length; i++) {
        const li = document.createElement('li');
        li.textContent = list[i];
        selector.appendChild(li);
    }
}

function addLine(lines, selector) {
    for (let i = 0; i < lines.length; i++) {
        console.log(lines[i])
        const span = document.createElement('span');
        if (lines[i].startsWith('- ')) {
            let islist = true;
            const list = [];
            const ul = document.createElement('ul');

            while (islist) {
                if (i >= lines.length) {
                    islist = false;
                } else if (lines[i].startsWith("- ")) {
                    list.push(lines[i].slice(2));
                } else {
                    islist = false;
                }
                i += 1;
            }
            i -= 2;

            addList(list, ul)
            console.log(ul)
            span.innerHTML = ul.outerHTML;
        } else {
            span.textContent = lines[i];
        }
        selector.appendChild(span);
    }
}

/* Title */
document.title = scname;
document.querySelector('#content .title h2').textContent = scname;
document.querySelector('#content .title p').textContent = vnname;
addList(tags.split("|"), document.querySelector("#content .title .tags"))

/* Content */
addLine(appearance.split("\n"), document.querySelector("#content .appearance .content"))
addLine(lifestyle.split("\n"), document.querySelector("#content .lifestyle .content"))
addLine(biography.split("\n"), document.querySelector("#content .biography .content"))