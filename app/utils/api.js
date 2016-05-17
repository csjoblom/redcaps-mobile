export function postReport(report) {
  const apiKey = '031yxhmIDEP1qBZ3lvaH';
  const url = 'http://www.downtowneugene.com/wp-json/wp_red_caps/v1/incidents';
  const headers = {
    'Apikey': apiKey,
    'Created': report.created || 0,
    'Updated': report.updated || 0,
    'Incidenttype': report.incident || '',
    'Incidentyseverity': report.severity || '',
    'Latitude': report.lat || 0,
    'Longitude': report.lng || 0,
    'Businessname': report.businessName || '',
    'Businessaddress': report.businessAddress || '',
    'Policecontacted': report.policeContacted || 0,
    'Primarycontact': report.primaryContact || '',
    'Primaryphone': report.primaryPhone || '',
    'Primaryemail': report.primaryEmail || '',
    'Note': report.note || '',
    'Tos': report.tos ? 1 : 0
  };
  return fetch(url, {
    method: 'POST',
    headers: headers
  })
  .then((response) => response.text())
  .then((responseText) => {
    console.log(responseText);
  })
  .catch((error) => {
    console.warn(error);
  });
}
