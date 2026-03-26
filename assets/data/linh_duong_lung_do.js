// 4. Linh dương lưng đỏ
const scname = "Cephalophus Dorsalis";
const vnname = "Linh dương lưng đỏ";
const tags = "Trung Phi";
const appearance = "- Cơ thể nhỏ gọn với lông màu nâu sẫm\n- Có dải lông màu đỏ hoặc nâu đỏ chạy dọc lưng\n- Đầu nhỏ, mõm nhọn\n- Sừng ngắn, thẳng ở cả con đực và con cái\n- Chiều dài cơ thể khoảng 90–110 cm, nặng khoảng 30–80 kg";
const lifestyle = "Linh dương lưng đỏ sống trong các khu rừng nhiệt đới rậm rạp ở Trung Phi. Chúng thường hoạt động đơn độc hoặc theo cặp và di chuyển kín đáo trong thảm thực vật dày. Thức ăn chủ yếu gồm trái cây rụng, lá, hạt và đôi khi là côn trùng nhỏ. Loài này có tập tính nhút nhát và thường tránh xa con người.";
const biography = "Cephalophus dorsalis phân bố ở nhiều khu rừng Trung Phi, đặc biệt trong lưu vực Congo. Chúng là một phần quan trọng của hệ sinh thái rừng, góp phần phát tán hạt giống thông qua việc ăn quả. Tuy nhiên, loài này đang bị đe dọa bởi săn bắt và mất môi trường sống, nên cần được bảo vệ để duy trì quần thể trong tự nhiên.";

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