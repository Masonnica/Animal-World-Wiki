// 12. Cá hồi nâu
const scname = "Salmo Trutta";
const vnname = "Cá hồi nâu";
const tags = "Đông Âu";
const appearance = "- Cơ thể thon dài với màu nâu hoặc nâu vàng\n- Hai bên thân có nhiều đốm đen và đỏ nhỏ\n- Lưng màu sẫm hơn, bụng sáng màu\n- Vây đuôi rộng giúp bơi mạnh trong dòng nước\n- Chiều dài thường khoảng 30–70 cm, có thể nặng 1–5 kg";
const lifestyle = "Cá hồi nâu sống trong các con sông, suối lạnh và hồ nước ngọt ở Đông Âu. Một số quần thể có thể di cư ra biển rồi quay lại sông để sinh sản. Chúng thường sống trong dòng nước sạch, giàu oxy. Thức ăn gồm côn trùng nước, ấu trùng, giáp xác và cá nhỏ.";
const biography = "Salmo trutta là một trong những loài cá hồi phổ biến ở châu Âu và có mặt ở nhiều hệ thống sông ở Đông Âu. Loài cá này rất quan trọng trong hệ sinh thái nước ngọt và cũng có giá trị lớn trong nghề câu cá thể thao. Ở nhiều nơi, cá hồi nâu được thả vào sông và hồ để duy trì quần thể và phục vụ hoạt động giải trí.";

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