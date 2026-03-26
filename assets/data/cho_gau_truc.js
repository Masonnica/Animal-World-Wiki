// 10. Chó gấu trúc
const scname = "Nyctereutes Procyonoides";
const vnname = "Chó gấu trúc";
const tags = "Đông Âu";
const appearance = "- Cơ thể nhỏ và thấp với lông dày màu nâu xám\n- Mặt có vệt lông đen quanh mắt giống gấu mèo\n- Tai nhỏ và tròn\n- Đuôi ngắn và rậm lông\n- Chiều dài cơ thể khoảng 50–70 cm, nặng khoảng 4–10 kg";
const lifestyle = "Chó gấu trúc sống trong rừng, đồng cỏ, đầm lầy và vùng nông thôn ở Đông Âu. Chúng là loài ăn tạp, thức ăn gồm côn trùng, ếch, cá nhỏ, chim, trái cây và các loại thực vật. Loài này hoạt động chủ yếu vào ban đêm và thường sống theo cặp. Chó gấu trúc có thể ngủ đông một phần vào mùa đông ở những vùng lạnh.";
const biography = "Nyctereutes procyonoides có nguồn gốc từ Đông Á nhưng đã được đưa vào nhiều khu vực ở Đông Âu trong thế kỷ 20. Sau đó chúng lan rộng và thích nghi tốt với môi trường mới. Loài này hiện phân bố ở nhiều quốc gia châu Âu và đôi khi được xem là loài xâm lấn do cạnh tranh với động vật bản địa.";

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