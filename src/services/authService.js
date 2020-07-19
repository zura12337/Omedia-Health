export default function () {
  let storageProfileString = localStorage.getItem("user");
  let user = JSON.parse(storageProfileString);
  return user;
}
