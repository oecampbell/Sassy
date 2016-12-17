import { SassyPage } from './app.po';

describe('sassy App', function() {
  let page: SassyPage;

  beforeEach(() => {
    page = new SassyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
