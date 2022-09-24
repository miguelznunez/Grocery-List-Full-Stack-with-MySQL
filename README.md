In order to get this application to run, you will need to follow these steps.

1. Download the zip folder or clone the repository.
2. Create a MySQL database called grocery_list, then copy, paste, and run the schema I created in the db-schema.txt file.
3. Create a .env file in the root directory and paste the following code inside:
NODE_ENV = development
PORT = 5000
DB_PASSWORD = *YOUR MYSQL PASSWORD*
DB_NAME = grocery_list
4. Run "npm install" on your VS code console to install all of the dependencies.  
5. Run "npm run server" to start the application.
