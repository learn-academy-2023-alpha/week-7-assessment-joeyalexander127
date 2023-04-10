# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: First of all, your <Student> table will have the foreign key because your <Cohort> table has_many students. Therefore, that tells me that your <Student> table will need a foreign key to Match the ID of the <Cohort> it belongs to. If you were creating a project and this was your DB structore and you forgot your foreign key column in your <Student> table (FEAR NOT RUBY ON RAILS HAS YOUR BACK); you will need to generate a new migration by running $rails g migration add_foreign_key_to_student cohort_id:integer. This will create a migration file and you can add in the file: <add_column :student, cohort_id, integer>and then you will need to run $rails db:migrate this will document and make the changes happen to your <Student> table. Dont ever physically go into your schema and change your table.

Researched answer:

2. Which RESTful routes must always be passed params? Why?

Your answer: GET(when using an show method), POST, PATCH/PUT and DELETE.

Researched answer: POST requests to the create action: When creating a new resource, you must pass parameters to set the initial values for the resource's attributes. PATCH/PUT requests to the update action: When updating an existing resource, you must pass parameters to indicate which attributes to update and their new values. DELETE requests to the destroy action: When deleting a resource, you must pass a parameter to identify which resource to delete.

3. Name three rails generator commands. What is created by each?

Your answer: model, controller and migration. The generate model creates a new table and when generating a model you need to build its structure when generating the model (column name and data type). Controller generates a controller file that is associated with a specific model to handle its CRUD actions. and Generate Migration is used for when you are going to make changes to your DB table that then need to be migrated for for the changes to take place. It also creates a paper trail of your changes.

Researched answer:
- generate model creates a new model file in the app/models directory, along with a migration file in the db/migrate directory that defines the necessary database changes to create the associated table. The model file contains Ruby code that defines the structure and behavior of the model, including any validations, associations, and other methods.

- generate controllercreates a new controller file in the app/controllers directory, along with a set of view files in the app/views directory. The controller file contains Ruby code that defines the actions that the controller will handle, while the view files contain the HTML or other output that will be displayed to the user.

- generate migration creates a new migration file in the db/migrate directory, which is used to make changes to the database schema. The migration file contains Ruby code that defines the necessary changes to the database, such as creating, modifying, or deleting tables or columns.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students 
- index controller method: that returns all students 

action: "POST" location: /students
- create controller method: creates a new instance of student that takes in the pararms to make sure its a valid entry

action: "GET" location: /students/new
- new controller method: that is just for handing the form or the view that the user can interact when entering the info for the new students. DOES NOT TOUCH THE DB TABLE THO.

action: "GET" location: /students/2
- show controller method: it only displays the student with the params[:id] of 2

action: "GET" location: /students/2/edit
 - edit controller method: this controller will need a parameter to know which specific student we will be editting and it handles the view. THIS DOES NOT EDIT THE ACTUAL DB TABLE

action: "PATCH" location: /students/2
- Update controller method: this controller will update the actual database with what placed in the edit HTTP request form AS LONG as it meet the params requirements.

action: "DELETE" location: /students/2
- destroy controller method: the destroy method will remove that specific student with an ID of 2.

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

10 User Stories for TO-DO-LIST Application:
1 As a user i would like to add a task o a to-do-list with title, date, catigory and info about task
2 As a user I would like to be able to edit my task
3 As a user I would like to choose how i list my task; by priority, date etc...
4 As a user i would like to be able to mark a task finished
5 As a user I would like to be able to remove a task completely 
6 As a user i would like to set reminders for a task.
7 As a user i would like to get an alert for all unfinished tasks that have passed the due date
8 As a user I would like to be able to oragnize task by category
9 As a user i would like to have a simple and easy to read styling for my to do list application
10 As a user I would like to recieve kind messages for completeling my task a head of time :) 
