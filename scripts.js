const dialog = document.getElementById("dialog");
const library = document.getElementById("library");
const add_book = document.getElementById("add_book");

let books = [
    {
        title: "The Magnificent Ambers",
        author: "Booth Tarkington",
        description: `Major Amberson had "made a fortune" in 1878, when other people were losing fortunes, and the magnificence of the Ambersons began then. Magnificence, like the size of a fortune, is always comparative, as even Magnificent Lorenzo may now perceive, if he has happened to haunt New York in 1916; and the Ambersons were magnificent in their day and place. Their splendour lasted throughout all the years that saw their Midland town spread and darken into a city, but reached its topmost during the period when every prosperous family with children kept a Newfoundland dog.`,
        cover: "https://covers.openlibrary.org/b/id/229971-L.jpg",
    },

    {
        title: "The Widowing of Mrs. Holroyd",
        author: "David Herbert Lawrence",
        description: `The Widowing of Mrs. Holroyd is one of D. H. Lawrence's most significant early works. Written immediately after Sons and Lovers, the play, Lawrence's first, is the alter ego of the story "Odour of Chrysanthemums" and, like the short story, deals with a catastrophe in the lives of a coal mining family.
            Drawing upon the intensity of events that unfold in the miner's kitchen, the play explores a marriage bowed under the weight of a husband's drinking and infidelity and peers into the strange, burgeoning relationship between the neglected wife, Mrs. Holroyd, and the young electrician in whom she seeks emotional refuge. First published in 1914, The Widowing of Mrs. Holroyd is a bare tracing of the ways in which a marriage has gone wrong. In the end, the play shows how, through certain twists of fate, Mrs.
            Holroyd's alternative love interest turns out to be almost completely irrelevant.`,
        cover: "https://covers.openlibrary.org/b/id/5739915-L.jpg",
    },

    {
        title: "The Hitch Hiker's Guide to the Galaxy",
        author: "Douglas Adams",
        description: `'The history of the Hitch Hiker's Guide to the Galaxy is now so complicated that every time I tell it I contradict myself, and whenever I do get it right I'm misquoted. So, the publication of this omnibus edition seemed like a good opportunity to set the record straight -- or at least firmly cooked.'
            First a legendary radio series, then a bestselling paperback, the highly successful Hit Hiker's Guide to the Galaxy needs no introduction. the Omnibus edition is reissued to coincide with the publication of the fifth part of the trilogy, Mostly Harmless, along with A Guide to the Guide and essential notes on How to Leave the Planet. This single hardback edition is indispensable for any would-be galactic traveler, and for Douglas Adams fans everywhere.`,
        cover: "https://covers.openlibrary.org/b/id/11464624-L.jpg",
    },

    {
        title: "The Magnificent Ambers",
        author: "Booth Tarkington",
        description: `Major Amberson had "made a fortune" in 1878, when other people were losing fortunes, and the magnificence of the Ambersons began then. Magnificence, like the size of a fortune, is always comparative, as even Magnificent Lorenzo may now perceive, if he has happened to haunt New York in 1916; and the Ambersons were magnificent in their day and place. Their splendour lasted throughout all the years that saw their Midland town spread and darken into a city, but reached its topmost during the period when every prosperous family with children kept a Newfoundland dog.`,
        cover: "https://covers.openlibrary.org/b/id/229971-L.jpg",
    },

    {
        title: "The Widowing of Mrs. Holroyd",
        author: "David Herbert Lawrence",
        description: `The Widowing of Mrs. Holroyd is one of D. H. Lawrence's most significant early works. Written immediately after Sons and Lovers, the play, Lawrence's first, is the alter ego of the story "Odour of Chrysanthemums" and, like the short story, deals with a catastrophe in the lives of a coal mining family.
            Drawing upon the intensity of events that unfold in the miner's kitchen, the play explores a marriage bowed under the weight of a husband's drinking and infidelity and peers into the strange, burgeoning relationship between the neglected wife, Mrs. Holroyd, and the young electrician in whom she seeks emotional refuge. First published in 1914, The Widowing of Mrs. Holroyd is a bare tracing of the ways in which a marriage has gone wrong. In the end, the play shows how, through certain twists of fate, Mrs.
            Holroyd's alternative love interest turns out to be almost completely irrelevant.`,
        cover: "https://covers.openlibrary.org/b/id/5739915-L.jpg",
    },

    {
        title: "The Hitch Hiker's Guide to the Galaxy",
        author: "Douglas Adams",
        description: `'The history of the Hitch Hiker's Guide to the Galaxy is now so complicated that every time I tell it I contradict myself, and whenever I do get it right I'm misquoted. So, the publication of this omnibus edition seemed like a good opportunity to set the record straight -- or at least firmly cooked.'
            First a legendary radio series, then a bestselling paperback, the highly successful Hit Hiker's Guide to the Galaxy needs no introduction. the Omnibus edition is reissued to coincide with the publication of the fifth part of the trilogy, Mostly Harmless, along with A Guide to the Guide and essential notes on How to Leave the Planet. This single hardback edition is indispensable for any would-be galactic traveler, and for Douglas Adams fans everywhere.`,
        cover: "https://covers.openlibrary.org/b/id/11464624-L.jpg",
    },
];

books.forEach((book) => {
    let element = `
    <article class="library__book">
        <div>
            <img src=${book.cover} alt=${book.title} />
        </div>
        <div>
            <h3>${book.title}</h3>
            <span>${book.author}</span>
            <p>${book.description}</p>
        </div>
    </article>
    `;
    library.innerHTML += element
})

add_book.addEventListener("click", (e) => {
    if (dialog.open) {
        dialog.close()
    } else {
        dialog.showModal()
    }
})
