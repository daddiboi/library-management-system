$(document).ready(function() {
    var personal = localStorage.getItem("personal");
    var books = localStorage.getItem("bookz");
    var category = localStorage.getItem("typeOfBooks");
    var id = localStorage.getItem("id");

    $("#firstLine")
        .append(
            $("<p>", { text: `Library Management System` }).addClass(
                "ShortLine"
            )
        )

    .append($("<hr>"));
    // .appendTo('#profile')
    $(".ShortLine")
        .css("text-align", "center")
        .css("display", "block")
        .css("font-weight", "bold");

    $("#cont").append(
        $("<h3>", {
            text: id,
        }).addClass("ShortLine")
    );

    for (var i = 0; i < JSON.parse(books).length; i++) {

        if (JSON.parse(books)[i].category == id) {
            let cont = `<li><div class="box">
            <a href="${JSON.parse(books)[i].thumbnailUrl}"><img class="bookimg" src="${
        JSON.parse(books)[i].thumbnailUrl
      }"/><a/>
            <div class="box-2">
                <h4 class="text2">${JSON.parse(books)[i].title}</h4>
                <span class="text3">${JSON.parse(books)[i].authors}</span>
                <p style="display:none;" class="des">${JSON.parse(books)[i].longDescription}</p>
                <button class="btn text1">Description</button>
            </div>
        </div>
        </li>
      `;
            $("#content").append(cont);



        }
    }
    $(".bookimg")
        .css("width", "50px")
        .css("height", "75px")
    $('.btn').click(function() {
            console.log($('.btn').index(this))
            $(`.des:eq(${$('.btn').index(this)})`).toggle(this);
        })
        //footer
    $("#footer")
        .append($("<hr>"))
        .append(
            $("<span>", {
                text: `My Sheridan User Name : ${
          JSON.parse(localStorage.getItem("personal")).UserName
        }  `,
            }).addClass("ShortLine")
        )
        .append(
            $("<span>", {
                text: `My Program :  ${
          JSON.parse(localStorage.getItem("personal")).Program
        }  `,
            }).addClass("ShortLine")
        );
    $(".ShortLine")
        .css("text-align", "center")
        .css("display", "block")
        .css("font-weight", "bold");

    $(".box")
        .css("margin", "20px")

});