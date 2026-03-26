// 5. Cá mú chấm vàng
const scname = "Epinephelus Coioides";
const vnname = "Cá mú chấm vàng";
const tags = "Nam Á";
const appearance = "- Cơ thể lớn, hình bầu dục, dày\n- Màu nâu xám với các đốm vàng nhỏ trên thân\n- Miệng rộng, hàm khỏe\n- Vây lưng dài, vây đuôi tròn\n- Chiều dài cơ thể khoảng 40–120 cm, nặng 5–20 kg";
const lifestyle = "Cá mú chấm vàng sống ở vùng nước lợ, cửa sông và ven biển Nam Á. Chúng thường trú gần đáy, trong rạn san hô hoặc các khu vực đá ngầm. Là loài săn mồi, thức ăn gồm cá nhỏ, giáp xác và động vật thủy sinh khác. Loài này thường sống đơn lẻ hoặc theo cặp.";
const biography = "Epinephelus coioides phân bố rộng ở Nam Á, Đông Nam Á và ven biển Ấn Độ Dương. Đây là loài cá có giá trị kinh tế cao trong nuôi trồng thủy sản và đánh bắt ven biển. Nhờ khả năng thích nghi với môi trường nước lợ, loài cá này vẫn phổ biến ở nhiều khu vực, nhưng cần quản lý để tránh khai thác quá mức.";

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