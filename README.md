# Project REST-Rant

REST-Rant is an app where users can review restaurants.

# Routes
| Method | Path | Purpose |
| :---: | :---: | :--- |
| GET | / | Home page |ß
| GET | /places | Places index page |
| POST | /places | Create new places |
| GET | /places/new | Form page for creating a new place |
| GET | /places/:id | Details about a particular place |
| PUT | /places/:id | Update a particular place |
| DELETE | /places/:id/edit | Delete a particular place |
| POST | /places/:id | Create a rant (comment) about a particular place |
| DELETE | /places/:id/rant/:rantid | Delete a rant(comment)about a particular place |
| GET | * | 404 page (matches any route not defined above) |
