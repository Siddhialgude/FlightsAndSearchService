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
    -once you've added your db as listed above ,go to the src folder from your terminal and execute 
  `npx sequelize db:create`

    and then execute

   `npx sequelize db:migrate`
```
## DB Design 
  - Airplane
  - Flight
  - Airport
  - City

  -A Flight belongs to an airplane but one airplane can be used in multiple flights
  -A city has many airports but an airport belongs to one city
  -one airport can have many flights,but flight belongs to one airport

##Tables

### City->id , name, created_at ,updated_at
### Airport->id , name,  Address, city_id, created_at ,updated_at
    Relationship -> City has many airports and Airport belongs to a city (one to many)