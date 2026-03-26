// 5. Chim turaco khổng lồ
const scname = "Corythaeola Cristata";
const vnname = "Chim turaco khổng lồ";
const tags = "Trung Phi";
const appearance = "- Cơ thể lớn với lông màu xanh lục đậm\n- Đầu có mào lớn dựng đứng\n- Cánh có màu nâu đỏ đặc trưng\n- Đuôi dài và rộng\n- Chiều dài cơ thể khoảng 70–75 cm";
const lifestyle = "Chim turaco khổng lồ sống trong các khu rừng nhiệt đới rậm rạp ở Trung Phi. Chúng thường di chuyển trên cây hơn là bay xa. Thức ăn chủ yếu gồm trái cây, lá non và hoa. Loài chim này thường sống theo nhóm nhỏ và phát ra âm thanh lớn để liên lạc.";
const biography = "Corythaeola cristata là loài turaco lớn nhất ở châu Phi, phân bố chủ yếu trong các khu rừng mưa Trung Phi. Chúng đóng vai trò quan trọng trong việc phát tán hạt giống nhờ chế độ ăn trái cây. Nhờ thích nghi tốt với môi trường rừng, loài này vẫn còn khá phổ biến trong phạm vi phân bố tự nhiên.";

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