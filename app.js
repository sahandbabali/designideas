let uiuxdesign = {
  tarahi: [
    "وب سایت",
    "فروشگاه اینترنتی",
    "لندینگ پیج",
    "صفحه ادمین",
    "فرم نظرات",
    "صفحه ورود",
  ],
  baraye: [
    "هتل",
    "فروشگاه لاکچری",
    "نمایشگاه اتومبیل",
    "فروشگاه لباس",
    "شرکت طراحی",
  ],
};

let cities = [
  "تهران",
  "تبریز",
  "کرج",
  "مشهد",
  "شیراز",
  "کرمان",
  "خرمشهر",
  "کرمانشاه",
  "زنجان",
];

let template1 = document.getElementById("temp1");
let template2 = document.getElementById("temp2");
let template3 = document.getElementById("temp3");

document.getElementById("newideabutton").addEventListener("click", newidea);

function newidea() {
  template1.innerHTML =
    uiuxdesign.tarahi[Math.floor(Math.random() * uiuxdesign.tarahi.length)];
  template2.innerHTML =
    uiuxdesign.baraye[Math.floor(Math.random() * uiuxdesign.baraye.length)];
  template3.innerHTML = cities[Math.floor(Math.random() * cities.length)];
}
newidea();
