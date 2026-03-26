// 15. Thú ăn kiến Tamandua phương Nam
const scname = "Tamandua Tetradactyla";
const vnname = "Thú ăn kiến Tamandua phương Nam";
const tags = "Nam Mỹ";
const appearance = "- Cơ thể phủ lông màu vàng nhạt hoặc nâu\n- Có dải lông đen lớn chạy dọc lưng và hai bên thân\n- Mõm dài và hẹp, không có răng\n- Lưỡi dài và dính để bắt kiến và mối\n- Chiều dài cơ thể khoảng 50–90 cm, đuôi dài có thể bám vào cành cây";
const lifestyle = "Thú ăn kiến Tamandua phương Nam sống trong rừng nhiệt đới, rừng thưa và savan ở Nam Mỹ. Chúng có thể sống cả trên cây và trên mặt đất. Thức ăn chủ yếu là kiến và mối, được bắt bằng lưỡi dài và dính. Tamandua thường hoạt động vào ban đêm hoặc lúc hoàng hôn và dùng móng vuốt mạnh để phá tổ côn trùng.";
const biography = "Tamandua tetradactyla phân bố rộng ở nhiều khu vực Nam Mỹ như Brazil, Bolivia, Paraguay và Argentina. Loài này thích nghi tốt với nhiều môi trường khác nhau, từ rừng rậm đến vùng đồng cỏ. Chúng là một phần quan trọng của hệ sinh thái vì giúp kiểm soát số lượng côn trùng như kiến và mối trong tự nhiên.";

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