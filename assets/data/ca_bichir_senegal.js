// 13. Cá bichir Senegal
const scname = "Polypterus Senegalus";
const vnname = "Cá bichir Senegal";
const tags = "Trung Phi";
const appearance = "- Cơ thể dài và hình trụ\n- Lưng có nhiều vây nhỏ riêng biệt xếp dọc\n- Màu xám hoặc xám xanh\n- Đầu dẹt với miệng rộng\n- Chiều dài cơ thể khoảng 30–50 cm";
const lifestyle = "Cá bichir Senegal sống trong các con sông, hồ và vùng nước đục ở Trung Phi. Chúng thường sống gần đáy và có thể bò trên nền bùn bằng các vây. Loài này hoạt động chủ yếu vào ban đêm. Thức ăn gồm cá nhỏ, côn trùng và các động vật thủy sinh khác. Chúng có khả năng hít không khí từ mặt nước.";
const biography = "Polypterus senegalus là một trong những loài cá cổ xưa với đặc điểm tiến hóa độc đáo. Chúng phân bố ở nhiều khu vực Trung Phi như lưu vực sông Nile và sông Congo. Loài này được xem là “hóa thạch sống” do giữ nhiều đặc điểm nguyên thủy. Ngoài tự nhiên, chúng còn được nuôi làm cá cảnh nhờ hình dáng đặc biệt và khả năng thích nghi cao.";

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