// === AOS === //
AOS.init();
// === Up button === //
let span = document.querySelector(".up");

window.onscroll = () => {
  this.scrollY >= 851.2
    ? span.classList.add("show")
    : span.classList.remove("show");
};

span.onclick = () => {
  window.scrollTo(0, 0);
};

// === Language Switcher === //
const translations = {
    'en': {
        'brand': 'Abid Rafiq Quran Academy',
        'login': 'Login',
        'prog': 'Programs',
        'whous': 'Who we are',
        'contact': 'Contact us',
        'hero_h1': 'Educational Quranic Academy',
        'hero_p': 'Aiming to teach the Holy Quran and Tajweed skills',
        'register': 'Register Here',
        'who_h3': 'Who we are',
        'who_p': 'Abid Rafiq Quran Academy is a premier global platform dedicated to the spiritual and linguistic mastery of the Holy Quran. Our curriculum is meticulously designed to cover Hifz (Memorization), Tajweed (Rules of Recitation), and Tafsir (Interpretation). Guided by the expertise of distinguished mentors, we provide a bridge to the Arabic language, enabling students of all ages to connect deeply with the Divine Message. We are committed to excellence, ensuring every learner achieves a beautiful and precise recitation from adept mentors.',
        'years': 'All Ages',
        'students': '200 Students',
        'supervisors': '25 Supervisors',
        'goal1_h4': 'Memorizing the Quran',
        'goal1_p': 'Memorizing and consolidating all parts in several stages',
        'goal2_h4': 'Teaching the Quran',
        'goal2_p': 'Comprehensive interpretation and contemplation of meanings',
        'goal3_h4': 'Tajweed of the Quran',
        'goal3_p': 'Improving recitation, rules courses and connected Sanad',
        'contact_h3': 'Contact Us',
        'address': 'House 23 Khayaban-e-Sir Syed Sector 2, Rawalpindi',
        'phone': 'Phone: +92 349 7469638 | (051) 4832342',
        'name_label': 'Name',
        'email_label': 'Email',
        'message_label': 'Message',
        'message_placeholder': 'Write your message here',
        'send': 'Send',
        'footer': 'All rights reserved © Abid Rafiq Academy for the Quran',
        'lang_btn': '<i class="fa fa-globe"></i> Language',
        'dir': 'ltr'
    },
    'ar': {
        'brand': 'أكاديمية عابد رفيق للقرآن',
        'login': 'تسجيل الدخول',
        'prog': 'البرامج',
        'whous': 'من نحن',
        'contact': 'تواصل معنا',
        'hero_h1': 'أكاديمية تربوية تعليمية',
        'hero_p': 'تهدف إلى تعليم القرآن الكريم و مهارات التجويد',
        'register': 'للتسجيل اضغط هنا',
        'who_h3': 'من نحن',
        'who_p': 'تعد أكاديمية عابد رفيق للقرآن منصة عالمية رائدة مخصصة للإتقان الروحی واللغوی للقرآن الکریم. تم تصميم منهجنا بدقة ليغطی الحفظ والتجويد والتفسير. تحت إشراف نخبة من المعلمين المتميزين، نوفر جسراً لتعلم اللغة العربية، مما يمكّن الطلاب من جميع الأعمار من الاتصال بعمق مع الرسالة الإلهية. نحن ملتزمون بالتميز، وضمان تحقيق كل متعلم لتلاوة متقنة وجميلة على يد مرشدين ماهرين.',
        'years': 'جميع الأعمار',
        'students': '200 طالب',
        'supervisors': '25 مشرف',
        'goal1_h4': 'تحفيظ القرآن الكريم',
        'goal1_p': 'حفظ وتثبيت لجميع الأجزاء على عدة مراحل',
        'goal2_h4': 'تعليم القرآن الكريم',
        'goal2_p': 'تفسير وتدبر شامل للمعاني والمتشابهات',
        'goal3_h4': 'تجويد القرآن الكريم',
        'goal3_p': 'تحسين التلاوة, دورات الأحكام والسند المتصل',
        'contact_h3': 'تواصل معنا',
        'address': 'منزل 23، خیابان سر سید سیکٹر 2، راولپنڈی',
        'phone': 'ہاتف: +92 349 7469638 | (051) 4832342',
        'name_label': 'الاسم',
        'email_label': 'البريد الالكتروني',
        'message_label': 'الرسالة',
        'message_placeholder': 'اكتب رسالتك هنا',
        'send': 'أرسل',
        'footer': 'جميع الحقوق محفوظة © أكاديمية عابد رفيق للقرآن',
        'lang_btn': '<i class="fa fa-globe"></i> اللغة',
        'dir': 'rtl'
    },
    'ur': {
        'brand': 'عابد رفیق قرآن اکیڈمی',
        'login': 'لاگ ان کریں',
        'prog': 'پروگرام',
        'whous': 'ہمارے بارے میں',
        'contact': 'ہم سے رابطہ کریں',
        'hero_h1': 'ایک تعلیمی قرآنی اکیڈمی',
        'hero_p': 'جس کا مقصد قرآن مجید اور تجوید کی مہارتیں سکھانا ہے',
        'register': 'رجسٹریشن کے لیے یہاں کلک کریں',
        'who_h3': 'ہمارے بارے میں',
        'who_p': 'عابد رفیق قرآن اکیڈمی ایک ممتاز عالمی پلیٹ فارم ہے جو قرآن کریم کی روحانی اور لسانی مہارت کے لیے وقف ہے۔ ہمارا نصاب حفظ، تجوید اور تفسیر کے جامع احاطہ کے لیے ڈیزائن کیا گیا ہے۔ نامور اساتذہ کی زیر نگرانی، ہم عربی زبان سیکھنے کے لیے ایک بہترین ذریعہ فراہم کرتے ہیں، تاکہ تمام عمر کے طلباء الہی پیغام کے ساتھ گہرائی سے جڑ سکیں۔ ہم بہترین معیار کے پابند ہیں، اس بات کو یقینی بناتے ہوئے کہ ہر طالب علم ماہر اساتذہ سے سنت کے مطابق خوبصورت اور درست تلاوت حاصل کرے۔',
        'years': 'تمام عمر',
        'students': '200 طلباء',
        'supervisors': '25 نگران',
        'goal1_h4': 'تحفیظ القرآن الکریم',
        'goal1_p': 'تمام پاروں کا حفظ اور پختگی کئی مراحل میں',
        'goal2_h4': 'تعلیم القرآن الکریم',
        'goal2_p': 'معانی اور مشابہات کی جامع تفسیر اور تدبر',
        'goal3_h4': 'تجويد القرآن الکریم',
        'goal3_p': 'تلاوت میں بہتری، احکام کے کورسز اور سند متصل',
        'contact_h3': 'ہم سے رابطہ کریں',
        'address': 'ہاؤس 23، خیابان سر سید سیکٹر 2، راولپنڈی',
        'phone': 'فون: +92 349 7469638 | (051) 4832342',
        'name_label': 'نام',
        'email_label': 'ای میل',
        'message_label': 'پیغام',
        'message_placeholder': 'اپنا پیغام یہاں لکھیں',
        'send': 'بھیجیں',
        'footer': 'جملہ حقوق محفوظ ہیں © عابد رفیق قرآن اکیڈمی',
        'lang_btn': '<i class="fa fa-globe"></i> زبان',
        'dir': 'rtl'
    }
};

function changeLanguage(lang) {
    const data = translations[lang];
    if (!data) return;

    // Change Direction
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', data.dir);

    // Update Content
    document.title = data.brand;
    const navTitle = document.getElementById('nav-title');
    if (navTitle) navTitle.innerText = data.brand;

    const loginBtn = document.querySelector('a[href="login.php"]');
    if (loginBtn) loginBtn.innerText = data.login;

    const progLink = document.querySelector('a[href="#prog"]');
    if (progLink) progLink.innerText = data.prog;

    const whoLink = document.querySelector('a[href="#whous"]');
    if (whoLink) whoLink.innerText = data.whous;

    const contactLink = document.querySelector('a[href="#contactus"]');
    if (contactLink) contactLink.innerText = data.contact;

    const heroH1 = document.querySelector('.hero h1');
    if (heroH1) heroH1.innerText = data.hero_h1;

    const heroP = document.querySelector('.hero p');
    if (heroP) heroP.innerText = data.hero_p;

    const heroBtn = document.querySelector('.hero .btn');
    if (heroBtn) heroBtn.innerText = data.register;

    const whoH3 = document.getElementById('whous');
    if (whoH3) whoH3.innerText = data.who_h3;

    const whoDesc = document.querySelector('.numbers .col1 p');
    if (whoDesc) whoDesc.innerText = data.who_p;

    const circles = document.querySelectorAll('.circle');
    circles[0].innerText = data.years;
    circles[1].innerText = data.students;
    circles[2].innerText = data.supervisors;

    const goalHeadings = document.querySelectorAll('.goal__heading');
    const goalContents = document.querySelectorAll('.goal__content');

    goalHeadings[0].innerText = data.goal1_h4;
    goalContents[0].innerText = data.goal1_p;
    goalHeadings[1].innerText = data.goal2_h4;
    goalContents[1].innerText = data.goal2_p;
    goalHeadings[2].innerText = data.goal3_h4;
    goalContents[2].innerText = data.goal3_p;

    document.querySelector('.contact .section-heading').innerText = data.contact_h3;

    // Update Address and Phone
    if(document.getElementById('contact-address')) document.getElementById('contact-address').innerText = data.address;
    if(document.getElementById('contact-phone')) document.getElementById('contact-phone').innerText = data.phone;

    document.querySelector('label[for="name"]').innerText = data.name_label;
    document.querySelector('label[for="email"]').innerText = data.email_label;
    document.querySelector('label[for="textarea"]').innerText = data.message_label;
    document.getElementById('textarea').placeholder = data.message_placeholder;
    document.querySelector('.contact .btn').innerText = data.send;

    document.querySelector('.copy-right').innerHTML = data.footer;
    document.querySelector('.lang-btn').innerHTML = data.lang_btn;

    // Save preference
    localStorage.setItem('preferredLang', lang);
}

// Event Listeners for links
document.addEventListener('DOMContentLoaded', () => {
    const langLinks = document.querySelectorAll('.lang-content a');
    langLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const url = new URL(link.href);
            const lang = url.searchParams.get('lang');
            changeLanguage(lang);
        });
    });

    // Load preferred language
    const savedLang = localStorage.getItem('preferredLang') || 'ar';
    changeLanguage(savedLang);
});
