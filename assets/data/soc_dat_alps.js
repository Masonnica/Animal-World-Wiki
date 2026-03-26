// 7. Sóc đất Alps
const scname = "Marmota Marmota";
const vnname = "Sóc đất Alps";
const tags = "Tây Âu";
const appearance = "- Cơ thể to và tròn với lông dày\n- Lông màu nâu xám hoặc nâu vàng\n- Đuôi ngắn và rậm lông\n- Tai nhỏ, đầu tròn\n- Chiều dài cơ thể khoảng 40–55 cm, nặng khoảng 3–8 kg";
const lifestyle = "Sóc đất Alps sống ở các vùng núi cao và đồng cỏ trên núi tại Tây Âu. Chúng đào hang sâu trong đất để trú ẩn và sinh sống theo nhóm gia đình. Thức ăn chủ yếu gồm cỏ, lá cây, hoa và các loại thực vật. Vào mùa đông, chúng ngủ đông trong hang để tiết kiệm năng lượng.";
const biography = "Marmota marmota phân bố chủ yếu ở dãy Alps và một số vùng núi cao khác ở Tây Âu. Loài này thích nghi tốt với khí hậu lạnh và môi trường núi đá. Sóc đất Alps nổi tiếng với tiếng huýt sáo lớn dùng để cảnh báo đồng loại khi có kẻ săn mồi. Hiện nay chúng vẫn khá phổ biến trong các khu vực núi cao được bảo vệ.";

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