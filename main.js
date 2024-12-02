document.addEventListener("DOMContentLoaded", function () {
// إضافة حدث لبرجر القائمة
document.querySelector('.burger').addEventListener('click', function() {
  this.classList.toggle('open'); // تحويل الحالة من مغلقة إلى مفتوحة
  document.querySelector('.nav-links').classList.toggle('active'); // تفعيل أو تعطيل القائمة الجانبية
});


  // the SecBar
  const secNavBtns = document.querySelectorAll(".btn");
  const secSections = document.querySelectorAll(".section");

  // إضافة حدث لكل زر
  secNavBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();

      // إزالة `active` من جميع الأقسام
      secSections.forEach((section) => (section.style.display = "none"));

      // استهداف القسم المرتبط
      const targetId = btn.getAttribute("data-target");
      const targetSection = document.getElementById(targetId);

      // عرض القسم المستهدف
      if (targetSection) {
        targetSection.style.display = "block";
      }
    });
  });
});
// كدا انا جبت كل الزراير اللي في البار فوق
const navbarLinks = document.querySelectorAll(".navbar_item");

//هنضيف حدث لكل رابط فيهم
navbarLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    //هنمنع السلوك الافتراضي للحدث
    e.preventDefault();

    //هنا انا جبت القيمة بتاعت ال href
    const targetId = link.getAttribute('href').substring(1);

    document.querySelector(".secNavBar_container").scrollIntoView({
      behavior: "smooth",
      //كدا الصفحه بنقولها تنزل تلقائيا للمكان اللي قولتلها عليه
    });

    const section = document.getElementById(targetId);
    if (section) {
      section.style.display = "block";
    }
    document.querySelectorAll(".section").forEach((sec) => {
      if (sec != section) {
        sec.style.display = "none";
      }
    });
  });
  // دا عشان اطلع سكرول لأول الصفحة
  document.getElementById('homePage').addEventListener('click', function(e) {
    e.preventDefault(); // لمنع الرابط من الانتقال
    window.scrollTo({ top: 0, behavior: 'smooth' }); // التمرير إلى الأعلى بسلاسة
  });
});

