// 12. Gấu mèo
const scname = "Procyon Lotor";
const vnname = "Gấu mèo";
const tags = "Bắc Mỹ";
const appearance = "- Lông màu xám nâu, dày và mềm\n- Mặt có vệt lông đen quanh mắt giống như chiếc mặt nạ\n- Đuôi dài với nhiều khoang màu đen và xám xen kẽ\n- Tai nhỏ, dựng đứng\n- Chiều dài cơ thể khoảng 40–70 cm, nặng khoảng 3–9 kg";
const lifestyle = "Gấu mèo sống ở nhiều môi trường khác nhau như rừng, đầm lầy, vùng nông thôn và cả thành phố. Chúng là loài ăn tạp, thức ăn gồm trái cây, hạt, côn trùng, cá, ếch và đôi khi cả trứng chim. Gấu mèo hoạt động chủ yếu vào ban đêm và có khả năng leo trèo rất giỏi. Chúng cũng nổi tiếng với thói quen dùng hai chân trước khéo léo để cầm và khám phá thức ăn.";
const biography = "Procyon lotor là loài động vật có vú phổ biến ở Bắc Mỹ, phân bố rộng từ Canada đến Hoa Kỳ và Mexico. Nhờ khả năng thích nghi cao, chúng có thể sống tốt trong cả môi trường tự nhiên lẫn khu đô thị. Trong nhiều nền văn hóa bản địa Bắc Mỹ, gấu mèo thường xuất hiện trong các câu chuyện dân gian nhờ tính thông minh và lanh lợi của nó.";

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
