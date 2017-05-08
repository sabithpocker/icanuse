import { IcanusePage } from './app.po';

describe('icanuse App', () => {
  let page: IcanusePage;

  beforeEach(() => {
    page = new IcanusePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
