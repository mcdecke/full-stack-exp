//
// exports.seed = function(knex, Promise) {
//   // Deletes ALL existing entries
//   return knex('minidisks').del()
//     .then(function () {
//       // Inserts seed entries
//       return knex('minidisks').insert([
//         {id: 1, title: 'qwer', genre: 'qwerqwer', description: 'qwerqwerqwer'},
//         {id: 2, title: '12341234', genre: '12341234', description: '1234'},
//         {id: 3, title: '123', genre: '123', description: '123'}
//       ])
//       .then(function(){
//         return knex.raw("SELECT setval('minidisks_id_seq', (SELECT MAX(id) FROM minidisks))")
//       });
//     });
// };

exports.seed = function(knex, Promise) {
// Deletes ALL existing entries
return knex('minidisks').del()
 .then(function() {
   // Inserts seed entries
   return knex('minidisks').insert([
     {id: 1, title: 'Black Hole Sun', artist: 'Soundgarden', genre: 'Rock', description: 'Wont ya come', cover_url: 'soundgarden.jpg'},
     {id: 2, title: 'VS', artist: 'Pearl Jam', genre: 'Rock', description: 'Wonderful, captivating, amazing', cover_url: 'https://upload.wikimedia.org/wikipedia/en/f/f9/PearlJam-Vs.jpg'},
     {id: 3, title: 'Exciter', artist: 'Depeche Mode', genre: 'Alternative Goth Pop Punk Rock Core', description: 'Post-consumer society blanketed in a tasty malaise of honey and sadness', cover_url: 'https://upload.wikimedia.org/wikipedia/en/b/b3/Depeche_Mode_-_Exciter.png'}
   ])
   .then(function() {
     // Moves id column (PK) auto-incrementer to correct value after inserts
     return knex.raw("SELECT setval('minidisks_id_seq', (SELECT MAX(id) FROM minidisks));")
   })
 })
}
