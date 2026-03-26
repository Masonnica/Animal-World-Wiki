// 8. Hà mã
const scname = "Hippopotamus Amphibius";
const vnname = "Hà mã";
const tags = "Nam Phi";
const appearance = "- Cơ thể rất lớn với da dày màu xám nâu\n- Đầu to, miệng rộng với răng nanh lớn\n- Mắt, tai và mũi nằm cao trên đầu\n- Chân ngắn nhưng rất khỏe\n- Chiều dài cơ thể khoảng 3–5 m, nặng khoảng 1.500–3.200 kg";
const lifestyle = "Hà mã sống ở các con sông, hồ và vùng nước ngọt ở Nam Phi. Chúng dành phần lớn thời gian trong nước để giữ mát và tránh ánh nắng. Vào ban đêm, chúng lên bờ để ăn cỏ. Hà mã thường sống theo nhóm và có tính lãnh thổ cao, đặc biệt là con đực.";
const biography = "Hippopotamus amphibius là một trong những loài động vật lớn đặc trưng của châu Phi. Chúng phân bố rộng ở các vùng nước ngọt của châu Phi cận Sahara, bao gồm Nam Phi. Hà mã đóng vai trò quan trọng trong hệ sinh thái sông hồ. Tuy nhiên, số lượng của chúng đang bị ảnh hưởng bởi mất môi trường sống và săn bắt, nên hiện nay được bảo vệ ở nhiều khu vực.";

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