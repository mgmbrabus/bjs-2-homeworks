function compareArrays(arr1, arr2) {
  return (
    arr1.length === arr2.length &&
    arr1.every((item, index) => item === arr2[index])
  );
}

function getUsersNamesInAgeRange(users, gender) {
  const filteredUsers = users.filter((user) => user.gender === gender);

  if (filteredUsers.length === 0) {
    return 0;
  }

  const totalAge = filteredUsers
    .map((user) => user.age)
    .reduce((acc, age) => acc + age, 0);

  return totalAge / filteredUsers.length;
}
