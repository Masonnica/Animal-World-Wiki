// 10. Tuần lộc
const scname = "Rangifer Tarandus";
const vnname = "Tuần lộc";
const tags = "Tây Âu";
const appearance = "- Cơ thể lớn với lông dày màu nâu xám\n- Cả con đực và con cái đều có sừng\n- Cổ có lớp lông dài và dày\n- Chân dài với móng rộng giúp di chuyển trên tuyết\n- Chiều dài cơ thể khoảng 1,6–2,1 m, nặng khoảng 80–300 kg";
const lifestyle = "Tuần lộc sống ở các vùng lãnh nguyên, rừng phương bắc và vùng lạnh ở Tây Âu. Chúng thường di cư theo đàn lớn để tìm kiếm thức ăn theo mùa. Thức ăn chủ yếu gồm rêu, cỏ, lá cây và địa y. Vào mùa đông, chúng dùng móng đào tuyết để tìm thức ăn bên dưới.";
const biography = "Rangifer tarandus phân bố rộng ở các vùng Bắc Âu, Bắc Á và Bắc Mỹ. Ở châu Âu, chúng sống chủ yếu tại Scandinavia và một số khu vực lạnh của Tây Âu. Tuần lộc có vai trò quan trọng trong văn hóa và đời sống của nhiều cộng đồng bản địa ở vùng Bắc Cực. Hiện nay chúng vẫn tồn tại với nhiều quần thể hoang dã và bán thuần hóa.";

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