// 6. Cá tầm Beluga
const scname = "Huso Huso";
const vnname = "Cá tầm Beluga";
const tags = "Đông Âu";
const appearance = "- Cơ thể rất dài và to, màu xám nhạt đến xám đậm\n- Da không có vảy mà có các tấm xương cứng dọc thân\n- Mõm dài và nhọn với bốn râu cảm giác phía trước miệng\n- Miệng lớn nằm ở mặt dưới đầu\n- Chiều dài có thể đạt 4–7 m, nặng hơn 1.000 kg";
const lifestyle = "Cá tầm Beluga sống chủ yếu ở biển Caspi, biển Đen và các con sông lớn chảy vào những vùng biển này. Chúng là loài cá di cư, thường sống ở biển nhưng bơi vào sông để sinh sản. Thức ăn của chúng gồm cá nhỏ và các động vật sống dưới nước. Cá tầm Beluga có tuổi thọ rất cao và phát triển chậm.";
const biography = "Huso huso là một trong những loài cá nước ngọt lớn nhất thế giới và nổi tiếng với trứng cá muối beluga rất có giá trị. Trong quá khứ loài này bị khai thác mạnh để lấy trứng và thịt. Ngoài ra việc xây dựng đập trên các con sông cũng làm cản trở đường di cư sinh sản của chúng. Hiện nay cá tầm Beluga được bảo vệ ở nhiều khu vực do số lượng đã giảm mạnh trong tự nhiên.";

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