function change_color() {
    var modal = document.getElementById('modal');
    var modal_news = document.getElementById('modalnews');
    var title = "Новость " + this.id;
    var textup = title + ": Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, alias.";
    var textdown = "Lorem ipsum dolor sit amet consectetur adipisicing elit.Aperiam hic, ipsa, ullam, cupiditate eveniet at voluptate corrupti commodi nobis ratione voluptatem! Vel animi totam cupiditate doloribus ad ab exercitationem officia eveniet impedit? Deleniti quasi nisi consectetur perspiciatis quibusdam nostrum, enim perferendis nam, magni molestias recusandae id libero vitae, repudiandae praesentium.";
    modal_news.firstElementChild.textContent = title;
    modal_news.lastElementChild.innerHTML = textup + "<br/>" + textdown;
    modal.style.display = 'block';
}

function go_to_main() {
    document.getElementById('modal').style.display='none';
}

function set_right() {
    right = document.getElementById('rightcontent');
    left = document.getElementById('leftcontent');
    left.style.flex = "3%";
    left.firstElementChild.style.display = "none";
    right.style.flex = "97%";
    right.firstElementChild.style.display = "block";
    right.firstElementChild.className = "second";
}

function set_both() {
    right = document.getElementById('rightcontent');
    left = document.getElementById('leftcontent');
    left.style.flex = "50%";
    left.firstElementChild.style.display = "block";
    left.firstElementChild.className = "first";
    right.style.flex = "50%";
    right.firstElementChild.style.display = "block";
    right.firstElementChild.className = "first";
}

function set_left() {
    right = document.getElementById('rightcontent');
    left = document.getElementById('leftcontent');
    left.style.flex = "97%";
    right.firstElementChild.style.display = "none";
    right.style.flex = "3%";
    left.firstElementChild.className = "second";
    left.firstElementChild.style.display = "block";
}