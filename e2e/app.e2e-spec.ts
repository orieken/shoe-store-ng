import { ShoeStorePage } from './app.po';

describe('shoe-store App', function() {
  let page: ShoeStorePage;

  beforeEach(() => {
    page = new ShoeStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
