"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hello = void 0;
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
class Hello {
    static user(user = 'lazuee') {
        Hello.___user = user;
        return Hello;
    }
    static say() {
        return `Hello ${Hello.___user}`;
    }
}
exports.Hello = Hello;
Hello.___user = '';
