// 3. Gà đá sa mạc
const scname = "Ammoperdix Heyi";
const vnname = "Gà đá sa mạc";
const tags = "Bắc Phi";
const appearance = "- Cơ thể nhỏ gọn với lông màu nâu cát\n- Lưng có các vệt sọc nâu và xám giúp ngụy trang\n- Bụng sáng màu hơn\n- Mặt có các vạch đen trắng rõ rệt\n- Chiều dài cơ thể khoảng 22–25 cm, nặng khoảng 150–200 g";
const lifestyle = "Gà đá sa mạc sống ở các vùng sa mạc khô cằn, sườn đá và đồi cát ở Bắc Phi. Chúng thường kiếm ăn trên mặt đất, thức ăn gồm hạt, côn trùng và các loại thực vật nhỏ. Loài chim này hoạt động chủ yếu vào sáng sớm và chiều muộn để tránh cái nóng ban ngày. Chúng thường sống theo cặp hoặc nhóm nhỏ.";
const biography = "Ammoperdix heyi phân bố ở Bắc Phi và một phần Trung Đông. Loài này thích nghi tốt với môi trường khô hạn nhờ khả năng tiết kiệm nước và tìm kiếm thức ăn trong điều kiện khắc nghiệt. Gà đá sa mạc thường làm tổ trên mặt đất, được che chắn bởi đá hoặc bụi cây. Hiện nay loài này vẫn khá phổ biến trong phạm vi phân bố tự nhiên.";

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
