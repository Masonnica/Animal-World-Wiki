// 14. Chim toucan mỏ to
const scname = "Ramphastos Toco";
const vnname = "Chim toucan mỏ to";
const tags = "Nam Mỹ";
const appearance = "- Lông cơ thể chủ yếu màu đen\n- Cổ và ngực màu trắng, phần dưới đuôi màu đỏ\n- Mỏ rất lớn, màu cam sáng với đầu mỏ đen\n- Vùng da quanh mắt màu xanh nhạt\n- Chiều dài cơ thể khoảng 55–65 cm, mỏ có thể dài tới khoảng 20 cm";
const lifestyle = "Chim toucan mỏ to sống trong các khu rừng nhiệt đới, rừng thưa và savan ở Nam Mỹ. Chúng thường sống theo cặp hoặc theo nhóm nhỏ và di chuyển giữa các cây để tìm thức ăn. Thức ăn chủ yếu là trái cây, nhưng chúng cũng ăn côn trùng, trứng chim và các động vật nhỏ. Toucan dùng chiếc mỏ lớn để với tới quả ở những cành cây xa.";
const biography = "Ramphastos toco là loài toucan lớn nhất và nổi tiếng nhất ở Nam Mỹ. Chúng phân bố chủ yếu ở Brazil, Bolivia, Paraguay và các khu vực lân cận. Loài chim này thường làm tổ trong các hốc cây tự nhiên. Nhờ chiếc mỏ lớn và màu sắc nổi bật, toucan mỏ to trở thành một trong những loài chim biểu tượng của rừng nhiệt đới Nam Mỹ.";

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