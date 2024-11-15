const products = [
    {
      id: 1,
      images: [
        '/images/earphones/airpod.jpg',
        '/images/earphones/airpods2.webp',
        '/images/earphones/airpods3.webp',
      ],
      title: 'Airpod Pro',
      price: '500af',
      specification: {
        dari: [
          "ساختار پلاستیک مقاوم",
          "کنترل‌های چندمنظوره شامل تماس، صدا، رسانه، برنامه، کنترل صدا، و یکپارچه‌سازی با Siri.",
          "کنترل‌های لمسی حساس و دقیق",
          "استفاده مداوم تا ۶ ساعت",
          "قاب گوشکی‌ها می‌تواند گوشکی‌ها را تا سه بار شارژ کند",
          "بسته‌بندی استاندارد",
          "فرقی نمی‌کند که به باشگاه می‌روید، در خانه بازی می‌کنید یا از آهنگ‌های مورد علاقه‌تان لذت می‌برید، این گوشکی‌ها ترکیبی از عملکرد و راحتی را ارائه می‌دهند"
        ],
        pashto: [
          "د پایدار پلاستيک جوړښت",
          "څو اړخیز کنټرولونه، لکه زنګ، غږ، رسنۍ، اپلیکیشن، غږ کنټرول",
          " حساس او دقیق ټچ کنټرولونه",
          "تر ۶ ساعتونو پورې پرله‌پسې کارولو وړتیا",
          "د ایربډز کیس کولای شي ایربډز تر درې ځل پورې چارج کړي",
          "معیاري بسته‌بندي",
          "که جم ته ځئ، په کور کې لوبې کوئ، یا خپلې خوښې سندرې اورئ، دا ایربډونه د فعالیت او اسانتیا یو مناسب ترکیب وړاندې کوي"

        ],
      }
    },
    {
      id: 2,
      images: [
        '/images/smartwatches/s9max.jpg',
        '/images/smartwatches/s9max-3.jpg',
        '/images/smartwatches/s9max.jpg'
      ],
      title: 'S9 SmartWatch',
      price: '800af',
      specification: {
        dari: [
          "نمایشگر FHD زنده: از نمای واضح و شفاف اطلاعیه‌ها، پیشرفت ورزشی و موارد دیگر روی یک صفحه نمایش ۲.۱۹ اینچی فول اچ‌دی شگفت‌انگیز لذت ببرید که به شما امکان می‌دهد به راحتی متصل بمانید.",
          "اتصال بلوتوث پیشرفته: با فناوری بلوتوث پیشرفته، از اتصال پایدار و یکپارچه‌ای بهره‌مند شوید که به شما اجازه می‌دهد تماس‌ها و اعلان‌ها را مستقیماً روی مچ دستتان دریافت کنید.",
          "شارژ بی‌سیم: دیگر نگران سیم‌های درهم نباشید! S9 Max دارای قابلیت شارژ بی‌سیم بدون دردسر است و اطمینان می‌دهد که ساعت هوشمند شما همیشه آماده استفاده باشد.",
          "پایش جامع سلامتی: با پایش لحظه‌ای سلامت، از جمله ضربان قلب و فشار خون، سلامت خود را تحت کنترل نگه دارید. یادآوری حالت نشسته یکپارچه به شما کمک می‌کند سبک زندگی فعال را حفظ کنید.",
          "ردیابی دقیق تناسب اندام: حالت ورزشی را فعال کنید تا تمرینات خود را به دقت پایش کرده و اهداف تناسب اندام خود را به راحتی به دست آورید.",
          "اعلان‌های هوشمند: اعلان‌های فوری برای تماس‌ها، پیام‌ها و اپلیکیشن‌ها را مستقیماً روی مچ دستتان دریافت کنید، تا هیچ به‌روزرسانی مهمی را از دست ندهید.",
          "رابط کاربری آسان: با کنترل‌های حرکتی و صفحه لمسی پاسخ‌گو، ناوبری میان ویژگی‌ها آسان و شهودی است"
        ],
        pashto: [
          "روښانه FHD ننداره: د ۲.۱۹ انچه ښکلي فل ایچ ډي نندارې سره خبرتیاوې، د فټنس پرمختګ او نورو شیانو لپاره یوه شفافه او ښکاره لیدنه وکړئ، چې تاسو سره د اړیکې ساتلو کې مرسته کوي.",
          "پرمختللې بلوتوث اړیکه: د پرمختللي بلوتوث ټکنالوژۍ سره یوه باثباته او بې‌خنډه اړیکه تجربه کړئ، چې تاسو ته اجازه درکوي زنګونه او خبرتیاوې مستقیم په خپل لاس باندې ترلاسه کړئ.",
          "بې‌سیمه چارج: نور د ګډو وډو تارونو الوداع وکړئ! S9 Max د بې‌خنډه بې‌سیمه چارج بڼه لري، چې ډاډ درکوي ساعت مو هر وخت چمتو وي.",
          "مکمله روغتیایي څارنه: د زړه درزا او د وینې فشار په څیر د روغتیایي څارنې په ریښتیني وخت کې خپله روغتیا کنټرول کړئ. یو مدغم یادښت تاسو سره مرسته کوي چې فعال ژوند طرز وساتئ.",
          "د فټنس دقیق تعقیب: د سپورت حالت فعال کړئ ترڅو خپلې تمرینونه په دقیقه توګه څارئ او د فټنس موخې ته په اسانۍ سره ورسیږئ.",
          "هوښیار خبرتیاوې: د زنګونو، پیغامونو او اپلیکیشنونو لپاره سمدستي خبرتیاوې مستقیم په خپل لاس باندې ترلاسه کړئ، ترڅو هېڅ مهم تازه معلومات له لاسه ورنکړئ.",
          "کاروونکي دوستانه انٹرفیس: د اشارې کنټرول او ځواب ویونکي ټچ سکرین سره، د ځانګړتیاوو ترمنځ حرکت کول اسان او طبیعي دی."
        ]
      }
    },
    {
      id: 3,
      images: [
        '/images/powerbanks/powerbank-50000mah-led-1.avif',
        '/images/powerbanks/powerbank-50000mah-led-2.webp',
        '/images/powerbanks/powerbank-50000mah-ledjpeg.jpeg'
      ],
      title: 'Powerbank 50000MAH',
      price: '2500af',
      specification: {
        dari: [
          "بسته شامل یک پاور بانک قابل اعتماد و یک کابل USB تایپ C می‌باشد که برای اتصال آسان و سازگاری با دستگاه‌های مدرن طراحی شده است.",
          "این پاور بانک برای تلفن‌های همراه طراحی شده و اطمینان می‌دهد که گوشی یا تبلت شما در حرکت همیشه شارژ باشد.",
          "این پاور بانک با داشتن پنج درگاه خروجی به شما امکان می‌دهد که چندین دستگاه را به طور همزمان شارژ کنید؛ انتخابی عالی برای خانواده‌ها، مسافران، یا کاربران چند دستگاهی.",
          "با قدرت خروجی ۱.۵ آمپر، این پاور بانک شارژ مطمئن و کارآمدی را به دستگاه‌های شما ارائه می‌دهد بدون اینکه به باتری آسیبی برسد.",
          "این پاور بانک سیمی است که برای شارژ دستگاه‌های شما به اتصال کابل نیاز دارد و اطمینان از منبع تغذیه مداوم را تضمین می‌کند.",
          "این پاور بانک از اتصالات Type-A و Type-C پشتیبانی می‌کند، که تطبیق‌پذیری و سازگاری با دستگاه‌های قدیمی و مدرن را فراهم می‌کند.",
          "با ظرفیت فوق‌العاده ۵۰,۰۰۰ میلی‌آمپر ساعت، این پاور بانک می‌تواند بیشتر گوشی‌های هوشمند را چندین بار شارژ کند، که آن را برای سفرهای طولانی، شرایط اضطراری یا استفاده طولانی‌مدت ایده‌آل می‌سازد.",
          "این پاور بانک از یک باتری لیتیوم-یون استفاده می‌کند که به دلیل وزن سبک، چگالی انرژی بالا و طول عمر طولانی شناخته شده است.",
          "از شارژ سریع پشتیبانی می‌کند، که زمان لازم برای شارژ دستگاه‌های شما را به طور قابل توجهی کاهش می‌دهد.",
          "دارای یک درگاه ورودی Micro USB می‌باشد که به شما امکان می‌دهد پاور بانک را با کابل‌های موجود به راحتی شارژ کنید.",
          "این پاور بانک دارای درگاه‌های خروجی USB Type-A و USB Type-C است که به طیف گسترده‌ای از دستگاه‌ها امکان شارژ همزمان را می‌دهد.",
          "با رنگ مشکی شیک و کلاسیک، این پاور بانک زیبایی مدرن و حرفه‌ای را با عملکرد ترکیب می‌کند.",
          "یک چراغ قوه داخلی به شما امکانات اضافی می‌دهد، که آن را به همراهی ایده‌آل برای کمپینگ، قطع برق یا شرایط اضطراری شبانه تبدیل می‌کند"
        ],
        pashto: [
          "بسته یو باوري پاور بانک او یو ټایپ-C USB کیبل لري چې د عصري وسایلو سره د اسانه اړیکې او مطابقت لپاره ډیزاین شوی.",
          "دا پاور بانک د موبایل وسیلو لپاره ډیزاین شوی ترڅو ستاسو سمارټ فون یا ټابلیټ تل په حرکت کې چارج وساتي.",
          "دا پاور بانک د پنځو خروج بندرونو سره سمبال دی چې تاسو ته اجازه درکوي څو وسایل په یو وخت کې چارج کړئ، دا د کورنیو، مسافرینو یا څو وسایلو کاروونکو لپاره غوره انتخاب دی.",
          "د 1.5 امپیر د وتلو ځواک سره، دا پاور بانک ستاسو وسایلو ته خوندي او مؤثره چارج ورکوي پرته له دې چې د بیټرۍ روغتیا ته زیان ورسوي.",
          "دا سیمی پاور بانک دی، چې د چارج لپاره د کیبل ارتباط ته اړتیا لري او د دوامداره بریښنا رسولو ډاډ ورکوي.",
          "دا پاور بانک د Type-A او Type-C کنیکټرونو ملاتړ کوي، چې د زړو او عصري وسیلو سره سازګار دی.",
          "د ۵۰،۰۰۰ mAh ظرفیت سره، دا پاور بانک کولی شي ستاسو زیاتره سمارټ فونونه څو ځله چارج کړي، چې دا د اوږدو سفرونو، بیړنیو حالاتو یا اوږدې مودې استعمال لپاره مثالی دی.",
          "دا د لیتیوم-آیون بیټرۍ کاروي چې د خپل لږ وزن، لوړ انرژي تراکم او اوږد عمر لپاره مشهور دی.",
          "د چټک چارج ملاتړ کوي، چې ستاسو د وسایلو چارج کولو وخت په پام وړ ډول کموي.",
          "یو مایکرو USB داخلیدو بندر لري چې تاسو ته اجازه درکوي پاور بانک د موجوده کیبلونو په کارولو سره په اسانۍ سره چارج کړئ.",
          "دا پاور بانک د USB Type-A او USB Type-C وتلو بندرونه لري، چې تاسو ته د مختلفو وسایلو په یو وخت کې چارج کولو وړتیا درکوي.",
          "د تور رنګ سره، دا پاور بانک یو عصري او مسلکي ښکلا سره فعالیت ترکیب کوي.",
          "یو جوړ شوی څراغ د اضافي سهولت لپاره ډیزاین شوی، چې دا د کیمپینګ، د بریښنا پرې کولو یا د شپې بیړني حالتونو لپاره یو مثالی ملګری ګرځوي."

      ],
      }
    }
  ];
  
  export default products;
  