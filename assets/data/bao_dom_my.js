// 11. Báo đốm Mỹ
const scname = "Panthera Onca";
const vnname = "Báo đốm Mỹ";
const tags = "Nam Mỹ";
const appearance = "- Cơ thể to, cơ bắp khỏe\n- Lông màu vàng nâu với nhiều đốm đen dạng hoa thị\n- Đầu to, hàm rất khỏe\n- Đuôi tương đối ngắn so với các loài mèo lớn khác\n- Chiều dài cơ thể khoảng 1,1–1,8 m, nặng khoảng 45–120 kg";
const lifestyle = "Báo đốm Mỹ sống trong rừng mưa nhiệt đới, rừng rậm và vùng đầm lầy ở Nam Mỹ. Chúng là loài săn mồi đơn độc và hoạt động chủ yếu vào ban đêm hoặc lúc hoàng hôn. Thức ăn gồm nhiều loài động vật như hươu, lợn rừng, cá sấu nhỏ, rùa và các loài thú khác. Báo đốm rất giỏi bơi và thường săn mồi gần sông hoặc đầm lầy.";
const biography = "Panthera onca là loài mèo lớn nhất ở châu Mỹ và là loài săn mồi đứng đầu trong nhiều hệ sinh thái rừng nhiệt đới Nam Mỹ. Chúng từng phân bố rộng từ miền nam Hoa Kỳ đến Argentina. Tuy nhiên do mất môi trường sống và săn bắn, phạm vi sống của chúng đã thu hẹp đáng kể. Hiện nay loài này được bảo vệ ở nhiều khu bảo tồn và công viên quốc gia nhằm duy trì quần thể trong tự nhiên.";

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