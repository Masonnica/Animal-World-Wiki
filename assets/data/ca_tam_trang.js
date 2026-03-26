// 1. Cá tầm trắng
const scname = "Acipenser Transmontanus";
const vnname = "Cá tầm trắng";
const tags = "Bắc Mỹ";
const appearance = "- Cơ thể dài và thon, màu xám nhạt đến xám nâu\n- Da không có vảy mà có các tấm xương cứng dọc theo thân\n- Mõm dài và nhọn, phía dưới có bốn râu cảm giác\n- Miệng nằm ở mặt dưới đầu, có thể thò ra để hút thức ăn\n- Chiều dài có thể đạt 2–6 m, nặng khoảng 100–600 kg";
const lifestyle = "Cá tầm trắng sống ở các con sông lớn, cửa sông và vùng ven biển ở bờ tây Bắc Mỹ. Chúng thường sống gần đáy nước và kiếm ăn bằng cách hút các sinh vật nhỏ từ đáy sông. Thức ăn gồm cá nhỏ, giáp xác, giun và các động vật đáy khác. Loài cá này có thể sống rất lâu và di chuyển giữa vùng nước ngọt và nước lợ.";
const biography = "Acipenser transmontanus là loài cá nước ngọt lớn nhất ở Bắc Mỹ, phân bố chủ yếu ở các hệ thống sông lớn như sông Columbia và sông Sacramento. Chúng có tuổi thọ rất cao, có thể sống hơn 100 năm. Trong quá khứ, loài này bị khai thác mạnh để lấy trứng cá muối và thịt. Hiện nay nhiều khu vực đã áp dụng các biện pháp quản lý và bảo vệ để duy trì quần thể cá tầm trắng.";

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
