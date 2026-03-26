// 8. Cá hổ Goliath
const scname = "Hydrocynus Goliath";
const vnname = "Cá hổ Goliath";
const tags = "Trung Phi";
const appearance = "- Cơ thể lớn, thon dài và rất khỏe\n- Màu bạc xám với ánh kim\n- Miệng rộng với nhiều răng dài, sắc như dao\n- Vây đuôi chẻ mạnh giúp bơi nhanh\n- Chiều dài có thể đạt 1–1,5 m, nặng khoảng 20–50 kg";
const lifestyle = "Cá hổ Goliath sống trong các con sông lớn và hồ ở Trung Phi, đặc biệt là sông Congo. Chúng là loài săn mồi hung dữ, thường săn cá nhỏ và các động vật nước khác. Loài này bơi rất nhanh và thường hoạt động trong dòng nước mạnh. Chúng có thể săn mồi theo nhóm hoặc đơn lẻ.";
const biography = "Hydrocynus goliath là một trong những loài cá nước ngọt săn mồi đáng sợ nhất châu Phi. Chúng phân bố chủ yếu trong lưu vực sông Congo ở Trung Phi. Nhờ hàm răng sắc bén và sức mạnh lớn, loài này đứng ở vị trí cao trong chuỗi thức ăn. Cá hổ Goliath cũng được biết đến trong câu cá thể thao nhờ sức chiến đấu mạnh mẽ.";

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