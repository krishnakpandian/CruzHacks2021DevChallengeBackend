# CruzHacks 2021-2022 Backend Engineering Challenge
## Setup and Installation

`git clone https://github.com/krishnakpandian/CruzHacks2021DevChallengeBackend.git`

This app can be ran with a frontend interface located here.
https://github.com/krishnakpandian/CruzHacks2021DevChallengeFrontend

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
PORT=
```

## How to Run
   * Tested with Node v10.15.1
   * Run Server `Nodemon` or `Node index.js`
   * Run Jest Test (Incomplete) `npm test`


If installation is difficult you can test the endpoints here with 
https://cruzhacks-2021-backend.herokuapp.com

## Functionality
* /api/createHacker

### Request
```
http POST
body: {
    firstName: string,
    lastName: string,
    age: number,
    school: string,
    gender: string,
    major: string,
    email: string,
    whyCruzHacks: string,
    anythingElse: string
}
```

### Response

```
statusCode: 400,
message: Error in Body
```

```
statusCode: 201,
message: Successfully Created User,
id: #id of newly created firestore doc
```

```
statusCode: 501,
message: Server Error
```

* /api/getHackers
### Request
```
HTTP GET
```
### Response

```
statusCode: 200,
message: retrieved all hackers,
count: # of Hackers,
results: array of hackerInfo
```

```
statusCode: 500,
message: Server Error
```

* /api/getHacker/:id
### Request
```
HTTP GET
/:id - document id on firestore
```


### Response

```
statusCode: 200,
message: retrieved all hackers,
count: # of Hackers,
results: array of hackerInfo
```

```
statusCode: 500,
message: Server Error
```


* /api/deleteHacker/:id
### Request
```
HTTP DELETE
/:id - document id on firestore
```

### Response
```
statusCode: 200,
message: Successful Deletion
```

```
statusCode: 500,
message: Server Error
```

## Design Improvements
Overall my code quality is fairly clean and I am really happy with how I designed my application. I  sketched out a design for the frontend and backend design interface. The backend portion of this challenge was fairly straight forward and I didn't have any difficulties implementing anything. The one challenge I did run into was using jest for unit testing each endpoint. I'm not sure why this was occurring but I kept running into a timeout issue where it would hang on the firestore methods. I'm not sure why this was occurring and I could create stubs for them but I think I need more practice with that. I did have a Postman collection set so I wasn't concerned about the edge cases of our application.

My biggest regrets for the backend in terms of design was not including any form of authentication for who can reach the API. I did add some cors restrictions initially but that alone isn't great. What I should have done was added some token authentication whether it's firebase or jwt to ensure that our application is secure. 

Overall, I'm pretty happy with my code and I hope I can join the CruzHacks development team!