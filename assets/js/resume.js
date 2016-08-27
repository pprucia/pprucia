function highlightSkillsTableRows(skillsSections) {
	if (skillsSections) {
		var length = skillsSections.length;
		for (var i = 1; i < length ; i+=2) {
			skillsSections[i].className = "highlighted";
		}
	}
}

highlightSkillsTableRows($('.skills-table').children('tbody'));
