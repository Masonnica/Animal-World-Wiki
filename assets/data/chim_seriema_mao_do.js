// 5. Chim seriema mào đỏ
const scname = "Cariama Cristata";
const vnname = "Chim seriema mào đỏ";
const tags = "Nam Mỹ";
const appearance = "- Cơ thể cao, chân dài thích hợp chạy trên mặt đất\n- Lông chủ yếu màu xám nâu\n- Đầu có chùm lông dựng lên như mào\n- Mỏ ngắn, hơi cong xuống\n- Chiều cao khoảng 75–90 cm, đuôi dài";
const lifestyle = "Chim seriema mào đỏ sống ở các vùng đồng cỏ, savan và rừng thưa ở Nam Mỹ. Chúng dành phần lớn thời gian đi lại trên mặt đất thay vì bay. Thức ăn gồm côn trùng, thằn lằn, rắn nhỏ, ếch và đôi khi là hạt hoặc quả. Loài chim này thường săn mồi bằng cách bắt con mồi rồi đập mạnh xuống đất để giết.";
const biography = "Cariama cristata phân bố chủ yếu ở Brazil, Bolivia, Paraguay và Argentina. Chúng thích nghi tốt với môi trường đồng cỏ và vùng đất mở. Seriema mào đỏ nổi tiếng với tiếng kêu lớn và vang xa, thường phát ra vào buổi sáng. Loài chim này có họ hàng gần với một số loài chim săn mồi cổ đại và là một phần đặc trưng của hệ sinh thái savan Nam Mỹ.";

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