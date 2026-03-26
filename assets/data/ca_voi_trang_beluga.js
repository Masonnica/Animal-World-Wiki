// 8. Cá voi trắng Beluga
const scname = "Delphinapterus Leucas";
const vnname = "Cá voi trắng Beluga";
const tags = "Bắc Mỹ";
const appearance = "- Cơ thể màu trắng hoặc trắng ngà khi trưởng thành\n- Đầu tròn với phần trán lớn gọi là “melon”\n- Không có vây lưng, giúp di chuyển dễ dàng dưới lớp băng\n- Miệng cong nhẹ tạo cảm giác như đang “mỉm cười”\n- Chiều dài cơ thể khoảng 3–5 m, nặng khoảng 500–1.600 kg";
const lifestyle = "Cá voi Beluga sống chủ yếu ở các vùng biển lạnh ở Bắc Cực và vùng ven bờ Bắc Mỹ. Chúng thường di chuyển theo đàn và giao tiếp bằng nhiều âm thanh khác nhau dưới nước. Thức ăn của chúng gồm cá, tôm, mực và các loài động vật biển nhỏ. Beluga có khả năng bơi linh hoạt và thường di chuyển theo mùa để tìm nguồn thức ăn.";
const biography = "Delphinapterus leucas là loài cá voi đặc trưng của vùng biển Bắc Cực và các khu vực lân cận Bắc Mỹ. Loài này đã thích nghi tốt với môi trường nước lạnh và thường sống gần các vùng băng biển. Beluga được biết đến với khả năng phát ra nhiều loại âm thanh khác nhau, vì vậy đôi khi được gọi là “chim hoàng yến của biển”. Hiện nay một số quần thể đang được bảo vệ do ảnh hưởng từ biến đổi khí hậu và hoạt động của con người.";

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
