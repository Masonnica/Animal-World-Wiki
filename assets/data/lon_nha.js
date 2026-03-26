// 12. Lợn nhà
const scname = "Sus Scrofa Domestica";
const vnname = "Lợn nhà";
const tags = "Tây Âu";
const appearance = "- Cơ thể to và chắc với lớp da dày\n- Lông thưa, màu sắc có thể là hồng, đen, nâu hoặc đốm\n- Mõm dài và khỏe dùng để đào bới\n- Tai có thể dựng hoặc rủ tùy giống\n- Chiều dài cơ thể khoảng 90–180 cm, nặng khoảng 50–300 kg";
const lifestyle = "Lợn nhà được nuôi trong trang trại và khu vực nông nghiệp ở nhiều nơi tại Tây Âu. Chúng là loài ăn tạp, thức ăn gồm ngũ cốc, rau củ, trái cây và nhiều loại thức ăn khác. Lợn có khứu giác rất phát triển và thường dùng mõm để tìm thức ăn trong đất. Chúng là loài động vật xã hội và thường sống theo nhóm.";
const biography = "Sus scrofa domestica là dạng thuần hóa của lợn rừng Sus scrofa. Loài này đã được con người nuôi từ hàng nghìn năm trước để lấy thịt và các sản phẩm khác. Ngày nay lợn nhà là một trong những loài gia súc phổ biến nhất trên thế giới và có vai trò quan trọng trong ngành chăn nuôi ở nhiều quốc gia châu Âu, bao gồm cả Tây Âu.";

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