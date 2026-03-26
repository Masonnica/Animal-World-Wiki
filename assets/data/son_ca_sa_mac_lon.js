// 2. Sơn ca sa mạc lớn
const scname = "Alaemon Alaudipes";
const vnname = "Sơn ca sa mạc lớn";
const tags = "Bắc Phi";
const appearance = "- Cơ thể thon dài với màu nâu cát\n- Lưng có các vệt sọc mờ giúp ngụy trang\n- Mỏ dài và hơi cong xuống\n- Chân dài thích nghi với việc chạy trên cát\n- Chiều dài cơ thể khoảng 18–20 cm, sải cánh khoảng 30–35 cm";
const lifestyle = "Sơn ca sa mạc lớn sống ở các vùng sa mạc và bán sa mạc ở Bắc Phi. Chúng thường di chuyển trên mặt đất và chạy nhanh để tìm kiếm thức ăn. Thức ăn chủ yếu gồm côn trùng và hạt. Loài chim này hoạt động nhiều vào ban ngày và thường đơn độc hoặc theo cặp.";
const biography = "Alaemon alaudipes phân bố ở nhiều khu vực khô hạn của Bắc Phi và Trung Đông. Chúng thích nghi tốt với môi trường sa mạc nhờ khả năng chịu nhiệt và tìm kiếm thức ăn trong điều kiện khắc nghiệt. Loài chim này thường làm tổ trên mặt đất và dựa vào màu lông để ngụy trang khỏi kẻ săn mồi.";

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
