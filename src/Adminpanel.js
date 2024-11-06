// // src/AdminPanel.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
// import UserList from './User List'; // Import the new UserList component
// import MapComponent from './MapComponent';

// function AdminPanel() {
//   return (
//     <Router>
//       <div className="flex h-screen">
//         <div className="w-64 bg-gray-200 p-4">
//           <h2 className="text-lg font-bold mb-4">Admin Panel</h2>
//           <ul>
//             <li className="mb-2">
//               <Link to="/dashboard" className="text-gray-600 hover:text-gray-900">Dashboard</Link>
//             </li>
//             <li className="mb-2">
//               <Link to="/users" className="text-gray-600 hover:text-gray-900">Users</Link>
//             </li>
//             <li className="mb-2">
//               <Link to="/settings" className="text-gray-600 hover:text-gray-900">Settings</Link>
//             </li>
//             <li className="mb-2">
//               <Link to="/map" className="text-gray-600 hover:text-gray-900">Map</Link>
//             </li>
//             <li className="mb-2">
//               <Link to="/user-list" className="text-gray-600 hover:text-gray-900">User  List</Link>
//             </li>
//           </ul>
//         </div>
//         <div className="flex-1 p-4">
//           <Switch>
//             {/* <Route path="/dashboard" component={Dashboard} />
//             <Route path="/users" component={ Users} />
//             <Route path="/settings" component={Settings} />
//             <Route path="/map" component={MapComponent} />
//             <Route path="/user-list" component={UserList} /> {/* Add the new route */}
//             {/* <Route path="/" exact component={Dashboard} /> */} 
//           </Switch>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default AdminPanel;