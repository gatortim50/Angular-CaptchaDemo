Angular Captcha Demo - MEAN stack
=================================

AngularJS App that demonstrates a captcha:

```
1. The app is scaffolded using yeoman with bower and grunt
2. Load captcha via $http service - $http.get(server:port/captcha)
```

Server:
```
uses node or even better nodemon and express with cors
setup to run by default on: Back End Server running at localhost:3000
the server will serve up the captcha json
```

Client:
```
Configuration in app.js

```


Services
```
  captchaSvc.js - service call to the node.js server
```

Controllers
```
  captchaCtrl.js - parent controller
  captchaFormCtrl.js  - form data, submit request for new captcha
```

Views
```
  captcha.html - shell page containing the other views using ng-include
  captchaForm.html - the captcha form
  navbarHeader.html - bootstrap banner  
  
 
```

Directives
```
  navbar.js - serves up navbarHeader.html - bootstrap banner  
```
 
Steps to Run Project (assumes you have nodejs installed)
 
```
 git clone git@github.com:gatortim50/CaptchaDemo.git
 cd CaptchaDemo/server 
 npm install
 node server.js
 
 open new window and ...
 
 cd CaptchaDemo/client
 npm install
 bower install
 grunt serve 
 or 
 grunt serve --force
```