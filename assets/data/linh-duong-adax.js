// 1. Linh dương addax
const scname = "Addax Nasomaculatus";
const vnname = "Linh dương addax";
const tags = "Bắc Phi";
const appearance = "- Cơ thể trung bình với lông màu trắng hoặc xám nhạt\n- Đầu và cổ có các mảng màu nâu\n- Sừng dài, xoắn theo hình xoắn ốc ở cả con đực và con cái\n- Chân ngắn và chắc khỏe, thích nghi với cát\n- Chiều dài cơ thể khoảng 100–130 cm, nặng khoảng 60–125 kg";
const lifestyle = "Linh dương addax sống ở các vùng sa mạc khô cằn của Bắc Phi, đặc biệt là sa mạc Sahara. Chúng di chuyển theo đàn nhỏ và thường hoạt động vào ban đêm hoặc lúc trời mát để tránh nhiệt độ cao. Thức ăn chủ yếu gồm cỏ khô, lá cây và các loại thực vật sa mạc. Loài này có khả năng sống lâu mà không cần uống nước trực tiếp, lấy nước từ thức ăn.";
const biography = "Addax nasomaculatus là một trong những loài linh dương thích nghi tốt nhất với môi trường sa mạc khắc nghiệt. Tuy nhiên, số lượng của chúng đã giảm mạnh do săn bắn và mất môi trường sống. Hiện nay loài này được xếp vào nhóm cực kỳ nguy cấp và đang được bảo vệ trong các khu bảo tồn và chương trình nhân giống nhằm phục hồi quần thể trong tự nhiên.";

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
