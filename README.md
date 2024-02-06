# Welcome to flights and search service
## project setup
-clone the project on your local
-execute `npm install` on the same path as of your root directory of the downloaded project
-create a dotenv in root dir and add the following env variable
   - `port=3000`
-Inside the `src/config` folder create a new file `config.json` and then add the following piece of code
```
{
  "development": {
    "username": "yourusername ",
    "password": "yourdbpassword",
    "database": "yourdbname",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```
-once you've added your db as listed above ,go to the src folder from your terminal and execute `npx sequelize db:create`