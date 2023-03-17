# quizio-api

create questions and quiz rooms based on said questions

## quiz routes

| Route | Description |
|--------------|-------------|
| GET /q | return stored questions |
| GET /q/:id | return question by id |
| DELETE /q/:id | return question by id |
| POST /q/new {question details in body} | create a new question |

## quiz room routes

| Route | Description |
|--------------|-------------|
| POST /r/new {questions in body} | create a new quiz room |
| GET /r/all | return the data associated to all quiz rooms -- TEST |
| GET /r/:id | return the data associated to a existing quiz room |
| DELETE /r/:id | delete a existing quiz room |