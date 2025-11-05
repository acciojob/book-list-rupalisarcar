//your JS code here. If required.
const btn = document.getElementById("submit");
function addBook(event){
	 event.preventDefault();
	const booktitle = document.getElementById("title").value;
	const bookAuthor = document.getElementById("author").value;
	const isbn = document.getElementById("isbn").value;

	const bookList = document.getElementById("book-list");
	const tableRow = document.createElement("tr");
	const firstCol = document.createElement("td");
	firstCol.innerText=booktitle;
	const secCol = document.createElement("td");
	secCol.innerText=bookAuthor;
	const thirdCol = document.createElement("td");
	thirdCol.innerText=isbn;
	
	const removeBtn = document.createElement("button");
	removeBtn.innerHTML = "&times;";

	console.log(`firstCol= ${booktitle} secCol= ${bookAuthor}, thirdCol= ${isbn}`)
	tableRow.appendChild(firstCol);
	tableRow.appendChild(secCol);
	tableRow.appendChild(thirdCol);
	tableRow.appendChild(removeBtn);
	
	// Add some styling for better presentation (e.g., cursor pointer)
	removeBtn.style.cursor = "pointer";
	removeBtn.style.marginLeft = "10px"; // Optional styling
	removeBtn.style.backgroundColor="red";
	removeBtn.style.color="white";

	bookList.appendChild(tableRow)
	removeBtn.addEventListener("click",removeBookList)	
	function removeBookList(){
		tableRow.remove()
	}
	
}


btn.addEventListener("click", addBook);