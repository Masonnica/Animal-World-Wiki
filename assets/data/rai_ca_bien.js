// 9. Rái cá biển
const scname = "Enhydra Lutris";
const vnname = "Rái cá biển";
const tags = "Bắc Mỹ";
const appearance = "- Cơ thể thon dài, phủ lớp lông dày màu nâu sẫm\n- Đầu tròn, tai nhỏ và mắt đen\n- Chân trước ngắn, rất linh hoạt để cầm thức ăn\n- Chân sau lớn, có màng giúp bơi hiệu quả\n- Chiều dài cơ thể khoảng 1–1,5 m, nặng khoảng 14–45 kg";
const lifestyle = "Rái cá biển sống dọc theo bờ biển Thái Bình Dương của Bắc Mỹ. Chúng dành phần lớn thời gian ở dưới nước và thường nổi ngửa trên mặt biển khi nghỉ ngơi hoặc ăn. Thức ăn chủ yếu gồm nhím biển, sò, cua và các loài động vật thân mềm. Rái cá biển nổi tiếng với việc dùng đá để đập vỏ con mồi khi ăn.";
const biography = "Enhydra lutris là loài rái cá sống hoàn toàn ở biển và từng phân bố rộng khắp vùng ven Thái Bình Dương. Trong thế kỷ 18 và 19, chúng bị săn bắt nhiều vì bộ lông rất dày và quý. Sau khi được bảo vệ, một số quần thể đã phục hồi ở nhiều vùng ven biển Bắc Mỹ. Rái cá biển đóng vai trò quan trọng trong hệ sinh thái biển, đặc biệt trong việc kiểm soát số lượng nhím biển.";

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
