<p align="center">
  <a href="" rel="noopener">
 <img width=150px height=150px src="https://www.hackyourfuture.dk/static/logo-dark.svg" alt="Project logo"></a>
</p>

<h3 align="center">Final Project for Class 10 - Annotate the Web
</h3>

---

## 📝 Table of Contents

- [About](#about)
- [Project's Calendar](#-projects-calendar)
- [Class Daily Agenda](#-class-daily-agenda-)
- [The Customer](#-the-customer)  
   - [Business Glossary](/BusinessGlossary.md)  
   - [Database Model Diagram](#️-database-model-diagram)
- [Process](#-process-)  
   - [Working with code](#-working-with-code)  
   - [Code best practices](#-code-best-practices)  
   - [Working with GIT](/working-with-git.md)  
   - [Working with Heroku and Deployment](/deployment.md)  
   - [Working Knex and migrations](/knex-and-migrations.md)  
   - [Working with API Documentation - Swagger](#working-with-api-documentation---swagger)  
   - [Working with Storybook](#working-with-storybook)  
   - [Working with AWS - Amazon Services](#working-with-aws---amazon-services)
- [Getting Started](#getting-started)  
   - [Installations](/installations.md)
- [Getting the certificate](/certificate.md)
- [Authors](#authors)
- [License](#license)

## 🧐 About <a name = "about"></a>

Main repository for the final project for Class 10

## ⛏️ Built Using <a name = "built_using"></a>

- [React](https://reactjs.org/) - Web Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [MySQL](https://www.mysql.com/) - Database
- [Express](https://expressjs.com/) - Server Framework - Server and Client side structure
- [Knex](http://knexjs.org/) - Database management
- [Swagger](https://swagger.io/) - API Documentation
- [Storybook](https://storybook.js.org/) - Tool for developing UI components in isolation
- [Prettier](https://prettier.io/) - Code formatter

## 📅 Project's Calendar

The Final Project runs on these dates:

### Class Dates - Classes are held on Hack Your Future

Week01 - 24/11  
Week02 - 01/12  
Week03 - 08/12  
Week04 - 15/12  
Holidays - 22/12  
Holidays - 29/12  
Week05 - 05/01  
Week06 - 12/01  
Week07 - 19/01  
Week08 - 26/01 (graduation)

### Study groups dates - Studygroups are held on CodeArt

5 sessions from 10:00 to 15:00 at Teknikerbyen 5, Virum

Week01 - 26/11  
Week02 - 10/12  
Week03 - 17/12  
Week04 - 14/01  
Week05 - 21/01  
  
At least @Allan and/or @Kseniia will be there with you guys.

## 🕛 Class Daily Agenda 🕓

- 12:00 - 13:30 - ...
- 13:30 - 14:00 - ...
- 14:00 - 14:30 - Lunch
- 14:30 - 16:00 - ...

## 👩🏻‍💼💡👨🏽‍💼 The Customer

This Final Project is made in collaboration with CodeArt.
@Allan and @Kseniia work there and they will help us during this project.

The goal of this project is to replicate this website https://www.annotatetheweb.com/
See the initial inspiration slidedeck about the background for the project: [HERE](CodeArt%20-%20HYF%20Final%20Project.pdf)

#### 💼 Business Glossary

_Add here information about the Business Glossary_
[Business Glossary](/BusinessGlossary.md)

#### 🗄️ Database Model Diagram

Check here the DB Diagram https://dbdiagram.io/d/5ddd225aedf08a25543e6302

<img width=700px height=700x src="/dbdiagram.png"  alt="AWS S3 logo">

- [How to make changes on the diagram](/diagram.md)

## 📈 Process 📉📈

### 💻 Working with code

- ALWAYS run code before a PR is made.
- No committing `console.log`
- No committing merge conflicts!
- Work in separate files! When you make a new feature, the first thing you do is create a new file for that (of course if it makes sense). Especially for components.

### 👍🏽 Code best practices

Follow these best practices for coding: [HERE](https://github.com/HackYourFuture-CPH/curriculum/blob/master/review/review-checklist.md)

This can be used as a checklist for every PR you make. Go through the list and see if you have used all the best practices

### <img width=20px height=20px src="/git-logo.png" alt="GitHub logo"></a> Working with GIT

[Working with GIT](/working-with-git.md)

### <img width=15px height=30px src="/heroku-logo.svg" alt="Heroku logo"></a> Working with Heroku and Deployment

[Working with Heroku and Deployment](/deployment.md)

### <img width=59x height=20px src="/knex-logo.png"  alt="Knex logo"></a> Working with Knex and Migrations

[Working Knex and migrations](/knex-and-migrations.md)

### <img width=25px height=25x src="/swagger-logo.png"  alt="Swagger logo"></a> Working with API Documentation - Swagger

When running the API, you will automatically be running the API Documentation
which is based on Swagger. Just go to
[localhost:3000/api/documentation](http://localhost:3000/api/documentation) to
read the specifications for the API.

You can use your api token to authorize in Swagger and you will be able to
perform test calls against the API directly from Swagger.

If you need to make changes to the specification, this can be done via the
[Swagger.json](/src/server/config/swagger.json) file.

### <img width=20px height=20x src="/storybook.svg"  alt="Storybook logo"></a> Working with Storybook

Tool for developing UI components in isolation

Here is how to get started with storybook:

```
npm run storybook
```

For more information, Check here https://storybook.js.org/

### <img width=30px height=30x src="/aws.svg"  alt="AWS S3 logo"></a><img width=30px height=30x src="/s3.png"  alt="AWS S3 logo"></a> Working with AWS - Amazon Services

AWS is used for uploading files on a AWS S3 bucket. There is a user on the AWS that has `AmazonS3FullAccess`. There is not a AWS root key, but ONLY a key and a secret key for the AWS user.

If you need the key and secret to put into the .env file, write to the project manager of the project.

REMEMBER, this key should be kept super secret!!! NEVER add this to any PR!!

## 🏁 Getting Started

First clone the repo on your local machine using a terminal or a git client.

#### 💾 [Installations](/installations.md)

#### Screenshot service

A webservice has been set up that can take screenshots of a given url. The screenshot will be placed in an Azure blob storage and you'll receive a url to it.
See the swagger documentation: [HERE](https://api.annotatetheweb.com/swagger/).
The idea is that first you call RequestScreenshot with the url (and potentially screen width to take a screenshot in).
In return you get json with a unique key. You can now check using the CheckScreenshot service with the provided key. When the screenshot is ready you'll receive a url to the screenshot image, otherwise you will receive json with an error indicating it's not ready yet.
Be aware, that the screenshot service still has a few problems with some websites - especially those that load content dynamically based on javascript events (like hackyourfuture.dk) so don't expect perfect results from the start.
There is also a method for future use, that will take raw html to render and get a screenshot from that.

#### Design

UI Design can be found [HERE](https://www.figma.com/file/QYeFmfAU7XAaewnskogsxH/Class10-Final-Project-Mockups?node-id=0%3A1)

## 📜 [Getting the HackYourFuture certificate](/certificate.md)

## 👨🏾‍💻 Authors

- [**Shanawaz Islam**](https://github.com/h09shais)

### Other contributions

- [**Benjamin Hughes**](https://github.com/benna100)
- [**Zaki Wasik**](https://github.com/zkwsk/)
- [**Filip Malek**](https://github.com/REX500)
- **Daniel Fernandes**

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
