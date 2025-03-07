function regnUttb() {
    let click = document.getElementById("btn_omOss");
    click.style="color: rgb(240, 240, 240);";
    click.style="background-color: #32375A;";
    setTimeout(color_release, 100)
}

function color_release() {
    let click = document.getElementById("btn_omOss");
    click.style="color: #32375A;";
    click.style="background-color: rgb(240, 240, 240);";
}