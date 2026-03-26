// 4. Diều hâu đuôi đỏ
const scname = "Buteo Jamaicensis";
const vnname = "Diều hâu đuôi đỏ";
const tags = "Bắc Mỹ";
const appearance = "- Lông cơ thể màu nâu, phần bụng thường sáng hơn\n- Đuôi màu đỏ nâu đặc trưng ở chim trưởng thành\n- Cánh rộng, đầu khá tròn khi nhìn từ xa\n- Mỏ cong, màu sẫm, thích hợp xé thịt con mồi\n- Sải cánh khoảng 1,1–1,4 m; trọng lượng khoảng 700–1.600 g";
const lifestyle = "Diều hâu đuôi đỏ sống ở nhiều môi trường khác nhau như rừng, đồng cỏ, sa mạc và vùng nông nghiệp trên khắp Bắc Mỹ. Chúng thường đậu trên cột điện hoặc cành cây cao để quan sát con mồi. Thức ăn chủ yếu là động vật nhỏ như chuột, thỏ, rắn và đôi khi là chim nhỏ. Khi phát hiện con mồi, chúng lao xuống rất nhanh và bắt bằng móng vuốt sắc.";
const biography = "Buteo jamaicensis là một trong những loài chim săn mồi phổ biến nhất ở Bắc Mỹ. Chúng phân bố từ Canada xuống đến Hoa Kỳ, Mexico và cả Trung Mỹ. Loài này thích nghi tốt với môi trường do con người thay đổi và thường được thấy ở gần khu dân cư hoặc vùng nông nghiệp. Nhờ khả năng săn chuột hiệu quả, diều hâu đuôi đỏ đóng vai trò quan trọng trong việc cân bằng hệ sinh thái.";

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
