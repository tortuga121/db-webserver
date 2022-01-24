const db = require('./db');
const config = require('../config');

async function getAll(){
  const rows = await db.query(
    `SELECT *
    FROM category`
  );
  return rows;
}

async function create(name,administrator){
  const result = await db.query(
    `INSERT INTO user 
    VALUES 
    (?,?,?,?)`,
    [
      name, administrator
    ]
  );

  let message = 'Error in creating location';

  if (result.affectedRows) {
    message = 'location created successfully';
  }

  return {message};
}

// async function update(id, programmingLanguage){
//   const result = await db.query(
//     `UPDATE programming_languages 
//     SET name=?, released_year=?, githut_rank=?, 
//     pypl_rank=?, tiobe_rank=? 
//     WHERE id=?`, 
//     [
//       programmingLanguage.name, programmingLanguage.released_year,
//       programmingLanguage.githut_rank, programmingLanguage.pypl_rank,
//       programmingLanguage.tiobe_rank, id
//     ]
//   );

//   let message = 'Error in updating programming language';

//   if (result.affectedRows) {
//     message = 'Programming language updated successfully';
//   }

//   return {message};
// }

// async function remove(id){
//   const result = await db.query(
//     `DELETE FROM programming_languages WHERE id=?`, 
//     [id]
//   );

//   let message = 'Error in deleting programming language';

//   if (result.affectedRows) {
//     message = 'Programming language deleted successfully';
//   }

//   return {message};
// }

module.exports = {
  getAll,
  create,
  // update,
  // remove
}
