
export { default as Home } from './Home';
export { default as Mine } from './Mine';
export { default as Search } from './Search';

// import React from 'react';
// import { render } from 'react-dom';
// import { Home, Mine, Search } from './screens';
//
// const Index = ({ pathname }) => {
//   switch(pathname) {
//     case "/search":
//       return <Search />;
//     case "/mine":
//       return <Mine />;
//     default:
//       return <Home />;
//   }
// };
//
// let pathname = window.location.pathname;
//
// render(<Index pathname={pathname} />, document.getElementById("root"));
//
//  window.addEventListener("popstate", () => {
//   pathname = window.location.pathname;
// });
//
// const route = (WrappedComponent, routes) => {
//   return class extends React.Component {
//     render() {
//       const ComponentForPathname = routes[this.props.pathname];
//       return (
//         <WrappedComponent>
//           <ComponentForPathname {...this.props} />
//         </WrappedComponent>
//       );
//     }
//   };
// };
