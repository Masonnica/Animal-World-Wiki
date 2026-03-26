// 8. Cá chẽm (cá vược)
const scname = "Lates Calcarifer";
const vnname = "Cá chẽm (cá vược)";
const tags = "Nam Á";
const appearance = "- Cơ thể dài, hình trụ, thân dày và khỏe\n- Màu bạc sáng, lưng sẫm hơn\n- Miệng rộng với hàm khỏe, răng sắc\n- Vây lưng chia thành hai phần, vây đuôi hình chữ V\n- Chiều dài cơ thể khoảng 60–150 cm, nặng 5–60 kg";
const lifestyle = "Cá chẽm sống ở vùng nước lợ, cửa sông, vịnh và ven biển Nam Á. Chúng là loài săn mồi, thức ăn gồm cá nhỏ, giáp xác và động vật thủy sinh khác. Loài này có thể di chuyển giữa nước ngọt và nước mặn, thường sống đơn lẻ hoặc theo nhóm nhỏ.";
const biography = "Lates calcarifer phân bố rộng ở Nam Á, Đông Nam Á và Úc ven biển. Đây là loài cá quan trọng về kinh tế, được nuôi và khai thác rộng rãi. Khả năng thích nghi với cả môi trường nước ngọt và nước mặn giúp loài này tồn tại và sinh sản tốt trong nhiều điều kiện khác nhau.";

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