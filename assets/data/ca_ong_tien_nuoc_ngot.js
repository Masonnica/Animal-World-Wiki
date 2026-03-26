// 12. Cá ông tiên nước ngọt
const scname = "Pterophyllum Scalare";
const vnname = "Cá ông tiên nước ngọt";
const tags = "Nam Mỹ";
const appearance = "- Cơ thể dẹt và cao, hình gần giống tam giác\n- Lưng và bụng kéo dài thành các vây nhọn\n- Màu cơ thể thường bạc hoặc xám với các sọc đen dọc\n- Vây dài và mảnh, giúp di chuyển nhẹ nhàng trong nước\n- Chiều dài cơ thể khoảng 12–15 cm, chiều cao có thể tới 20–25 cm";
const lifestyle = "Cá ông tiên nước ngọt sống trong các con sông và vùng nước chậm của lưu vực sông Amazon ở Nam Mỹ. Chúng thường bơi giữa các cây thủy sinh và rễ cây dưới nước. Thức ăn gồm côn trùng nhỏ, giáp xác, ấu trùng và cá nhỏ. Loài cá này thường sống theo nhóm nhỏ và di chuyển chậm rãi trong môi trường nước.";
const biography = "Pterophyllum scalare là một trong những loài cá cảnh nước ngọt phổ biến nhất trên thế giới. Chúng có nguồn gốc từ các con sông ở Nam Mỹ, đặc biệt là khu vực Amazon. Nhờ hình dạng đẹp và dễ nuôi, loài cá này đã được lai tạo thành nhiều biến thể màu sắc khác nhau trong ngành nuôi cá cảnh. Trong tự nhiên, chúng đóng vai trò là loài săn mồi nhỏ trong hệ sinh thái sông ngòi.";

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