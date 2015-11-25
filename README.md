Angular Captcha Demo - MEAN stack
=================================

AngularJS App that demonstrates a captcha:

```
1. The app is scaffolded using yeoman with bower and grunt
2. Load captcha via $http service - $http.get(locahost:300/captcha)
```

Server:
```
nodemon, express, cors and just.randomstring to
generate the captcha text
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
 git clone git@github.com:gatortim50/Angular-CaptchaDemo.git
 cd Angular-CaptchaDemo/server
 npm install
 npm start

 open new window and ...

 cd Angular-CaptchaDemo/client
 npm install
 bower install

 grunt serve --force
```
