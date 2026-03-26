// 5. Linh dương Dorcas
const scname = "Gazella Dorcas";
const vnname = "Linh dương Dorcas";
const tags = "Bắc Phi";
const appearance = "- Cơ thể nhỏ và thanh mảnh\n- Lông màu nâu nhạt hoặc màu cát, bụng trắng\n- Hai bên thân có dải màu sẫm nhẹ\n- Sừng mảnh, cong nhẹ về phía sau ở cả con đực và con cái\n- Chiều dài cơ thể khoảng 90–110 cm, nặng khoảng 15–25 kg";
const lifestyle = "Linh dương Dorcas sống ở các vùng sa mạc và bán sa mạc ở Bắc Phi. Chúng thường di chuyển linh hoạt trên cát và hoạt động vào sáng sớm hoặc chiều tối để tránh nóng. Thức ăn chủ yếu gồm cỏ, lá cây và các loại thực vật sa mạc. Loài này có thể sống mà không cần uống nước trong thời gian dài nhờ lấy nước từ thức ăn.";
const biography = "Gazella dorcas phân bố rộng ở nhiều khu vực Bắc Phi và Trung Đông. Đây là một trong những loài linh dương thích nghi tốt với môi trường khô hạn. Tuy nhiên, số lượng của chúng đã giảm ở một số khu vực do săn bắn và mất môi trường sống. Hiện nay loài này được bảo vệ ở nhiều nơi nhằm duy trì quần thể tự nhiên.";

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
