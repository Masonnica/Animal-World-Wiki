// 2. Cá pirarucu (cá arapaima khổng lồ)
const scname = "Arapaima Gigas";
const vnname = "Cá pirarucu (cá arapaima khổng lồ)";
const tags = "Nam Mỹ";
const appearance = "- Cơ thể rất dài và lớn, dạng thon\n- Lưng màu xám xanh, phần thân dưới có ánh đỏ\n- Vảy lớn và rất cứng\n- Đầu tương đối dẹt với miệng rộng\n- Chiều dài có thể đạt 2–3 m, nặng hơn 100 kg";
const lifestyle = "Cá arapaima khổng lồ sống trong các con sông, hồ và vùng nước ngập của rừng Amazon ở Nam Mỹ. Chúng là loài săn mồi và ăn các loài cá nhỏ, giáp xác và đôi khi cả động vật nhỏ rơi xuống nước. Arapaima có khả năng hô hấp không khí, vì vậy chúng thường nổi lên mặt nước để hít thở. Loài cá này thường hoạt động nhiều ở vùng nước chậm và khu vực ngập lũ.";
const biography = "Arapaima gigas là một trong những loài cá nước ngọt lớn nhất thế giới và là loài đặc trưng của lưu vực sông Amazon. Trong nhiều khu vực, chúng là nguồn thực phẩm quan trọng đối với người dân địa phương. Tuy nhiên việc đánh bắt quá mức đã làm giảm số lượng ở một số nơi. Hiện nay nhiều chương trình quản lý và bảo tồn đang được áp dụng để bảo vệ loài cá khổng lồ này trong tự nhiên.";

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