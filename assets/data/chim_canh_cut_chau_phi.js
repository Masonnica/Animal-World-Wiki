// 15. Chim cánh cụt châu Phi
const scname = "Spheniscus Demersus";
const vnname = "Chim cánh cụt châu Phi";
const tags = "Nam Phi";
const appearance = "- Cơ thể nhỏ với lông đen và trắng đặc trưng\n- Lưng màu đen, bụng trắng có đốm đen\n- Có dải đen cong chạy ngang ngực\n- Mỏ đen với đốm hồng ở vùng mắt\n- Chiều cao khoảng 60–70 cm, nặng khoảng 2–5 kg";
const lifestyle = "Chim cánh cụt châu Phi sống ở các đảo ven biển và bờ biển Nam Phi. Chúng bơi rất giỏi và săn mồi dưới nước. Thức ăn chủ yếu gồm cá nhỏ, mực và các loài giáp xác. Loài này thường sống theo đàn lớn và lên bờ để sinh sản và nghỉ ngơi.";
const biography = "Spheniscus demersus là loài chim cánh cụt duy nhất sinh sống ở châu Phi. Chúng phân bố chủ yếu dọc theo bờ biển phía tây nam Nam Phi. Trong những năm gần đây, số lượng của loài này đã giảm đáng kể do thiếu thức ăn, ô nhiễm và tác động của con người. Hiện nay chim cánh cụt châu Phi đang được bảo vệ và nằm trong danh sách loài nguy cấp.";

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