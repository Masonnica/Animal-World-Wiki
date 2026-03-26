// 1. Vẹt Macaw xanh vàng
const scname = "Ara Ararauna";
const vnname = "Vẹt Macaw xanh vàng";
const tags = "Nam Mỹ";
const appearance = "- Lông lưng và cánh màu xanh lam rực rỡ\n- Ngực và bụng màu vàng tươi\n- Mặt trắng với các vạch lông đen mảnh\n- Mỏ lớn, cong và rất khỏe để bẻ hạt cứng\n- Chiều dài cơ thể khoảng 76–86 cm, sải cánh khoảng 100–110 cm";
const lifestyle = "Vẹt Macaw xanh vàng sống trong các khu rừng nhiệt đới, rừng ven sông và đầm lầy ở Nam Mỹ. Chúng thường sống theo cặp hoặc theo đàn nhỏ và bay thành nhóm khi tìm kiếm thức ăn. Thức ăn chủ yếu gồm hạt, quả, quả hạch và đôi khi là đất sét ở các vách đất ven sông để trung hòa độc tố từ thức ăn. Loài vẹt này rất ồn ào và có tiếng kêu vang xa trong rừng.";
const biography = "Ara ararauna phân bố rộng ở nhiều quốc gia Nam Mỹ như Brazil, Bolivia, Paraguay và Venezuela. Chúng là một trong những loài vẹt macaw nổi tiếng nhất nhờ màu sắc sặc sỡ và kích thước lớn. Loài này thường làm tổ trong các hốc cây cao trong rừng. Hiện nay quần thể của chúng vẫn khá phổ biến, nhưng ở một số khu vực bị đe dọa do mất môi trường sống và buôn bán động vật hoang dã.";

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