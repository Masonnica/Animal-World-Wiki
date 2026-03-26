// 8. Kền kền Ai Cập
const scname = "Neophron Percnopterus";
const vnname = "Kền kền Ai Cập";
const tags = "Bắc Phi";
const appearance = "- Cơ thể trung bình với lông màu trắng hoặc trắng ngà\n- Cánh có phần lông bay màu đen rõ rệt\n- Mặt trần không có lông, màu vàng\n- Mỏ thon dài, hơi cong\n- Chiều dài cơ thể khoảng 55–65 cm, sải cánh khoảng 155–170 cm";
const lifestyle = "Kền kền Ai Cập sống ở các vùng sa mạc, bán sa mạc và vùng núi đá ở Bắc Phi. Chúng là loài ăn xác thối, thức ăn gồm xác động vật chết, trứng và đôi khi cả chất thải hữu cơ. Loài chim này thường bay cao để tìm kiếm thức ăn và có thể sống đơn lẻ hoặc theo cặp. Chúng cũng nổi tiếng với hành vi sử dụng công cụ, như dùng đá để đập vỡ trứng.";
const biography = "Neophron percnopterus phân bố ở nhiều khu vực châu Phi, châu Âu và châu Á, trong đó Bắc Phi là một vùng sinh sống quan trọng. Trong lịch sử, loài chim này từng rất phổ biến, đặc biệt ở Ai Cập cổ đại nơi chúng được tôn kính. Tuy nhiên, hiện nay số lượng đã suy giảm do mất môi trường sống, ngộ độc và tác động của con người. Loài này đang được bảo vệ ở nhiều quốc gia nhằm ngăn chặn nguy cơ tuyệt chủng.";

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
