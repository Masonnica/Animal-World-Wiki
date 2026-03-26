// 13. Cá walleye châu Âu (cá vược sông)
const scname = "Sander Lucioperca";
const vnname = "Cá walleye châu Âu (cá vược sông)";
const tags = "Đông Âu";
const appearance = "- Cơ thể thon dài, màu xanh xám hoặc xanh ô liu\n- Lưng có nhiều sọc đen dọc thân\n- Miệng rộng với nhiều răng sắc nhọn\n- Hai vây lưng tách biệt, vây trước có gai cứng\n- Chiều dài thường khoảng 40–80 cm, có thể nặng 2–10 kg";
const lifestyle = "Cá walleye châu Âu sống trong các con sông, hồ và vùng nước lợ ở Đông Âu. Chúng thường hoạt động mạnh vào ban đêm hoặc trong môi trường nước đục. Thức ăn chủ yếu là cá nhỏ, tôm và các động vật thủy sinh khác. Loài cá này thường săn mồi bằng cách rình rập rồi lao nhanh để bắt con mồi.";
const biography = "Sander lucioperca phân bố rộng ở nhiều khu vực Đông Âu và Trung Âu, đặc biệt trong các hệ thống sông lớn và hồ nước ngọt. Đây là loài cá có giá trị kinh tế cao và thường được đánh bắt làm thực phẩm. Trong nhiều khu vực, chúng cũng được nuôi hoặc thả vào hồ để phát triển nghề cá. Loài cá này đóng vai trò là loài săn mồi quan trọng trong hệ sinh thái nước ngọt.";

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