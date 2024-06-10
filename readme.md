# Backend / frontend demo

This is demo app for web dev. Backend is in Django, frontend in React. It allows user to set movie and its rating and delete already made reviews.


![Screen image](/doc/images/screen.png "Screen image")



### Setup and run backend
Setup:
```
cd django_backend
pip3 install -r requirements.txt
```

Run:
```
python manage.py runserver
```
Server now runs at [http://127.0.0.1:8000/]( http://127.0.0.1:8000/)

### Setup and run frontend

Run:
```
cd react-frontend
npm run dev
```
Website now runs at [http://localhost:5173/]( http://localhost:5173/)

## Architecture

![Architecture image](/doc/images/architecture.jpg "Architecture")

## Backend

App contains single model:
``` python
class Movie(models.Model):
    movie_title = models.CharField(max_length=100)
    rating = models.IntegerField()
```

Info:
 - Database is local `sqlite`
 - Djagno ORM is used for mapping
 - for REST api `django rest framework` is used

 All migrations are set in local DB uploaded on github, also `superuser` is set, with username: `admin` password: `admin`. 

### API endpoints:

`/movies/` - GET, POST
 - GET - returns json of all movies
 - POST - post new movie to db

`/movies/<id>/` - GET, PUT, DELETE
  - GET - get single item with `<id>`
  - PUT - update single item with `<id>`
  - DELETE - delete single item with `<id>`

`/admin` - Admin console
  - username: `admin` password: `admin`. 

## Frontend
 - Frontend is made in React 
 - Styling is made by custom css
 - Uses some bootstrap icons

