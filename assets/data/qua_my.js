// 7. Quạ Mỹ
const scname = "Corvus Brachyrhynchos";
const vnname = "Quạ Mỹ";
const tags = "Bắc Mỹ";
const appearance = "- Toàn thân lông màu đen bóng\n- Mỏ to, thẳng và màu đen\n- Đuôi khá dài và hình quạt khi bay\n- Chân và mắt đều màu đen\n- Chiều dài cơ thể khoảng 40–50 cm, sải cánh khoảng 85–100 cm";
const lifestyle = "Quạ Mỹ sống ở nhiều môi trường khác nhau như rừng, đồng cỏ, nông trại và cả thành phố. Chúng là loài ăn tạp, thức ăn gồm côn trùng, hạt, trái cây, động vật nhỏ và cả xác động vật. Quạ rất thông minh, thường sống theo đàn và có khả năng giao tiếp bằng nhiều loại tiếng kêu khác nhau. Chúng cũng có thể sử dụng công cụ đơn giản để tìm thức ăn.";
const biography = "Corvus brachyrhynchos là một trong những loài quạ phổ biến nhất ở Bắc Mỹ, phân bố rộng khắp từ Canada đến Hoa Kỳ. Loài chim này thích nghi tốt với môi trường do con người thay đổi và thường xuất hiện gần khu dân cư hoặc vùng nông nghiệp. Nhờ trí thông minh cao và khả năng học hỏi nhanh, quạ Mỹ được xem là một trong những loài chim thông minh nhất trong tự nhiên.";

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
