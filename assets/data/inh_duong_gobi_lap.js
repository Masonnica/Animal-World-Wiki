// 13. Linh dương Gobi
const scname = "Gazella Subgutturosa";
const vnname = "Linh dương Gobi";
const tags = "Tây Á";
const appearance = "- Cơ thể thon, màu nâu nhạt với bụng trắng\n- Sừng thẳng, dài và hơi cong về sau ở cả con đực và con cái\n- Chân dài, mảnh và khỏe\n- Mặt có các vệt đen nổi bật\n- Chiều cao vai khoảng 70–90 cm, nặng 20–35 kg";
const lifestyle = "Linh dương Gobi sống ở sa mạc, bán sa mạc và đồng cỏ khô ở Tây Á. Chúng là loài ăn cỏ, thức ăn gồm cỏ, lá cây và hạt. Loài này thường sống theo đàn từ vài con đến vài chục con, di chuyển nhiều để tìm thức ăn và nước.";
const biography = "Gazella subgutturosa phân bố ở các vùng sa mạc và bán sa mạc Tây Á và Trung Á. Chúng là loài thích nghi tốt với môi trường khô hạn, giúp duy trì cân bằng hệ sinh thái đồng cỏ. Hiện nay, săn bắn và mất môi trường sống đã ảnh hưởng đến quần thể, nên loài này được bảo vệ trong nhiều khu bảo tồn.";

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