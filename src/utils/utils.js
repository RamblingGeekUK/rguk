/** */
export const getFormattedDate = (date) =>
	date
		? new Date(date).toLocaleDateString('en-gb', {
				year: 'numeric',
				month: 'short',
				day: 'numeric',
		  })
		: '';
