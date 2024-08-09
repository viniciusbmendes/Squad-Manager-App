const classes = [
	'Assassin Cross',
	'Biochemist',
	'Lord Knight',
	'Paladin',
	'Sniper',
	'Ministrel',
	'Gypsy',
	'Mastersmith',
	'High Priest',
	'Champion',
	'Stalker',
	'High Wizard',
	'Professor',
]

const sortedClasses = classes.sort((a, b) => {
	if (a.toLowerCase() > b.toLowerCase()) {
		return 1;
	}
	if (a.toLowerCase() < b.toLowerCase()) {
		return -1;
	}
	return 0;
});

export {
  sortedClasses as classes,
}
