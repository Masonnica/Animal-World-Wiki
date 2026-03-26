// 9. Linh dương Ả Rập
const scname = "Oryx Leucoryx";
const vnname = "Linh dương Ả Rập";
const tags = "Tây Á";
const appearance = "- Cơ thể thon, màu trắng với lưng và mặt nâu nhạt\n- Sừng dài, thẳng và nhọn ở cả con đực và con cái\n- Chân sau màu nâu sẫm\n- Mặt có các vệt đen đặc trưng\n- Chiều cao khoảng 1–1,2 m, nặng 60–100 kg";
const lifestyle = "Linh dương Ả Rập sống ở sa mạc, vùng bán sa mạc và đồng cỏ khô ở Tây Á. Chúng là loài ăn thực vật, thức ăn gồm cỏ, lá cây và chồi non. Loài này thường sống theo đàn nhỏ và di chuyển nhiều để tìm nước và thức ăn.";
const biography = "Oryx leucoryx phân bố chủ yếu ở bán đảo Ả Rập. Nhờ khả năng thích nghi với môi trường khô hạn và nóng, loài này có thể sống ở các vùng sa mạc khắc nghiệt. Tuy nhiên, săn bắn và mất môi trường sống đã khiến quần thể của chúng giảm mạnh, nên hiện nay được bảo vệ nghiêm ngặt trong các khu bảo tồn.";

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