export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const monthOptions = monthNames.map((item) => ({
  value: item,
  label: item,
}));

export const genders = ["Male", "Female", "Others"];
export const genderOptions = genders.map((item) => ({
  label: item.toLocaleLowerCase(),
  value: item,
}));

export const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export const bloodGroupsOptions = bloodGroups.map((item) => ({
  label: item,
  value: item,
}));
