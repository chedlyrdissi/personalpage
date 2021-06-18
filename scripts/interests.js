var interests = [
	new Interest('tennis', 'beginner', null, []),
	new Interest('violin', 'beginner', null, [
			new DescriptiveObjective('play decent music', null)
		]),
	new Interest('cyber security', 'beginner', 'red team', 
		[
			new DescriptiveObjective('OSCP certificate', null),
			new DescriptiveObjective('pawn HTB boxes', null),
			new DescriptiveURL('Hack The Box', 'https://app.hackthebox.eu', 'username: chadow2000'),
			new DescriptiveURL('Try Hack Me', 'https://tryhackme.com', 'username: chadow2000'),
			new DescriptiveAchievement('Coding for Veterans CTF', 'CTF', '03/20/2021', '03/20/2021', null, 'Team: BitsPlease')
		]),
]


function interestInfoView(info) {
	if(info.length === 0)
		return 'No info'

	const dataRows = info.map(function(elem, i) {
			return `<tr>
					<th scope="row">${i}</th>
					<td>${getInfoType(elem)}</th>
					<td>${elem.label}</td>
					<td>${elem.note || ''}</td>
				</tr>`
		});

	return `<table class="table table-hover">
		<thead>
			<tr>
				<th scope="col">#</th>
				<th scope="col"></th>
				<th scope="col">label</th>
				<th scope="col">note</th>
			</tr>
		</thead>
		<tbody>
			${dataRows.join('')}
		</tbody>
	</table>`
}

function interestDescriptionView(description) {
	if(!description)
		return ''

	return `Description: ${description}`
}


function interestsView(interests, accordionid='interestsAccordion') {

	if(interests.length === 0)
		return `<div>No interests</div>`

	const items = interests.map(function({label, level, description, info}, i) {
			return `
			<div class="accordion-item">
				<h2 class="accordion-header" id="heading${i}">
					<button 
						class="accordion-button" 
						type="button" 
						data-bs-toggle="collapse" 
						data-bs-target="#collapse${i}" 
						aria-expanded="true" 
						aria-controls="collapse${i}">
						${label} (${level})
					</button>
				</h2>
				<div 
					id="collapse${i}" 
					class="accordion-collapse collapse" 
					aria-labelledby="heading${i}" 
					data-bs-parent="#${accordionid}">
					<div class="accordion-body">
						<div>
							${interestDescriptionView(description)}
						</div>
						${interestInfoView(info)}
					</div>
				</div>
			</div>`
	})

	return `
	<div class="accordion accordion-flush" id="${accordionid}">
	  	${items.join('')}
	</div>`
}
