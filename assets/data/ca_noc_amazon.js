// 6. Cá nóc Amazon
const scname = "Colomesus Asellus";
const vnname = "Cá nóc Amazon";
const tags = "Nam Mỹ";
const appearance = "- Cơ thể nhỏ, hình bầu dục\n- Lưng màu xanh ô liu hoặc vàng nhạt\n- Bụng màu trắng sáng\n- Da trơn, không có vảy rõ rệt\n- Chiều dài cơ thể khoảng 6–10 cm";
const lifestyle = "Cá nóc Amazon sống trong các con sông và vùng nước ngọt của lưu vực sông Amazon ở Nam Mỹ. Chúng bơi khá nhanh và thường hoạt động vào ban ngày. Thức ăn của chúng gồm ốc nhỏ, giáp xác và côn trùng nước. Giống nhiều loài cá nóc khác, khi bị đe dọa chúng có thể phồng cơ thể lên để tự vệ.";
const biography = "Colomesus asellus là loài cá nóc nước ngọt đặc trưng của khu vực Amazon. Chúng được biết đến với tính cách khá năng động và tò mò. Loài cá này đôi khi được nuôi trong bể cá cảnh, nhưng cần môi trường nước sạch và chế độ ăn phù hợp. Trong tự nhiên, chúng đóng vai trò kiểm soát số lượng các loài động vật nhỏ trong hệ sinh thái sông.";

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