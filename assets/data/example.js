const scname = "Acipenser Transmontanus";
const vnname = "Cá tầm trắng";
const tags = "Bắc Mỹ";
const appearance = "abc\n- bullet points\n- bullet points 1\n- bullet points 2\n<link|text>";
const lifestyle = "Lorem ipsum dolor sit amet consectetur adipiscing elit.\n- Pulvinar vivamus fringilla lacus nec metus bibendum egestas.\n- Orci varius natoque penatibus et magnis dis parturient.\nVestibulum fusce dictum risus blandit quis suspendisse aliquet.";
const biography = "Porta elementum a enim euismod quam justo lectus.\nDui felis venenatis ultrices proin libero feugiat tristique.\nAdipiscing elit quisque faucibus ex sapien vitae pellentesque.\nBibendum egestas iaculis massa nisl malesuada lacinia integer.\nSemper vel class aptent taciti sociosqu ad litora.\nMattis scelerisque maximus eget fermentum odio phasellus non.";

function addList(list, selector) {
    for (let i = 0; i < list.length; i++) {
        const li = document.createElement('li');
        li.textContent = list[i];
        selector.appendChild(li);
    }
}

function addLine(lines, selector) {
    for (let i = 0; i < lines.length; i++) {
        const span = document.createElement('span');
        if (lines[i].startsWith('- ')) {
            let islist = true;
            const list = [];
            const ul = document.createElement('ul');

            while (islist) {
                if (lines[i].startsWith("- ")) {
                    list.push(lines[i].slice(2));
                } else {
                    islist = false;
                }
                i += 1;
            }
            i -= 1;

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
