class Github {
  constructor() {
    this.clientId = '1303c0eed8fa00ca296e';
    this.clientSecret = '531ba580f3b702836c3991df56d729be89705602';
    this.reposCount = 5;
    this.reposSort = 'created:asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);
    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.reposCount}&sort=${this.reposSort}&client_id=${this.clientId}&client_secret=${this.clientSecret}`);
    const profile = await profileResponse.json();
    const repos = await reposResponse.json();
    return {
      profile,
      repos
    }
  }
}
