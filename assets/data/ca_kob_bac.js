// 3. Cá kob bạc
const scname = "Argyrosomus Japonicus";
const vnname = "Cá kob bạc";
const tags = "Nam Phi";
const appearance = "- Cơ thể dài và hơi dẹt bên\n- Màu bạc hoặc xám ánh kim\n- Lưng sẫm màu hơn bụng\n- Miệng lớn với môi dày\n- Chiều dài có thể đạt 1–1,8 m, nặng khoảng 10–50 kg";
const lifestyle = "Cá kob bạc sống ở vùng biển ven bờ, cửa sông và đầm phá ở Nam Phi. Chúng thường hoạt động ở tầng nước giữa và gần đáy. Thức ăn chủ yếu gồm cá nhỏ, tôm và các loài giáp xác. Loài này thường di chuyển theo đàn và có thể di cư theo mùa để sinh sản.";
const biography = "Argyrosomus japonicus phân bố ở nhiều vùng biển thuộc Ấn Độ Dương và Tây Thái Bình Dương, trong đó có vùng biển Nam Phi. Đây là loài cá có giá trị kinh tế cao và được đánh bắt rộng rãi. Trong những năm gần đây, một số quần thể đã bị suy giảm do khai thác quá mức, vì vậy cần có các biện pháp quản lý để bảo vệ nguồn lợi tự nhiên.";

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