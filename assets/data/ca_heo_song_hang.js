// 12. Cá heo sông Hằng
const scname = "Platanista Gangetica";
const vnname = "Cá heo sông Hằng";
const tags = "Nam Á";
const appearance = "- Cơ thể dài, thon với màu xám hoặc nâu nhạt\n- Mõm rất dài và hẹp\n- Mắt nhỏ, thị lực kém\n- Vây lưng thấp, không rõ rệt\n- Chiều dài cơ thể khoảng 2–2,6 m, nặng khoảng 70–90 kg";
const lifestyle = "Cá heo sông Hằng sống trong các con sông lớn ở Nam Á, đặc biệt là sông Hằng và sông Brahmaputra. Chúng thường sống đơn lẻ hoặc theo cặp. Loài này sử dụng sóng âm để định vị và tìm kiếm thức ăn trong nước đục. Thức ăn chủ yếu gồm cá nhỏ và động vật thủy sinh.";
const biography = "Platanista gangetica là loài cá heo nước ngọt hiếm, chỉ phân bố ở một số hệ thống sông lớn ở Nam Á. Chúng thích nghi với môi trường nước đục bằng khả năng định vị bằng âm thanh thay vì thị giác. Hiện nay loài này đang bị đe dọa nghiêm trọng do ô nhiễm, xây dựng đập và mất môi trường sống, nên được bảo vệ ở nhiều khu vực.";

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