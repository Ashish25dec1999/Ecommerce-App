Ecommerce App

A full-stack Ecommerce Management Application built using React.js, Redux Toolkit, Redux Saga, and JSON Server.

The project includes:

User-facing Ecommerce Website
Admin Panel
Product Management
Category Management
Subcategory Management
Brand Management
Testimonial Management
Rich Text Editor Integration
JSON Server API Backend


Tech Stack
Frontend
React.js
Redux Toolkit
Redux Saga
React Router DOM
jQuery
DataTables
Owl Carousel
Swiper


Backend
JSON Server

Other Libraries
Rich Text Editor
Password Validator

Prerequisites
Before running the project, install:

Node.js
Download and install:
https://nodejs.org
Verify installation:
node -v
npm -v


Clone Repository
git clone https://github.com/Ashish25dec1999/Ecommerce-App.git
Move into project directory:
cd Ecommerce-App

Install Dependencies
npm install
This will install all frontend dependencies.

Environment Configuration
Create a .env file in the root directory.

Add:
REACT_APP_SERVER=http://localhost:8000
Important:
Do not add spaces around the "=" sign.
Correct:
REACT_APP_SERVER=http://localhost:8000
Wrong:
REACT_APP_SERVER = http://localhost:8000


JSON Server Setup
This project uses JSON Server as a backend API.
Move to dummy-server folder:
cd dummy-server
Install JSON Server globally if not installed:
npm install -g json-server
Verify installation:
json-server --version

Start Backend Server
Inside dummy-server folder run:
json-server --watch data.json --port 8000
Backend will start at:
http://localhost:8000
Example APIs:
http://localhost:8000/maincategory
http://localhost:8000/subcategory
http://localhost:8000/brand
http://localhost:8000/product
http://localhost:8000/testimonial and so on....

Start React Application
Open another terminal.
Move to project root:
cd Ecommerce-App
Start application:
npm start
Frontend will run at:
http://localhost:3000

Rich Text Editor
The project uses Rich Text Editor for product descriptions.
Editor files are located at:
public/richtexteditor
These files are already included in the repository.
No additional installation is required.

Images and Media
All application images are stored inside:
dummy-server/public
Folders:
brand
maincategory
product
subcategory
testimonial
The JSON data references these images.
Make sure these folders remain unchanged.

Available Scripts
Start Development Server
npm start
Run Tests
npm test
Create Production Build
npm run build
Eject CRA Configuration
npm run eject

Common Issues
API Not Working
Check:
json-server --watch data.json --port 8000 is running.
Images Not Loading
Verify: dummy-server/public contains all image folders.
Rich Text Editor Not Loading
Verify: public/richtexteditor exists and contains:
lang/
plugins/
runtime/
rte.js

Environment Variable Not Working
Restart React after updating .env.
npm start

Author
Ashish Kumar
GitHub:
https://github.com/Ashish25dec1999