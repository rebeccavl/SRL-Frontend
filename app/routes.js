const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (comMod) => (componentModule) => {
  comMod(null, componentModule.default);
};

export default function createRoutes() {

  return [
      {
       path: '/',
       name: 'Home',
       getComponent(nextState, comMod) {
         import('containers/Home')
           .then(loadModule(comMod))
           .catch(errorLoading);
       },
     },
     {
       path: '/CategoryDashboard',
       name: 'CategoryDashboard',
       getComponent(nextState, cb) {
         import('containers/Category')
           .then(loadModule(cb))
           .catch(errorLoading);
       },
     },
     {
       path: '/SignUp',
       name: 'SignUp',
       getComponent(nextState, cb) {
         import('containers/SignUp')
           .then(loadModule(cb))
           .catch(errorLoading);
       },
     },
     {
       path: '/SignIn',
       name: 'SignIn',
       getComponent(nextState, cb) {
         import('containers/SignIn')
           .then(loadModule(cb))
           .catch(errorLoading);
       },
     },
     {
      path: '*',
      name: 'notfound',
      getComponent(nextState, comMod) {
        import('containers/NotFoundPage')
          .then(loadModule(comMod))
          .catch(errorLoading);
      },
    },
  ];
}
