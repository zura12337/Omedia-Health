export default function () {
  let storageProfileString = localStorage.getItem("data");
  let meal = JSON.parse(storageProfileString);
  return meal;
}
