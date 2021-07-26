module.exports = {
	client: 'mysql',
    connection: process.env.db,
	pool: {
		min: 2,
		max: 10
	},
	migrations: {
		tableName: 'knex_migrations'
	}
};