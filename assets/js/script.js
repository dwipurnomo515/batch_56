const menuToggle = document.querySelector('.right .burger i');
const nav = document.querySelector('.burger-menu')

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
})

function getData(event) {
    event.preventDefault();
    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let nomortelpon = document.getElementById("nomortelpon").value;
    let subject = document.getElementById("subject").value;
    let pesan = document.getElementById("pesan").value;

    console.log(nama);
    console.log(email);
    console.log(nomortelpon);
    console.log(subject);
    console.log(pesan)

    document.getElementById("nama").value = "";
    document.getElementById("email").value = "";
    document.getElementById("nomortelpon").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("pesan").value = "";



}

let dataBlog = [];

function addBlog(event) {
    event.preventDefault();

    let title = document.getElementById("project-name").value;
    let content = document.getElementById("deskripsi").value;
    let start = document.getElementById("start").value;
    let end = document.getElementById("end").value;
    let image = document.getElementById("input-blog-image").value;


    let blog = {
        title: title,
        content: content,
        start_date: start,
        end_date: end,
        image: image

    }

    dataBlog.push(blog)
    console.log(dataBlog);

    document.getElementById("project-name").value = "";
    document.getElementById("deskripsi").value = "";
    document.getElementById("start").value = "";
    document.getElementById("end").value = "";
    document.getElementById("input-blog-image").value = "";


    renderBlog();

}

function renderBlog() {
    document.getElementById("contents").innerHTML = "";

    for (let i = 0; i < dataBlog.length; i++) {
        document.getElementById("contents").innerHTML += `
         <div class="card">
            <img src="assets/foto/b.jpg" alt="">
                <div class="card-content">
                    <h2><a href="/blog-detail">${dataBlog[i].title}</a></h2>
                    <h5> dimulai pada ${dataBlog[i].start_date} selesai pada ${dataBlog[i].end_date} </h5>
                    <p>${dataBlog[i].content}</p>
                </div>

                <div class="icon">
                    <i class="fa-brands fa-google-play"></i>
                    <i class="fa-brands fa-android"></i>
                    <i class="fa-brands fa-java"></i>
                </div>

                <div class="tombol">
                    <button class="btn">Edit</button>
                    <button class="btn">Delete</button>
                </div>
        </div>


        `

    }
}