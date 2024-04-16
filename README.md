### Book Search

A react based web application for searching books using the Google Books API.

# Features

This web application allows users to search for books by title, author, or publisher, or a combination of the three, using the Google Books API.
Users can input search terms in the respective fields to filter searches by title, author and publisher.
On searching, the application fetches data from the Google Books API, and displays basic information on the books, such as a thumbnail, or simply title and author if a thumbnail is unavailable.
The users can then click on a book to view more information, including a link to purchase the book.
The application also notifies users of errors based on either the search terms or the API.
It also includes an updated design convention and colour scheme to that of older projects of mine.

As with other projects, the UI is designed with a balance of clarity and convenience in mind. this app uses two forms, one being the option selector, and the other being the search input. Whereas just having the search input would be more convenient, having the second effectively communicates with the user that they can choose some or all of the options without needing instructions.
Similarly, the books, when rendered, only show the thumbnails in order to avoid clutter, but grow in size when hovered over, to communicate that the books can be clicked on without the user needing to focus in on their cursor.
There are other small decisions that were made for the purposes of clarity or convenience, such as the text for notable text such as errors or links being a different colour, an external link icon to communicate the destination of the link, text shadow to give greater contrast to the text agains the background, etc.

Future iterations of this should ideally include:

- functionality to favourite or save books.
- removing text from field inputs when the option is deselected.
- updated date format
- general optimisation and larger focus on reusability of containers.
- better form validation 
- scroll to info on clicking book / book info appearing at book level.
- text outline over text shadow for better contrast with background

# Tools

This web app uses html, scss and javascript.
