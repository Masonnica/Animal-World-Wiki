// 14. Sóc đất châu Âu
const scname = "Spermophilus Citellus";
const vnname = "Sóc đất châu Âu";
const tags = "Đông Âu";
const appearance = "- Cơ thể nhỏ với lông màu nâu xám hoặc nâu vàng\n- Lưng có nhiều đốm sáng nhỏ\n- Đầu tròn, tai ngắn và mắt đen\n- Đuôi tương đối ngắn so với các loài sóc cây\n- Chiều dài cơ thể khoảng 18–23 cm, nặng khoảng 200–400 g";
const lifestyle = "Sóc đất châu Âu sống ở các vùng đồng cỏ, thảo nguyên và khu vực đất mở ở Đông Âu. Chúng đào hang dưới đất để sinh sống và trú ẩn khỏi kẻ săn mồi. Thức ăn chủ yếu gồm hạt, cỏ, rễ cây và côn trùng. Loài này thường hoạt động vào ban ngày và có thể ngủ đông trong mùa lạnh.";
const biography = "Spermophilus citellus phân bố ở nhiều quốc gia Đông Âu và Trung Âu, đặc biệt trong các vùng đồng cỏ tự nhiên. Chúng đóng vai trò quan trọng trong hệ sinh thái vì giúp xới đất và là nguồn thức ăn cho nhiều loài săn mồi. Tuy nhiên, ở một số nơi số lượng của chúng đã giảm do mất môi trường sống và thay đổi trong hoạt động nông nghiệp.";

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