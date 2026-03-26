// 14. Kền kền Ấn Độ
const scname = "Gyps Fulvus";
const vnname = "Kền kền Ấn Độ";
const tags = "Tây Á";
const appearance = "- Cơ thể lớn với lông màu nâu nhạt đến nâu vàng\n- Cổ và đầu trần, ít lông\n- Cánh dài, rộng với sải cánh khoảng 2,5–2,8 m\n- Mỏ cong, khỏe để xé thịt\n- Chiều dài cơ thể khoảng 95–110 cm, nặng 6–11 kg";
const lifestyle = "Kền kền Ấn Độ sống ở các vùng núi, cao nguyên và sa mạc ở Tây Á. Chúng là loài ăn xác thối, thường bay cao để phát hiện xác động vật từ xa. Loài này sống theo đàn lớn và có khả năng bay rất xa để kiếm thức ăn.";
const biography = "Gyps fulvus phân bố rộng ở Tây Á, Trung Á và một phần châu Âu. Chúng đóng vai trò quan trọng trong hệ sinh thái nhờ việc dọn sạch xác chết, ngăn ngừa dịch bệnh. Hiện nay, loài này vẫn khá phổ biến nhưng chịu ảnh hưởng từ việc mất môi trường sống và ô nhiễm, nên cần giám sát quần thể trong tự nhiên.";

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