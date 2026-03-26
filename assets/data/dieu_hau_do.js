// 9. Diều hâu đỏ
const scname = "Milvus Milvus";
const vnname = "Diều hâu đỏ";
const tags = "Đông Âu";
const appearance = "- Lông cơ thể màu nâu đỏ với nhiều vệt sẫm\n- Đầu màu xám nhạt với các sọc nhỏ\n- Đuôi dài và chẻ sâu thành hình chữ V\n- Cánh dài và rộng giúp bay lượn dễ dàng\n- Sải cánh khoảng 175–195 cm, chiều dài cơ thể khoảng 60–70 cm";
const lifestyle = "Diều hâu đỏ sống ở các vùng nông thôn, đồng cỏ, rừng thưa và khu vực gần sông hồ ở châu Âu. Chúng thường bay lượn trên cao để tìm thức ăn. Thức ăn gồm động vật nhỏ, chim non, côn trùng và cả xác động vật. Loài chim này thường sống đơn lẻ hoặc theo cặp và có khả năng bay lượn rất linh hoạt trong không khí.";
const biography = "Milvus milvus là loài chim săn mồi đặc trưng của châu Âu, trong đó có nhiều khu vực ở Đông Âu. Chúng từng bị suy giảm số lượng do săn bắn và mất môi trường sống. Tuy nhiên, nhờ các chương trình bảo tồn và luật bảo vệ chim săn mồi, quần thể của loài này đã phục hồi ở một số quốc gia. Diều hâu đỏ hiện được xem là một loài chim quan trọng trong hệ sinh thái nông thôn châu Âu.";

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