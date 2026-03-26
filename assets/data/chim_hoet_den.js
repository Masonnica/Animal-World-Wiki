// 13. Chim hoét đen
const scname = "Turdus Merula";
const vnname = "Chim hoét đen";
const tags = "Tây Âu";
const appearance = "- Con đực có lông đen tuyền\n- Mỏ màu vàng cam nổi bật\n- Vòng da quanh mắt màu vàng\n- Con cái có lông nâu sẫm và mỏ tối màu hơn\n- Chiều dài cơ thể khoảng 23–29 cm, sải cánh khoảng 34–38 cm";
const lifestyle = "Chim hoét đen sống phổ biến trong rừng, công viên và khu dân cư ở Tây Âu. Chúng thường kiếm ăn trên mặt đất, thức ăn gồm giun đất, côn trùng, quả mọng và hạt. Loài chim này nổi tiếng với tiếng hót trong trẻo, thường vang lên vào sáng sớm hoặc chiều tối. Chúng hoạt động chủ yếu vào ban ngày.";
const biography = "Turdus merula phân bố rộng ở nhiều khu vực châu Âu, bao gồm phần lớn Tây Âu. Ban đầu chúng sống chủ yếu trong rừng, nhưng dần thích nghi với môi trường đô thị và nông thôn. Hiện nay chim hoét đen là một trong những loài chim quen thuộc nhất trong các khu vườn và công viên ở châu Âu.";

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