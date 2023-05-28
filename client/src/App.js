import './App.css';
import { Layout } from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import { Main } from './pages/Main.jsx';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Contacts } from './pages/Contacts';
import { Reviews } from './pages/Reviews';
import { JobList } from './pages/JobList';
import { JobDetails } from './pages/JobDetails';

function App() {
   const jobs = [
      { 
         id: '1', 
         title: 'Deck Steward', 
         responsibilities: '<p>Оказывает содействие бармену, гарантируя, что на назначенных участках есть достаточный запас напитков, стеклянной посуды, льда и гарниров, выполняя поручения по уборке и ряд других необходимых заданий.</p><p>Поддерживает чистоту рабочей зоны бара и соблюдает надлежащую процедуру мойки и  чистки посуды, рабочего места, инвентаря, кладовых, полов, оборудования и т.д. Моет рабочие столы, стены, холодильники, оборудование и все остальные поверхности и стойки. Подметает и моет пол.</p>',
         requirements: '<p>Возраст: от 18 лет.</p> <p>Один год предыдущего опыта работы, преимущественно в баре либо 6 месяцев в схожей позиции на круизном судне.</p> <p>Английский язык: разговорный уровень</p>',
         salary: 'фиксированная зарплата по контракту.',
         conditions: 'проживание, питание и медицинское страхование за счет работодателя.',
         schedule: '7 дней/неделю, 10 часов/день (смены).',
         expenses: 'оформление паспорта моряка и сертификатов по технике безопасности, прохождение медкомиссии, получение необходимых виз, покупка билета на самолет. Суммарные затраты зависят от маршрута/направления лайнера.',
         img: 'https://lh3.googleusercontent.com/pCR19vuhAKekOUdfqKRI-5dxSwdUERGQb4W-vjqm23uwpJFeYBsCDuuT2mT1gBbvxDdRRjrFWM3oeyU55vV2XRMZ_g=s0' 
      },
      { 
         id: '2', 
         title: 'Bar Waiter (официант)', 
         responsibilities: '<p>Обеспечивает эффективную и бесперебойную доставку всех блюд и напитков гостям в их каюты.</p> <p>Владеет описаниями меню, ингредиентами и картами вин, чтобы соответствующим образом обсудить вопросы с гостями.</p> <p>Получает белье, столовое серебро, стеклянную посуду и фарфор для оборудования подносов для кают.</p> <p>Приветствует гостей при доставке заказа в номер. При доставке в каюты следует всем установленным процедурам безопасности и конфиденциальности гостей. Наблюдает за гостями, чтобы предугадать их потребности и удовлетворить их дополнительные запросы.</p> <p>Передает заказы на кухню по мере необходимости и доставляет блюда с кухни и напитки из разных мест.</p> <p>Возвращает подносы в кладовую и очищает посуду и подносы, помещает посуду в посудомоечную машину и выбрасывает мусор. Поддерживает чистоту рабочих зон и следит за надлежащей мойкой и санитарными условиями, оборудованием, посудой, бокалами, столовыми приборами и т.д. Всегда использует надлежащие санитарные нормы USPH и практикует бережное обращение со всем оборудованием кухни, чтобы избежать повреждения в результате небрежного обращения.</p>',
         requirements: '<p>Возраст: от 18 лет.</p> <p>Два-три года опыта работы официантом бара, предпочтительно в ресторане 4-5 *, отеле и т. д.</p> <p>Знание различных марок и качества ликеров, пива и вин.</p> <p>Знание кассовых аппаратов и/или связанных с ними компьютерных систем.</p> <p>Дополнительные знания языков: немецкий, итальянский, французский, испанский и т.д.</p> <p>Английский язык: разговорный уровень.</p>',
         salary: 'фиксированная зарплата по контракту.',
         conditions: 'проживание, питание и медицинское страхование за счет работодателя.',
         schedule: '7 дней/неделю, 10 часов/день (смены).',
         expenses: 'оформление паспорта моряка и сертификатов по технике безопасности, прохождение медкомиссии, получение необходимых виз, покупка билета на самолет. Суммарные затраты зависят от маршрута/направления лайнера.',
         img: 'https://kh-news.net/images/stories/oleg/chto-dolzhen-znat-oficiant-restorana/1chto-dolzhen-znat-oficiant-restorana.jpg' 
      },
      { 
         id: '3', 
         title: 'Steward (стюард)', 
         responsibilities: '<p>Обеспечивает эффективную и бесперебойную доставку всех блюд и напитков гостям в их каюты.</p> <p>Владеет описаниями меню, ингредиентами и картами вин, чтобы соответствующим образом обсудить вопросы с гостями.</p> <p>Получает белье, столовое серебро, стеклянную посуду и фарфор для оборудования подносов для кают.</p> <p>Приветствует гостей при доставке заказа в номер. При доставке в каюты следует всем установленным процедурам безопасности и конфиденциальности гостей. Наблюдает за гостями, чтобы предугадать их потребности и удовлетворить их дополнительные запросы.</p> <p>Передает заказы на кухню по мере необходимости и доставляет блюда с кухни и напитки из разных мест.</p> <p>Возвращает подносы в кладовую и очищает посуду и подносы, помещает посуду в посудомоечную машину и выбрасывает мусор. Поддерживает чистоту рабочих зон и следит за надлежащей мойкой и санитарными условиями, оборудованием, посудой, бокалами, столовыми приборами и т.д. Всегда использует надлежащие санитарные нормы USPH и практикует бережное обращение со всем оборудованием кухни, чтобы избежать повреждения в результате небрежного обращения.</p>',
         requirements: '<p>Возраст: от 21 года.</p> <p>Опыт работы от одного до двух лет в сфере обслуживания продуктов либо на кухне предпочтительно в высококлассном отеле, на курорте или круизной линии (предпочтение отдается судовому опыту работы).</p> <p>Знание стандартов общественного здравоохранения.</p>  <p>Английский язык: разговорный уровень</p> <p>Дополнительные знания языков: немецкий, итальянский, французский, испанский и т.д.</p>',
         salary: 'фиксированная зарплата по контракту.',
         conditions: 'проживание, питание и медицинское страхование за счет работодателя.',
         schedule: '7 дней/неделю, 10 часов/день (смены).',
         expenses: 'оформление паспорта моряка и сертификатов по технике безопасности, прохождение медкомиссии, получение необходимых виз, покупка билета на самолет. Суммарные затраты зависят от маршрута/направления лайнера.',
         img: 'https://layboard.com/images/uploads/50868/main_cruise-ship.qm0rkj.jpg' 
      },
      { 
         id: '4', 
         title: 'Горничная', 
         responsibilities: '<p>Поддерживает назначенную секцию от 10 до 21 гостевых кают (и при наличии, балконов), ледовых станций, подсобных помещений, тележек и коридоров в чистоте и порядке.</p> <p>Встречает гостей у главного входа во время посадки. Сопровождает гостей и несет ручную кладь в каюты.</p> <p>Выполняет все ежедневные, еженедельные и ежемесячные процедуры уборки каюты и коридора.</p> <p>Заправляет кровати и меняет полотенца. Чистит ванные и заменяет расходные материалы ванной комнаты. Чистит душ, раковины и унитаз.</p> <p>Чистит ковер, обивку, полы, стены, потолки, драпировки, окна и предметы интерьера помещений, чтобы устранить последствия воздействия дыма, воды и других повреждения, такие как грязь, сажа, пятна, плесень, а также избыток воды и влаги. Подметает, чистит и пылесосит пол. Очищает ковры, обивки и ткани с помощью спреев, кондиционеров, дезодорантов и дезинфицирующих средств.</p> <p>Удаляет пыль с мебели, моет окна, стены, потолки, изделия из дерева и дверные панели.</p> <p>Опорожняет и очищает мусорные корзины и пепельницы. Разделяет и помещает мусор в специальные контейнеры.</p> <p>Получает от гостей вещи для стирки и химчистки и доставляет ее в прачечную для обработки. Возвращает вычищенное белье в гостевую каюту и представляет счета за стирку.</p> <p>Сортирует, считает, складывает, маркирует и переносит белье.</p> <p>Уведомляет руководство о неисправности осветительного, отопительного и вентиляционного оборудования.</p> <p>Поддерживает чистящие средства и оборудование в хорошем рабочем состоянии. Заказывает расходные материалы и оборудование при необходимости.</p> <p>Транспортирует багаж гостя в назначенные места при посадке и отъезде.</p>',
         requirements: '<p>Возраст: от 18 лет.</p> <p>Минимум один-два года предыдущего опыта работы в уборке, предпочтительно в отеле 4-5* или соответствующий опыт на аналогичной должности на круизных лайнерах.</p> <p>Знание соответствующих методов уборки, требований и использования оборудования.</p> <p>Знания в химической обработке.</p> <p>Английский язык: разговорный уровень.</p> <p>Дополнительные знания языков: немецкий, итальянский, французский, испанский и т.д.</p>',
         salary: 'фиксированная зарплата по контракту.',
         conditions: 'проживание, питание и медицинское страхование за счет работодателя.',
         schedule: '7 дней/неделю, 10 часов/день (смены).',
         expenses: 'оформление паспорта моряка и сертификатов по технике безопасности, прохождение медкомиссии, получение необходимых виз, покупка билета на самолет. Суммарные затраты зависят от маршрута/направления лайнера.',
         img: 'https://profitworks.com.ua/images/img/Turism-service/Gornichnaya.jpg' 
      },
      { 
         id: '5', 
         title: 'Фитнес инструктор', 
         responsibilities: '<p>Предоставляет гостям оборудование для: скалодрома, катания на роликовых коньках, симулятора гольфа, волейбола, баскетбола, поля для гольфа, настольного тенниса, шаффлборда и т. д.</p> <p>Объясняет и демонстрирует использование оборудования для: скалодрома, катания на роликовых коньках, симулятора гольфа и любых других связанных с этим видов деятельности.</p> <p>Организует и проводит турниры. Может участвовать в качестве организатора церемоний. Объясняет и демонстрирует принципы и методы движения тела, рук или ног для достижения высоких результатов деятельности. Наблюдает за гостями во время мероприятий, выявляет и исправляет ошибки.</p> <p>Объясняет и обеспечивает соблюдение правил и норм безопасности. Реагирует на любой тип чрезвычайной ситуации.</p> <p>Собирает и разбирает оборудование и реквизит, необходимые для деятельности. Возвращает предметы в зону хранения.</p> <p>Проводит регулярную инвентаризацию всего оборудования и расходных материалов. Определяет, требует ли оборудование замены или ремонта.</p> <p>Поддерживает спортивную зону в чистоте и порядке. Публикует текущую ежедневную информацию, часы работы, мероприятия и т. д. в интересах гостей.</p>',
         requirements: '<p>Возраст: от 18 лет.</p> <p>Один год опыт работы фитнес-тренером и/или спортивным инструктором на курортах, в спортивных сооружениях или других местах отдыха.</p> <p>Диплом в области спорта, фитнеса, питания или степень Мастера спорта/Кандидата в мастера спорта.</p> <p>Возможность проведения индивидуального обучения скалолазанию.</p> <p>Знание правил игры в баскетбол, волейбол, гольф, настольный теннис, шаффлборд и т. д.</p> <p>Английский язык: разговорный уровень</p> <p>Дополнительные знания языков: немецкий, итальянский, французский, испанский и т.д.</p>',
         salary: 'фиксированная зарплата по контракту.',
         conditions: 'проживание, питание и медицинское страхование за счет работодателя.',
         schedule: '7 дней/неделю, 10 часов/день (смены).',
         expenses: 'оформление паспорта моряка и сертификатов по технике безопасности, прохождение медкомиссии, получение необходимых виз, покупка билета на самолет. Суммарные затраты зависят от маршрута/направления лайнера.',
         img: 'https://static.tildacdn.com/tild3735-3731-4063-b935-613361666133/LB3A8258.png' 
      },
      { 
         id: '6', 
         title: 'Cleaner (уборщик)', 
         responsibilities: '<p>Использует паровое оборудование, скребки, метлы и различные ручные и электроинструменты. Использует различные чистящие средства и химические вещества в зависимости от потребностей очистки.</p><p>Смешивает воду и моющие средства в контейнере для приготовления чистящих растворов в соответствии со спецификой.</p> <p>Чистит общественные туалетные комнаты, лифты, офисы и коридоры экипажа.</p> <p>Очищает ковер, обивку, полы, стены, потолки, драпировки, окна и аксессуары для помещений, чтобы устранить воздействие дыма, воды и других повреждений, таких как грязь, сажа, пятна, плесень, а также избыток воды и влаги.</p> <p>Очищает ковры, обивки и ткани с помощью спреев, кондиционеров, дезодорантов и дезинфицирующих средств.</p> <p>Удаляет пыль с мебели, моет окна, стены, потолки, изделия из дерева и дверные панели.</p> <p>Полирует латунь и другие металлические приспособления.</p> <p>Поддерживает чистящие средства и оборудование в хорошем рабочем состоянии. При необходимости дает рекомендации по реквизиции материалов и оборудования.</p> <p>Помогать работникам общественного питания в сборе грязных стаканов, фарфора, столовых приборов и т. д. по всему судну. Транспортирует в специально отведенные места сбора.</p> <p>Опорожняет и очищает мусорные корзины и пепельницы и вывозит мусор в зону утилизации.</p> <p>Транспортирует багаж гостей в назначенные места во время посадки и высадки.</p> <p>Помогает с обработкой и погрузкой на судовые склады в дни погрузки согласно расписанию.</p>',
         requirements: '<p>Возраст: от 18 лет.</p> <p>Один год предыдущего опыта работы, преимущественно в баре либо 6 месяцев в схожей позиции на круизном судне.</p> <p>Знание соответствующих методов уборки, требований и использования оборудования</p> <p>Знания в химической обработке</p> <p>Английский язык: разговорный уровень</p> <p>Дополнительные знания языков: немецкий, итальянский, французский, испанский и т.д.</p>',
         salary: 'фиксированная зарплата по контракту.',
         conditions: 'проживание, питание и медицинское страхование за счет работодателя.',
         schedule: '7 дней/неделю, 10 часов/день (смены).',
         expenses: 'оформление паспорта моряка и сертификатов по технике безопасности, прохождение медкомиссии, получение необходимых виз, покупка билета на самолет. Суммарные затраты зависят от маршрута/направления лайнера.',
         img: 'https://polsha24.com/media/News/yborshik.jpg' 
      },
      { 
         id: '7', 
         title: 'Аниматор', 
         responsibilities: '<p>Поддерживает постоянное взаимодействие с гостями. Ведет и участвует в развлекательных программах и мероприятиях для взрослых и семей.</p> <p>Участвует в процедурах посадки и высадки, распространяя информацию, направляя и проводя гостей до кают и/или выходов.</p> <p>Направляет гостей по трапам и за их пределами, когда судно прибыло в порты захода.</p> <p>Сопровождает гостей на берег во время экскурсионных туров.</p> <p>Участвует в шоу и мероприятиях, представленных отделом круиз-директора, принимая участие в пародиях и/или простых танцевальных программах. Инструктирует, организует или проводит различные мероприятия и/или турниры.</p> <p>Использует прожекторное оборудование для производственных шоу в соответствии с инструкциями по мере необходимости, когда сценический персонал должен выполнять обязанности за кулисами. Присутствует на обязательных репетициях по мере необходимости.</p> <p>Осуществляет сборку и разборку до и после деятельности реквизита и оборудования. Возвращает предметы в зону хранения.</p>',
         requirements: '<p>Возраст: от 18 лет.</p> <p>Два года опыта работы мастером церемоний или профессиональных развлечений (театр, музыка, танцы, комедии и т.д.), опыт работы на курортах, круизных линиях, или сфере развлечений.</p> <p>Опыт работы с микрофоном.</p> <p>Предпочтительно умение давать следующие уроки: танцы, занятия творчеством, фитнес-классы, пение и т.д.</p> <p>Английский язык: разговорный уровень</p> <p>Дополнительные знания языков: немецкий, итальянский, французский, испанский и т.д.</p>',
         salary: 'фиксированная зарплата по контракту.',
         conditions: 'проживание, питание и медицинское страхование за счет работодателя.',
         schedule: '7 дней/неделю, 10 часов/день (смены).',
         expenses: 'оформление паспорта моряка и сертификатов по технике безопасности, прохождение медкомиссии, получение необходимых виз, покупка билета на самолет. Суммарные затраты зависят от маршрута/направления лайнера.',
         img: 'https://maxking.com.ua/wp-content/uploads/2016/02/Screenshot_2-15.png' 
      },
      { 
         id: '8', 
         title: 'Фотограф', 
         responsibilities: '<p>Фотографирует события на борту и на берегу по мере необходимости, всегда проявляя активность, чтобы максимизировать количество изображений и качество изображения для достижения установленных целей производительности.</p> <p>Носит костюмы талисманов внутри/снаружи корабля для фотосессий, привлекая гостей живой энергией и энтузиазмом в любое время.</p> <p>Обеспечивает отличное обслуживание клиентов в любое время, представляя дружелюбное, теплое и спокойное отношение к гостю и постоянно следуя самым высоким стандартам.</p> <p>Способность использования и знакомства с целым рядом фотографического оборудования, включая, помимо прочего, цифровые зеркальные камеры, студийное портретное оборудование, компьютеры и программное обеспечение для редактирования изображений.</p> <p>Помогает с настройкой и хранением оборудования портретной студии.</p> <p>Помогает гостям найти их отображаемые фотографии и/или помогает им в использовании цифровых фото-киосков.</p>',
         requirements: '<p>Возраст: от 18 лет.</p> <p>Минимум шесть месяцев опыта работы фотографом.</p> <p>Предпочтительно наличие степени бакалавра или эквивалента признанного учебного заведения.</p> <p>Базовые знания и опыт работы с базовыми компьютерными системами и киосками с сенсорным экраном.</p> <p>Портфолио с 5 фотографиями, сделанными кандидатом, с четким объяснением/представлением каждой фотографии.</p> <p>Навыки работы с камерой.</p> <p>Английский язык: разговорный уровень</p>',
         salary: 'фиксированная зарплата по контракту.',
         conditions: 'проживание, питание и медицинское страхование за счет работодателя.',
         schedule: '7 дней/неделю, 10 часов/день (смены).',
         expenses: 'оформление паспорта моряка и сертификатов по технике безопасности, прохождение медкомиссии, получение необходимых виз, покупка билета на самолет. Суммарные затраты зависят от маршрута/направления лайнера.',
         img: 'https://ma-work.com.ua/wp-content/uploads/2021/02/fotograf-kruiznyj-lajner.jpg' 
      },
      { 
         id: '9', 
         title: 'Кассир', 
         responsibilities: '<p>Обменивает фишки, наличные деньги, монеты, чеки, кредитные и/или другие денежные знаки.</p> <p>Точно и быстро подсчитывает фишки, наличные деньги и монеты. Принимает монеты или фишки казино от гостей, запрашивающих эквивалент в валюте.</p> <p>Управляет счетчиком электронных монет или подсчетом фишек для правильного обмена. Предоставляет гостям бумажные деньги и/или эквивалент.</p> <p>Отвечает на запросы, касающиеся услуг казино и общей информации.</p> <p>Готовит ежедневные отчеты, считая, читая и записывая суммы наличных денег, монет, дорожных и других чеков, кредитных карт и судового кредита. Готовит ручные и компьютеризированные отчеты о ежедневных транзакциях, включая транзакции сводки, чтобы уравновесить и подготовить отчеты для каждого круиза.</p> <p>Подготавливает письменные формы авторизации и предоставляет монеты технику игровых автоматов для заполнения слота автоматов, игровых автоматов и обменных автоматов.</p> <p>Участвует в подсчете казино путем суммирования и проверки денежных величин. Обеспечивает необходимые материалы для подсчета активности.</p> <p>Всегда соблюдает процедуры безопасности. Поддерживает осведомленность гостей, чтобы избежать возможных проблем безопасности. Уведомляет менеджмент и/или службу безопасности о любом подозрительном поведении.</p>',
         requirements: '<p>Возраст: от 21 года.</p> <p>Два года опыта работы с наличностью в отелях, банках, казино или смежных отраслях.</p> <p>Возможность быстро и точно считать фишки и бумажные деньги.</p> <p>Возможность работы со счетчиками монет, чип-механизмом, калькулятором и сопутствующим оборудованием.</p> <p>Знание компьютеров, доступа в Интернет и умение ориентироваться в различных пакетах программ, таких как Excel и Word.</p> <p>Английский язык: разговорный уровень</p> <p>Дополнительные знания языков: немецкий, итальянский, французский, испанский и т.д.</p>',
         salary: 'фиксированная зарплата по контракту.',
         conditions: 'проживание, питание и медицинское страхование за счет работодателя.',
         schedule: '7 дней/неделю, 10 часов/день (смены).',
         expenses: 'оформление паспорта моряка и сертификатов по технике безопасности, прохождение медкомиссии, получение необходимых виз, покупка билета на самолет. Суммарные затраты зависят от маршрута/направления лайнера.',
         img: 'https://live.staticflickr.com/8081/8310632181_d730b65a79_z.jpg' 
      },
      { 
         id: '10', 
         title: 'Работник казино', 
         responsibilities: '<p>Приветствует гостей, проявляет вежливость и предоставляет полезную информацию. Объясняет и разъясняет правила для гостей, запрашивающих информацию.</p> <p>Должен быть знаком со всеми правилами игры и операционными процедурами, включая детали турнира. Должен быть доступен для организации турниров для частных групп.</p> <p>Для групп казино действует как связующее звено между казино, группой и отделами на борту.</p> <p>Реагирует на жалобы гостей внимательным, профессиональным и позитивным образом, в котором выражается обеспокоенность по поводу их жалоб.</p> <p>Предоставляет услуги игрокам казино, организуя VIP-услуги.</p> <p>Генерирует отчеты, подтверждающие активность игрока в казино.</p> <p>Помогает в развитии потенциала игрока, работая с игроками над определением их потребностей.</p>',
         requirements: '<p>Возраст: от 21 года.</p> <p>Минимум три года соответствующего опыта работы в казино.</p> <p>Английский язык: разговорный уровень</p> <p>Дополнительные знания языков: немецкий, итальянский, французский, испанский и т.д.</p>',
         salary: 'фиксированная зарплата по контракту.',
         conditions: 'проживание, питание и медицинское страхование за счет работодателя.',
         schedule: '7 дней/неделю, 10 часов/день (смены).',
         expenses: 'оформление паспорта моряка и сертификатов по технике безопасности, прохождение медкомиссии, получение необходимых виз, покупка билета на самолет. Суммарные затраты зависят от маршрута/направления лайнера.',
         img: 'https://casinoda.net/img/downloads/casino-holdem.jpg' 
      },
   ];



   return (
      <Layout>
         <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/services' element={<Services/>} />
            <Route path='/jobs' element={<JobList jobs={jobs}/>} />
            <Route path="/jobs/:id" element={<JobDetails jobs={jobs} />} />
            <Route path='/contacts' element={<Contacts/>} />
            <Route path='/reviews' element={<Reviews/>} />
            
         </Routes>
      </Layout>
   );
}

export default App;
