const { SQLiteDatabase } = require('./database');

const dbWrapper = new SQLiteDatabase(`${__dirname}/db/elections.db`, false);

if (dbWrapper.isOpen) {
	
	dbWrapper.execute(db => {
		db.prepare("DELETE FROM elections WHERE lastUsed < datetime('now', '-1 day', 'localtime')").run();
	});
	
}

process.exit();