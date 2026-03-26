// 14. Chim thư ký
const scname = "Sagittarius Serpentarius";
const vnname = "Chim thư ký";
const tags = "Nam Phi";
const appearance = "- Cơ thể cao với chân rất dài\n- Lông chủ yếu màu xám, cánh đen\n- Đầu có chùm lông dài phía sau giống bút lông\n- Mỏ cong và khỏe\n- Chiều cao khoảng 1,2–1,5 m, sải cánh khoảng 2 m";
const lifestyle = "Chim thư ký sống ở các vùng đồng cỏ và savan rộng lớn ở Nam Phi. Chúng dành phần lớn thời gian đi lại trên mặt đất thay vì bay. Thức ăn chủ yếu gồm rắn, thằn lằn, côn trùng và các động vật nhỏ. Loài chim này nổi tiếng với cách săn mồi bằng cách dậm mạnh chân để giết con mồi.";
const biography = "Sagittarius serpentarius là loài chim săn mồi đặc biệt với lối sống trên mặt đất. Chúng phân bố rộng ở khu vực châu Phi cận Sahara, trong đó có nhiều vùng ở Nam Phi. Loài này đóng vai trò quan trọng trong việc kiểm soát số lượng rắn và các loài động vật nhỏ. Hiện nay số lượng của chúng đang giảm ở một số khu vực do mất môi trường sống.";

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