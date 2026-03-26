// 2. Chim mỏ giày
const scname = "Balaeniceps Rex";
const vnname = "Chim mỏ giày";
const tags = "Trung Phi";
const appearance = "- Cơ thể lớn với lông màu xám xanh\n- Mỏ rất to, dày và hình dạng giống chiếc giày\n- Mắt lớn, nhìn thẳng về phía trước\n- Cổ dài và chân cao\n- Chiều cao khoảng 110–140 cm, sải cánh khoảng 230–260 cm";
const lifestyle = "Chim mỏ giày sống ở các vùng đầm lầy, hồ nước và khu vực ngập nước ở Trung Phi. Chúng thường đứng yên trong thời gian dài để rình mồi. Thức ăn chủ yếu gồm cá lớn, ếch và các động vật nước khác. Loài chim này hoạt động đơn độc và có tính lãnh thổ cao.";
const biography = "Balaeniceps rex phân bố chủ yếu ở các vùng đầm lầy của Trung Phi như Nam Sudan, Uganda và Congo. Chúng là loài chim hiếm và có tập tính săn mồi đặc biệt. Do mất môi trường sống và buôn bán động vật, số lượng của loài này đang bị đe dọa. Hiện nay chim mỏ giày được bảo vệ ở nhiều khu bảo tồn tự nhiên.";

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