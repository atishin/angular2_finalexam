import { Angular2FinalExamPage } from './app.po';

describe('angular2-final-exam App', () => {
  let page: Angular2FinalExamPage;

  beforeEach(() => {
    page = new Angular2FinalExamPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
