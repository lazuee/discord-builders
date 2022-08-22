// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class Hello {
  private static ___user = '';

  static user(user = 'lazuee'): typeof Hello {
    Hello.___user = user;
    return Hello;
  }

  static say(): string {
    return `Hello ${Hello.___user}`;
  }
}
