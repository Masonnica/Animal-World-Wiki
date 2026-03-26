// 3. Cá lóc
const scname = "Channa Striata";
const vnname = "Cá lóc";
const tags = "Nam Á";
const appearance = "- Cơ thể dài, hình trụ\n- Đầu dẹt giống đầu rắn\n- Màu nâu sẫm với các vệt hoa văn loang\n- Vây dài chạy dọc thân\n- Chiều dài thường khoảng 30–100 cm";
const lifestyle = "Cá lóc sống trong ao, hồ, sông và ruộng nước ở Nam Á. Chúng có thể sống trong môi trường nước nghèo oxy nhờ khả năng hô hấp phụ bằng không khí. Loài này là động vật ăn thịt, thức ăn gồm cá nhỏ, ếch, côn trùng và các động vật khác. Chúng thường hoạt động mạnh vào ban đêm.";
const biography = "Channa striata phân bố rộng ở Nam và Đông Nam Á. Đây là loài cá quen thuộc và có giá trị thực phẩm cao. Nhờ khả năng thích nghi tốt với nhiều môi trường khác nhau, cá lóc thường được nuôi và khai thác rộng rãi. Trong tự nhiên, chúng đóng vai trò là loài săn mồi trong hệ sinh thái nước ngọt.";

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