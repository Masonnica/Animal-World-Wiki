// 7. Khỉ đột Tây
const scname = "Gorilla Gorilla";
const vnname = "Khỉ đột Tây";
const tags = "Trung Phi";
const appearance = "- Cơ thể rất to và cơ bắp\n- Lông màu đen hoặc xám đen\n- Con đực trưởng thành có lưng bạc (silverback)\n- Tay dài hơn chân, thích nghi leo trèo\n- Chiều cao khoảng 1,4–1,8 m, nặng khoảng 100–200 kg";
const lifestyle = "Khỉ đột Tây sống trong các khu rừng nhiệt đới rậm rạp ở Trung Phi. Chúng thường sống theo nhóm gia đình do một con đực đầu đàn dẫn dắt. Thức ăn chủ yếu gồm lá cây, quả, thân cây và đôi khi là côn trùng. Loài này hoạt động vào ban ngày và dành nhiều thời gian để ăn và nghỉ ngơi.";
const biography = "Gorilla gorilla là một trong những loài linh trưởng lớn nhất trên thế giới. Chúng phân bố chủ yếu ở các khu rừng Trung Phi như Congo và Gabon. Khỉ đột Tây đóng vai trò quan trọng trong hệ sinh thái rừng nhờ phát tán hạt giống. Tuy nhiên, loài này đang bị đe dọa nghiêm trọng do săn bắt, bệnh tật và mất môi trường sống, nên được bảo vệ nghiêm ngặt ở nhiều khu bảo tồn.";

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