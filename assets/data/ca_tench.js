// 15. Cá tench
const scname = "Tinca Tinca";
const vnname = "Cá tench";
const tags = "Đông Âu";
const appearance = "- Cơ thể dày và hơi tròn\n- Lông vảy nhỏ, phủ lớp chất nhầy dày\n- Màu sắc thường xanh ô liu, nâu xanh hoặc vàng nâu\n- Miệng nhỏ với hai râu ngắn ở khóe miệng\n- Chiều dài thường khoảng 20–40 cm, có thể nặng 1–3 kg";
const lifestyle = "Cá tench sống trong các hồ, ao và sông có dòng chảy chậm ở Đông Âu. Chúng thường ở gần đáy nước, nơi có nhiều bùn và thực vật thủy sinh. Thức ăn chủ yếu gồm ấu trùng côn trùng, giun, động vật nhỏ và các mảnh thực vật. Loài cá này hoạt động nhiều vào lúc chiều tối hoặc ban đêm.";
const biography = "Tinca tinca là loài cá nước ngọt phổ biến ở nhiều khu vực châu Âu, bao gồm Đông Âu. Chúng có khả năng sống tốt trong môi trường nước ít oxy và nhiều bùn. Trong lịch sử, cá tench thường được nuôi trong ao để làm thực phẩm. Hiện nay loài cá này vẫn phổ biến trong các hệ sinh thái nước ngọt và trong nghề nuôi cá truyền thống.";

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