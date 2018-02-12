import { SmsWebPage } from './app.po';

describe('sms-web App', () => {
  let page: SmsWebPage;

  beforeEach(() => {
    page = new SmsWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
