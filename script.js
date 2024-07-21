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

// function getData(event) {
//     event.preventDefault();
//     let nama = document.getElementById("nama").value;
//     let email = document.getElementById("email").value;
//     let nomortelpon = document.getElementById("nomortelpon").value;
//     let pesan = document.getElementById("pesan").value;

//     if (nama == "") {
//         return alert("Tolong diisikan nama kamu");
//     } else if (email == "") {
//         return alert("Tolong diisikan nama kamu");
//     }

//     console.log(nama);
//     console.log(email);
//     console.log(nomortelpon);
//     console.log(subject);
//     console.log(pesan)
// }


//     console.log(name);
//     console.log(email);
//     console.log(position);
//     console.log(address);

// let myEmail = "ilham@gmail.com";
// let subject = "introduction";
// let a = document.createElement("a");
// a.href = `mailto:${myEmail}?subject=${subject}&body=halo bang`;
// a.click();
// }