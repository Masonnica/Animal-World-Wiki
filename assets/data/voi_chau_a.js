// 4. Voi châu Á
const scname = "Elephas Maximus";
const vnname = "Voi châu Á";
const tags = "Nam Á";
const appearance = "- Cơ thể lớn với da dày màu xám\n- Tai nhỏ hơn so với voi châu Phi\n- Vòi dài và linh hoạt\n- Con đực có ngà dài, con cái thường không có hoặc rất nhỏ\n- Chiều cao khoảng 2–3,5 m, nặng khoảng 3.000–5.000 kg";
const lifestyle = "Voi châu Á sống trong rừng nhiệt đới, rừng thưa và đồng cỏ ở Nam Á. Chúng là loài ăn thực vật, thức ăn gồm cỏ, lá cây, vỏ cây và trái cây. Voi sống theo đàn do con cái dẫn dắt và có cấu trúc xã hội chặt chẽ. Chúng thường di chuyển để tìm nguồn thức ăn và nước.";
const biography = "Elephas maximus phân bố ở nhiều khu vực Nam và Đông Nam Á. Đây là loài voi nhỏ hơn so với voi châu Phi nhưng vẫn rất quan trọng trong hệ sinh thái. Trong lịch sử, voi châu Á đã được con người thuần hóa để sử dụng trong lao động và nghi lễ. Hiện nay, loài này đang bị đe dọa do mất môi trường sống và xung đột với con người, nên được bảo vệ ở nhiều quốc gia.";

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