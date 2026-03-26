// 11. Okapi
const scname = "Okapia Johnstoni";
const vnname = "Okapi";
const tags = "Trung Phi";
const appearance = "- Cơ thể trung bình với lông màu nâu đỏ\n- Chân có các sọc trắng đen giống ngựa vằn\n- Cổ dài nhưng ngắn hơn hươu cao cổ\n- Tai lớn và linh hoạt\n- Chiều dài cơ thể khoảng 2–2,5 m, nặng khoảng 200–350 kg";
const lifestyle = "Okapi sống trong các khu rừng nhiệt đới rậm rạp ở Trung Phi. Chúng là loài sống đơn độc và hoạt động chủ yếu vào ban ngày. Thức ăn gồm lá cây, chồi non, trái cây và nấm. Loài này thường di chuyển âm thầm trong rừng và có khả năng ngụy trang tốt.";
const biography = "Okapia johnstoni là họ hàng gần của hươu cao cổ và chỉ được phát hiện vào đầu thế kỷ 20. Chúng phân bố chủ yếu trong rừng mưa Congo ở Trung Phi. Okapi đóng vai trò quan trọng trong hệ sinh thái rừng. Tuy nhiên, loài này đang bị đe dọa do mất môi trường sống và săn bắt trái phép, nên được bảo vệ trong các khu bảo tồn.";

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