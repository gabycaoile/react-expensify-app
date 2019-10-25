import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// //child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// //child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnahpshot) => {
//       expenses.push({
//         id: childSnahpshot.key,
//         ...childSnahpshot.val()
//       });
//     });

//     console.log(expenses);
//   });

// database.ref('expenses').on('value', (snapshot)=>{
//   const expenses = [];
//     snapshot.forEach((childSnahpshot) => {
//       expenses.push({
//         id: childSnahpshot.key,
//         ...childSnahpshot.val()
//       });
//     });

//     console.log(expenses);
// }, (e) => {
//   console.log('Error with data fetch', e);
// })

// database.ref('expenses').push({
//   description: 'food',
//   note: '',
//   amount: 60,
//   createdAt: 0
// });

// database.ref('notes/-Lrur6JEivNZ2UXERAym').remove();

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React Native'
// })

// const onValueChange = database.ref().on('value', (snapshot) => {
//   let {name, job} = snapshot.val();
//   console.log(`${name} is a ${job.title} at ${job.company}`); 
// }, (e) => {
//   console.log('Error with data fetch', e);
// })

// const firebaseNotes = {
//   notes: {
//     apidjasf: {
//       title: 'First note',
//       body: 'This is my note'
//     },
//     apoijasdfo: {
//       title: 'Another note',
//       body: 'This is my note'
//     }
//   }
// };

// const notes = [{
//   id: '12',
//   title: 'First note',
//   body: 'This is my note'
// }, {
//   id: '761ase',
//   title: 'Another note',
//   body: 'This is my note'
// }];

// database.ref('notes').set(notes);
// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//   database.ref('age').set(30);
// }, 3500)

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000)

// setTimeout(() => {
//   database.ref('age').set(32);
// }, 10500)

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e)
//   })

// database.ref().set({
//   name:'Gabrielle Caoile',
//   age: 29,
//   stressLevel: 6,
//   job: {
//     title: 'Systems Analyst',
//     company: 'JPL'
//   },
//   location: {
//     city: 'LA',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('Data is saved')
// }).catch((e) => {
//   console.log('This failed', e);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// database.ref()
//   .remove()
//   .then(()=>{
//     console.log('isSingle was removed')
//   }).catch((e) => {
//     console.log('Error', e);
//   })

