export function calculateAge(dob) {
  const birthDate = new Date(dob);
  const today = new Date(); // Get current date
  let age = today.getFullYear() - birthDate.getFullYear(); // Calculate difference in years
  const monthDiff = today.getMonth() - birthDate.getMonth(); // Check month difference

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

export function formatDate(dateString) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0"); // Ensures 2-digit day (e.g., 01, 02, 12)
  const month = date.toLocaleString("en-US", { month: "short" }); // Gets short month (Jan, Feb, Dec, etc.)
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}
