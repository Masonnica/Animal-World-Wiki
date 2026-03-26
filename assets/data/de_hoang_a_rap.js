// 4. Dê hoang Ả Rập
const scname = "Capra Aegagrus";
const vnname = "Dê hoang Ả Rập";
const tags = "Tây Á";
const appearance = "- Cơ thể khỏe, lông màu nâu nhạt hoặc xám\n- Gạc cong, dài và khỏe ở cả con đực và con cái\n- Chân chắc, móng cứng thích nghi leo núi\n- Mặt nhọn, mắt to màu nâu\n- Chiều cao vai khoảng 70–90 cm, nặng 50–80 kg";
const lifestyle = "Dê hoang Ả Rập sống ở vùng núi đá, cao nguyên và sa mạc ở Tây Á. Chúng là loài ăn cỏ và bụi cây, thức ăn chủ yếu gồm lá, cỏ khô và hạt. Loài này sống theo đàn nhỏ hoặc gia đình và di chuyển nhiều để tìm thức ăn.";
const biography = "Capra aegagrus phân bố chủ yếu ở khu vực Tây Á, đặc biệt ở núi và cao nguyên khô. Đây là tổ tiên hoang dã của dê nhà (Capra hircus). Nhờ khả năng leo trèo xuất sắc và thích nghi với điều kiện khắc nghiệt, loài này tồn tại tốt trong môi trường núi đá và bán sa mạc.";

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