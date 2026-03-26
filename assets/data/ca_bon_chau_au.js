// 8. Cá bơn châu Âu
const scname = "Pleuronectes Platessa";
const vnname = "Cá bơn châu Âu";
const tags = "Tây Âu";
const appearance = "- Cơ thể dẹt và rộng, thích nghi với đời sống ở đáy biển\n- Hai mắt nằm cùng một phía của đầu\n- Mặt trên màu nâu hoặc xanh ô liu với các đốm cam\n- Mặt dưới màu trắng nhạt\n- Chiều dài thường khoảng 30–60 cm, có thể nặng 2–7 kg";
const lifestyle = "Cá bơn châu Âu sống ở tầng đáy của vùng biển ven bờ và thềm lục địa ở Tây Âu. Chúng thường nằm sát đáy biển để ngụy trang trong cát hoặc bùn. Thức ăn chủ yếu gồm giun biển, động vật giáp xác và các loài động vật đáy nhỏ. Loài cá này thường hoạt động nhiều vào ban đêm để tìm kiếm thức ăn.";
const biography = "Pleuronectes platessa phân bố rộng ở vùng biển Bắc Đại Tây Dương và ven bờ Tây Âu. Đây là loài cá có giá trị thương mại cao và thường được đánh bắt trong ngành thủy sản. Cá bơn châu Âu đã là nguồn thực phẩm quan trọng trong ẩm thực của nhiều quốc gia châu Âu trong nhiều thế kỷ. Hiện nay việc khai thác loài này được quản lý nhằm bảo vệ quần thể tự nhiên.";

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