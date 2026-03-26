// 14. Khỉ langur xám
const scname = "Semnopithecus Entellus";
const vnname = "Khỉ langur xám";
const tags = "Nam Á";
const appearance = "- Cơ thể thon dài với lông màu xám nhạt hoặc vàng xám\n- Mặt đen không có lông\n- Đuôi dài cong lên trên\n- Tay chân dài, thích nghi leo trèo\n- Chiều dài cơ thể khoảng 50–80 cm, đuôi dài hơn thân";
const lifestyle = "Khỉ langur xám sống trong rừng, đồng cỏ và cả khu vực đô thị ở Nam Á. Chúng thường sống theo đàn với cấu trúc xã hội rõ ràng. Thức ăn chủ yếu gồm lá, quả, hoa và hạt. Loài này hoạt động vào ban ngày và di chuyển nhiều giữa các cây hoặc trên mặt đất.";
const biography = "Semnopithecus entellus phân bố rộng ở Ấn Độ và các khu vực lân cận ở Nam Á. Chúng thích nghi tốt với nhiều môi trường sống khác nhau, kể cả gần con người. Trong văn hóa Ấn Độ, loài khỉ này thường được tôn kính và bảo vệ. Hiện nay chúng vẫn khá phổ biến trong phạm vi phân bố tự nhiên.";

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