export default function () {
  let storageProfileString = localStorage.getItem("data");
  let activity = JSON.parse(storageProfileString);
  return activity;
}
