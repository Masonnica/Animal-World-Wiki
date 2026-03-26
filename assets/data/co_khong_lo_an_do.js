// 6. Cò khổng lồ Ấn Độ
const scname = "Leptoptilos Dubius";
const vnname = "Cò khổng lồ Ấn Độ";
const tags = "Nam Á";
const appearance = "- Cơ thể rất lớn với lông màu xám và trắng\n- Đầu và cổ gần như trụi lông\n- Có túi da lớn treo dưới cổ\n- Mỏ dài, dày và khỏe\n- Chiều cao khoảng 120–150 cm, sải cánh khoảng 210–250 cm";
const lifestyle = "Cò khổng lồ Ấn Độ sống ở các vùng đầm lầy, sông hồ và khu vực ngập nước ở Nam Á. Chúng thường kiếm ăn ở vùng nước nông, thức ăn gồm cá, ếch, động vật nhỏ và xác chết. Loài này thường sống đơn lẻ hoặc theo nhóm nhỏ và bay cao khi di chuyển xa.";
const biography = "Leptoptilos dubius là một trong những loài cò lớn nhất thế giới, phân bố chủ yếu ở Ấn Độ và một số khu vực lân cận ở Nam Á. Trong quá khứ, số lượng của chúng đã giảm mạnh do mất môi trường sống và ô nhiễm. Hiện nay loài này được xếp vào nhóm nguy cấp và đang được bảo vệ trong các khu bảo tồn để phục hồi quần thể.";

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