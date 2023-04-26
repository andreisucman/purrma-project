export function getUTCstring(unixTimestamp) {
  // Create a new Date object with the timestamp value in milliseconds
  const date = new Date(unixTimestamp * 1000);

  // Extract the components of the date
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Add leading zero for single-digit months
  const day = String(date.getUTCDate()).padStart(2, "0"); // Add leading zero for single-digit days
  const hours = String(date.getUTCHours()).padStart(2, "0"); // Add leading zero for single-digit hours
  const minutes = String(date.getUTCMinutes()).padStart(2, "0"); // Add leading zero for single-digit minutes
  const seconds = String(date.getUTCSeconds()).padStart(2, "0"); // Add leading zero for single-digit seconds
  const milliseconds = String(date.getUTCMilliseconds()).padStart(3, "0"); // Add leading zeros for milliseconds

  // Format the date string in the desired format
  const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}Z`;

  return formattedDate;
}
