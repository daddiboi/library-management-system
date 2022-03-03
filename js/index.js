class categories {
    constructor(booktype, booklink) {
        this.booktype = booktype;
        this.booklink = booklink;
    }
}
class bookdetails {
    constructor(
        bookID,
        title,
        isbn,
        pageCount,
        thumbnailUrl,
        longDescription,
        authors,
        category
    ) {
        this.bookID = bookID;
        this.title = title;
        this.isbn = isbn;
        this.pageCount = pageCount;
        this.thumbnailUrl = thumbnailUrl;
        this.longDescription = longDescription;
        this.authors = authors;
        this.category = category;
    }
}

$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "../json/A2-JSON.json",
        complete: function(data) {
            personal = data;
            bookz = data;
        },
    });

    $(document).ajaxComplete(function() {
        personal = JSON.parse(personal.responseText); //Takes AJAX Reponse Text and parses it to JSON
        bookz = JSON.parse(bookz.responseText);
        localStorage.setItem("bookz", JSON.stringify(bookz.BookDetail));
        localStorage.setItem("personal", JSON.stringify(personal.PersonalData));
    });

    var my_json;
    $.getJSON("../json/A2-JSON.json", function(json1) {
        var categoriesA = [];
        json1.Categories.forEach(function(Categories) {
            my_json = Categories;
            categoriesA.push(my_json);
        });
        let types = [];
        for (var i = 0; i < categoriesA.length; i++) {
            types.push(
                new categories(categoriesA[i].categoryGroup, categoriesA[i].logo)
            );
        }

        localStorage.setItem("typeOfBooks", JSON.stringify(types));

        $("#firstLine")
            .append(
                $("<p>", { text: `Library Management System` }).addClass(
                    "ShortLine"
                )
            )

        .append($("<hr>"));
        // .appendTo('#profile')
        $("#footer")


        $(".ShortLine")
            .css("text-align", "center")
            .css("display", "block")
            .css("font-weight", "bold");
        // $("span").appendTo("#hel");

        for (var i = 0; i < categoriesA.length; i++) {
            $("#content").append("<li id= 'a" + i + "'>");

            $("<a>", {
                    text: `${JSON.parse(localStorage.getItem("typeOfBooks"))[i].booktype} `,
                    href: "/pages/page2.html",
                    id: `${JSON.parse(localStorage.getItem("typeOfBooks"))[i].booktype} `,
                })
                .addClass("links")
                .addClass("block")
                .appendTo("#a" + [i]);



            $(
                    `<img src='${
          JSON.parse(localStorage.getItem("typeOfBooks"))[i].booklink
        }'>`
                )
                .appendTo("#content")
                .addClass("img")
                .addClass("block");
        }
        $(`.links`).click(function() {
            console.log($(`.links`).index(this))
            localStorage.setItem("id", JSON.parse(localStorage.getItem("typeOfBooks"))[$(`.links`).index(this)].booktype)
        });
    });





    // $('#profile2')
    //   .text(`Login : `)
    //  .append($('<span>', { text: `${JSON.parse(localStorage.getItem("personal")).rsgfd} / ` }))
    //  .append($('<span>', { text: `ID : ${JSON.parse(localStorage.getItem("personal")).dataID} / Program : ` }))
    // .append($('<a>', { text: JSON.parse(localStorage.getItem("personal")).dataProgram, href: 'https://www.wikimedia.org' }))
    // .appendTo('#profile2')
});