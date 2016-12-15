import { TryOutAPage } from './app.po';

describe('try-out-a App', function() {
  let page: TryOutAPage;

  beforeEach(() => {
    page = new TryOutAPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
