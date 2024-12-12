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
