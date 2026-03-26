// 15. Trâu rừng châu Phi
const scname = "Syncerus Caffer";
const vnname = "Trâu rừng châu Phi";
const tags = "Trung Phi";
const appearance = "- Cơ thể lớn và vạm vỡ\n- Lông màu đen hoặc nâu sẫm\n- Sừng lớn cong sang hai bên và hợp lại ở trán\n- Đầu to, cổ dày và khỏe\n- Chiều dài cơ thể khoảng 2–3,5 m, nặng khoảng 500–900 kg";
const lifestyle = "Trâu rừng châu Phi sống ở các vùng savan, rừng thưa và gần nguồn nước ở Trung Phi. Chúng thường sống theo đàn lớn để bảo vệ lẫn nhau. Thức ăn chủ yếu là cỏ và các loại thực vật. Loài này hoạt động chủ yếu vào sáng sớm và chiều tối, thường nghỉ ngơi vào ban ngày.";
const biography = "Syncerus caffer phân bố rộng ở châu Phi cận Sahara, bao gồm nhiều khu vực ở Trung Phi. Đây là một trong những loài động vật nguy hiểm trong tự nhiên do tính khí hung dữ khi bị đe dọa. Trâu rừng đóng vai trò quan trọng trong hệ sinh thái đồng cỏ. Hiện nay loài này vẫn còn khá phổ biến nhưng chịu ảnh hưởng từ săn bắn và mất môi trường sống.";

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