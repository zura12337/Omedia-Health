export default function () {
  let storageProfileString = localStorage.getItem("meal");
  let meal = JSON.parse(storageProfileString);
  return meal;
}
