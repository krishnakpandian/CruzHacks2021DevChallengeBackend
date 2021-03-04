# CruzHacks 2022 Backend Engineering Challenge
## Setup and Installation

`git clone <repo-name>`

`npm install`

Add key.json to the main directory

Add the Following as a .env and get the appropriate firebase credentials and endpoint information.

```  
APIKEY=
AUTHDOMAIN=
DATABASEURL=
PROJECTID=
STORAGEBUCKET=
MESSAGINGSENDERID=
APPID=
MEASUREMENTID=
ALLOWED_SITE=
```

## How to Run
   * Tested with Node v10.15.1
   * Run Server `Nodemon` or `Node index.js`
   * Run Jest Test (Incomplete) `npm test`


## Functionality
* /api/createHacker



* /api/getHackers

* /api/getHacker/:id

* /api/deleteHacker/:id
## Design Improvements
Overall my code quality is fairly clean and I am really happy with how I designed my application. I went and sketched out a design for the frontend and backend design interface. The backend portion of this challenge was fairly straight forward and I didn't have any difficulties implementing anything. The one challenge I did run into was using jest for unit testing each endpoint. I'm not sure why this was occurring but I kept running into a timeout issue where it would hang on the firestore methods. I'm not sure why this was occurring and I could create stubs for them but I think I need more practice with that. I did have a Postman collection set so it wasn't concerned about the edge cases of our application.

My biggest regrets for the backend in terms of design was not including any form of authentication for who can reach the API. I did add some cors restrictions initially but that alone isn't great. What I should have done was add some authentication whether it's firebase or jwt to ensure that our application is secure.

Overall, I'm pretty happy with my code