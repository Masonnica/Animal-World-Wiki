// 3. Lười ba ngón nâu
const scname_3 = "Bradypus Variegatus";
const vnname_3 = "Lười ba ngón nâu";
const tags_3 = "Nam Mỹ";
const appearance_3 = "- Cơ thể nhỏ, phủ lông dày màu nâu xám\n- Lông thường có màu xanh nhạt do tảo sống trên lông\n- Đầu tròn, mặt ngắn với đôi mắt sẫm\n- Mỗi chân trước có ba móng cong dài giúp bám cành cây\n- Chiều dài cơ thể khoảng 40–70 cm, nặng khoảng 3–6 kg";
const lifestyle_3 = "Lười ba ngón nâu sống chủ yếu trên các tán cây trong rừng nhiệt đới Nam Mỹ. Chúng di chuyển rất chậm và dành phần lớn thời gian treo mình trên cành cây. Thức ăn chủ yếu là lá cây, đôi khi ăn thêm chồi non và quả. Loài này thường ngủ rất nhiều và chỉ thỉnh thoảng xuống đất để di chuyển sang cây khác hoặc đi vệ sinh.";
const biography_3 = "Bradypus variegatus phân bố rộng ở nhiều khu rừng nhiệt đới Nam Mỹ như Brazil, Colombia, Venezuela và Peru. Chúng thích nghi tốt với đời sống trên cây và hiếm khi xuống mặt đất. Bộ lông của chúng thường có tảo phát triển, giúp ngụy trang trong tán lá rừng. Lười ba ngón nâu đóng vai trò quan trọng trong hệ sinh thái rừng nhiệt đới.";

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