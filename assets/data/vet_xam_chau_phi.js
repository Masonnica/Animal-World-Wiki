// 14. Vẹt xám châu Phi
const scname = "Psittacus Erithacus";
const vnname = "Vẹt xám châu Phi";
const tags = "Trung Phi";
const appearance = "- Cơ thể trung bình với lông màu xám\n- Đuôi ngắn màu đỏ tươi nổi bật\n- Mỏ đen, cong và rất khỏe\n- Mắt màu vàng nhạt\n- Chiều dài cơ thể khoảng 30–35 cm";
const lifestyle = "Vẹt xám châu Phi sống trong các khu rừng nhiệt đới ở Trung Phi. Chúng thường sống theo đàn và có khả năng bay xa để tìm kiếm thức ăn. Thức ăn chủ yếu gồm hạt, quả, lá và vỏ cây. Loài này nổi tiếng với trí thông minh cao và khả năng bắt chước âm thanh, kể cả giọng nói con người.";
const biography = "Psittacus erithacus phân bố chủ yếu ở các khu rừng Trung Phi. Đây là một trong những loài vẹt thông minh nhất thế giới và thường được nuôi làm thú cưng. Tuy nhiên, việc buôn bán và mất môi trường sống đã khiến số lượng của chúng giảm đáng kể trong tự nhiên. Hiện nay loài này được bảo vệ ở nhiều quốc gia và nằm trong danh sách cần bảo tồn.";

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