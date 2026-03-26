// 13. Vẹt cổ hồng
const scname = "Psittacula Krameri";
const vnname = "Vẹt cổ hồng";
const tags = "Nam Á";
const appearance = "- Cơ thể nhỏ với lông màu xanh lá cây\n- Đuôi dài và nhọn\n- Con đực có vòng cổ màu đen và hồng đặc trưng\n- Mỏ đỏ cong và khỏe\n- Chiều dài cơ thể khoảng 35–40 cm (bao gồm đuôi)";
const lifestyle = "Vẹt cổ hồng sống ở rừng thưa, đồng cỏ và khu vực đô thị ở Nam Á. Chúng thường bay theo đàn lớn và rất ồn ào. Thức ăn chủ yếu gồm hạt, trái cây, hoa và chồi non. Loài này thích nghi tốt với môi trường sống gần con người và có thể xuất hiện ở các thành phố.";
const biography = "Psittacula krameri phân bố rộng ở Nam Á và một phần châu Phi. Nhờ khả năng thích nghi cao, chúng đã được du nhập và sinh sống ở nhiều nơi trên thế giới. Đây là loài vẹt phổ biến và thường được nuôi làm thú cưng. Tuy nhiên, trong tự nhiên chúng cũng có thể trở thành loài gây hại cho nông nghiệp do ăn hoa màu.";

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