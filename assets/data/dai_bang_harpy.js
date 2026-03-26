// 9. Đại bàng Harpy
const scname = "Harpia Harpyja";
const vnname = "Đại bàng Harpy";
const tags = "Nam Mỹ";
const appearance = "- Cơ thể lớn với lông màu xám và trắng\n- Đầu có chùm lông dài có thể dựng lên như mào\n- Cánh rộng và khỏe, thích hợp bay trong rừng rậm\n- Chân rất to với móng vuốt dài và sắc\n- Chiều dài cơ thể khoảng 86–107 cm, sải cánh khoảng 2 m";
const lifestyle = "Đại bàng Harpy sống trong các khu rừng mưa nhiệt đới rậm rạp ở Nam Mỹ. Chúng là loài săn mồi mạnh mẽ, thường bắt các động vật sống trên cây như khỉ, lười và các loài thú nhỏ khác. Đại bàng Harpy thường săn mồi bằng cách bay lặng lẽ qua tán rừng rồi bất ngờ lao xuống bắt con mồi bằng móng vuốt khỏe.";
const biography = "Harpia harpyja là một trong những loài đại bàng lớn và mạnh nhất thế giới. Chúng phân bố chủ yếu ở các khu rừng nhiệt đới từ Mexico đến Brazil và nhiều vùng khác của Nam Mỹ. Loài này thường làm tổ trên những cây rất cao và chăm sóc con non trong thời gian dài. Do nạn phá rừng và mất môi trường sống, số lượng đại bàng Harpy đã giảm ở nhiều khu vực và hiện nay đang được bảo vệ.";

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