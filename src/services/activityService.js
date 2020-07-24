export default function () {
  let storageProfileString = localStorage.getItem("activity");
  let activity = JSON.parse(storageProfileString);
  return activity;
}
