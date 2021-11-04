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

let template1 = document.getElementById("temp1");
let template2 = document.getElementById("temp2");

document.getElementById("newideabutton").addEventListener("click", newidea);

function newidea() {
  template1.innerHTML =
    uiuxdesign.tarahi[Math.floor(Math.random() * uiuxdesign.tarahi.length)];
  template2.innerHTML =
    uiuxdesign.baraye[Math.floor(Math.random() * uiuxdesign.baraye.length)];
}
newidea();
