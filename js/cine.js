document.addEventListener("DOMContentLoaded", () => {

    const target = document.querySelector("section")

    //* Creation tableaux    
    let cine = [{
        image: "./asset/img/king-kong.jpg",
        titre: "King Kong",
        date: 1933,
        genre: "Horreur, fantastique",
        dvd: "22 novembre 2005",
        real: "Merian C.Cooper, Ernest B"
    }, {
        image: "./asset/img/camonte.jpg",
        titre: "Scarface",
        date: 1932,
        genre: "Policier, action",
        dvd: "23 décembre 2005",
        real: "Howard Hawks"
    }, {
        image: "./asset/img/autant-le-vent-little.png",
        titre: "Autant en emporte le vent",
        date: 1939,
        genre: "Dramatique, guerre",
        dvd: "19 mars 2005",
        real: "Victor Fleming"
    }, ]

    for (let i = 0; i < cine.length; i++) {
        target.innerHTML +=
            `<figure>
    <img src="${cine[i].image}" alt="${cine[i].titre}">
    <figcaption>
        <h2>${cine[i].titre}</h2>
        <dl>
            <dt>Date</dt>
            <dd>${cine[i].date}<br></dd>
            
            <dt>Réal</dt>
            <dd>${cine[i].real}<br></dd>
            
            <dt>Genre</dt>
            <dd>${cine[i].genre}<br></dd>
            
            <dt>Sortie dvd</dt>
            <dd>${cine[i].dvd}</dd>
        </dl>
    </figcaption>
</figure>
    `
    }
})