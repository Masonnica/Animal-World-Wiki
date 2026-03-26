// 7. Sói bờm
const scname = "Chrysocyon Brachyurus";
const vnname = "Sói bờm";
const tags = "Nam Mỹ";
const appearance = "- Cơ thể cao với chân rất dài\n- Lông màu đỏ nâu đặc trưng\n- Bờm lông đen dài chạy dọc cổ và lưng\n- Mõm dài, tai lớn dựng đứng\n- Chiều cao khoảng 90 cm ở vai, nặng khoảng 20–30 kg";
const lifestyle = "Sói bờm sống chủ yếu ở các vùng savan, đồng cỏ và rừng thưa ở Nam Mỹ. Chúng thường sống đơn độc và hoạt động mạnh vào ban đêm hoặc lúc hoàng hôn. Thức ăn của chúng khá đa dạng, gồm động vật nhỏ như chuột, chim, côn trùng và cả trái cây. Một loại quả đặc biệt trong chế độ ăn của chúng là quả “lobeira”.";
const biography = "Chrysocyon brachyurus là loài chó hoang dã lớn nhất ở Nam Mỹ. Chúng phân bố chủ yếu ở Brazil, Paraguay, Bolivia và Argentina. Mặc dù có hình dáng giống cáo hoặc sói, loài này thuộc một nhánh tiến hóa riêng biệt trong họ Chó. Hiện nay số lượng của chúng đang giảm ở một số khu vực do mất môi trường sống và tai nạn giao thông.";

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