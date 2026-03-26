// 11. Sơn dương chamois
const scname = "Rupicapra Rupicapra";
const vnname = "Sơn dương chamois";
const tags = "Đông Âu";
const appearance = "- Cơ thể nhỏ gọn với lông màu nâu vào mùa hè và nâu sẫm vào mùa đông\n- Bụng và phần mặt dưới sáng màu hơn\n- Đầu có hai chiếc sừng cong nhẹ về phía sau ở cả con đực và con cái\n- Mặt có các vệt đen chạy từ mắt xuống mõm\n- Chiều dài cơ thể khoảng 100–130 cm, nặng khoảng 20–50 kg";
const lifestyle = "Sơn dương chamois sống ở các vùng núi cao, vách đá và đồng cỏ trên núi ở nhiều khu vực Đông Âu. Chúng rất nhanh nhẹn và có khả năng leo trèo tốt trên địa hình dốc. Thức ăn chủ yếu là cỏ, lá cây, chồi non và các loại thực vật trên núi. Loài này thường sống theo đàn nhỏ để dễ dàng phát hiện kẻ săn mồi.";
const biography = "Rupicapra rupicapra phân bố rộng ở nhiều dãy núi châu Âu như Alps, Carpathians và Balkan. Chúng thích nghi tốt với môi trường núi đá và khí hậu lạnh. Trong nhiều khu vực, sơn dương chamois được xem là loài động vật biểu tượng của các vùng núi châu Âu. Hiện nay số lượng của chúng tương đối ổn định nhờ các biện pháp bảo vệ và quản lý săn bắn.";

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