// 15. Gấu đen Mỹ
const scname = "Ursus Americanus";
const vnname = "Gấu đen Mỹ";
const tags = "Bắc Mỹ";
const appearance = "- Lông thường màu đen, đôi khi nâu hoặc hơi vàng\n- Cơ thể to, chắc khỏe, vai cao\n- Tai tròn, mõm dài màu nâu nhạt\n- Chân khỏe với móng vuốt cong giúp leo cây và đào bới\n- Con trưởng thành dài khoảng 1,2–2 m, nặng khoảng 90–270 kg";
const lifestyle = "Gấu đen Mỹ sống chủ yếu trong rừng ở Bắc Mỹ, từ Canada đến Hoa Kỳ và một phần Mexico. Chúng là loài ăn tạp, thức ăn gồm quả mọng, hạt, côn trùng, cá, mật ong và đôi khi cả động vật nhỏ. Gấu đen rất giỏi leo cây và thường tìm thức ăn vào sáng sớm hoặc chiều tối. Vào mùa đông, chúng ngủ đông trong hang hoặc hốc cây để tiết kiệm năng lượng.";
const biography = "Ursus americanus là một trong loài gấu phổ biến nhất ở Bắc Mỹ. Chúng đã tồn tại ở khu vực này hàng trăm nghìn năm và thích nghi tốt với nhiều môi trường khác nhau như rừng rậm, núi và vùng đầm lầy. Hiện nay loài này vẫn có số lượng khá ổn định, mặc dù một số quần thể bị ảnh hưởng bởi mất môi trường sống và xung đột với con người.";

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
