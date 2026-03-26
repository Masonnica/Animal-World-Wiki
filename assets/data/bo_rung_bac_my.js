// 3. Bò rừng Bắc Mỹ
const scname = "Bison Bison";
const vnname = "Bò rừng Bắc Mỹ";
const tags = "Bắc Mỹ";
const appearance = "- Cơ thể rất to và nặng, phần vai cao tạo thành bướu lớn\n- Lông dày màu nâu sẫm, đặc biệt rậm ở đầu và vai\n- Đầu to với cặp sừng cong ngắn\n- Chân khỏe, thích hợp di chuyển trên đồng cỏ rộng\n- Con trưởng thành dài khoảng 2,1–3,5 m, nặng khoảng 450–1.000 kg";
const lifestyle = "Bò rừng Bắc Mỹ sống chủ yếu ở các đồng cỏ rộng lớn và thảo nguyên. Chúng thường sống theo đàn lớn để bảo vệ lẫn nhau trước kẻ săn mồi. Thức ăn chủ yếu là cỏ và các loại thực vật thấp. Loài này có thể di chuyển quãng đường dài để tìm nguồn thức ăn và nước, đặc biệt theo mùa.";
const biography = "Bison bison từng là một trong những loài động vật lớn phổ biến nhất ở Bắc Mỹ, với hàng chục triệu cá thể sống trên các đồng cỏ. Tuy nhiên vào thế kỷ 19, việc săn bắn quá mức khiến số lượng của chúng giảm mạnh. Nhờ các chương trình bảo tồn và bảo vệ trong công viên quốc gia, quần thể bò rừng Bắc Mỹ đã dần phục hồi và hiện nay vẫn tồn tại ở nhiều khu bảo tồn và đồng cỏ tự nhiên.";

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
