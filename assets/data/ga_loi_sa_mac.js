// 2. Gà lôi sa mạc
const scname = "Burhinus Oedicnemus";
const vnname = "Gà lôi sa mạc";
const tags = "Tây Á";
const appearance = "- Cơ thể trung bình với lông màu nâu nhạt, pha sọc đậm\n- Mắt lớn màu vàng đặc trưng\n- Chân dài, màu vàng nhạt\n- Mỏ ngắn, màu sẫm\n- Chiều dài cơ thể khoảng 38–46 cm";
const lifestyle = "Gà lôi sa mạc sống ở vùng đồng cỏ khô, bán sa mạc và đất trống ở Tây Á. Chúng thường hoạt động về ban đêm và kiếm ăn trên mặt đất. Thức ăn gồm côn trùng, giun và hạt. Loài này thường sống đơn độc hoặc theo cặp, di chuyển kín đáo để tránh kẻ săn mồi.";
const biography = "Burhinus oedicnemus phân bố rộng ở Tây Á, Bắc Phi và châu Âu nam. Chúng là loài chim có khả năng ngụy trang tốt nhờ bộ lông màu đất, giúp tránh kẻ săn mồi. Hiện nay loài này vẫn phổ biến trong tự nhiên, đặc biệt ở các vùng đất khô và mở.";

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