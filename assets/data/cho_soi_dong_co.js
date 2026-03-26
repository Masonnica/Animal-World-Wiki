// 5. Chó sói đồng cỏ
const scname = "Canis Latrans";
const vnname = "Chó sói đồng cỏ";
const tags = "Bắc Mỹ";
const appearance = "- Lông màu xám nâu hoặc vàng nâu, bụng thường sáng hơn\n- Tai lớn, dựng đứng\n- Mõm dài và nhọn giống chó\n- Đuôi rậm, thường buông thấp khi di chuyển\n- Chiều dài cơ thể khoảng 1–1,3 m (tính cả đuôi), nặng khoảng 7–20 kg";
const lifestyle = "Chó sói đồng cỏ sống ở nhiều môi trường khác nhau như đồng cỏ, sa mạc, rừng và cả khu vực gần thành phố. Chúng là loài ăn tạp, thức ăn gồm chuột, thỏ, chim, côn trùng, trái cây và đôi khi cả xác động vật. Loài này thường săn mồi một mình hoặc theo cặp, nhưng đôi khi cũng tụ thành nhóm nhỏ. Chúng hoạt động chủ yếu vào ban đêm hoặc lúc hoàng hôn.";
const biography = "Canis latrans là loài chó hoang dã phổ biến ở Bắc Mỹ, phân bố từ Canada xuống đến Mexico. Trước đây chúng chủ yếu sống ở các vùng đồng cỏ, nhưng theo thời gian đã mở rộng phạm vi sang rừng, núi và cả khu đô thị. Chó sói đồng cỏ nổi tiếng với tiếng tru vang xa và khả năng thích nghi rất tốt với môi trường do con người thay đổi.";

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
