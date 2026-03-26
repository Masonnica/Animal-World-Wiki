// 7. Hươu cao cổ
const scname = "Giraffa Camelopardalis";
const vnname = "Hươu cao cổ";
const tags = "Nam Phi";
const appearance = "- Cổ rất dài và cao đặc trưng\n- Cơ thể lớn với hoa văn đốm nâu trên nền vàng nhạt\n- Chân dài và khỏe\n- Đầu có các u sừng nhỏ gọi là ossicone\n- Chiều cao có thể đạt 4,5–6 m, nặng khoảng 800–1.200 kg";
const lifestyle = "Hươu cao cổ sống ở các vùng savan và đồng cỏ ở Nam Phi. Chúng là loài ăn thực vật, chủ yếu ăn lá cây cao như cây keo. Nhờ chiều cao, chúng có thể tiếp cận nguồn thức ăn mà nhiều loài khác không với tới. Loài này thường sống theo nhóm lỏng lẻo và di chuyển liên tục để tìm thức ăn.";
const biography = "Giraffa camelopardalis là loài động vật trên cạn cao nhất thế giới. Chúng phân bố rộng ở châu Phi cận Sahara, trong đó có nhiều quần thể ở Nam Phi. Hươu cao cổ đóng vai trò quan trọng trong hệ sinh thái savan. Hiện nay, một số quần thể của loài này đang suy giảm do mất môi trường sống và săn bắt, vì vậy được bảo vệ tại nhiều khu bảo tồn.";

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