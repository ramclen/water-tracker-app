### Water level application 

This project has been made using React with [bootstrap](https://react-bootstrap.github.io/) and Amazon web services with [serverless framework](https://www.serverless.com/). This project has been made using node 10.

To run the project first you need to run serverless with your serverless account inside AWS directory

``` bash
  cd aws
  serverless login
  serverless deploy
```

After that, if everything runs without errors it is time to execute React application. First change base path in `./client/src/api/aws.js` with the base URL showed on serverless output - You can use mine though.

``` js
const aws = axios.create({
  baseURL: `${YOUR_BASE_URL}`
})
```

Then, go to client directory in your terminal and run `npm start` to execute the React application.

``` bash
  cd ./client
  npm i
  npm start
```
