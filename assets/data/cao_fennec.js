// 10. Cáo fennec
const scname = "Vulpes Zerda";
const vnname = "Cáo fennec";
const tags = "Bắc Phi";
const appearance = "- Cơ thể nhỏ với lông màu vàng nhạt hoặc kem\n- Tai rất lớn so với đầu, giúp tản nhiệt\n- Mắt to, thích nghi với hoạt động ban đêm\n- Đuôi dài, rậm lông với chóp đen\n- Chiều dài cơ thể khoảng 24–41 cm, nặng khoảng 1–1,5 kg";
const lifestyle = "Cáo fennec sống ở các vùng sa mạc cát rộng lớn của Bắc Phi. Chúng hoạt động chủ yếu vào ban đêm để tránh nhiệt độ cao ban ngày. Thức ăn gồm côn trùng, loài gặm nhấm nhỏ, chim, trứng và trái cây. Loài này đào hang sâu trong cát để trú ẩn và thường sống theo nhóm gia đình nhỏ.";
const biography = "Vulpes zerda là loài cáo nhỏ nhất trên thế giới và thích nghi rất tốt với môi trường sa mạc khắc nghiệt. Chúng phân bố chủ yếu ở sa mạc Sahara thuộc Bắc Phi. Đặc điểm tai lớn giúp chúng tản nhiệt và nghe được con mồi dưới cát. Hiện nay loài này vẫn khá phổ biến nhưng có thể bị ảnh hưởng bởi việc buôn bán động vật và mất môi trường sống.";

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
