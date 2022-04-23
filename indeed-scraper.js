const indeed = require('indeed-scraper');

const queryOptions = {
	host: 'ca.indeed.com',
	query: 'Junior Developer',
	city: 'Nanaimo, BC',
	radius: '100',
	level: '',
	jobType: 'fulltime',
	maxAge: '7',
	sort: 'date',
	limit: 100,
	excludeSponsored: true
};

indeed.query(queryOptions).then(res => {
	console.log(res[1]);
});

