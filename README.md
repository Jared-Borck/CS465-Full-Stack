\# CS 465 Full Stack Development – Travlr Getaways



\## Architecture



Throughout the Travlr Getaways project, I worked with several types of frontend development, including Express HTML, JavaScript, and a single-page application (SPA). The Express portion of the application used server-side routing and Handlebars templates to generate pages for the customer-facing website. JavaScript was used throughout the project to add application logic and allow different parts of the application to communicate with each other. The administrative side was developed as an Angular SPA. Unlike the Express-based website, the SPA can update parts of the interface without requiring the entire page to reload. Angular also made it possible to separate the interface into reusable components, such as the trip listing, trip cards, navigation bar, login page, and add and edit trip components.



The backend used a NoSQL MongoDB database because the application works with travel package information that can be represented naturally as documents. MongoDB provides flexibility when storing and retrieving this type of information and works well with JavaScript-based applications because its document structure is similar to JSON. Using MongoDB with Node.js and Express also allowed the application to retrieve and modify trip information through API requests.



\## Functionality



JSON and JavaScript are related but serve different purposes. JavaScript is a programming language that can contain variables, functions, logic, and other programming features. JSON is a data format used to represent and transfer structured information. In the Travlr Getaways application, JSON helped connect the frontend and backend because the frontend could send requests to the API and receive trip information from the backend in JSON format. The Angular application could then use that information to display and modify trip data.



Throughout the full stack development process, I refactored code to improve organization and efficiency. One example was separating functionality into routes, controllers, models, and services rather than keeping everything in one location. I also used reusable Angular UI components such as the trip card and navigation bar. Reusable components reduce duplicate code and make the application easier to update and maintain. If a change needs to be made to a shared component, it can be made in one location instead of changing the same code on multiple pages.



Another important improvement was adding an authentication service and HTTP interceptor to the Angular application. The authentication service handled login information and JSON Web Tokens, while the interceptor automatically attached the authentication token to protected API requests. This improved both organization and security because authentication logic did not have to be repeated for every request.



\## Testing



A full stack application uses different HTTP methods depending on what action needs to be performed. GET requests retrieve information, POST requests create new information, PUT requests update existing information, and DELETE requests remove information. Endpoints are the specific API locations where these requests are sent. In Travlr Getaways, API endpoints were used to retrieve trips and allow authorized administrators to add, edit, or delete trip information.



I tested the API endpoints with Postman to verify that requests produced the expected results. Testing became more complicated after security was added because protected endpoints required a valid authentication token. I first had to register or log in a user to receive a JSON Web Token and then include that token when sending protected POST, PUT, and DELETE requests. This demonstrated how authentication adds another layer that must be considered when testing a full stack application.



Security is especially important for the administrative side of the application because customers should not be able to modify travel packages. The final application used login authentication and JWTs to protect administrative functions. The Angular interface also hid options such as adding, editing, or deleting trips when a user was not authenticated. However, protecting the API endpoints themselves was important because hiding buttons in the frontend alone would not prevent unauthorized API requests.



\## Reflection



This course helped me move closer to my professional goal of working in software development by giving me experience developing an application that combines a frontend, backend, database, API, and security features. Before completing this project, I had worked with several programming languages and technologies individually, but this course helped me better understand how the different parts of a full stack application communicate and work together.



Some of the most valuable skills I developed were working with Node.js, Express, Angular, MongoDB, REST APIs, JSON, authentication, and JSON Web Tokens. I also became more comfortable organizing an application using routes, controllers, models, services, and reusable components. Testing API endpoints with Postman and troubleshooting problems across multiple parts of the application also strengthened my debugging and problem-solving skills.



Completing the Travlr Getaways application gave me a project that demonstrates my ability to develop and secure a working full stack web application. These skills will help make me a more marketable candidate for software development positions because I now have practical experience with technologies and development concepts that are commonly used when building modern web applications.

