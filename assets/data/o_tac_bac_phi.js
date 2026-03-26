// 4. Ô tác Bắc Phi
const scname = "Chlamydotis Undulata";
const vnname = "Ô tác Bắc Phi";
const tags = "Bắc Phi";
const appearance = "- Cơ thể lớn với lông màu nâu cát và trắng\n- Lưng có các vệt sọc đen giúp ngụy trang\n- Cổ dài với các sợi lông trắng và đen xếp thành chùm\n- Cánh rộng, thích nghi với bay đường dài\n- Chiều dài cơ thể khoảng 55–75 cm, sải cánh khoảng 135–170 cm";
const lifestyle = "Ô tác Bắc Phi sống ở các vùng sa mạc và bán sa mạc rộng lớn. Chúng thường di chuyển trên mặt đất và bay khi cần thiết. Thức ăn chủ yếu gồm côn trùng, thằn lằn nhỏ, hạt và thực vật. Loài chim này hoạt động chủ yếu vào sáng sớm và chiều tối để tránh nhiệt độ cao ban ngày.";
const biography = "Chlamydotis undulata phân bố ở Bắc Phi và một phần Trung Đông. Loài này thích nghi tốt với môi trường khô hạn và có thể di chuyển quãng đường dài để tìm thức ăn. Trong những năm gần đây, số lượng của chúng đã giảm do săn bắn và mất môi trường sống, vì vậy đang được bảo vệ ở nhiều quốc gia.";

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
