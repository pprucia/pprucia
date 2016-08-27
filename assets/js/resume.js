function highlightSkillsTableRows(skillsSections) {
	if (skillsSections) {
		var length = skillsSections.length;
		for (var i = 1; i < length ; i+=2) {
			skillsSections[i].className = "highlighted";
		}
	}
}

function countMonths(from, to) {
	if (!(!!from && !!to)) {
		return "";
	}

	var dateFrom = new Date(from);
	var dateTo = new Date(to);

	if (dateFrom == "Invalid Date" && to == "Invalid Date") {
		return "";
	}

	var yearDiff = dateTo.getFullYear() - dateFrom.getFullYear();
	var monthDiff = dateTo.getMonth() - dateFrom.getMonth();
	if (monthDiff < 0) {
		yearDiff--;
		monthDiff += 12;
	}

	var yearPart = getFormatedPart(yearDiff, "year");
	var monthPart = getFormatedPart(monthDiff, "month");
	var text;
	if (yearPart.length > 0 && monthPart.length > 0) {
		text = "(" + yearPart + " and " + monthPart + ")";
	} else if (yearPart.length > 0 || monthPart.length > 0) {
		text = "(" + yearPart + monthPart + ")";
	} else {
		text = "";
	}
	return text;
}

function getFormatedPart(number, type) {
	switch (number) {
		case 0:
			return "";
		case 1:
			return "1 " + type;
		default:
			return number + " " + type +"s";
	}
}