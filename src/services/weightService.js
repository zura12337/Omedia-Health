export default function () {
  let storageProfileString = localStorage.getItem("weight");
  let weight = JSON.parse(storageProfileString);
  return weight;
}
