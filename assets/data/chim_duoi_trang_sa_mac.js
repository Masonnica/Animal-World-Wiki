// 9. Chim đuôi trắng sa mạc
const scname = "Oenanthe Leucopyga";
const vnname = "Chim đuôi trắng sa mạc";
const tags = "Bắc Phi";
const appearance = "- Cơ thể nhỏ với lông chủ yếu màu đen\n- Đuôi có phần trắng nổi bật, đặc biệt khi bay\n- Cánh màu đen đồng nhất\n- Mỏ nhỏ và nhọn\n- Chiều dài cơ thể khoảng 15–17 cm, sải cánh khoảng 26–32 cm";
const lifestyle = "Chim đuôi trắng sa mạc sống ở các vùng sa mạc đá và khu vực khô cằn ở Bắc Phi. Chúng thường đậu trên đá hoặc bụi cây thấp để quan sát xung quanh. Thức ăn chủ yếu gồm côn trùng và các động vật nhỏ. Loài chim này hoạt động vào ban ngày và thường sống đơn lẻ hoặc theo cặp.";
const biography = "Oenanthe leucopyga phân bố ở Bắc Phi và một số khu vực Trung Đông. Chúng thích nghi tốt với môi trường khắc nghiệt của sa mạc đá, nơi có ít cây cối và nhiệt độ cao. Loài chim này thường làm tổ trong các khe đá hoặc hốc nhỏ để tránh kẻ săn mồi và điều kiện thời tiết khắc nghiệt.";

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
