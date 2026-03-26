// 12. Voi châu Phi
const scname = "Loxodonta Africana";
const vnname = "Voi châu Phi";
const tags = "Nam Phi";
const appearance = "- Cơ thể rất lớn với da dày màu xám\n- Tai rất to hình quạt\n- Có hai ngà dài bằng ngà voi\n- Vòi dài và linh hoạt dùng để ăn và uống\n- Chiều cao có thể đạt 3–4 m, nặng khoảng 4.000–7.000 kg";
const lifestyle = "Voi châu Phi sống ở các vùng savan, rừng và đồng cỏ ở Nam Phi. Chúng là loài ăn cỏ, thức ăn gồm lá, cỏ, vỏ cây và trái cây. Voi sống theo đàn do con cái dẫn đầu và có cấu trúc xã hội rất chặt chẽ. Chúng di chuyển liên tục để tìm kiếm thức ăn và nước.";
const biography = "Loxodonta africana là loài động vật trên cạn lớn nhất thế giới. Chúng phân bố rộng ở nhiều khu vực châu Phi cận Sahara, bao gồm Nam Phi. Voi châu Phi đóng vai trò quan trọng trong hệ sinh thái bằng cách thay đổi môi trường sống và phát tán hạt giống. Tuy nhiên, loài này đang bị đe dọa do nạn săn trộm lấy ngà và mất môi trường sống, vì vậy được bảo vệ nghiêm ngặt ở nhiều quốc gia.";

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