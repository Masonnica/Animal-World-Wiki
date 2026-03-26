// 9. Chim hoét xanh
const scname = "Myophonus Caeruleus";
const vnname = "Chim hoét xanh";
const tags = "Nam Á";
const appearance = "- Cơ thể trung bình với lông màu xanh đậm ánh kim\n- Một số vùng có đốm xanh sáng nổi bật\n- Mỏ màu đen, khá dài\n- Chân khỏe, thích nghi với môi trường đá\n- Chiều dài cơ thể khoảng 30–35 cm";
const lifestyle = "Chim hoét xanh sống gần suối, thác nước và rừng núi ở Nam Á. Chúng thường kiếm ăn trên đá hoặc gần dòng nước. Thức ăn chủ yếu gồm côn trùng, ốc, giun và các động vật nhỏ. Loài này hoạt động vào ban ngày và có tiếng hót vang, rõ.";
const biography = "Myophonus caeruleus phân bố ở nhiều khu vực Nam Á và Đông Nam Á, đặc biệt ở vùng núi. Chúng thích nghi tốt với môi trường ẩm ướt gần nguồn nước. Nhờ tiếng hót đặc trưng và màu sắc đẹp, loài chim này được nhiều người yêu thích. Trong tự nhiên, chúng vẫn khá phổ biến trong phạm vi phân bố của mình.";

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