export class App {
  configureRouter(config, router) {
    config.map([
      { route: '', redirect: 'home' },
      { route: 'home', moduleId: 'home', name: 'home' },
      { route: 'swatches', moduleId: 'swatches', name: 'swatches' }
    ]);
  }
}
