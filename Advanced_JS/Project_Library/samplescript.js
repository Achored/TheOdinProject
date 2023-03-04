var bookForm = document.getElementById("bookForm");
var newBookBtn = document.getElementById("newBookBtn");
var libraryContainer = document.getElementById("libraryContainer");


let myLibrary = [];
// Event Listener for New book button. If the new book button is not clicked, the form will not show. 
newBookBtn.addEventListener("click", function () {  
    if (bookForm.style.display === "none") {
      bookForm.style.display = "block";
    }
    else {
      bookForm.style.display = "none";
    }
  });

  document.getElementById("bookForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Get the values of the book inputs
    var title = document.getElementById("titleInput").value;
    var author = document.getElementById("authorInput").value;
    var pages = document.getElementById("pagesInput").value;
    var status = document.getElementById("statusInput").value;
  
    // Create a new div for the book
    var bookDiv = document.createElement("div");
    bookDiv.classList.add("book");
  
    // Add the book details to the div
    bookDiv.innerHTML = "<h2>" + title + "</h2><p>Author: " + author + "</p><p>Pages: " + pages + "</p><p>Status: " + status + "</p>";
  
    // Add the div to the library container
    document.getElementById("libraryContainer").appendChild(bookDiv);
  
    // Clear the book form inputs
    document.getElementById("titleInput").value = "";
    document.getElementById("authorInput").value = "";
    document.getElementById("pagesInput").value = "";
    document.getElementById("statusInput").value = "not read";
  });
  

// This function adds the remove button if a book exists
bookForm.addEventListener("input", function() {
    if (displayBooks.length) // add the correct condition here
     {
        removeButton.style.display = "inline-block";
    }
    else {
        removeButton.style.display = "none";
    }
});

function addBookToLibrary(title, author, pages) {
    var bookDiv = document.createElement("div");
    bookDiv.classList.add("book");
  
    var bookTitle = document.createElement("p");
    bookTitle.classList.add("title");
    bookTitle.textContent = title;
  
    var bookAuthor = document.createElement("p");
    bookAuthor.classList.add("author");
    bookAuthor.textContent = author;
  
    var bookPages = document.createElement("p");
    bookPages.classList.add("pages");
    bookPages.textContent = pages;
  
    var existingBook = document.querySelector(`.book .title:contains(${title}.toLowerCase())`);
    if (existingBook.toLowerCase()) {
      return console.error("Book with the same title already exists in the library");
    }
  
    bookDiv.appendChild(bookTitle);
    bookDiv.appendChild(bookAuthor);
    bookDiv.appendChild(bookPages);
    library.appendChild(bookDiv);
  }
  
  

