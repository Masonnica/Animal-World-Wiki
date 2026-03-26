// 15. Cáo Bắc Cực
const scname = "Vulpes Lagopus";
const vnname = "Cáo Bắc Cực";
const tags = "Tây Âu";
const appearance = "- Cơ thể nhỏ gọn với lông rất dày\n- Lông màu trắng vào mùa đông và nâu xám vào mùa hè\n- Tai nhỏ và tròn giúp giữ nhiệt\n- Đuôi dài và rậm lông\n- Chiều dài cơ thể khoảng 46–68 cm, nặng khoảng 3–9 kg";
const lifestyle = "Cáo Bắc Cực sống ở các vùng lạnh giá như lãnh nguyên và khu vực ven biển ở phía bắc Tây Âu. Chúng là loài ăn tạp, thức ăn gồm lemming, chim nhỏ, trứng, cá và xác động vật. Loài này rất thích nghi với khí hậu lạnh và có thể di chuyển trên băng tuyết để tìm kiếm thức ăn. Cáo Bắc Cực thường sống theo cặp hoặc gia đình nhỏ.";
const biography = "Vulpes lagopus phân bố rộng ở các vùng Bắc Cực của châu Âu, châu Á và Bắc Mỹ. Ở châu Âu, chúng xuất hiện tại các khu vực phía bắc như Iceland và Scandinavia. Loài cáo này nổi tiếng với khả năng chịu lạnh cực tốt nhờ lớp lông dày và cơ thể nhỏ gọn giúp giữ nhiệt. Hiện nay chúng vẫn tồn tại ở nhiều vùng Bắc Cực, nhưng một số quần thể bị đe dọa do biến đổi khí hậu.";

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