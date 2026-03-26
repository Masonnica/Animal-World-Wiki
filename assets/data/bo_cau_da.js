// 6. Bồ câu đá
const scname = "Columba Livia";
const vnname = "Bồ câu đá";
const tags = "Bắc Mỹ";
const appearance = "- Cơ thể màu xám xanh, cổ có ánh kim xanh và tím\n- Hai cánh thường có hai vạch đen rõ rệt\n- Đuôi xám với dải đen ở gần chóp\n- Mỏ ngắn màu xám, phần gốc mỏ có lớp da trắng\n- Chiều dài khoảng 30–35 cm, sải cánh khoảng 62–72 cm";
const lifestyle = "Bồ câu đá sống phổ biến ở các thành phố, thị trấn và vùng nông thôn. Chúng thường làm tổ trên vách đá, mái nhà hoặc các công trình cao giống môi trường vách đá tự nhiên. Thức ăn chủ yếu là hạt, ngũ cốc và thức ăn do con người để lại. Loài chim này sống theo đàn và có khả năng định hướng rất tốt khi bay xa.";
const biography = "Columba livia có nguồn gốc từ châu Âu, Bắc Phi và Tây Á, nhưng đã được con người mang đến nhiều nơi trên thế giới, bao gồm cả Bắc Mỹ. Chúng thích nghi rất tốt với môi trường đô thị và trở thành một trong những loài chim phổ biến nhất tại các thành phố. Trong lịch sử, bồ câu còn được con người thuần hóa để làm chim đưa thư nhờ khả năng tìm đường về tổ rất chính xác.";

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
