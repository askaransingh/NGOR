// // // src/UserList.js
// // import React, { useEffect, useState } from 'react';
// // import { db } from './config/firebase'; // Adjust the path as necessary
// // import { collection, getDocs } from 'firebase/firestore';

// // const UserList = () => {
// //     const [users, setUsers] = useState([]);
// //     const [loading, setLoading] = useState(true);
// //     const [error, setError] = useState('');

// //     useEffect(() => {
// //         const fetchUsers = async () => {
// //             try {
// //                 const userCollection = collection(db, 'users');
// //                 const userSnapshot = await getDocs(userCollection);
// //                 const userList = userSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
// //                 setUsers(userList);
// //             } catch (err) {
// //                 setError('Failed to fetch users');
// //                 console.error('Error fetching users:', err);
// //             } finally {
// //                 setLoading(false);
// //             }
// //         };

// //         fetchUsers();
// //     }, []);

// //     if (loading) return <p>Loading users...</p>;
// //     if (error) return <p>{error}</p>;

// //     return (
// //         <div className="user-list">
// //             <h2 className="text-2xl font-bold mb-4">Registered Users</h2>
// //             <table className="min-w-full border-collapse border border-gray-300">
// //                 <thead>
// //                     <tr>
// //                         <th className="border border-gray-300 p-2">Name</th>
// //                         <th className="border border-gray-300 p-2">Email</th>
// //                         <th className="border border-gray-300 p-2">Phone</th>
// //                         <th className="border border-gray-300 p-2">City</th>
// //                         <th className="border border-gray-300 p-2">State</th>
// //                     </tr>
// //                 </thead>
// //                 <tbody>
// //                     {users.map(user => (
// //                         <tr key={user.id}>
// //                             <td className="border border-gray-300 p-2">{user.displayName}</td>
// //                             <td className="border border-gray-300 p-2">{user.email}</td>
// //                             <td className="border border-gray-300 p-2">{user.phone}</td>
// //                             <td className="border border-gray-300 p-2">{user.city}</td>
// //                             <td className="border border-gray-300 p-2">{user.state}</td>
// //                         </tr>
// //                     ))}
// //                 </tbody>
// //             </table>
// //         </div>
// //     );
// // };

// // export default UserList;


// // src/UserList.js
// import React, { useEffect, useState } from 'react';
// import { db } from './config/firebase'; // Adjust the path as necessary
// import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';

// const UserList = () => {
//     const [users, setUsers] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');
//     const [newUser , setNewUser ] = useState({ displayName: '', email: '', phone: '', city: '', state: '' });

//     useEffect(() => {
//         const fetchUsers = async () => {
//             try {
//                 const userCollection = collection(db, 'users');
//                 const userSnapshot = await getDocs(userCollection);
//                 const userList = userSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//                 setUsers(userList);
//             } catch (err) {
//                 setError('Failed to fetch users');
//                 console.error('Error fetching users:', err);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchUsers();
//     }, []);

//     const handleAddUser  = async () => {
//         try {
//             const userCollection = collection(db, 'users');
//             await addDoc(userCollection, newUser );
//             setNewUser ({ displayName: '', email: '', phone: '', city: '', state: '' }); // Reset form
//             // Re-fetch users after adding
//             fetchUsers();
//         } catch (err) {
//             setError('Failed to add user');
//             console.error('Error adding user:', err);
//         }
//     };

//     const handleDeleteUser  = async (id) => {
//         try {
//             const userDoc = doc(db, 'users', id);
//             await deleteDoc(userDoc);
//             // Re-fetch users after deletion
//             fetchUsers();
//         } catch (err) {
//             setError('Failed to delete user');
//             console.error('Error deleting user:', err);
//         }
//     };

//     if (loading) return <p>Loading users...</p>;
//     if (error) return <p>{error}</p>;

//     return (
//         <div className="user-list">
//             <h2 className="text-2xl font-bold mb-4">Registered Users</h2>

//             {/* Input fields for adding a new user */}
//             <div className="mb-4">
//                 <input
//                     type="text"
//                     placeholder="Name"
//                     value={newUser .displayName}
//                     onChange={(e) => setNewUser ({ ...newUser , displayName: e.target.value })}
//                     className="border p-2 mr-2"
//                 />
//                 <input
//                     type="email"
//                     placeholder="Email"
//                     value={newUser .email}
//                     onChange={(e) => setNewUser ({ ...newUser , email: e.target.value })}
//                     className="border p-2 mr-2"
//                 />
//                 <input
//                     type="text"
//                     placeholder="Phone"
//                     value={newUser .phone}
//                     onChange={(e) => setNewUser ({ ...newUser , phone: e.target.value })}
//                     className="border p-2 mr-2"
//                 />
//                 <input
//                     type="text"
//                     placeholder="City"
//                     value={newUser .city}
//                     onChange={(e) => setNewUser ({ ...newUser , city: e.target.value })}
//                     className="border p-2 mr-2"
//                 />
//                 <input
//                     type="text"
//                     placeholder="State"
//                     value={newUser .state}
//                     onChange={(e) => setNewUser ({ ...newUser , state: e.target.value })}
//                     className="border p-2 mr-2"
//                 />
//                 <button onClick={handleAddUser } className="bg-blue-500 text-white p-2">Add User</button>
//             </div>

//             <table className="min-w-full border-collapse border border-gray-300">
//                 <thead>
//                     <tr>
//                         <th className="border border-gray-300 p-2">Name</th>
//                         <th className="border border-gray-300 p-2">Email</th>
//                         <th className="border border-gray-300 p-2">Phone</th>
//                         <th className="border border-gray-300 p-2">City</th>
//                         <th className="border border-gray-300 p-2">State</th>
//                         <th className="border border-gray-300 p-2">Actions</th>
//                     </tr>
//                 </thead >
//                 <tbody>
//                     {users.map(user => (
//                         <tr key={user.id}>
//                             <td className="border border-gray-300 p-2">{user.displayName}</td>
//                             <td className="border border-gray-300 p-2">{user.email}</td>
//                             <td className="border border-gray-300 p-2">{user.phone}</td>
//                             <td className="border border-gray-300 p-2">{user.city}</td>
//                             <td className="border border-gray-300 p-2">{user.state}</td>
//                             <td className="border border-gray-300 p-2">
//                                 <button onClick={() => handleDeleteUser(user.id)} className="bg-red-500 text-white p-2">Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default UserList;



// src/UserList.js
import React, { useEffect, useState } from 'react';
import { db } from './config/firebase'; // Adjust the path as necessary
import { collection, getDocs, addDoc, deleteDoc, doc, setDoc } from 'firebase/firestore';

const UserList = ({ setEventTitle, setnewsTitle }) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [newUser, setNewUser] = useState({ displayName: '', email: '', phone: '', city: '', state: '' });
    // const [eventTitle, setEventTitle] = useState('');
    const [eventTitle, setEventTitleLocal] = useState('');
    const [newsTitle, setnewsTitleLocal] = useState('');
    // Define the fetchUsers function
    const fetchUsers = async () => {
        setLoading(true); // Set loading state
        try {
            const userCollection = collection(db, 'users');
            const userSnapshot = await getDocs(userCollection);
            const userList = userSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setUsers(userList);
        } catch (err) {
            setError('Failed to fetch users');
            console.error('Error fetching users:', err);
        } finally {
            setLoading(false);
        }
    };

    const fetchEventTitle = async () => {
        // Fetch event title from Firestore
        try {
            const eventDoc = await getDocs(collection(db, 'events'));
            const eventData = eventDoc.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            if (eventData.length > 0) {
                const { title } = eventData[0]; // Assuming you only want the first event
                setEventTitleLocal(title);
                setEventTitle(title); // Update the parent state
            }
        } catch (err) {
            console.error('Error fetching event title:', err);
        }
    };
    const fetchnewsTitle = async () => {
        // Fetch event title from Firestore
        try {
            const eventDoc = await getDocs(collection(db, 'news'));
            const eventData = eventDoc.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            if (eventData.length > 0) {
                const { title } = eventData[0]; // Assuming you only want the first event
                setnewsTitleLocal(title);
                setnewsTitle(title); // Update the parent state
            }
        } catch (err) {
            console.error('Error fetching event title:', err);
        }
    };
 

    useEffect(() => {
        fetchUsers(); // Fetch users on component mount
        fetchEventTitle();
        fetchnewsTitle();
    }, []);

    const handleAddUser = async () => {
        try {
            const userCollection = collection(db, 'users');
            await addDoc(userCollection, newUser);
            setNewUser({ displayName: '', email: '', phone: '', city: '', state: '' }); // Reset form
            fetchUsers(); // Re-fetch users after adding
        } catch (err) {
            setError('Failed to add user');
            console.error('Error adding user:', err);
        }
    };

    const handleDeleteUser = async (id) => {
        try {
            const userDoc = doc(db, 'users', id);
            await deleteDoc(userDoc);
            fetchUsers(); // Re-fetch users after deletion
        } catch (err) {
            setError('Failed to delete user');
            console.error('Error deleting user:', err);
        }
    };


    const handleEventTitleChange = async (e) => {
        const title = e.target.value;
        setEventTitleLocal(title); // Update local state
        setEventTitle(title); // Update the parent state

        try {
            const eventDoc = doc(db, 'events', 'event1'); // Use a specific document name
            await setDoc(eventDoc, { title }); // Add or update event title
        } catch (err) {
            console.error('Error saving event title:', err);
        }
    };



    const handlenewsTitleChange = async (e) => {
        const title = e.target.value;
        setnewsTitleLocal(title); // Update local state
        setnewsTitle(title); // Update the parent state

        try {
            const eventDoc = doc(db, 'news', 'news1'); // Use a specific document name
            await setDoc(eventDoc, { title }); // Add or update event title
        } catch (err) {
            console.error('Error saving news:', err);
        }
    };









    const handleDeleteEventTitle = async () => {
        setEventTitle(''); // Clear the event title
        setEventTitleLocal(''); // Clear local state
        try {
            const eventDoc = doc(db, 'events', 'event1'); // Use the same document name
            await deleteDoc(eventDoc);
        } catch (err) {
            console.error('Error deleting event title:', err);
        }
    };

    const handleDeletenewsTitle = async () => {
        setEventTitle(''); // Clear the event title
        setnewsTitleLocal(''); // Clear local state
        try {
            const eventDoc = doc(db, 'news', 'news2'); // Use the same document name
            await deleteDoc(eventDoc);
        } catch (err) {
            console.error('Error deleting event title:', err);
        }
    };



    const handleAddNews = async () => {
        const newsData = {
            title: newsTitle,
            // Add other fields as necessary
        };

        try {
            const newsCollection = collection(db, 'news');
            await addDoc(newsCollection, newsData);
            console.log('News added successfully');
            // Optionally, refetch the news title or other data here
            setnewsTitle(newsTitle);
            fetchnewsTitle(); // Refetch news title if needed
        } catch (err) {
            console.error('Error adding news:', err);
        }
    };



    if (loading) return <p>Loading users...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="user-list">
            <h2 className="text-2xl font-bold mb-4">Registered Users</h2>

            {/* Input fields for adding a new user */}
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Name"
                    value={newUser.displayName}
                    onChange={(e) => setNewUser({ ...newUser, displayName: e.target.value })}
                    className="border p-2 mr-2"
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={newUser.email}
                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                    className="border p-2 mr-2"
                />
                <input
                    type="text"
                    placeholder="Phone"
                    value={newUser.phone}
                    onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
                    className="border p-2 mr-2"
                />
                <input
                    type="text"
                    placeholder="City"
                    value={newUser.city}
                    onChange={(e) => setNewUser({ ...newUser, city: e.target.value })}
                    className="border p-2 mr-2"
                />
                <input
                    type="text"
                    placeholder="State"
                    value={newUser.state}
                    onChange={(e) => setNewUser({ ...newUser, state: e.target.value })}
                    className="border p-2 mr-2"
                />
                <button onClick={handleAddUser} className="bg-blue-500 text-white p-2">Add User</button>


                <input
                    type="text"
                    placeholder="Enter Upcoming Event Title"
                    value={eventTitle}
                    onChange={handleEventTitleChange} // Update event title on change
                    className="border p-2 mr-2"
                />
                <button onClick={() => console.log(eventTitle)} className="bg-blue-500 text-white p-2">Log Event Title</button>
                <button onClick={handleDeleteEventTitle} className="bg-red-500 text-white p-2">Delete Event Title</button>
            </div>

            <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                    <tr>
                        <th className="border border-gray-300 p-2">Name</th>
                        <th className="border border-gray-300 p-2">Email</th>
                        <th className="border border-gray-300 p-2">Phone</th>
                        <th className="border border-gray-300 p-2">City</th>
                        <th className="border border-gray-300 p-2">State</th>
                        <th className="border border-gray-300 p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td className="border border-gray-300 p-2">{user.displayName}</td>
                            <td className="border border-gray-300 p-2">{user.email}</td>
                            <td className="border border-gray-300 p-2">{user.phone}</td>
                            <td className="border border-gray-300 p-2">{user.city}</td>
                            <td className="border border-gray-300 p-2">{user.state}</td>
                            <td className="border border-gray-300 p-2">
                                <button onClick={() => handleDeleteUser(user.id)} className="bg-red-500 text-white p-2">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>






        </div>
    );
};

export default UserList;