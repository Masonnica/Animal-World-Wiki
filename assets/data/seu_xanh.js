// 1. Sếu xanh
const scname = "Anthropoides Paradiseus";
const vnname = "Sếu xanh";
const tags = "Nam Phi";
const appearance = "- Cơ thể thanh mảnh với lông màu xám xanh\n- Đầu và cổ thon dài\n- Cánh có lông dài rủ xuống gần chạm đất\n- Mặt nhạt màu, mỏ thon\n- Chiều cao khoảng 100–120 cm, sải cánh khoảng 180–200 cm";
const lifestyle = "Sếu xanh sống ở các vùng đồng cỏ, nông trại và savan ở Nam Phi. Chúng thường kiếm ăn trên mặt đất với thức ăn gồm hạt, côn trùng và các động vật nhỏ. Loài chim này thường sống theo cặp hoặc đàn nhỏ và có các điệu nhảy đặc trưng trong mùa sinh sản.";
const biography = "Anthropoides paradiseus là loài chim biểu tượng quốc gia của Nam Phi. Chúng phân bố chủ yếu tại khu vực này và thích nghi với môi trường đồng cỏ mở. Trong quá khứ, số lượng của chúng đã giảm do mất môi trường sống và tác động của con người. Hiện nay loài này được bảo vệ và có nhiều chương trình bảo tồn nhằm duy trì quần thể.";

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