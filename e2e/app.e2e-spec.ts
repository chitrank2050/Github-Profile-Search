import { GithubClientPage } from './app.po';

describe('github-client App', () => {
  let page: GithubClientPage;

  beforeEach(() => {
    page = new GithubClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
