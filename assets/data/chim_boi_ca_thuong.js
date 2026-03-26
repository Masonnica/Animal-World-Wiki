// 1. Chim bói cá thường
const scname = "Alcedo Atthis";
const vnname = "Chim bói cá thường";
const tags = "Tây Âu";
const appearance = "- Lông lưng màu xanh lam sáng ánh kim\n- Ngực và bụng màu cam nâu\n- Mỏ dài, nhọn và màu đen\n- Đầu khá lớn so với cơ thể\n- Chiều dài cơ thể khoảng 16–18 cm, sải cánh khoảng 24–26 cm";
const lifestyle = "Chim bói cá thường sống gần các con sông, suối và hồ nước sạch ở Tây Âu. Chúng thường đậu trên cành cây gần mặt nước để quan sát con mồi. Khi phát hiện cá nhỏ hoặc côn trùng nước, chúng lao nhanh xuống nước để bắt. Loài chim này hoạt động chủ yếu vào ban ngày và thường sống đơn lẻ hoặc theo cặp.";
const biography = "Alcedo atthis phân bố rộng ở nhiều khu vực châu Âu, châu Á và Bắc Phi, trong đó có nhiều vùng ở Tây Âu. Chúng thường đào hang làm tổ trong bờ đất gần sông hoặc suối. Nhờ màu sắc rực rỡ và cách săn mồi đặc biệt, chim bói cá thường được xem là một trong những loài chim đẹp nhất ở các vùng nước ngọt châu Âu.";

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