const db = require('../../data/db-config');

module.exports = {
  get,
  getById,
  create,
  update,
  remove,
}

async function get() {
  //onst result = await db.raw('select * from shippers')
  const result = await db('shippers')
  return result
}

async function getById(shipperId) {
//select * from shippers where shipperid = 1
  const [result] = await db('shippers')
                        .where('shipperid', shipperId).first()

  return result
}

async function create(shipper) {
 
  const [shipperId] = await db('shippers').insert('shipper')
  const result = await getById(shipperId)
  return result
}

async function update(shipperId, changes) {
  await db('shippers').update(changes).where('shipperid', shipperId)
  const result = await getById(shipperId)
  return result
}

async function remove(shipperId) {
  const  thing = await db('shippers').del().where('shipperid', shipperId)

  return thing
}
