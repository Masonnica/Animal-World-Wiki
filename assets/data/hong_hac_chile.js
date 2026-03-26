// 13. Hồng hạc Chile
const scname = "Phoenicopterus Chilensis";
const vnname = "Hồng hạc Chile";
const tags = "Nam Mỹ";
const appearance = "- Cơ thể cao và thon với bộ lông màu hồng nhạt\n- Cánh có lông màu hồng đậm và đen\n- Cổ rất dài và cong\n- Mỏ cong xuống, màu trắng hồng với đầu mỏ đen\n- Chiều cao khoảng 110–130 cm, chân dài màu xám hồng";
const lifestyle = "Hồng hạc Chile sống ở các đầm lầy, hồ nước mặn và vùng nước nông ở Nam Mỹ. Chúng thường sống theo đàn lớn và kiếm ăn bằng cách lọc nước qua mỏ để lấy tảo, động vật nhỏ và sinh vật phù du. Loài chim này thường đứng bằng một chân khi nghỉ ngơi và di chuyển cùng đàn để tìm nguồn thức ăn.";
const biography = "Phoenicopterus chilensis phân bố ở nhiều quốc gia Nam Mỹ như Chile, Argentina, Bolivia và Peru. Chúng thích nghi với các môi trường nước nông và vùng đất ngập nước. Hồng hạc Chile làm tổ bằng bùn, tạo thành các ụ nhỏ trên mặt đất để đặt trứng. Loài này hiện vẫn khá phổ biến, nhưng ở một số nơi quần thể bị ảnh hưởng bởi mất môi trường sống và ô nhiễm nguồn nước.";

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