// 10. Chuột lang nước (Capybara)
const scname = "Hydrochoerus Hydrochaeris";
const vnname = "Chuột lang nước (Capybara)";
const tags = "Nam Mỹ";
const appearance = "- Cơ thể lớn, tròn và khá nặng\n- Lông ngắn, thô, màu nâu đỏ hoặc nâu xám\n- Đầu to, mõm ngắn và tai nhỏ\n- Chân ngắn với các ngón có màng bơi\n- Chiều dài cơ thể khoảng 1–1,3 m, nặng khoảng 35–65 kg";
const lifestyle = "Chuột lang nước sống gần sông, hồ và đầm lầy ở Nam Mỹ. Chúng là loài bán thủy sinh, bơi rất giỏi và thường xuống nước để tránh kẻ săn mồi. Thức ăn chủ yếu là cỏ, cây thủy sinh và các loại thực vật khác. Capybara thường sống theo đàn từ vài con đến hàng chục con để tăng khả năng bảo vệ lẫn nhau.";
const biography = "Hydrochoerus hydrochaeris là loài gặm nhấm lớn nhất thế giới. Chúng phân bố rộng ở nhiều quốc gia Nam Mỹ như Brazil, Venezuela, Colombia và Argentina. Loài này thích nghi tốt với môi trường đất ngập nước và đóng vai trò quan trọng trong hệ sinh thái địa phương. Capybara cũng là con mồi của nhiều loài săn mồi lớn như báo đốm, cá sấu và trăn.";

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