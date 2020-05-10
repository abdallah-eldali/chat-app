# chat-app
Developing a Chat application by using ReactJS as the front-end and ExpressJS with NodeJS as the back-end, and Sccket.io for the bidirectional communcation between the two.

Currently only the skeleton for the front-end and back-end were created, and trying to figure out how ReactJS works and how to implement socket.io-client in the front-end.

Customized favicon from https://favicon.io/

Will soon use MongoDB as a database to store the room's, messages', and user's information, but for now I'm using a user.js file to simulate a database for testing.

### Bucket List

1. Create an Input and Heading component for the /chat route
2. Implement cookies/sessions for authorization, authentification instead of accessing room through GET request (URL)
3. Implement a POST request instead of GET request in the Login page
4. Implement a database (MongoDB) to store the messages, users, and chat rooms for easy retrieval and insertion 
5. Make it more visually appealing
6. Optimize code
7. (Maybe) use react-redux