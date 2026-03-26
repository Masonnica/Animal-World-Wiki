// 7. Chuột nhảy sa mạc
const scname = "Jaculus Jaculus";
const vnname = "Chuột nhảy sa mạc";
const tags = "Bắc Phi";
const appearance = "- Cơ thể nhỏ với lông màu vàng cát\n- Chân sau rất dài, thích nghi để nhảy\n- Đuôi dài với chóp lông đen trắng\n- Tai tương đối lớn\n- Chiều dài cơ thể khoảng 10–13 cm, nặng khoảng 50–80 g";
const lifestyle = "Chuột nhảy sa mạc sống ở các vùng sa mạc và bán sa mạc ở Bắc Phi. Chúng hoạt động chủ yếu vào ban đêm để tránh nhiệt độ cao ban ngày. Loài này di chuyển bằng cách nhảy xa để trốn tránh kẻ săn mồi. Thức ăn gồm hạt, rễ cây và côn trùng. Chúng đào hang dưới cát để trú ẩn và giữ ẩm.";
const biography = "Jaculus jaculus phân bố rộng ở sa mạc Sahara và các khu vực khô hạn của Bắc Phi. Loài này thích nghi rất tốt với môi trường khắc nghiệt nhờ khả năng tiết kiệm nước và hoạt động về đêm. Chuột nhảy sa mạc đóng vai trò quan trọng trong hệ sinh thái sa mạc, vừa là loài tiêu thụ thực vật vừa là nguồn thức ăn cho nhiều loài săn mồi.";

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
