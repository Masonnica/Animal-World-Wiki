// 2. Cá voi xanh
const scname = "Balaenoptera Musculus";
const vnname = "Cá voi xanh";
const tags = "Bắc Mỹ";
const appearance = "- Cơ thể rất dài và thon, màu xanh xám với các đốm nhạt\n- Đầu lớn và dẹt, mõm rộng\n- Có vây lưng nhỏ nằm gần phía sau thân\n- Bụng có nhiều nếp gấp giúp mở rộng khi ăn\n- Chiều dài có thể đạt khoảng 24–30 m, nặng khoảng 100–180 tấn";
const lifestyle = "Cá voi xanh sống ở nhiều đại dương trên thế giới, bao gồm cả vùng biển ngoài khơi Bắc Mỹ. Chúng thường di chuyển theo mùa giữa vùng nước lạnh giàu thức ăn và vùng nước ấm để sinh sản. Thức ăn chủ yếu của chúng là sinh vật nhỏ gọi là krill, được lọc qua các tấm sừng hàm. Cá voi xanh thường bơi chậm nhưng có thể lặn sâu và di chuyển quãng đường rất dài.";
const biography = "Balaenoptera musculus là loài động vật lớn nhất từng sống trên Trái Đất. Trong thế kỷ 20, số lượng của chúng giảm mạnh do hoạt động săn bắt cá voi quy mô lớn. Sau khi việc săn bắt bị hạn chế và có các biện pháp bảo vệ quốc tế, quần thể cá voi xanh đã bắt đầu phục hồi ở một số khu vực. Tuy vậy, chúng vẫn được xem là loài cần được bảo tồn do nhiều nguy cơ từ tàu thuyền, ô nhiễm và biến đổi khí hậu.";

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
