// 11. Hươu đuôi trắng
const scname = "Odocoileus Virginianus";
const vnname = "Hươu đuôi trắng";
const tags = "Bắc Mỹ";
const appearance = "- Lông màu nâu đỏ vào mùa hè và xám nâu vào mùa đông\n- Phần bụng và mặt dưới đuôi màu trắng\n- Đuôi dài với mặt dưới trắng, thường dựng lên khi chạy\n- Con đực có cặp sừng phân nhánh, rụng và mọc lại mỗi năm\n- Chiều dài cơ thể khoảng 1,5–2 m, nặng khoảng 45–150 kg";
const lifestyle = "Hươu đuôi trắng sống ở nhiều môi trường như rừng, đồng cỏ, vùng nông nghiệp và cả khu vực gần thành phố. Chúng là loài ăn cỏ, thức ăn gồm lá cây, cỏ, chồi non, quả và hạt. Hươu thường hoạt động mạnh vào lúc bình minh và hoàng hôn. Khi gặp nguy hiểm, chúng chạy rất nhanh và dựng đuôi trắng lên như tín hiệu cảnh báo cho những con khác.";
const biography = "Odocoileus virginianus là một trong những loài hươu phổ biến nhất ở Bắc Mỹ, phân bố rộng từ Canada đến Hoa Kỳ, Mexico và một phần Trung Mỹ. Loài này có khả năng thích nghi tốt với nhiều môi trường khác nhau, kể cả khu vực do con người sinh sống. Nhờ các chương trình bảo tồn và quản lý săn bắn, số lượng của chúng hiện nay khá ổn định ở nhiều nơi.";

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
