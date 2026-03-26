// 9. Chim cốc lớn
const scname = "Phalacrocorax Carbo";
const vnname = "Chim cốc lớn";
const tags = "Tây Âu";
const appearance = "- Cơ thể lớn với lông màu đen sẫm\n- Cổ dài và mỏ dài cong ở đầu\n- Vùng da quanh gốc mỏ màu vàng nhạt\n- Cánh rộng, thích nghi với việc bơi và lặn\n- Chiều dài cơ thể khoảng 70–100 cm, sải cánh khoảng 120–160 cm";
const lifestyle = "Chim cốc lớn sống gần biển, hồ và sông ở Tây Âu. Chúng là loài chim lặn giỏi, thường bơi dưới nước để bắt cá. Sau khi bơi lặn, chim thường đứng dang rộng cánh để làm khô lông. Thức ăn chủ yếu của chúng là cá và các động vật thủy sinh nhỏ.";
const biography = "Phalacrocorax carbo phân bố rộng ở nhiều khu vực châu Âu, châu Á, châu África và một phần châu Đại Dương. Ở Tây Âu, chúng thường làm tổ theo đàn lớn trên vách đá ven biển, đảo nhỏ hoặc trên cây gần mặt nước. Loài chim này từng bị suy giảm số lượng do ô nhiễm môi trường, nhưng hiện nay quần thể đã phục hồi ở nhiều nơi nhờ các biện pháp bảo vệ.";

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