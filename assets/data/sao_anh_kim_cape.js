// 9. Sáo ánh kim Cape
const scname = "Lamprotornis Nitens";
const vnname = "Sáo ánh kim Cape";
const tags = "Nam Phi";
const appearance = "- Cơ thể nhỏ với lông ánh kim màu xanh lam hoặc tím\n- Lông có độ bóng cao, phản chiếu ánh sáng\n- Mắt màu cam hoặc đỏ nổi bật\n- Mỏ ngắn, nhọn và màu đen\n- Chiều dài cơ thể khoảng 23–27 cm";
const lifestyle = "Sáo ánh kim Cape sống ở các vùng savan, đồng cỏ và khu vực gần con người ở Nam Phi. Chúng thường kiếm ăn trên mặt đất hoặc trong bụi cây, thức ăn gồm côn trùng, trái cây và hạt. Loài chim này thường sống theo đàn và rất năng động, thường xuyên phát ra âm thanh.";
const biography = "Lamprotornis nitens phân bố rộng ở khu vực phía nam châu Phi, đặc biệt phổ biến ở Nam Phi. Nhờ màu sắc lông rực rỡ và khả năng thích nghi tốt, loài này thường xuất hiện ở cả môi trường tự nhiên lẫn đô thị. Sáo ánh kim Cape đóng vai trò quan trọng trong việc kiểm soát côn trùng và phát tán hạt giống trong hệ sinh thái.";

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