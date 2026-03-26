// 3. Cò đen
const scname = "Ciconia Nigra";
const vnname = "Cò đen";
const tags = "Đông Âu";
const appearance = "- Lông cơ thể chủ yếu màu đen với ánh xanh và tím\n- Bụng và phần dưới ngực màu trắng\n- Mỏ dài, thẳng và màu đỏ\n- Chân dài màu đỏ thích hợp lội nước\n- Chiều cao khoảng 95–100 cm, sải cánh khoảng 145–155 cm";
const lifestyle = "Cò đen sống chủ yếu ở các khu rừng gần sông, hồ và vùng đất ngập nước ở Đông Âu. Chúng thường sống khá kín đáo và ít xuất hiện gần khu dân cư. Thức ăn của chúng gồm cá, ếch, côn trùng và các động vật nhỏ sống trong nước. Loài chim này thường kiếm ăn ở vùng nước nông và bay di cư theo mùa.";
const biography = "Ciconia nigra phân bố ở nhiều khu vực châu Âu và châu Á, trong đó có nhiều vùng rừng ở Đông Âu. Chúng thường làm tổ trên các cây lớn trong rừng sâu. Không giống như cò trắng, cò đen có xu hướng tránh xa con người. Loài này được bảo vệ ở nhiều quốc gia do môi trường sống tự nhiên đang bị thu hẹp.";

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