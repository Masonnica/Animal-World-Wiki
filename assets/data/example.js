const scname = "<scname>";
const vnname = "<vnname>";
const tags = "<tag>|<tag>|...";
const appearance = "abc\n- bullet points\n<link|text>";
const lifestyle = "Lorem ipsum dolor sit amet consectetur adipiscing elit.\nPulvinar vivamus fringilla lacus nec metus bibendum egestas.\nOrci varius natoque penatibus et magnis dis parturient.\nVestibulum fusce dictum risus blandit quis suspendisse aliquet.";
const biography = "Porta elementum a enim euismod quam justo lectus.\nDui felis venenatis ultrices proin libero feugiat tristique.\nAdipiscing elit quisque faucibus ex sapien vitae pellentesque.\nBibendum egestas iaculis massa nisl malesuada lacinia integer.\nSemper vel class aptent taciti sociosqu ad litora.\nMattis scelerisque maximus eget fermentum odio phasellus non.";

function addList(list, selector) {
    for (let i = 0; i < list.length; i++) {
        const li = document.createElement('li');
        li.textContent = list[i];
        selector.appendChild(li);
    }
}

function addSpan(list, selector) {
    for (let i = 0; i < list.length; i++) {
        const span = document.createElement('span');
        li.textContent = list[i];
        selector.appendChild(span);
    }
}

/* Title */
document.title = scname;
document.querySelector('#content .title h2').textContent = scname;
document.querySelector('#content .title p').textContent = vnname;
addList(tags.split("|"), document.querySelector("#content .title .tags"))
