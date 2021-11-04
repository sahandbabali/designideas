let uiuxdesign = {
  tarahi: [
    "وب سایت",
    "فروشگاه اینترنتی",
    "لندینگ پیج",
    "صفحه ادمین",
    "فرم نظرات",
    "صفحه ورود",

    "صفحه تنظیمات",
    "یک محصول دیجیتالی",
    "صفحه ثبت نام",
    "رابط واقعیت مجازی",
    "رابط واقعیت افزوده",
    "دیزاین سیستم",

    "فرم تماس",
    "روند ثبت نام",
    "صفحه درباره ما",
    "صفحه پروفایل",
    "وایرفریم",
    "مودال ارور",

    "بنر",
    "روند خرید",
    "صفحه پرداخت",
    "بازی موبایل",
  ],
  baraye: [
    "هتل",
    "فروشگاه لاکچری",
    "نمایشگاه اتومبیل",
    "فروشگاه لباس",
    "شرکت طراحی",

    "یک استارت اپ",
    "رستوران",
    "فست فود",
    "کافی شاپ",
    "باشگاه",

    "دانشگاه",
    "آموزشگاه",
    "موسسه وکالت",
    "مرکز درمانی",
    "وب سایت موسیقی",

    "آموزشگاه زبان",
    "باغ وحش",
    "آزمایشگاه",
    "کبابی",
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

let lock1 = false;
let lock2 = false;
let lock3 = false;

document.getElementById("newideabutton").addEventListener("click", newidea);

// locking functionality

document.getElementById("lock1").addEventListener("click", function () {
  if (lock1 == false) {
    lock1 = true;
    document.getElementById("lock1").classList.add("fa-lock");

    document.getElementById("lock1").classList.remove("fa-lock-open");
  } else if (lock1 == true) {
    lock1 = false;
    document.getElementById("lock1").classList.add("fa-lock-open");

    document.getElementById("lock1").classList.remove("fa-lock");
  }
});

document.getElementById("lock2").addEventListener("click", function () {
  if (lock2 == false) {
    lock2 = true;
    document.getElementById("lock2").classList.add("fa-lock");

    document.getElementById("lock2").classList.remove("fa-lock-open");
  } else if (lock2 == true) {
    lock2 = false;
    document.getElementById("lock2").classList.add("fa-lock-open");

    document.getElementById("lock2").classList.remove("fa-lock");
  }
});

document.getElementById("lock3").addEventListener("click", function () {
  if (lock3 == false) {
    lock3 = true;
    document.getElementById("lock3").classList.add("fa-lock");

    document.getElementById("lock3").classList.remove("fa-lock-open");
  } else if (lock3 == true) {
    lock3 = false;
    document.getElementById("lock3").classList.add("fa-lock-open");

    document.getElementById("lock3").classList.remove("fa-lock");
  }
});

// locking functionality end

function newidea() {
  if (lock1 == false) {
    template1.innerHTML =
      uiuxdesign.tarahi[Math.floor(Math.random() * uiuxdesign.tarahi.length)];
  }

  if (lock2 == false) {
    template2.innerHTML =
      uiuxdesign.baraye[Math.floor(Math.random() * uiuxdesign.baraye.length)];
  }

  if (lock3 == false) {
    template3.innerHTML = cities[Math.floor(Math.random() * cities.length)];
  }
}
newidea();
