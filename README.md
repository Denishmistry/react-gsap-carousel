# carousel

Smooth on mouse hover slider screen

## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files using the command line](https://docs.gitlab.com/ee/gitlab-basics/add-file.html#add-a-file-using-the-command-line) or push an existing Git repository with the following command:

```
cd existing_repo
git remote add origin https://gitlab.com/denish.mistry/carousel.git
git branch -M main
git push -uf origin main
```

## Integrate with your tools

- [ ] [Set up project integrations](https://gitlab.com/denish.mistry/carousel/-/settings/integrations)

## Collaborate with your team

- [ ] [Invite team members and collaborators](https://docs.gitlab.com/ee/user/project/members/)
- [ ] [Create a new merge request](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)
- [ ] [Automatically close issues from merge requests](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#closing-issues-automatically)
- [ ] [Enable merge request approvals](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/)
- [ ] [Automatically merge when pipeline succeeds](https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html)

## Test and Deploy

Use the built-in continuous integration in GitLab.

- [ ] [Get started with GitLab CI/CD](https://docs.gitlab.com/ee/ci/quick_start/index.html)
- [ ] [Analyze your code for known vulnerabilities with Static Application Security Testing(SAST)](https://docs.gitlab.com/ee/user/application_security/sast/)
- [ ] [Deploy to Kubernetes, Amazon EC2, or Amazon ECS using Auto Deploy](https://docs.gitlab.com/ee/topics/autodevops/requirements.html)
- [ ] [Use pull-based deployments for improved Kubernetes management](https://docs.gitlab.com/ee/user/clusters/agent/)
- [ ] [Set up protected environments](https://docs.gitlab.com/ee/ci/environments/protected_environments.html)

***

# Editing this README

When you're ready to make this README your own, just edit this file and use the handy template below (or feel free to structure it however you want - this is just a starting point!). Thank you to [makeareadme.com](https://www.makeareadme.com/) for this template.

## Suggestions for a good README
Every project is different, so consider which of these sections apply to yours. The sections used in the template are suggestions for most open source projects. Also keep in mind that while a README can be too long and detailed, too long is better than too short. If you think your README is too long, consider utilizing another form of documentation rather than cutting out information.

## Name
Choose a self-explaining name for your project.

## Description
Let people know what your project can do specifically. Provide context and add a link to any reference visitors might be unfamiliar with. A list of Features or a Background subsection can also be added here. If there are alternatives to your project, this is a good place to list differentiating factors.

## Badges
On some READMEs, you may see small images that convey metadata, such as whether or not all the tests are passing for the project. You can use Shields to add some to your README. Many services also have instructions for adding a badge.

## Visuals
Depending on what you are making, it can be a good idea to include screenshots or even a video (you'll frequently see GIFs rather than actual videos). Tools like ttygif can help, but check out Asciinema for a more sophisticated method.

## Installation
Within a particular ecosystem, there may be a common way of installing things, such as using Yarn, NuGet, or Homebrew. However, consider the possibility that whoever is reading your README is a novice and would like more guidance. Listing specific steps helps remove ambiguity and gets people to using your project as quickly as possible. If it only runs in a specific context like a particular programming language version or operating system or has dependencies that have to be installed manually, also add a Requirements subsection.

## Usage
Use examples liberally, and show the expected output if you can. It's helpful to have inline the smallest example of usage that you can demonstrate, while providing links to more sophisticated examples if they are too long to reasonably include in the README.

## Support
Tell people where they can go to for help. It can be any combination of an issue tracker, a chat room, an email address, etc.

## Roadmap
If you have ideas for releases in the future, it is a good idea to list them in the README.

## Contributing
State if you are open to contributions and what your requirements are for accepting them.

For people who want to make changes to your project, it's helpful to have some documentation on how to get started. Perhaps there is a script that they should run or some environment variables that they need to set. Make these steps explicit. These instructions could also be useful to your future self.

You can also document commands to lint the code or run tests. These steps help to ensure high code quality and reduce the likelihood that the changes inadvertently break something. Having instructions for running tests is especially helpful if it requires external setup, such as starting a Selenium server for testing in a browser.

## Authors and acknowledgment
Show your appreciation to those who have contributed to the project.

## License
For open source projects, say how it is licensed.

## Project status
If you have run out of energy or time for your project, put a note at the top of the README saying that development has slowed down or stopped completely. Someone may choose to fork your project or volunteer to step in as a maintainer or owner, allowing your project to keep going. You can also make an explicit request for maintainers.




# React front setup (React.js + Next.js)

This project set up is a must-have for server side rendering web applications, this setup provide default SSR intigration with bootstrap and Scss configuration, user can use this projects increse the performance of application and SEO perpose

## Getting Started
A react front setup devloped in below  environment

| Name | Description | virsion | Required/Optional |
| :---: | :---: | :---: | :---: |
| `Node` | The node.js is used to run our React.js application on the server environment. | `v14.15.4` | Required |
| `Npm ` | npm is the package manager for the Node JavaScript platform. | `6.14.10` | Required |
| `Next` | This package  used for server side randering in react.js  | `10.0.7` | Required |
| `React` | React. js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications.  | `17.0.2` | Required |
| `Redux` | Redux is a state management tool for javascript library. | `3.6.0` | Required |

### Installing

Please before start the project on follow the below command  to install all node.js dependencies
Using NPM - Node Package Manager

```
npm install
```
Using Yarn - Yarn Package Manager

```
yarn install
```

End with an example of getting some data out of the system or using it for a little demo

## Deployment

Please follow the below command to run the project in different environments

### Development environment

Below command use for run the project in local development environments.
```
npm run dev || yarn dev
```
and for the server in development environments use below

```
npm run build || yarn build
```

```
npm run start || yarn start
```

### Staging environment

Below command use for run the project in staging environments.
```
npm run build:stag || yarn build:stag
```
```
npm run start:stag || yarn start:stag
```
### Production environment

Below command use for run the project in production environments.
```
npm run build:prod || yarn build:prod
```
```
npm run start:prod || yarn start:prod
```

## Folder structure
 We used below directory structure in our react front project.
```
reactjs_front
    ├── api
    │       ├── routes.js
    │       └──  index.js
    ├── components
    │       ├── header
    │       │       └──  index.js
    │       ├── footer
    │       │       └──  index.js
    │       ├── layout
    │       │       └──  index.js
    │       └── meta-tags
    │       │       └──  index.js
    ├── config
    │       └──  index.js
    ├── pages
    │       ├── about
    │       │       └──  index.js
    │       ├── home
    │       │       └──  index.js
    │       ├── _app.js
    │       ├── _document.js
    │       ├── _error.js
    │       ├── 404.js
    │       └──  index.js
    ├── public
    │       ├── assets
    │       │       ├── fonts
    │       │       ├── images
    │       │       └── scss
                            └──  component/
                            └──  helpers/
    │       │               └──  style.scss (Included bootstrap SCSS here for override variables)
    │       ├── policy.html
    │       ├── robots.txt
    │       └── sitemap.xml
    ├── routes
    │       └── index.js
    ├── store
    │       ├── actions
    │       │       ├── auth.js
    │       │       ├── types.js
    │       │       ├── ui.js
    │       │       ├── user.js
    │       │       └── index.js
    │       ├── reducers
    │       │       ├── ui.js
    │       │       ├── user.js
    │       │       └── index.js
    │       ├── with-redux-store.js
    │       └── index.js
    ├── utils
    │       ├── functions.js
    │       ├── validator.js
    │       └── index.js
    ├── .env.dev
    ├── .env.prod
    ├── .env.stag
    ├── .gitignore
    ├── next.config.js
    ├── package.json
    ├── README.md
    ├── server.js
    └── sonar-project.properties
```
#### Here's a quick overview for folder.
`/api :- `  Api call related functions.

`/components :- ` Independent and reusable bits of code.

`/config :- ` Projects config files.

`/public :-`  It's the root folder that gets dealt by the web server in the end.

`/pages :- ` Its contains all next.js routes pages files.

`/pages/index.js :- `index.js is the traditional and actual entry point for all react apps.

`/pages/App.js :- ` It's used for default intial server side rander our projects code.

`/pages/_document.js.js :- `index.js is the traditional and actual entry point for all react apps.

`/pages/_error.js :- ` It's used for apply design on error page.

`/pages/404.js :- ` It's used for apply design on 404 page.

`/public :- ` Its contains all static files like images, fonts, css, scss, robot.txt, sitemap.xml and etc.

`/public/policy.html :- ` Used fo apply privacy and policy of your projects.

`/public/sitemap.xml :- ` Its contains google crowling releted xmp file data.

`/public/robots.txt :- ` Its contains code releted to allow and disallow your pages for google crowler.

`/routes :- ` This directory contains and allow our pages to view in browser in specific urls.

`/store :- ` Its contains redux methods like action, reducer and store.

`/utils :- ` Javascript related functions, validations and etc.

`.env.dev :-`  Its devlopment environment configuration files for our project.

`.env.stag :-` Its staging environment configuration files for our project.

`.env.prod :-` Its  production environment configuration files for our project.

`.gitignore :-` Git file ignore config files.

`package.json :-` this file holds various metadata relevant to the project.

`next.config.js :-` this file holds next.js configuration relted files.

`README.md :-` It's a set of useful information about a project and a kind of manual.

`server.js :-` Its allow to change react default configuration like change build directory and server port etc.

`sonar-project.properties :-` Its sonarqube (testing tool) configuration files.


## Project configuration
We used below directory structure in our react front projects.
### Scripts
 we need to follow below scripts to ganarate build and run project in different envirements, some script are also used for test our projects.
```json
{
    "dev": "env-cmd -f .env.dev node server.js",
    "build": "env-cmd -f .env.dev next build",
    "build:stag": "env-cmd -f .env.stag next build",
    "build:prod": "env-cmd -f .env.prod next build",
    "start": "env-cmd -f .env.dev node server.js",
    "start:stag": "env-cmd -f .env.stag node server.js",
    "start:prod": "env-cmd -f .env.prod node server.js",
    "sonar": "sonar-scanner"
 }
```
### Dependencies
  We used varios node.js dependencies library in our projects, all library are also listed in below view wiht its virsion.
```json
{
    "@loadable/component": "^5.13.1",
    "aos": "^2.3.4",
    "bootstrap": "^4.6.0",
    "compression": "^1.7.3",
    "cookie-parser": "^1.4.5",
    "cookies": "^0.8.0",
    "env-cmd": "^10.1.0",
    "express": "5.0.0-alpha.8",
    "i": "^0.3.6",
    "isomorphic-unfetch": "^2.1.1",
    "jquery": "^3.5.1",
    "js-cookie": "^2.2.1",
    "net": "^1.0.2",
    "next": "^10.0.7",
    "next-images": "^1.7.0",
    "next-routes": "^1.4.2",
    "nextjs-progressbar": "^0.0.7",
    "npm": "^7.5.3",
    "react": "^17.0.2",
    "react-bootstrap": "^1.4.3",
    "react-dom": "^17.0.2",
    "react-redux": "^5.0.1",
    "react-router-dom": "^5.2.0",
    "redux": "^3.6.0",
    "redux-thunk": "^2.1.0",
    "sass": "^1.32.8",
    "slick-carousel": "^1.8.1",
    "use-react-hooks": "^1.0.7",
    "webpack": "^5.24.2",
    "compression-webpack-plugin": "^2.0.0",
    "cross-env": "^7.0.2",
    "mini-css-extract-plugin": "^0.5.0",
    "optimize-css-assets-webpack-plugin": "^5.0.1",
    "uglifyjs-webpack-plugin": "^2.0.1"
  }
```
## Authors

* **INIC** - *Initial work* - [IndiaNIC Infotech Limited](https://www.indianic.com/)

See also the list of [contributors](http://git.indianic.com/IIL0/I2020-5861/reactjs-front/project_members) who participated in this project.


### Vendor Dependencies
[React Select] : https://www.npmjs.com/package/react-select

[React Slick Slider] : https://www.npmjs.com/package/react-slick (Also install slick-carousel for css and font)

[React OTP Input] : https://www.npmjs.com/package/react-otp-input

[React Multiline Clamp]: https://www.npmjs.com/package/react-multiline-clamp

[React Animated CSS] : https://www.npmjs.com/package/react-animated-css (Required animate.min.css)

[React Star Ratings] : https://www.npmjs.com/package/react-rating-stars-component

[React Rangeslider] : https://www.npmjs.com/package/react-rangeslider

[React DatePicker] : https://www.npmjs.com/package/react-datepicker

[React Number Format] : https://www.npmjs.com/package/react-number-format
