// 9. Cá rô sông Nile
const scname = "Lates Niloticus";
const vnname = "Cá rô sông Nile";
const tags = "Trung Phi";
const appearance = "- Cơ thể lớn, thuôn dài và hơi dẹt bên\n- Màu bạc hoặc xám xanh\n- Miệng rộng với hàm khỏe\n- Vây lưng tách thành hai phần\n- Chiều dài có thể đạt 1–2 m, nặng hơn 100 kg";
const lifestyle = "Cá rô sông Nile sống trong các con sông lớn, hồ và vùng nước ngọt ở Trung Phi. Chúng là loài săn mồi mạnh, thức ăn gồm cá nhỏ, giáp xác và các động vật thủy sinh khác. Loài này thường hoạt động cả ngày lẫn đêm và có thể sống ở nhiều tầng nước khác nhau.";
const biography = "Lates niloticus là một trong những loài cá nước ngọt lớn và quan trọng ở châu Phi. Chúng phân bố ở nhiều hệ thống sông và hồ lớn như sông Nile và hồ Victoria. Loài cá này có giá trị kinh tế cao và được khai thác rộng rãi. Tuy nhiên, việc đưa chúng vào một số hệ sinh thái mới đã gây ảnh hưởng đến các loài bản địa, làm thay đổi cân bằng sinh thái.";

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