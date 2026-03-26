// 10. Cá tra
const scname = "Pangasius Pangasius";
const vnname = "Cá tra";
const tags = "Nam Á";
const appearance = "- Cơ thể dài, dẹt bên và trơn\n- Lưng xám xanh, bụng màu trắng bạc\n- Miệng rộng với râu cảm giác dài\n- Vây lưng và vây đuôi phát triển tốt\n- Chiều dài cơ thể khoảng 60–120 cm, nặng 5–20 kg";
const lifestyle = "Cá tra sống trong sông, hồ và vùng nước ngọt ở Nam Á. Chúng thường sống ở tầng nước giữa và gần đáy. Thức ăn chủ yếu gồm cá nhỏ, giáp xác, sinh vật phù du và mảnh hữu cơ. Loài này hoạt động cả ngày lẫn đêm, thường sống theo đàn.";
const biography = "Pangasius pangasius phân bố rộng ở các hệ thống sông lớn Nam Á như sông Hằng, sông Brahmaputra và sông Mekong. Đây là loài cá nước ngọt quan trọng về kinh tế và được nuôi rộng rãi. Nhờ khả năng thích nghi với nhiều điều kiện nước, cá tra trở thành loài chủ lực trong ngành nuôi trồng thủy sản khu vực.";

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