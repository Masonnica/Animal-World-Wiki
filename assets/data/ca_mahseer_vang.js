// 15. Cá mahseer vàng
const scname = "Tor Putitora";
const vnname = "Cá mahseer vàng";
const tags = "Nam Á";
const appearance = "- Cơ thể lớn, thon dài và khỏe\n- Vảy to, màu vàng ánh kim\n- Lưng sẫm hơn, bụng sáng màu\n- Miệng rộng với môi dày\n- Chiều dài có thể đạt 1–2 m, nặng khoảng 20–50 kg";
const lifestyle = "Cá mahseer vàng sống trong các con sông và suối nước chảy xiết ở vùng núi Nam Á. Chúng thường di chuyển ngược dòng để sinh sản. Thức ăn gồm tảo, côn trùng, giáp xác và cá nhỏ. Loài này bơi rất khỏe và thích môi trường nước sạch, giàu oxy.";
const biography = "Tor putitora phân bố chủ yếu ở các hệ thống sông lớn thuộc dãy Himalaya như sông Hằng và sông Ấn. Đây là loài cá có giá trị cao trong câu cá thể thao và cũng quan trọng về mặt sinh thái. Tuy nhiên, số lượng của chúng đang giảm do ô nhiễm, xây đập và khai thác quá mức, nên cần được bảo vệ và quản lý chặt chẽ.";

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