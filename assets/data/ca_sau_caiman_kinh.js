// 4. Cá sấu caiman kính
const scname = "Caiman Crocodilus";
const vnname = "Cá sấu caiman kính";
const tags = "Nam Mỹ";
const appearance = "- Cơ thể dài, phủ lớp da dày với nhiều vảy cứng\n- Màu sắc thường là xanh xám hoặc nâu xám\n- Mõm tương đối ngắn và rộng\n- Có gờ xương giữa hai mắt giống như chiếc kính\n- Chiều dài cơ thể thường khoảng 1,5–2,5 m";
const lifestyle = "Cá sấu caiman kính sống ở các con sông, hồ, đầm lầy và vùng nước ngập ở Nam Mỹ. Chúng là loài săn mồi cơ hội, thức ăn gồm cá, ếch, chim, côn trùng và đôi khi cả động vật nhỏ. Loài này thường hoạt động nhiều vào ban đêm và có thể nằm bất động trong nước để chờ con mồi đến gần.";
const biography = "Caiman crocodilus phân bố rộng ở nhiều quốc gia Nam Mỹ như Brazil, Venezuela, Colombia và Peru. Chúng là một trong những loài caiman phổ biến nhất trong khu vực. Loài này có khả năng thích nghi tốt với nhiều môi trường nước khác nhau, từ sông lớn đến đầm lầy nhỏ. Trong quá khứ chúng từng bị săn bắt để lấy da, nhưng hiện nay nhiều nơi đã có các biện pháp bảo vệ và quản lý quần thể.";

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