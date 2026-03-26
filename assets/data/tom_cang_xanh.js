// 7. Tôm càng xanh
const scname = "Macrobrachium Rosenbergii";
const vnname = "Tôm càng xanh";
const tags = "Nam Á";
const appearance = "- Cơ thể dài với lớp vỏ cứng\n- Màu xanh nhạt hoặc xanh lam\n- Càng dài và lớn, đặc biệt ở con đực\n- Râu dài, mảnh\n- Chiều dài cơ thể có thể đạt 20–30 cm";
const lifestyle = "Tôm càng xanh sống trong sông, hồ và vùng nước ngọt ở Nam Á, nhưng có vòng đời liên quan đến nước lợ. Ấu trùng phát triển trong môi trường nước lợ trước khi di chuyển vào nước ngọt. Chúng thường sống gần đáy, thức ăn gồm mảnh hữu cơ, thực vật, động vật nhỏ và xác chết. Loài này hoạt động nhiều vào ban đêm.";
const biography = "Macrobrachium rosenbergii phân bố ở nhiều khu vực Nam và Đông Nam Á. Đây là loài tôm nước ngọt lớn và có giá trị kinh tế cao, được nuôi rộng rãi trong ngành thủy sản. Nhờ tốc độ tăng trưởng nhanh và khả năng thích nghi tốt, tôm càng xanh đóng vai trò quan trọng trong kinh tế nông nghiệp của nhiều quốc gia.";

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