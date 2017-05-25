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
       path: '/Store',
       name: 'Store',
       getComponent(nextState, comMod) {
         import('containers/Store')
           .then(loadModule(comMod))
           .catch(errorLoading);
       },
     },
     
     {
       path: '/SignUp',
       name: 'SignUp',
       getComponent(nextState, comMod) {
         import('containers/SignUp')
           .then(loadModule(comMod))
           .catch(errorLoading);
       },
     },

     {
       path: '/SignIn',
       name: 'SignIn',
       getComponent(nextState, comMod) {
         import('containers/SignIn')
           .then(loadModule(comMod))
           .catch(errorLoading);
       },
     },

     {
       path: '/StoreDashboard',
       name: 'StoreDashboard',
       getComponent(nextState, comMod) {
         import('containers/StoreDashboard')
           .then(loadModule(comMod))
           .catch(errorLoading);
       },
     },

     {
       path: '/editCategory',
       name: 'editCategory',
       getComponent(nextState, comMod) {
         import('containers/editCategory')
           .then(loadModule(comMod))
           .catch(errorLoading);
       },
     },

     {
       path: '/editProduct',
       name: 'editProduct',
       getComponent(nextState, comMod) {
         import('containers/editProduct')
           .then(loadModule(comMod))
           .catch(errorLoading);
       },
     },

     {
       path: '/newCategory',
       name: 'newCategory',
       getComponent(nextState, comMod) {
         import('containers/newCategory')
           .then(loadModule(comMod))
           .catch(errorLoading);
       },
     },

     {
       path: '/newProduct',
       name: 'newProduct',
       getComponent(nextState, comMod) {
         import('containers/newProduct')
           .then(loadModule(comMod))
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
