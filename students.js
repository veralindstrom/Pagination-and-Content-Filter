var studentItems = $(".student-item");
var pagination ='<div class="pagination"><ul></ul></div>';
var paginationButton = ".pagination ul li a";

var pagesArray = [];
for (var i = 0; i < studentItems.length; i++) {         // making an array of students for each page,
		pagesArray.push(studentItems.splice(i,10));	   // each page contains max 10 students
		console.log(pagesArray.push(studentItems.splice(i,10)));
	}
var studentList = pagesArray;
console.log(studentList);

function showPages(pageNumber, pageList) {
  $(".student-list li").hide(); 			// first hide all students on the page
  $.each(pageList, function(index, page){   // Then loop through all students in our student list argument
      if (pageNumber === index) {			// if student should be on this page number
        $.each(page, function(i, listItem){
          $(listItem).show();				// show the student
        });
      }
  });
}


function appendPageLinks(pageList) {
	$('.page').append(pagination);		// add the pagination/buttons to the page
	var numPages = pageList.length; 	// determine how many pages for this student list
	var pageLink = '.pagination ul';	// create a page link section
	for (var i = 1; i <= numPages; i++) {		// for every page
		var buttons = '<li><a href="#">' + i + '</a></li>';
		$(pageLink).append(buttons); // add a page link to the page link section
	}
	$(paginationButton).first().addClass('active'); // the first button is "active" when page loads
	 // define what happens when you click a link (a pagination button)
	$(paginationButton).on("click", function() {
	    pageNumber = parseInt($(this).text()) - 1; //setting the pageNumber
	    showPages(pageNumber, pageList); // Use the showPage function to display the page for the link clicked
	    $(paginationButton).removeClass();
	    $(this).addClass("active"); // mark that link as “active”
	   });
}

//display to site
appendPageLinks(studentList);
showPages(0, studentList);
