import { SzumilasCMSPage } from './app.po';

describe('szumilas-cms App', () => {
  let page: SzumilasCMSPage;

  beforeEach(() => {
    page = new SzumilasCMSPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
