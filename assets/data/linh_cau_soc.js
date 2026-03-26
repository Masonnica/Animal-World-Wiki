// 6. Linh cẩu sọc
const scname = "Hyaena Hyaena";
const vnname = "Linh cẩu sọc";
const tags = "Bắc Phi";
const appearance = "- Cơ thể trung bình với lông màu xám hoặc nâu nhạt\n- Có các sọc đen rõ rệt dọc thân\n- Bờm lưng dài có thể dựng lên khi bị đe dọa\n- Tai lớn và nhọn\n- Chiều dài cơ thể khoảng 100–130 cm, nặng khoảng 25–45 kg";
const lifestyle = "Linh cẩu sọc sống ở các vùng sa mạc, bán sa mạc và đồng cỏ khô ở Bắc Phi. Chúng chủ yếu hoạt động vào ban đêm và thường sống đơn độc hoặc theo cặp. Thức ăn chính là xác động vật, ngoài ra còn ăn trái cây và các nguồn thức ăn khác. Loài này có khứu giác rất phát triển giúp tìm xác thối từ khoảng cách xa.";
const biography = "Hyaena hyaena phân bố ở Bắc Phi, Trung Đông và một phần châu Á. Đây là loài linh cẩu ít hung dữ hơn so với linh cẩu đốm. Chúng đóng vai trò quan trọng trong hệ sinh thái bằng cách dọn xác động vật. Hiện nay loài này vẫn tồn tại ở nhiều khu vực nhưng bị đe dọa bởi mất môi trường sống và xung đột với con người.";

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
