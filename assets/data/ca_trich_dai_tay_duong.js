// 4. Cá trích Đại Tây Dương
const scname = "Clupea Harengus";
const vnname = "Cá trích Đại Tây Dương";
const tags = "Tây Âu";
const appearance = "- Cơ thể thon và dẹt hai bên\n- Lưng màu xanh lam hoặc xanh xám\n- Hai bên thân và bụng màu bạc sáng\n- Vảy mỏng và dễ rụng\n- Chiều dài thường khoảng 20–40 cm, nặng khoảng 200–500 g";
const lifestyle = "Cá trích Đại Tây Dương sống thành đàn rất lớn trong vùng biển lạnh của Bắc Đại Tây Dương và ven biển Tây Âu. Chúng thường di chuyển theo đàn để tìm kiếm thức ăn và tránh kẻ săn mồi. Thức ăn chủ yếu gồm sinh vật phù du và các động vật nhỏ trong nước. Loài cá này thường di cư theo mùa để sinh sản.";
const biography = "Clupea harengus là một trong những loài cá quan trọng trong ngành đánh bắt của các quốc gia ven biển Tây Âu. Trong lịch sử, cá trích đã đóng vai trò lớn trong kinh tế và ẩm thực của nhiều nước châu Âu. Hiện nay loài cá này vẫn được khai thác rộng rãi nhưng cũng được quản lý chặt chẽ để bảo vệ nguồn lợi thủy sản.";

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