export default function (item) {
  let storageProfileString = localStorage.getItem(item);
  let activity = JSON.parse(storageProfileString);
  return activity;
}
