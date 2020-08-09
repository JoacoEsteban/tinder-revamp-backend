function listUsers (req, res) {
  res.send('many users')
}

function getUserById (req, res) {
  res.send('single user, ' + req.params.id)
}

module.exports = {
  listUsers,
  getUserById,
}