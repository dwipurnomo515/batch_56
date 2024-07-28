function fetchUrl(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open("GET", url, true);

        xhr.onerror = () => {
            reject("Network Error");
        };

        xhr.onload = () => {
            resolve(JSON.parse(xhr.responseText));
        };

        xhr.send();
    });
}


async function allTestimonial() {
    try {
        const testimonials = await fetchUrl(
            "https://api.npoint.io/e320fa70a61a3c02310b"
        );

        const testimonialHTML = testimonials.map((testimonial) => {
            return ` <div class="testimonial">
            <img src="${testimonial.image}" alt="">
            <div class="isi">
                <p class="content">${testimonial.content}</p>
                <p class="author">${testimonial.author}</p>
                <p class="star">${testimonial.rating} <i class="fa-solid fa-star"></i></p>
            </div>
        </div>`
        });

        document.getElementById("testimonials").innerHTML =
            testimonialHTML.join(" ");

    } catch (error) {
        alert(error);
    }
}


async function filterTestimonial(rating) {
    try {
        const testimonials = await fetchUrl(
            "https://api.npoint.io/e320fa70a61a3c02310b"
        );

        const filterTestimonialRating = testimonials.filter((testimonial) => {
            return testimonial.rating == rating;
        });

        const testimonialHTML = filterTestimonialRating.map((testimonial) => {
            return `<div class="testimonial">
            <img src="${testimonial.image}" alt="">
            <div class="isi">
                <p class="content">${testimonial.content}</p>
                <p class="author">${testimonial.author}</p>
                <p class="star">${testimonial.rating} <i class="fa-solid fa-star"></i></p>
            </div>
        </div>`
        });

        document.getElementById("testimonials").innerHTML = testimonialHTML.join(" ");
    } catch (error) {
        alert(error)
    }
}

















