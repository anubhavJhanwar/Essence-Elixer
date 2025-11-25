document.addEventListener('DOMContentLoaded', () => {
    const Perfumes = [
        {
            id: 1,
            name: "Afnan Supremacy Not Only Intense",
            cost: "3300 Rs",
            url: "/afnan",
            img: "./assets/rn-image_picker_lib_temp_a3791f6e-a304-4732-a5a0-7b50b1639f53.webp"
        },
        {
            id: 2,
            name: "Armaf Club de Nuit Intense man",
            cost: "3600 Rs",
            img: "./assets/65ddb9be999afe402b39fbf8-armaf-club-de-nuit-intense-men-39-s-edt.jpg",
            url: "/armaf"
        },
        {
            id: 3,
            name: "Davidoff Coolwater",
            cost: "2400 Rs",
            img: "./assets/811NG3nBJYL._AC_UF1000,1000_QL80_.jpg",
             url: "/davidoff"
        },
        {
            id: 4,
            name: "Beardo Godfather",
            cost: "550 Rs",
            img: "./assets/for him(3).png",
            url: "/beardo"
        },
        {
            id: 5,
            name: "The Man Company Sky",
            cost: "400 Rs",
            img: "./assets/for him(5).png"
        },
        {
            id: 6,
            name: "Bergamot Beaute",
            cost: "600 Rs",
            img: "./assets/for him.png"
        },
        {
            id: 7,
            name: "Blanko Old Money",
            cost: "550 Rs",
            img: "./assets/100mlpng.webp"
        },
        {
            id: 8,
            name: "Wild Stone Ultra Sensual",
            cost: "219 Rs",
            img: "./assets/41fqcna8S5L._SX300_SY300_QL70_FMwebp_.webp"
        },
        {
            id: 9,
            name: "Park Avenue Euphoria",
            cost: "250 Rs",
            img: "./assets/61zBq6pkFFL._SX679_.jpg"
        },
        {
            id: 10,
            name: "Yardley London Gentelman Classic",
            cost: "300 Rs",
            img: "./assets/61nyqWXDm7L._SX679_.jpg"
        }
    ];

    let search2 = document.getElementsByClassName('search2')[0];
    Perfumes.forEach(element => {
        const { name, cost, url = '#', img } = element;

        let card = document.createElement('a');
        card.href = url;
        card.innerHTML = `<img src="${img}" alt="">
        <div class="search-content">
            <h6>${name}</h6>
            <p>${cost}</p>
        </div>`;

        search2.appendChild(card);
    });

    let search = document.getElementById('input-box');
    search.addEventListener('keyup', () => {
        let filter = search.value.toUpperCase();
        let a = search2.getElementsByTagName('a');
        for (let i = 0; i < a.length; i++) {
            let b = a[i].getElementsByClassName('search-content')[0];
            let c = b.getElementsByTagName('h6')[0];

            let TextValue = c.textContent || c.innerText;
            if (TextValue.toUpperCase().indexOf(filter) > -1) {
                a[i].style.display = '';
                search2.style.visibility = "visible";
                search2.style.opacity = 1;
            } else {
                a[i].style.display = 'none';
            }
            if (search.value == 0) {
                search2.style.visibility = "hidden";
                search2.style.opacity = 0;
            }
        }
    });
});
