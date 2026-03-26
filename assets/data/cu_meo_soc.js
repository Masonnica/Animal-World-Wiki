// 14. Cú mèo sọc
const scname = "Strix Varia";
const vnname = "Cú mèo sọc";
const tags = "Bắc Mỹ";
const appearance = "- Lông màu nâu xám với nhiều sọc ngang và dọc trên cơ thể\n- Mặt tròn với viền lông rõ rệt, mắt màu nâu đậm\n- Không có chùm lông tai như một số loài cú khác\n- Mỏ cong màu vàng nhạt\n- Chiều dài cơ thể khoảng 40–50 cm, sải cánh khoảng 96–110 cm";
const lifestyle = "Cú mèo sọc thường sống trong rừng rậm, đặc biệt là rừng gần sông, đầm lầy hoặc hồ ở Bắc Mỹ. Chúng hoạt động chủ yếu vào ban đêm và săn mồi bằng cách bay lặng lẽ qua các tán cây. Thức ăn của chúng gồm chuột, sóc, chim nhỏ, ếch và đôi khi cả côn trùng. Loài cú này nổi tiếng với tiếng kêu đặc trưng vang xa trong rừng.";
const biography = "Strix varia là một loài cú phổ biến ở Bắc Mỹ, phân bố từ miền đông Canada xuống đến Hoa Kỳ và một phần phía bắc Mexico. Trong nhiều thập kỷ gần đây, loài này đã mở rộng phạm vi sống sang phía tây của lục địa. Chúng thích nghi khá tốt với nhiều kiểu rừng khác nhau và thường làm tổ trong các hốc cây lớn. Hiện nay quần thể của loài này vẫn khá ổn định trong tự nhiên.";

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
