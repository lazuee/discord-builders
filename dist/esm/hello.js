// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class Hello {
    static { this.___user = ''; }
    static user(user = 'lazuee') {
        Hello.___user = user;
        return Hello;
    }
    static say() {
        return `Hello ${Hello.___user}`;
    }
}
