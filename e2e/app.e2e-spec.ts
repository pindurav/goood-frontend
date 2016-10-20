import { GooodFrontendPage } from './app.po';

describe('goood-frontend App', function() {
  let page: GooodFrontendPage;

  beforeEach(() => {
    page = new GooodFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
