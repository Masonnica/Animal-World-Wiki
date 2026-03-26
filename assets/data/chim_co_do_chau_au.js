// 5. Chim cổ đỏ châu Âu
const scname = "Erithacus Rubecula";
const vnname = "Chim cổ đỏ châu Âu";
const tags = "Tây Âu";
const appearance = "- Cơ thể nhỏ với lông màu nâu ô liu\n- Ngực và mặt trước màu đỏ cam đặc trưng\n- Bụng màu trắng xám\n- Mỏ nhỏ và nhọn\n- Chiều dài cơ thể khoảng 12–14 cm, sải cánh khoảng 20–22 cm";
const lifestyle = "Chim cổ đỏ châu Âu sống trong rừng, vườn và công viên ở Tây Âu. Chúng thường kiếm ăn trên mặt đất, tìm côn trùng, giun và các động vật nhỏ. Loài chim này khá lãnh thổ và thường sống đơn lẻ. Chúng hoạt động chủ yếu vào ban ngày và có tiếng hót nhẹ nhàng, trong trẻo.";
const biography = "Erithacus rubecula phân bố rộng khắp châu Âu, đặc biệt phổ biến ở Tây Âu. Loài chim này thường làm tổ gần mặt đất trong bụi cây, hốc cây hoặc các khe đá. Nhờ ngoại hình dễ nhận biết và tiếng hót đặc trưng, chim cổ đỏ được xem là một trong những loài chim biểu tượng của nhiều quốc gia châu Âu.";

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