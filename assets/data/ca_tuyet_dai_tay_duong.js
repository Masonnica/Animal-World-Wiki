// 6. Cá tuyết Đại Tây Dương
const scname = "Gadus Morhua";
const vnname = "Cá tuyết Đại Tây Dương";
const tags = "Tây Âu";
const appearance = "- Cơ thể dài và thon với màu nâu, xanh xám hoặc xanh ô liu\n- Hai bên thân có nhiều đốm nhạt\n- Bụng màu trắng nhạt\n- Có một sợi râu nhỏ dưới cằm\n- Chiều dài thường khoảng 60–120 cm, có thể nặng 5–20 kg";
const lifestyle = "Cá tuyết Đại Tây Dương sống ở vùng biển lạnh của Bắc Đại Tây Dương, đặc biệt dọc bờ biển Tây Âu. Chúng thường sống ở tầng nước gần đáy biển. Thức ăn chủ yếu gồm cá nhỏ, giáp xác và các động vật biển khác. Loài cá này thường di chuyển theo đàn và có các đợt di cư để sinh sản.";
const biography = "Gadus morhua là một trong những loài cá biển quan trọng nhất trong lịch sử đánh bắt của châu Âu. Trong nhiều thế kỷ, cá tuyết là nguồn thực phẩm quan trọng đối với các cộng đồng ven biển Tây Âu. Tuy nhiên, việc khai thác quá mức đã khiến số lượng của chúng giảm ở một số khu vực. Hiện nay nhiều quốc gia đã áp dụng các biện pháp quản lý và bảo tồn để duy trì quần thể cá tuyết.";

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