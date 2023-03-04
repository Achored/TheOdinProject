var bookForm = document.getElementById("bookForm");
var library = [];

// New book button that will show/hide the form to add a new book

newBookBtn.addEventListener("click", function(event) {
    if (bookForm.style.display === "none"){
        bookForm.style.display = "block"
    }
    else {
        bookForm.style.display = "none"
    }
});

//

function newBook (title, author, pages, status, removed){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read
}

newBook.prototype.toggleRead = function (){
  this.read = !this.read
}

// The removed function that will set the library array index status to removed. 

function removeBook(bookIndex) {
    library[bookIndex].removed = true;
    document.getElementById("libraryContainer").removeChild(document.getElementById("book" + bookIndex));
  }

bookForm.addEventListener("submit", function(event){
    event.preventDefault();
  
    // Get the values of the book inputs
    var title = document.getElementById("titleInput").value;
    var author = document.getElementById("authorInput").value;
    var pages = document.getElementById("pagesInput").value;
    var status = document.getElementById("statusInput").value;
  
        for (var i = 0; i < library.length; i++) {
          if (library[i].title === title && !library[i].removed) {
            alert("Book already exists.");
            document.getElementById("titleInput").value = "";
            document.getElementById("authorInput").value = "";
            document.getElementById("pagesInput").value = "";
            document.getElementById("statusInput").value = "not read";
            return;
          }
        }
        if (title === ""){
            alert("Invalid Book Title.")
        }
        else{
        var newBook = {
          title: title,
          author: author,
          pages: pages,
          status: status,
          removed: false  // add a new 'removed' property to the book object
        };
        library.push(newBook);
      

        var bookDiv = document.createElement("div");
        bookDiv.classList.add("book");
        bookDiv.id = "book" + (library.length - 1);
  
    // Create a new div for the book
    var bookDetails =  "<h2>" + title + "</h2><p>Author: " + author + "</p><p>Pages: " + pages + "</p><p>Status: " + status + "</p>";

    // Creates the remove button to remove the added book within  the library.

    var removeBtn = document.createElement("button");
    removeBtn.id = "removeBtn";
    removeBtn.textContent = "Remove Book";

    // Add the function once the removeButton is clicked. 

    removeBtn.addEventListener("click", function(event){
        var bookIndex = Number(bookDiv.id.slice(4));
        removeBook(bookIndex);
    } );

    // Add the book details to the newly created div
    bookDiv.innerHTML = bookDetails;

    // Adds the remove button to each bookDiv. 
    bookDiv.appendChild(removeBtn);

    // Create a new button that will mark the book as read if the book is unread
    var readBtn = document.createElement("button");
    readBtn.id = "readBtn";
    readBtn.textContent = "Mark as read";

    // Add an event when the readBtn is clicked, it will mark the unread book as read. 
    readBtn.addEventListener("click", function(event){
        var bookIndex = Number(bookDiv.id.slice(4));
        var book = library[bookIndex];
        book.status = "read";
        bookDiv.removeChild(readBtn);
        bookDetails =  "<h2>" + title + "</h2><p>Author: " + author + "</p><p>Pages: " + pages + "</p><p>Status: " + book.status + "</p>";
        bookDiv.innerHTML = bookDetails;
        bookDiv.appendChild(removeBtn); 
    });
  
    // Add the div to the library container
    document.getElementById("libraryContainer").appendChild(bookDiv);
    //
    if (status === "not read"){
    bookDiv.appendChild(readBtn)
    }


    // Clear the book form inputs
    document.getElementById("titleInput").value = "";
    document.getElementById("authorInput").value = "";
    document.getElementById("pagesInput").value = "";
    document.getElementById("statusInput").value = "not read";
}
  });


