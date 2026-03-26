// 13. Sư tử
const scname = "Panthera Leo";
const vnname = "Sư tử";
const tags = "Nam Phi";
const appearance = "- Cơ thể lớn, cơ bắp phát triển\n- Lông màu vàng nâu, bụng sáng màu hơn\n- Con đực có bờm dày quanh cổ\n- Đuôi dài với chùm lông ở cuối\n- Chiều dài cơ thể khoảng 1,7–2,5 m, nặng khoảng 120–250 kg";
const lifestyle = "Sư tử sống ở các vùng savan, đồng cỏ và rừng thưa ở Nam Phi. Chúng là loài săn mồi đỉnh cao và thường sống theo bầy đàn. Con cái thường tham gia săn mồi theo nhóm, trong khi con đực bảo vệ lãnh thổ. Thức ăn chủ yếu gồm các loài động vật lớn như linh dương, ngựa vằn và trâu.";
const biography = "Panthera leo là một trong những loài mèo lớn nổi tiếng nhất trên thế giới và là biểu tượng của sức mạnh. Chúng phân bố ở nhiều khu vực châu Phi cận Sahara, trong đó Nam Phi là một vùng sinh sống quan trọng. Trong những năm gần đây, số lượng sư tử đã giảm do mất môi trường sống và xung đột với con người, vì vậy loài này đang được bảo vệ ở nhiều khu bảo tồn.";

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