// 2. Cú lùn Boreal
const scname = "Aegolius Funereus";
const vnname = "Cú lùn Boreal";
const tags = "Đông Âu";
const appearance = "- Cơ thể nhỏ với lông màu nâu sẫm\n- Lưng có nhiều đốm trắng nhỏ\n- Mặt tròn màu nhạt với viền lông rõ rệt\n- Mắt lớn màu vàng\n- Chiều dài cơ thể khoảng 22–27 cm, sải cánh khoảng 50–62 cm";
const lifestyle = "Cú lùn Boreal sống chủ yếu trong các khu rừng lá kim và rừng hỗn hợp ở Đông Âu. Chúng hoạt động vào ban đêm và săn mồi bằng cách bay lặng lẽ giữa các tán cây. Thức ăn chủ yếu là chuột, chim nhỏ và các loài động vật nhỏ khác. Loài cú này thường làm tổ trong các hốc cây hoặc hốc do chim gõ kiến tạo ra.";
const biography = "Aegolius funereus phân bố ở nhiều khu vực rừng phía bắc châu Âu và châu Á, bao gồm các vùng rừng ở Đông Âu. Chúng thích nghi tốt với môi trường rừng lạnh và thường sống ở nơi ít bị con người quấy rầy. Loài cú này có vai trò quan trọng trong việc kiểm soát số lượng loài gặm nhấm trong hệ sinh thái rừng.";

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