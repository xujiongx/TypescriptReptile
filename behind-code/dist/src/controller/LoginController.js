"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: your name
 * @Date: 2020-09-04 13:35:29
 * @LastEditTime: 2020-09-06 15:56:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\30使用装饰器express改良\src\controller\LoginController.ts
 */
require("reflect-metadata");
var util_1 = require("../utils/util");
var decorator_1 = require("../decorator");
var LoginController = /** @class */ (function () {
    function LoginController() {
    }
    // @get('/')
    // home(req: RequestWithBody, res: Response): void {
    //   const isLogin = !!(req.session ? req.session.login : false);
    //   if (isLogin) {
    //     res.send(`
    //   <html>
    //   <body>
    //     <a href='/api/getData'>爬取内容</a>
    //     <a href='/api/showData'>读取内容</a>
    //     <a href='/api/logout'>退出</a>
    //   </body>
    //   </html>`);
    //   } else {
    //     res.send(`
    //   <html>
    //   <body>
    //     <form method='post' action='/api/login'>
    //     <input type='password' name='password'/>
    //     <input type="submit" value="提交">
    //     <a href='/api/showData'>读取内容</a>
    //   </body>
    //   </html>`);
    //   }
    // }
    LoginController.prototype.login = function (req, res) {
        var password = req.body.password;
        var isLogin = !!(req.session ? req.session.login : false);
        if (isLogin) {
            res.json(util_1.getResponseData(true));
        }
        else {
            if (password === '123' && req.session) {
                req.session.login = true;
                res.json(util_1.getResponseData(true));
            }
            else {
                res.json(util_1.getResponseData(false, '登陆失败'));
            }
        }
    };
    LoginController.prototype.logout = function (req, res) {
        if (req.session) {
            req.session.login = undefined;
        }
        res.json(util_1.getResponseData(true));
    };
    LoginController.prototype.isLogin = function (req, res) {
        var isLogin = !!(req.session ? req.session.login : false);
        res.json(util_1.getResponseData(isLogin));
    };
    __decorate([
        decorator_1.post('/login'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "login", null);
    __decorate([
        decorator_1.get('/logout'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "logout", null);
    __decorate([
        decorator_1.get('/isLogin'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "isLogin", null);
    LoginController = __decorate([
        decorator_1.controller('/api')
    ], LoginController);
    return LoginController;
}());
exports.default = LoginController;
