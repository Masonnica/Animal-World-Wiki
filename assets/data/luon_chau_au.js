// 2. Lươn châu Âu
const scname = "Anguilla Anguilla";
const vnname = "Lươn châu Âu";
const tags = "Tây Âu";
const appearance = "- Cơ thể dài và trơn giống rắn\n- Da trơn, phủ lớp chất nhầy\n- Lưng màu nâu sẫm hoặc xanh đen\n- Bụng màu vàng nhạt hoặc bạc\n- Chiều dài thường khoảng 60–120 cm, có thể nặng 2–4 kg";
const lifestyle = "Lươn châu Âu sống trong các con sông, hồ và vùng nước lợ ở Tây Âu. Chúng thường hoạt động vào ban đêm và ẩn mình trong bùn hoặc dưới đá vào ban ngày. Thức ăn chủ yếu gồm cá nhỏ, côn trùng, giáp xác và các động vật thủy sinh khác. Loài này có khả năng di chuyển giữa nước ngọt và nước biển trong vòng đời của mình.";
const biography = "Anguilla anguilla có vòng đời rất đặc biệt. Chúng sinh sản ở biển Sargasso thuộc Đại Tây Dương, sau đó ấu trùng trôi theo dòng hải lưu đến châu Âu. Khi trưởng thành, chúng di cư ngược lại ra biển để sinh sản. Trong những thập kỷ gần đây, số lượng lươn châu Âu đã giảm mạnh do ô nhiễm, đập thủy điện và khai thác quá mức, vì vậy loài này hiện được quan tâm bảo tồn ở nhiều quốc gia.";

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