// 1. Đại bàng vàng
const scname = "Aquila Chrysaetos";
const vnname = "Đại bàng vàng";
const tags = "Tây Á";
const appearance = "- Cơ thể lớn với lông màu nâu sẫm\n- Đầu và cổ có tông màu vàng nhạt\n- Mỏ cong, khỏe, màu sẫm\n- Cánh dài và rộng, sải cánh khoảng 2–2,3 m\n- Chiều dài cơ thể khoảng 75–90 cm, nặng 3–6,5 kg";
const lifestyle = "Đại bàng vàng sống ở các vùng núi, thung lũng và cao nguyên ở Tây Á. Chúng là loài săn mồi đỉnh cao, thức ăn chủ yếu gồm các loài động vật nhỏ như thỏ, chim và đôi khi là cừu non. Chúng thường bay cao để quan sát con mồi và sống đơn độc hoặc theo cặp.";
const biography = "Aquila chrysaetos phân bố rộng ở Tây Á, Trung Á và châu Âu. Đây là một trong những loài đại bàng mạnh mẽ và nổi tiếng, đóng vai trò quan trọng trong cân bằng sinh thái bằng cách kiểm soát quần thể con mồi. Hiện nay, loài này vẫn phổ biến ở nhiều khu vực, nhưng cần giám sát để tránh xung đột với con người.";

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