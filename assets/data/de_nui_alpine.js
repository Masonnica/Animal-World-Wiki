// 3. Dê núi Alpine
const scname = "Capra Ibex";
const vnname = "Dê núi Alpine";
const tags = "Tây Âu";
const appearance = "- Cơ thể to và khỏe với lông màu nâu xám\n- Con đực có cặp sừng rất dài, cong ra phía sau\n- Con cái có sừng ngắn và mảnh hơn\n- Chân chắc khỏe thích nghi với địa hình núi đá\n- Chiều dài cơ thể khoảng 120–150 cm, nặng khoảng 65–120 kg";
const lifestyle = "Dê núi Alpine sống ở các dãy núi cao và vách đá dốc ở Tây Âu. Chúng rất giỏi leo trèo và có thể di chuyển dễ dàng trên các bề mặt đá gần như thẳng đứng. Thức ăn chủ yếu gồm cỏ, lá cây, rêu và các loại thực vật trên núi. Loài này thường sống theo đàn, đặc biệt là các đàn con cái và con non.";
const biography = "Capra ibex phân bố chủ yếu ở dãy Alps thuộc khu vực Tây Âu. Trong quá khứ, số lượng của chúng từng giảm mạnh do săn bắn quá mức. Nhờ các chương trình bảo tồn và tái thả, quần thể dê núi Alpine đã phục hồi và hiện nay chúng là một biểu tượng của các vùng núi Alps.";

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