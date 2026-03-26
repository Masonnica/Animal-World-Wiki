// 13. Cá hồi Đại Tây Dương
const scname = "Salmo Salar";
const vnname = "Cá hồi Đại Tây Dương";
const tags = "Bắc Mỹ";
const appearance = "- Cơ thể thon dài, màu bạc sáng khi sống ở biển\n- Lưng thường có màu xanh xám hoặc xanh lục\n- Hai bên thân có nhiều đốm đen nhỏ\n- Vây đuôi rộng, giúp bơi mạnh trong dòng nước\n- Chiều dài thường khoảng 70–120 cm, nặng khoảng 3–15 kg";
const lifestyle = "Cá hồi Đại Tây Dương sống cả ở biển và nước ngọt. Chúng sinh ra trong các con sông, sau đó bơi ra biển để lớn lên và tìm thức ăn. Khi đến mùa sinh sản, cá hồi trưởng thành quay trở lại đúng con sông nơi chúng được sinh ra để đẻ trứng. Thức ăn của chúng gồm cá nhỏ, giáp xác và các sinh vật biển khác.";
const biography = "Salmo salar phân bố ở vùng Bắc Đại Tây Dương và các con sông chảy vào đại dương này, bao gồm nhiều khu vực ở Bắc Mỹ. Loài cá này nổi tiếng với hành trình di cư dài từ biển vào sông để sinh sản. Trong lịch sử, số lượng cá hồi Đại Tây Dương đã giảm ở nhiều nơi do ô nhiễm, đập thủy điện và đánh bắt quá mức. Hiện nay nhiều chương trình bảo tồn và nuôi thả đang được thực hiện để phục hồi quần thể của chúng.";

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
