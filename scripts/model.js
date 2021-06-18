class ViewManager {
	constructor() {

	}
}


class Interest {
	constructor(label, level, description, info) {
		this.label = label;
		this.level = level;
		this.description = description;
		this.info = info;
	}
}


class DescriptiveInfo {
	constructor(label, note) {
		this.label = label;
		this.note = note;
	}
}


class DescriptivePicture extends DescriptiveInfo {
	constructor(label, url, note) {
		super(label, note);
		this.url = url;
	}
}


class DescriptiveObjective extends DescriptiveInfo {
	constructor(label, note) {
		super(label, note);
	}
}


class DescriptiveURL extends DescriptiveInfo {
	constructor(label, url, note) {
		super(label, note);
		this.url = url;
	}
}


class DescriptiveAchievement extends DescriptiveInfo {
	constructor(label, description, startdate, finishdate, url, note) {
		super(label, note);
		this.description = description;
		this.startdate = startdate;
		this.finishdate = finishdate;
		this.url = url;
	}
}


// DescriptivePicture
// DescriptiveObjective
// DescriptiveURL
// DescriptiveAchievement
function getInfoType(infoobj) {
	if(infoobj instanceof DescriptivePicture)
		return "Gallery"

	if(infoobj instanceof DescriptiveObjective)
		return "Objective"

	if(infoobj instanceof DescriptiveURL)
		return "Url"

	if(infoobj instanceof DescriptiveAchievement)
		return "Achievement"

	throw Error("unknown Info type.")
}
