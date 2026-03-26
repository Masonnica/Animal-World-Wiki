// 2. Hải cẩu lông Nam Phi
const scname = "Arctocephalus Pusillus";
const vnname = "Hải cẩu lông Nam Phi";
const tags = "Nam Phi";
const appearance = "- Cơ thể to với lớp lông dày màu nâu sẫm\n- Con đực lớn hơn con cái rõ rệt\n- Tai ngoài nhỏ nhưng nhìn thấy được\n- Vây trước dài và khỏe\n- Chiều dài cơ thể khoảng 1,5–2,5 m, nặng khoảng 60–300 kg";
const lifestyle = "Hải cẩu lông Nam Phi sống ở các vùng ven biển và đảo đá ngoài khơi Nam Phi. Chúng thường tụ tập thành đàn lớn trên bờ để nghỉ ngơi và sinh sản. Thức ăn chủ yếu gồm cá, mực và các động vật biển khác. Loài này bơi rất giỏi và dành phần lớn thời gian dưới nước để săn mồi.";
const biography = "Arctocephalus pusillus phân bố chủ yếu dọc theo bờ biển phía nam và tây nam châu Phi, đặc biệt phổ biến ở Nam Phi và Namibia. Chúng là loài hải cẩu có số lượng lớn và đóng vai trò quan trọng trong hệ sinh thái biển. Trong quá khứ, chúng từng bị săn bắt nhiều để lấy lông, nhưng hiện nay đã được bảo vệ và quần thể đang ổn định.";

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