// 1. Hươu đốm (nai chital)
const scname = "Axis Axis";
const vnname = "Hươu đốm (nai chital)";
const tags = "Nam Á";
const appearance = "- Cơ thể thon với lông màu nâu đỏ\n- Có nhiều đốm trắng nhỏ trên toàn thân\n- Bụng và phần dưới cơ thể màu trắng\n- Con đực có gạc dài, phân nhánh\n- Chiều dài cơ thể khoảng 1–1,5 m, nặng khoảng 25–75 kg";
const lifestyle = "Hươu đốm sống ở rừng thưa, đồng cỏ và khu vực gần nguồn nước ở Nam Á. Chúng thường sống theo đàn lớn và rất cảnh giác với kẻ săn mồi. Thức ăn chủ yếu gồm cỏ, lá cây và trái cây rụng. Loài này hoạt động cả ban ngày và ban đêm, thường kiếm ăn vào sáng sớm và chiều tối.";
const biography = "Axis axis phân bố rộng ở Ấn Độ, Nepal và Sri Lanka. Đây là một trong những loài hươu phổ biến nhất ở Nam Á và đóng vai trò quan trọng trong chuỗi thức ăn. Chúng là con mồi chính của nhiều loài săn mồi như hổ. Hiện nay loài này vẫn có số lượng ổn định ở nhiều khu bảo tồn.";

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