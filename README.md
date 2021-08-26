## Hipster Messenger ##

WAIT! If you haven't done so yet, go read the file `instructions.pdf` first :)

This project provides both the application's server, under `api_server` and the user interface at `interface`.

On the application, any user with the password `hipster` will be authorized. 

## How to run ##

- First you need to get pipenv up and running to be able to run the server locally, there are plenty
of documentation online on how to do that depending on your operating system, but here is one:

https://pipenv-es.readthedocs.io/es/stable/#install-pipenv-today

- Next, you should install the server dependencies:
```
pipenv install
``` 

- Finally, you spin up the server with:
```
pipenv run python server.py
``` 

- Now install the dependencies of the react UI. You would need both NodeJS and NPM to be installed, 
there is plenty of documentation on how to do that online. From inside the `interface` directory, run:
```
npm install
``` 

- You can run the UI temporary server with:
```
npm start
``` 

- There you go! Just open a browser and go to `https://localhost:3000`

## Running the tests ##

You can run the tests with:
```
pipenv run  nosetests -v --with-coverage --cover-package=api_server --cover-erase --cover-branches
``` 
