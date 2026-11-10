/** Formatiert ein Datum im österreichischen Format, z. B. „15. Jänner 2026“. */
export function formatDate(date: Date): string {
	return date.toLocaleDateString('de-AT', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
		timeZone: 'Europe/Vienna',
	});
}
