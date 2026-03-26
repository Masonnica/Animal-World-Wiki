// 8. Lươn điện
const scname = "Electrophorus Electricus";
const vnname = "Lươn điện";
const tags = "Nam Mỹ";
const appearance = "- Cơ thể dài và hình trụ giống lươn\n- Da trơn, không có vảy rõ rệt\n- Màu sắc thường nâu sẫm hoặc xám đậm\n- Vây hậu môn dài chạy dọc gần hết thân\n- Chiều dài cơ thể có thể đạt khoảng 2–2,5 m, nặng khoảng 20 kg";
const lifestyle = "Lươn điện sống trong các con sông, đầm lầy và vùng nước chậm ở Nam Mỹ, đặc biệt trong lưu vực sông Amazon và Orinoco. Chúng có khả năng tạo ra dòng điện mạnh để săn mồi và tự vệ. Thức ăn chủ yếu gồm cá nhỏ, lưỡng cư và các động vật nước khác. Lươn điện thường hoạt động nhiều vào ban đêm và có thể nổi lên mặt nước để hít không khí.";
const biography = "Electrophorus electricus là loài cá nổi tiếng với khả năng phát ra dòng điện mạnh. Chúng sử dụng các cơ quan điện đặc biệt trong cơ thể để tạo ra điện áp cao nhằm làm tê liệt con mồi. Loài này đã được các nhà khoa học nghiên cứu trong thời gian dài để hiểu rõ hơn về cơ chế tạo điện trong sinh vật. Lươn điện đóng vai trò quan trọng trong hệ sinh thái sông nước Nam Mỹ.";

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