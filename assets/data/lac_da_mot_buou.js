// 3. Lạc đà một bướu
const scname = "Camelus Dromedarius";
const vnname = "Lạc đà một bướu";
const tags = "Tây Á";
const appearance = "- Cơ thể to, cao với bướu duy nhất trên lưng\n- Lông màu nâu nhạt đến nâu vàng\n- Cổ dài, chân cao, móng chân rộng thích nghi đi trên cát\n- Mặt dài với môi linh hoạt\n- Chiều cao vai khoảng 1,8–2 m, nặng 400–600 kg";
const lifestyle = "Lạc đà một bướu sống ở sa mạc và bán sa mạc ở Tây Á. Chúng là loài ăn thực vật, thức ăn gồm cỏ khô, lá cây và bụi cây. Lạc đà có khả năng chịu hạn tuyệt vời, có thể đi nhiều ngày mà không cần nước. Chúng thường sống theo đàn nhỏ hoặc theo gia đình.";
const biography = "Camelus dromedarius phân bố chủ yếu ở bán đảo Ả Rập và Trung Đông. Loài này đã được thuần hóa từ lâu để phục vụ đi lại, vận chuyển hàng hóa và cung cấp sữa, thịt. Trong tự nhiên, lạc đà giúp duy trì sự cân bằng sinh thái sa mạc nhờ ăn thảo mộc khô và phân tán hạt giống.";

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