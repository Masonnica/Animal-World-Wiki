// 4. Chuột hamster châu Âu
const scname = "Cricetus Cricetus";
const vnname = "Chuột hamster châu Âu";
const tags = "Đông Âu";
const appearance = "- Cơ thể mập, lông dày\n- Lưng màu nâu đỏ hoặc nâu sẫm\n- Bụng màu đen với các mảng trắng rõ rệt\n- Má có túi má lớn để chứa thức ăn\n- Chiều dài cơ thể khoảng 20–35 cm, nặng khoảng 200–500 g";
const lifestyle = "Chuột hamster châu Âu sống ở các vùng đồng cỏ, đất nông nghiệp và thảo nguyên ở Đông Âu. Chúng đào hang sâu dưới đất để sinh sống và tích trữ thức ăn. Thức ăn gồm hạt, rễ cây, côn trùng và đôi khi là động vật nhỏ. Loài này hoạt động chủ yếu vào ban đêm và ngủ đông trong mùa đông lạnh.";
const biography = "Cricetus cricetus là loài hamster lớn nhất ở châu Âu và từng phân bố rộng khắp nhiều vùng Đông Âu và Trung Âu. Chúng nổi tiếng với khả năng tích trữ một lượng lớn thức ăn trong hang. Tuy nhiên, trong những thập kỷ gần đây số lượng của loài này đã giảm mạnh do thay đổi môi trường nông nghiệp và mất môi trường sống. Hiện nay chuột hamster châu Âu được bảo vệ ở nhiều quốc gia để tránh nguy cơ tuyệt chủng.";

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