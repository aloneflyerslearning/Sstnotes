document.addEventListener('DOMContentLoaded', function() {

    function showChapterContent(bookName, chapter, content) {
        const contentArea = document.getElementById('content-area');
       contentArea.innerHTML = `<div class="content-wrapper">${content}</div>`;

    }
     // attach event listener to all chapter buttons 
    function createChapterButtons(bookName, chapters, bookElement) {
        const chaptersDiv = bookElement.querySelector('.chapters');
        chapters.forEach(chapter => {
            const button = document.createElement('button');
            button.textContent = chapter;
            button.classList.add('chapter-btn');
           
            // import content from js files
            let content="";
            if(bookName ==="itihas") {
                content = itihasContent[chapter];
                }else if(bookName==="bhugol") {
                   content = bhugolContent[chapter];
               }else if (bookName==="nagrikshastra"){
                    content = nagrikshastraContent[chapter];
               }else if(bookName==="arthshastra"){
                   content = arthshastraContent[chapter];
               }

            button.addEventListener('click', function() {
              showChapterContent(bookName, chapter, content);
          });
           chaptersDiv.appendChild(button);
       });
    }
    
    const bookElements = document.querySelectorAll('.book');
        bookElements.forEach(bookElement => {
         const bookName = bookElement.dataset.book;
          let chapters;
        if (bookName === "itihas") {
            chapters = Object.keys(itihasContent);
           } else if(bookName ==="bhugol") {
               chapters = Object.keys(bhugolContent)
            } else if(bookName==="nagrikshastra") {
                chapters = Object.keys(nagrikshastraContent);
           } else if(bookName ==="arthshastra") {
                chapters = Object.keys(arthshastraContent);
           }
            createChapterButtons(bookName, chapters, bookElement);

        });
});