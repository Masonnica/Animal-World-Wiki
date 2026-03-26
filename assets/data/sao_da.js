// 5. Sáo đá (sáo đen Ấn Độ)
const scname = "Gracula Religiosa";
const vnname = "Sáo đá (sáo đen Ấn Độ)";
const tags = "Nam Á";
const appearance = "- Cơ thể trung bình với lông đen bóng\n- Mỏ màu cam hoặc vàng sáng\n- Có mảng da trần màu vàng ở phía sau mắt\n- Cánh có đốm trắng rõ khi bay\n- Chiều dài cơ thể khoảng 25–30 cm";
const lifestyle = "Sáo đá sống trong rừng nhiệt đới, rừng thưa và khu vực gần con người ở Nam Á. Chúng thường sống theo cặp hoặc nhóm nhỏ. Thức ăn chủ yếu gồm trái cây, côn trùng và các động vật nhỏ. Loài này nổi tiếng với khả năng bắt chước âm thanh và giọng nói rất tốt.";
const biography = "Gracula religiosa phân bố ở nhiều khu vực Nam và Đông Nam Á. Đây là một trong những loài chim biết nói tốt nhất, nên thường được nuôi làm thú cưng. Trong tự nhiên, chúng đóng vai trò quan trọng trong việc phát tán hạt giống. Tuy nhiên, việc buôn bán chim cảnh đã ảnh hưởng đến số lượng của loài này ở một số khu vực.";

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