// 14. Choắt mào
const scname = "Vanellus Vanellus";
const vnname = "Choắt mào";
const tags = "Tây Âu";
const appearance = "- Lông lưng màu xanh đen ánh kim\n- Bụng màu trắng, ngực đen\n- Đầu có chùm lông dài giống mào\n- Cánh rộng với mặt dưới màu trắng và đen\n- Chiều dài cơ thể khoảng 28–31 cm, sải cánh khoảng 67–72 cm";
const lifestyle = "Choắt mào sống ở các vùng đồng cỏ ẩm, đầm lầy và cánh đồng ở Tây Âu. Chúng thường kiếm ăn trên mặt đất, thức ăn gồm côn trùng, giun đất và các động vật nhỏ. Loài chim này thường sống theo đàn và có những màn bay lượn phức tạp trên không, đặc biệt trong mùa sinh sản.";
const biography = "Vanellus vanellus phân bố rộng ở nhiều khu vực châu Âu và châu Á, trong đó Tây Âu là một vùng sinh sống quan trọng. Chúng thường làm tổ trực tiếp trên mặt đất ở các đồng cỏ hoặc cánh đồng. Trong những năm gần đây, số lượng của loài này đã giảm ở một số nơi do thay đổi trong nông nghiệp và mất môi trường sống tự nhiên.";

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