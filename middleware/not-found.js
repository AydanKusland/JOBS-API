const notFound = (req, res) =>
	res.status(404).send('Route does not exist little fellow')

module.exports = notFound
