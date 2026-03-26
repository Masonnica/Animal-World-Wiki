// 10. Đại bàng đầu trắng
const scname = "Haliaeetus Leucocephalus";
const vnname = "Đại bàng đầu trắng";
const tags = "Bắc Mỹ";
const appearance = "- Lông thân màu nâu sẫm\n- Đầu và đuôi màu trắng nổi bật khi trưởng thành\n- Mỏ lớn, cong và màu vàng\n- Chân vàng với móng vuốt rất sắc để bắt cá\n- Sải cánh rất rộng, khoảng 1,8–2,3 m; con trưởng thành nặng khoảng 3–6,3 kg";
const lifestyle = "Đại bàng đầu trắng thường sống gần các khu vực có nhiều nước như hồ, sông và bờ biển ở Bắc Mỹ. Thức ăn chủ yếu của chúng là cá, nhưng đôi khi cũng ăn chim nước, động vật nhỏ hoặc xác động vật. Chúng bay cao và quan sát con mồi từ trên không, sau đó lao xuống rất nhanh để bắt bằng móng vuốt. Loài chim này thường làm tổ lớn trên những cây cao gần nguồn nước.";
const biography = "Haliaeetus leucocephalus là loài chim biểu tượng của Hoa Kỳ và phân bố rộng khắp Bắc Mỹ. Trước đây, số lượng của chúng từng giảm mạnh do săn bắn và thuốc trừ sâu DDT làm mỏng vỏ trứng. Sau khi được bảo vệ và cấm sử dụng DDT, quần thể đại bàng đầu trắng đã phục hồi đáng kể. Ngày nay, chúng được xem là một trong những câu chuyện bảo tồn thành công ở Bắc Mỹ.";

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
