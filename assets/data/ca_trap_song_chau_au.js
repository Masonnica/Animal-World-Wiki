// 1. Cá tráp sông châu Âu
const scname = "Abramis Brama";
const vnname = "Cá tráp sông châu Âu";
const tags = "Đông Âu";
const appearance = "- Cơ thể dẹt và cao\n- Lưng màu xám nâu hoặc xanh xám\n- Hai bên thân màu bạc hoặc vàng nhạt\n- Vây lưng ngắn, vây hậu môn dài\n- Chiều dài thường khoảng 30–55 cm, có thể nặng 1–4 kg";
const lifestyle = "Cá tráp sông châu Âu sống trong các con sông lớn, hồ và vùng nước chậm ở Đông Âu. Chúng thường bơi theo đàn lớn gần đáy nước. Thức ăn chủ yếu gồm giun, ấu trùng côn trùng, động vật nhỏ sống ở đáy và các mảnh thực vật. Loài cá này thường kiếm ăn bằng cách hút bùn và lọc lấy thức ăn.";
const biography = "Abramis brama phân bố rộng ở nhiều vùng nước ngọt của châu Âu và một phần châu Á, đặc biệt phổ biến ở Đông Âu. Chúng là loài cá quen thuộc trong nghề cá nước ngọt và thường được đánh bắt làm thực phẩm. Loài này thích nghi tốt với nhiều môi trường nước khác nhau, từ sông lớn đến hồ tự nhiên và hồ nhân tạo.";

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