// 11. Chim công Ấn Độ
const scname = "Pavo Cristatus";
const vnname = "Chim công Ấn Độ";
const tags = "Nam Á";
const appearance = "- Con đực có bộ lông đuôi dài rực rỡ với nhiều “mắt” màu xanh và vàng\n- Lông cổ và ngực màu xanh lam ánh kim\n- Con cái màu nâu xám, không có đuôi dài\n- Đầu có chùm lông nhỏ dựng đứng\n- Chiều dài cơ thể (kể cả đuôi) có thể đạt 2–2,5 m";
const lifestyle = "Chim công Ấn Độ sống ở rừng thưa, đồng cỏ và khu vực gần con người ở Nam Á. Chúng thường kiếm ăn trên mặt đất, thức ăn gồm hạt, côn trùng, trái cây và các động vật nhỏ. Loài này nổi tiếng với hành vi xòe đuôi để thu hút bạn tình. Chúng thường sống theo nhóm nhỏ và hoạt động vào ban ngày.";
const biography = "Pavo cristatus là loài chim biểu tượng của Ấn Độ và phân bố rộng ở khu vực Nam Á. Chúng đã được con người thuần hóa và nuôi từ lâu nhờ vẻ đẹp nổi bật. Trong văn hóa, chim công thường tượng trưng cho sự kiêu sa và may mắn. Hiện nay loài này vẫn phổ biến trong tự nhiên và trong các khu vườn, công viên.";

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