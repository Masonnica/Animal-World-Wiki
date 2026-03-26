// 11. Cá leerfish (cá cam lớn)
const scname = "Lichia Amia";
const vnname = "Cá leerfish (cá cam lớn)";
const tags = "Nam Phi";
const appearance = "- Cơ thể thon dài và dẹt bên\n- Màu bạc sáng với ánh xanh nhẹ\n- Vây lưng thấp, vây đuôi chẻ sâu\n- Đầu nhọn, miệng rộng\n- Chiều dài có thể đạt 1–1,5 m, nặng khoảng 10–30 kg";
const lifestyle = "Cá leerfish sống ở vùng biển ven bờ và cửa sông ở Nam Phi. Chúng là loài săn mồi nhanh, thường bơi gần mặt nước để săn cá nhỏ và các loài động vật biển khác. Loài này có thể sống đơn lẻ hoặc theo nhóm nhỏ và thường di chuyển theo mùa để tìm nguồn thức ăn.";
const biography = "Lichia amia phân bố ở các vùng biển ấm của Đại Tây Dương và Ấn Độ Dương, trong đó có vùng biển Nam Phi. Đây là loài cá có giá trị trong câu cá thể thao nhờ sức mạnh và tốc độ bơi. Trong hệ sinh thái biển, chúng đóng vai trò là loài săn mồi trung gian, giúp duy trì cân bằng số lượng các loài cá nhỏ hơn.";

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