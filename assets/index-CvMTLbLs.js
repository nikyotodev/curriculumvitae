var B=Object.defineProperty;var H=(t,o,a)=>o in t?B(t,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[o]=a;var w=(t,o,a)=>H(t,typeof o!="symbol"?o+"":o,a);import{a as l,j as e,R as k}from"./react-D1It5uYK.js";import{R as W}from"./react-dom-Dn3JeMaJ.js";import"./scheduler-C323NY8X.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function a(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=a(n);fetch(n.href,i)}})();const F=l.createContext({language:"ru",setLanguage:()=>{},translate:()=>"",toggleLanguage:()=>{}}),y={welcome:{ru:"ДОБРО ПОЖАЛОВАТЬ НА NIKYOTODEV!",en:"WELCOME TO NIKYOTODEV!"},"intro.text":{ru:"Этот уголок — <i>мой личный сайт и блог</i>. Вдохновение для него я черпал из <b>ретро-вайба старых сайтов</b> и собственного опыта. Я — <b>программист</b>. <b>Люблю кодить всё подряд</b>, когда приходит вдохновение. Я из России. Мой ник — <b>nikyotodev</b>, и я всегда открыт к новым знакомствам!",en:"This corner is <i>my personal website and blog</i>. I drew inspiration from the <b>retro vibe of old websites</b> and my own experience. I'm a <b>programmer</b>. <b>I love coding all sorts of things</b> when inspiration strikes. I'm from Russia. My handle is <b>nikyotodev</b>, and I'm always open to new connections!"},"facts.title":{ru:"Факты обо мне:",en:"Facts about me:"},"facts.list":{ru:["Основной язык программирования — <b>Python</b>, но я с радостью экспериментирую и с другими.","Обожаю <i>ночное небо, луну, облака и дождь</i> — в них есть что-то романтичное.","Солнце? Не моё, предпочитаю <b>тень и прохладу</b>.","Проводить время за компом — <i>моё всё</i>: от кодинга до экспериментов с новыми проектами.","Сейчас продолжаю <b>учиться и развиваться</b> в IT, параллельно работая над своими идеями."],en:["My main programming language is <b>Python</b>, but I'm happy to experiment with others.","I love the <i>night sky, moon, clouds, and rain</i> — there's something romantic about them.","The sun? Not my thing, I prefer <b>shade and coolness</b>.","Spending time at the computer is <i>my everything</i>: from coding to experimenting with new projects.","Currently, I continue to <b>learn and develop</b> in IT, while working on my own ideas."]},"activities.title":{ru:"Чем занимаюсь?",en:"What do I do?"},"activities.list":{ru:["Кодю <b>сайты, боты, парсеры и скрипты</b>. Иногда беру заказы — если интересно, пиши на почту!","Увлекаюсь созданием <i>минималистичных, но стильных интерфейсов</i> и автоматизацией рутинных задач.","Люблю работать в <b>Figma, Framer</b>. Создаю в них дизайны и прототипы для своих проектов."],en:["I code <b>websites, bots, parsers and scripts</b>. Sometimes I take orders — if you're interested, email me!","I'm passionate about creating <i>minimalist yet stylish interfaces</i> and automating routine tasks.","I enjoy working in <b>Figma, Framer</b>. I create designs and prototypes for my projects with them."]},"resume.title":{ru:"Моё резюме (коротко):",en:"My resume (briefly):"},"resume.list":{ru:["Окончил <b>Колледж радиоэлектроники и информационных технологий</b>.","Владею <b>Python</b> и <b>C#</b>, умею работать с <i>Excel и Word</i>.","Имею опыт создания <b>Telegram-ботов</b> и <i>парсеров</i> для обработки данных.","Постоянно изучаю <b>новые технологии</b> — <i>нейросети</i>, на мой взгляд, просто чудо!","Мечтаю развивать свои проекты и, возможно, <b>запустить стартап</b> в IT."],en:["Graduated from the <b>College of Radio Electronics and Information Technologies</b>.","Proficient in <b>Python</b> and <b>C#</b>, skilled with <i>Excel and Word</i>.","Experienced in creating <b>Telegram bots</b> and <i>parsers</i> for data processing.","Constantly learning <b>new technologies</b> — <i>neural networks</i>, in my opinion, are simply amazing!","Dream of developing my projects and possibly <b>launching a startup</b> in IT."]},"contact.box":{ru:'<b>Хотите обсудить проекты, сотрудничество?</b><br /><span>Свяжитесь со мной: <a href="mailto:richardbush@cocaine.ninja" style={{ color: "#3ffeff", textDecoration: "underline", fontWeight: 700 }}>richardbush@cocaine.ninja</a></span>',en:'<b>Want to discuss projects, collaboration?</b><br /><span>Contact me: <a href="mailto:richardbush@cocaine.ninja" style={{ color: "#3ffeff", textDecoration: "underline", fontWeight: 700 }}>richardbush@cocaine.ninja</a></span>'},online:{ru:"Я в сети!",en:"I'm Online!"},"blog.button":{ru:"БЛОГ",en:"BLOG"},"moscow.time":{ru:"Время в Москве:",en:"Moscow Time:"},"moon.phase":{ru:"Фаза:",en:"Phase:"},"moon.azimuth":{ru:"Азимут:",en:"Azimuth:"},"moon.altitude":{ru:"Высота:",en:"Altitude:"},"blog.title":{ru:"Мой блог о разработке",en:"My Development Blog"},"blog.read.more":{ru:"Читать дальше",en:"Read more"},"blog.collapse":{ru:"Свернуть",en:"Collapse"},"home.button":{ru:"НА ГЛАВНУЮ",en:"HOME"},"systems.status":{ru:"Статус систем:",en:"Systems status:"},"404.title":{ru:"Страница не найдена",en:"Page not found"},"404.message1":{ru:"Запрошенная вами страница была перемещена в другую реальность или никогда не существовала.",en:"The page you requested has been moved to another reality or never existed."},"404.message2":{ru:"СБОЙ СИСТЕМЫ: Нарушение целостности цифрового пространства. Попробуйте вернуться на главную страницу или проверить правильность URL-адреса.",en:"SYSTEM FAILURE: Digital space integrity violation. Try returning to the home page or check your URL."},"404.home.button":{ru:"Вернуться на главную",en:"Return to home"},"404.blog.button":{ru:"Перейти в блог",en:"Go to blog"},"footer.copyright":{ru:"(c) 2025 nikyotodev. All Rights Reserved.",en:"(c) 2025 nikyotodev. All Rights Reserved."},"snow.on":{ru:"Выключить снег",en:"Turn off snow"},"snow.off":{ru:"Включить снег",en:"Turn on snow"},"blog.posts":{ru:[{title:"Почему FastAPI заменяет Flask во всех новых проектах",date:"16 мая 2025",excerpt:"Flask долгое время считался универсальным решением для разработки веб-приложений на Python. Однако сегодня всё больше разработчиков выбирают FastAPI...",link:"#blog/fastapi-vs-flask",content:`Flask долгое время считался универсальным решением для разработки веб-приложений на Python. Он прост, гибок и отлично подходил для небольших проектов и прототипов. Однако в условиях современных требований к производительности, безопасности и масштабируемости, Flask начал уступать место более продвинутым фреймворкам.

FastAPI появился как логичное продолжение идей Flask, но с учётом новых реалий. Он предлагает асинхронную работу из коробки, строгую типизацию благодаря Pydantic, автоматическую генерацию OpenAPI-документации, высокую скорость обработки запросов и удобную структуру проекта.

В 2025 году всё больше команд начинают свои проекты именно с FastAPI, потому что он позволяет писать меньше кода, быстрее масштабироваться и легче поддерживать архитектуру. Flask же остаётся в основном в старых проектах и учебных материалах.`},{title:"Как Pydantic стал быстрее, чем dataclasses",date:"12 мая 2025",excerpt:"До недавнего времени Python-разработчики использовали dataclasses как основной способ описания структур данных. Однако с выходом Pydantic версии 2 произошёл качественный скачок...",link:"#blog/pydantic-vs-dataclasses",content:`До недавнего времени Python-разработчики использовали dataclasses как основной способ описания структур данных, особенно в связке с typing. Однако с выходом Pydantic версии 2 произошёл качественный скачок.

Новая реализация на Rust значительно ускорила сериализацию и валидацию данных, превзойдя по скорости даже стандартные dataclasses. При этом Pydantic остаётся невероятно удобным инструментом: он валидирует входные данные автоматически, поддерживает вложенные модели, работает с JSON и позволяет без лишнего кода описывать сложные структуры.

Это делает его незаменимым для FastAPI, работы с конфигурациями, базами данных и любыми внешними API. Если раньше его критиковали за медлительность, то теперь Pydantic стал золотым стандартом типизированных моделей в Python-проектах.`},{title:"Почему React и Vite стали стандартом",date:"5 мая 2025",excerpt:"Create React App долгое время был точкой входа во фронтенд-разработку. Однако с годами он устарел и перестал отвечать требованиям скорости и гибкости...",link:"#blog/react-vite-standard",content:`Create React App долгое время был точкой входа во фронтенд-разработку. Он предлагал простую настройку, поддержку JSX и модульной сборки. Однако с годами он устарел и перестал отвечать требованиям скорости и гибкости.

Vite стал новым стандартом благодаря молниеносной сборке, минимальной конфигурации и полной поддержке современных технологий вроде TypeScript, PostCSS и модульной архитектуры. В отличие от громоздкого Webpack, Vite работает мгновенно, особенно в режиме разработки, и отлично интегрируется с React.

В 2025 году связка React и Vite используется в большинстве новых проектов: она удобна, быстра и легко расширяется. Разработчики больше не тратят время на конфигурацию и ожидание перезапуска сервера — всё работает из коробки и почти мгновенно.`},{title:"Server Components в React меняют архитектуру",date:"28 апреля 2025",excerpt:"С появлением React Server Components разработчики получили возможность создавать часть интерфейса, которая полностью рендерится на сервере...",link:"#blog/react-server-components",content:`С появлением React Server Components разработчики получили возможность создавать часть интерфейса, которая полностью рендерится на сервере, не попадая в клиентский JavaScript. Это решает проблему перегруженных бандлов, уменьшает нагрузку на браузер пользователя и ускоряет первую отрисовку страницы.

Server Components идеально подходят для тяжёлых элементов интерфейса, которым не нужна интерактивность — например, списки товаров, блоки новостей или SEO-тексты. Вместо того чтобы рендерить их на клиенте, всё отрабатывает на сервере и передаётся уже в готовом виде.

В связке с Next.js и современными API они позволяют строить приложения с высокой производительностью и отличным пользовательским опытом. Конечно, такая архитектура требует понимания, что именно живёт на сервере, а что остаётся в клиенте, но в долгосрочной перспективе это даёт только плюсы.`},{title:"Зачем учить Zustand вместо Redux",date:"15 апреля 2025",excerpt:"Redux долгое время был единственным вариантом для глобального управления состоянием в React-приложениях. Однако за всё это приходилось платить...",link:"#blog/zustand-vs-redux",content:`Redux долгое время был единственным вариантом для глобального управления состоянием в React-приложениях. Он предлагал понятную архитектуру, централизованное хранилище и масштабируемость. Однако за всё это приходилось платить: чрезмерная шаблонность, громоздкие редьюсеры, необходимость писать actions и selectors.

Zustand решает эту проблему. Это современная и минималистичная библиотека, которая использует хранилище на базе хуков и не требует дополнительной обвязки. В Zustand можно описать глобальное состояние в несколько строк и использовать его без провайдеров или middleware.

Для большинства проектов этого более чем достаточно. В 2025 году Zustand всё чаще выбирают как лёгкую альтернативу Redux, особенно в тех случаях, когда нужна простота, скорость и чистый код.`},{title:"Почему Python остаётся языком номер один для автоматизации",date:"8 апреля 2025",excerpt:"Python остаётся одним из самых популярных языков не просто благодаря удобному синтаксису. Он идеально подходит для автоматизации рутинных задач...",link:"#blog/python-automation",content:`Python остаётся одним из самых популярных языков не просто благодаря удобному синтаксису. Он идеально подходит для автоматизации рутинных задач, будь то работа с файлами, парсинг сайтов, взаимодействие с API или генерация отчётов.

Он читается почти как английский, поддерживается на всех платформах, и для каждой задачи уже есть готовая библиотека — от requests до pandas. Благодаря этому Python активно используют в системном администрировании, DevOps, аналитике и машинном обучении.

Он особенно хорош, когда нужно быстро собрать решение из готовых компонентов, не тратя недели на архитектуру. Даже в эпоху быстрых и строготипизированных языков, Python остаётся первым выбором, когда речь идёт о скорости разработки и простоте поддержки кода.`},{title:"Почему NextJS стал основой для серьёзных React-проектов",date:"2 апреля 2025",excerpt:"NextJS предлагает разработчикам всё, чего не хватает в обычном React: маршрутизацию без настройки, серверный рендеринг, статическую генерацию...",link:"#blog/nextjs-react-projects",content:`NextJS предлагает разработчикам всё, чего не хватает в обычном React: маршрутизацию без настройки, серверный рендеринг, статическую генерацию, поддержку API-роутов и Server Components. Он избавляет от необходимости настраивать Webpack, роутинг или Babel вручную — всё работает из коробки.

Кроме того, NextJS активно развивается и поддерживается компанией Vercel, что делает его надёжным выбором для продакшн-разработки. Большие компании давно используют его для построения масштабируемых приложений и маркетинговых сайтов.

Поддержка TypeScript, интеграция с Vercel, встроенная оптимизация изображений, стриминг данных и гибкость — всё это делает NextJS ключевым инструментом в React-экосистеме 2025 года. Если проект серьёзный и требует стабильности, скорости и SEO — без NextJS сейчас не обойтись.`}],en:[{title:"Why FastAPI is Replacing Flask in All New Projects",date:"May 16, 2025",excerpt:"Flask has long been considered a universal solution for Python web application development. However, today more and more developers are choosing FastAPI...",link:"#blog/fastapi-vs-flask",content:`Flask has long been considered a universal solution for developing web applications in Python. It's simple, flexible, and was perfect for small projects and prototypes. However, with modern requirements for performance, security, and scalability, Flask has begun giving way to more advanced frameworks.

FastAPI emerged as a logical continuation of Flask's ideas but considering new realities. It offers asynchronous operation out of the box, strict typing thanks to Pydantic, automatic OpenAPI documentation generation, high request processing speed, and a convenient project structure.

In 2025, more teams are starting their projects with FastAPI because it allows writing less code, scaling faster, and maintaining architecture more easily. Flask remains mostly in legacy projects and educational materials.`},{title:"How Pydantic Became Faster Than Dataclasses",date:"May 12, 2025",excerpt:"Until recently, Python developers used dataclasses as the primary way to describe data structures. However, with the release of Pydantic version 2, a qualitative leap occurred...",link:"#blog/pydantic-vs-dataclasses",content:`Until recently, Python developers used dataclasses as the primary way to describe data structures, especially in conjunction with typing. However, with the release of Pydantic version 2, a qualitative leap occurred.

The new Rust implementation significantly accelerated data serialization and validation, outperforming even standard dataclasses in speed. Meanwhile, Pydantic remains an incredibly convenient tool: it validates input data automatically, supports nested models, works with JSON, and allows describing complex structures without unnecessary code.

This makes it indispensable for FastAPI, working with configurations, databases, and any external APIs. While it was previously criticized for sluggishness, Pydantic has now become the gold standard for typed models in Python projects.`},{title:"Why React and Vite Became the Standard",date:"May 5, 2025",excerpt:"Create React App was long the entry point to frontend development. However, over the years it became outdated and no longer met speed and flexibility requirements...",link:"#blog/react-vite-standard",content:`Create React App was long the entry point to frontend development. It offered simple setup, JSX support, and modular building. However, over the years, it became outdated and no longer met speed and flexibility requirements.

Vite became the new standard thanks to lightning-fast building, minimal configuration, and full support for modern technologies like TypeScript, PostCSS, and modular architecture. Unlike the cumbersome Webpack, Vite works instantly, especially in development mode, and integrates excellently with React.

In 2025, the React and Vite combination is used in most new projects: it's convenient, fast, and easily extensible. Developers no longer waste time on configuration and waiting for server restarts—everything works out of the box and almost instantly.`},{title:"Server Components in React are Changing Architecture",date:"April 28, 2025",excerpt:"With the advent of React Server Components, developers gained the ability to create parts of interfaces that are fully rendered on the server...",link:"#blog/react-server-components",content:`With the advent of React Server Components, developers gained the ability to create parts of interfaces that are fully rendered on the server, without reaching client JavaScript. This solves the problem of overloaded bundles, reduces load on the user's browser, and accelerates the first page render.

Server Components are ideal for heavy interface elements that don't need interactivity—for example, product lists, news blocks, or SEO texts. Instead of rendering them on the client, everything works on the server and is delivered already prepared.

Combined with Next.js and modern APIs, they allow building applications with high performance and excellent user experience. Of course, such architecture requires understanding what exactly lives on the server and what remains on the client, but in the long term, this only brings advantages.`},{title:"Why Learn Zustand Instead of Redux",date:"April 15, 2025",excerpt:"Redux was long the only option for global state management in React applications. However, all this came at a cost...",link:"#blog/zustand-vs-redux",content:`Redux was long the only option for global state management in React applications. It offered an understandable architecture, centralized storage, and scalability. However, all this came at a cost: excessive boilerplate, cumbersome reducers, and the need to write actions and selectors.

Zustand solves this problem. It's a modern and minimalist library that uses hook-based storage and requires no additional wrapping. In Zustand, you can describe global state in a few lines and use it without providers or middleware.

For most projects, this is more than enough. In 2025, Zustand is increasingly chosen as a lightweight alternative to Redux, especially in cases where simplicity, speed, and clean code are needed.`},{title:"Why Python Remains the Number One Language for Automation",date:"April 8, 2025",excerpt:"Python remains one of the most popular languages not just because of its convenient syntax. It's perfect for automating routine tasks...",link:"#blog/python-automation",content:`Python remains one of the most popular languages not just because of its convenient syntax. It's perfect for automating routine tasks, whether working with files, parsing websites, interacting with APIs, or generating reports.

It reads almost like English, is supported on all platforms, and for every task, there's already a ready-made library—from requests to pandas. Because of this, Python is actively used in system administration, DevOps, analytics, and machine learning.

It's especially good when you need to quickly assemble a solution from ready-made components without spending weeks on architecture. Even in the era of fast and strongly-typed languages, Python remains the first choice when it comes to development speed and code maintenance simplicity.`},{title:"Why NextJS Became the Foundation for Serious React Projects",date:"April 2, 2025",excerpt:"NextJS offers developers everything that's missing in regular React: routing without configuration, server rendering, static generation...",link:"#blog/nextjs-react-projects",content:`NextJS offers developers everything that's missing in regular React: routing without configuration, server rendering, static generation, API routes support, and Server Components. It eliminates the need to configure Webpack, routing, or Babel manually—everything works out of the box.

Furthermore, NextJS is actively developed and supported by Vercel, making it a reliable choice for production development. Large companies have long used it to build scalable applications and marketing sites.

TypeScript support, Vercel integration, built-in image optimization, data streaming, and flexibility—all this makes NextJS a key tool in the React ecosystem of 2025. If a project is serious and requires stability, speed, and SEO—NextJS is now indispensable.`}]},"cute.decoration":{ru:"Хорошего настроения и пушистых идей!",en:"Have a great mood and fluffy ideas!"},"language.switcher.title":{ru:"Переключить на English",en:"Switch to Русский"},"language.keyboard.shortcut":{ru:"Быстрое переключение: Alt+L",en:"Quick switch: Alt+L"}},D=()=>{try{return navigator.language.split("-")[0].toLowerCase()==="ru"?"ru":"en"}catch{return"ru"}},$=({children:t})=>{const[o,a]=l.useState(()=>{const r=localStorage.getItem("preferred-language");return r==="ru"||r==="en"?r:D()});l.useEffect(()=>{localStorage.setItem("preferred-language",o),document.documentElement.lang=o;const r=document.querySelector('meta[name="description"]');r&&r.setAttribute("content",o==="ru"?"Личный сайт и блог программиста nikyotodev. Заметки о программировании, веб-разработке и личных проектах.":"Personal website and blog of programmer nikyotodev. Notes about programming, web development, and personal projects."),window.dispatchEvent(new CustomEvent("language-changed",{detail:{language:o}}))},[o]);const i={language:o,setLanguage:a,translate:r=>{const c=y[r];return c&&c[o]||r},toggleLanguage:()=>{a(r=>r==="ru"?"en":"ru")}};return e.jsx(F.Provider,{value:i,children:t})},x=()=>l.useContext(F),q=({className:t="",style:o={},showLabel:a=!1,variant:s="default",playSound:n})=>{const{language:i,setLanguage:r}=x(),[c,u]=l.useState(!1),d=l.useCallback(()=>{if(!c){if(u(!0),n)n("switch");else{const g=new CustomEvent("play-sound-effect",{detail:{type:"switch"}});window.dispatchEvent(g)}setTimeout(()=>{r(i==="ru"?"en":"ru"),setTimeout(()=>{u(!1)},300)},200)}},[i,r,c,n]);l.useEffect(()=>{const g=p=>{p.altKey&&p.key==="l"&&d()};return window.addEventListener("keydown",g),()=>{window.removeEventListener("keydown",g)}},[d]);const h=()=>{switch(s){case"minimal":return e.jsxs(e.Fragment,{children:[e.jsx("span",{className:`lang-indicator ${i==="ru"?"active":""}`,children:"RU"}),e.jsx("span",{className:"separator",children:"/"}),e.jsx("span",{className:`lang-indicator ${i==="en"?"active":""}`,children:"EN"})]});case"pill":return e.jsxs("div",{className:"pill-container",children:[e.jsx("span",{className:`pill-option ${i==="ru"?"active":""}`,onClick:g=>{g.stopPropagation(),i!=="ru"&&!c&&(u(!0),n&&n("switch"),setTimeout(()=>{r("ru"),setTimeout(()=>u(!1),300)},200))},children:"RU"}),e.jsx("span",{className:`pill-option ${i==="en"?"active":""}`,onClick:g=>{g.stopPropagation(),i!=="en"&&!c&&(u(!0),n&&n("switch"),setTimeout(()=>{r("en"),setTimeout(()=>u(!1),300)},200))},children:"EN"})]});default:return e.jsxs(e.Fragment,{children:[a&&e.jsx("span",{className:"lang-label",children:"Language: "}),e.jsx("span",{className:"lang-code",children:i==="ru"?"RU":"EN"})]})}};return e.jsxs("button",{onClick:s==="pill"?void 0:d,className:`language-switcher ${s} ${t} ${c?"animating":""} sound-click`,style:o,"aria-label":"Change language",title:i==="ru"?"Switch to English":"Переключить на Русский",disabled:c,children:[h(),e.jsx("style",{children:`
        .language-switcher {
          display: flex;
          align-items: center;
          padding: 8px 12px;
          background: var(--color-panel);
          color: var(--color-accent);
          border: 1px solid var(--color-accent);
          border-radius: 4px;
          cursor: pointer;
          font-family: 'Press Start 2P', monospace;
          font-size: 12px;
          transition: all 0.2s ease;
          user-select: none;
          position: relative;
          overflow: hidden;
        }

        .language-switcher:hover {
          background: rgba(65, 249, 152, 0.1);
          box-shadow: 0 0 8px rgba(65, 249, 152, 0.5);
        }

        /* Анимация пульсации при переключении */
        .language-switcher.animating {
          animation: lang-switch-pulse 0.5s ease;
        }

        @keyframes lang-switch-pulse {
          0% {
            transform: scale(1);
            filter: brightness(1);
          }
          50% {
            transform: scale(1.05);
            filter: brightness(1.2);
            box-shadow: 0 0 15px rgba(65, 249, 152, 0.8);
          }
          100% {
            transform: scale(1);
            filter: brightness(1);
          }
        }

        /* Добавляем эффект ряби при нажатии */
        .language-switcher::after {
          content: "";
          display: block;
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
          background-image: radial-gradient(circle, rgba(65, 249, 152, 0.3) 10%, transparent 10.01%);
          background-repeat: no-repeat;
          background-position: 50%;
          transform: scale(10, 10);
          opacity: 0;
          transition: transform 0.5s, opacity 0.8s;
        }

        .language-switcher:active::after {
          transform: scale(0, 0);
          opacity: 0.6;
          transition: 0s;
        }

        .language-switcher.minimal {
          background: transparent;
          border: none;
          padding: 5px 8px;
        }

        .language-switcher.pill {
          padding: 2px;
          border-radius: 20px;
          background: rgba(24, 24, 28, 0.8);
          border: 1px solid var(--color-accent);
        }

        .lang-label {
          margin-right: 8px;
          font-size: 10px;
          opacity: 0.8;
        }

        .lang-code {
          font-weight: bold;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }

        .language-switcher.animating .lang-code {
          animation: flip-text 0.5s ease;
        }

        @keyframes flip-text {
          0% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          50% {
            transform: translateY(-5px) scale(0.8);
            opacity: 0.5;
          }
          100% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }

        .lang-indicator {
          opacity: 0.5;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .lang-indicator.active {
          opacity: 1;
          color: var(--color-accent);
          text-shadow: 0 0 5px var(--color-accent);
        }

        .language-switcher.animating .lang-indicator {
          animation: pulse-text 0.5s ease;
        }

        @keyframes pulse-text {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }

        .separator {
          margin: 0 5px;
          opacity: 0.5;
        }

        .pill-container {
          display: flex;
          width: 100%;
        }

        .pill-option {
          padding: 5px 10px;
          text-align: center;
          flex: 1;
          transition: all 0.3s ease;
          cursor: pointer;
          position: relative;
          z-index: 2;
        }

        .pill-option.active {
          background: var(--color-accent);
          color: var(--color-panel);
          border-radius: 15px;
          box-shadow: 0 0 5px var(--color-accent);
        }

        .language-switcher.animating .pill-option.active {
          animation: glow-pill 0.5s ease;
        }

        @keyframes glow-pill {
          0% {
            box-shadow: 0 0 5px var(--color-accent);
          }
          50% {
            box-shadow: 0 0 15px var(--color-accent), 0 0 30px var(--color-accent);
          }
          100% {
            box-shadow: 0 0 5px var(--color-accent);
          }
        }

        /* Add focus state for better accessibility */
        .language-switcher:focus {
          outline: none;
          box-shadow: 0 0 0 2px var(--color-panel), 0 0 0 4px var(--color-accent);
        }

        /* Add a subtle hover effect for pill options */
        .pill-option:not(.active):hover {
          color: #fff;
          text-shadow: 0 0 3px var(--color-accent);
        }
      `})]})},Y=({timeout:t=2e3})=>{const{language:o}=x(),[a,s]=l.useState(!1),[n,i]=l.useState("");return l.useEffect(()=>{i("enter"),s(!0);const r=setTimeout(()=>{i("exit"),setTimeout(()=>{s(!1)},300)},t);return()=>clearTimeout(r)},[o,t]),a?e.jsxs("div",{className:`language-notification ${n}`,children:[e.jsxs("div",{className:"notification-content",children:[e.jsx("span",{className:"language-icon",children:"🌐"}),e.jsx("span",{className:"language-text",children:o==="ru"?"Язык изменен на Русский":"Language changed to English"})]}),e.jsx("style",{children:`
        .language-notification {
          position: fixed;
          top: 70px;
          right: 20px;
          background: rgba(24, 24, 28, 0.9);
          border: 1px solid var(--color-accent);
          border-radius: 8px;
          padding: 12px 16px;
          color: var(--color-accent);
          font-family: 'Press Start 2P', monospace;
          font-size: 12px;
          z-index: 2000;
          box-shadow: 0 0 15px rgba(65, 249, 152, 0.4);
          backdrop-filter: blur(4px);
          transform: translateX(120%);
          transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .language-notification.enter {
          transform: translateX(0);
        }

        .language-notification.exit {
          transform: translateX(120%);
        }

        .notification-content {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .language-icon {
          font-size: 16px;
        }

        .language-text {
          font-size: 10px;
        }

        @media (max-width: 768px) {
          .language-notification {
            top: 60px;
            right: 10px;
            padding: 8px 12px;
          }

          .language-text {
            font-size: 8px;
          }
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .language-icon {
          animation: blink 1s infinite;
        }
      `})]}):null},_=({baseImage:t,overlayImages:o=[]})=>{const[a,s]=l.useState(0);return l.useEffect(()=>{let n;const i=()=>{clearTimeout(n),n=window.setTimeout(()=>{s(window.scrollY)},100)};return window.addEventListener("scroll",i,{passive:!0}),()=>{window.removeEventListener("scroll",i),clearTimeout(n)}},[]),e.jsxs("div",{className:"parallax-background",style:{position:"fixed",top:0,left:0,right:0,bottom:0,overflow:"hidden",zIndex:-10},children:[e.jsx("div",{className:"parallax-base-layer",style:{backgroundImage:`url(${t})`,backgroundSize:"cover",backgroundPosition:"center",position:"absolute",top:0,left:0,right:0,bottom:0,transform:`translateY(${a*.025}px)`,zIndex:-9}}),o.map((n,i)=>e.jsx("div",{className:`parallax-overlay-layer layer-${i}`,style:{backgroundImage:`url(${n.src})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",position:"absolute",top:0,left:0,right:0,bottom:0,opacity:n.opacity!==void 0?n.opacity:1,zIndex:n.zIndex||-8+i,transform:`translateY(${a*.05*n.speed}px)`,pointerEvents:"none"}},i)),e.jsx("div",{className:"scanline-effect",style:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundImage:"linear-gradient(to bottom, rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.15) 50%)",backgroundSize:"100% 4px",opacity:.08,zIndex:-5,pointerEvents:"none"}})]})};k.memo(_);const T=({children:t,className:o="",intensity:a=20,style:s={},disabled:n=!1})=>{const i=l.useRef(null),[r,c]=l.useState({x:0,y:0}),[u,d]=l.useState(!1),[h,g]=l.useState(!0);l.useEffect(()=>{const v=window.matchMedia("(hover: none)");g(!v.matches)},[]);const p=v=>{if(n||!h||!i.current)return;const b=i.current.getBoundingClientRect(),P=v.clientX-(b.left+b.width/2),C=v.clientY-(b.top+b.height/2),R=P/b.width*a,E=C/b.height*a;c({x:R,y:E})},m=()=>{n||!h||(c({x:0,y:0}),d(!1))},f=()=>{n||!h||d(!0)},S={transform:u?`translate(${r.x}px, ${r.y}px)`:"translate(0, 0)",transition:u?"transform 0.2s ease-out":"transform 0.3s ease",...s};return e.jsx("div",{ref:i,className:`magnetic-hover ${o}`,style:S,onMouseMove:p,onMouseLeave:m,onMouseEnter:f,children:t})},A=({children:t,className:o="",style:a={},glowColor:s="var(--color-accent)",glowOpacity:n=.15,disabled:i=!1})=>{const r=l.useRef(null),[c,u]=l.useState(!1),[d,h]=l.useState(!0);l.useEffect(()=>{const m=window.matchMedia("(hover: none)");h(!m.matches)},[]);const g=()=>{i||!d||u(!0)},p=()=>{i||!d||u(!1)};return e.jsxs("div",{ref:r,className:`neuro-glow-container ${o}`,style:{position:"relative",overflow:"hidden",...a},onMouseEnter:g,onMouseLeave:p,children:[e.jsx("div",{className:"neuro-glow-element",style:{position:"relative",zIndex:2},children:t}),c&&e.jsx("div",{className:"neuro-glow",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:1,background:`radial-gradient(
              circle 50% at center center,
              ${s} 0%,
              transparent 70%
            )`,opacity:n,mixBlendMode:"screen"}})]})},V=k.memo(({children:t,type:o="both",className:a="",style:s={},magneticIntensity:n=20,glowColor:i="var(--color-accent)",glowOpacity:r=.15,disabled:c=!1})=>{const u=window.innerWidth<=768,d=c||u;return o==="magnetic"?e.jsx(T,{className:a,style:s,intensity:n,disabled:d,children:t}):o==="neuroglow"?e.jsx(A,{className:a,style:s,glowColor:i,glowOpacity:r,disabled:d,children:t}):e.jsx(T,{className:a,style:s,intensity:n,disabled:d,children:e.jsx(A,{glowColor:i,glowOpacity:r,disabled:d,children:t})})}),j=({children:t,animation:o="fade",delay:a=0,duration:s=500,threshold:n=.01,once:i=!0,className:r="",style:c={},customAnimation:u="",disabled:d=!1,easing:h="cubic-bezier(0.16, 1, 0.3, 1)"})=>{const g=l.useRef(null),[p,m]=l.useState(!1),[f,S]=l.useState(!1);l.useEffect(()=>{if(d){m(!0);return}const R=new IntersectionObserver(E=>{const[M]=E;M.isIntersecting?(m(!0),i&&(S(!0),R.unobserve(M.target))):!i&&f&&m(!1)},{threshold:n,rootMargin:"0px 0px -100px 0px"});return g.current&&R.observe(g.current),()=>{g.current&&R.unobserve(g.current)}},[n,i,f,d]);const v=()=>{switch(o){case"fade":return{opacity:0};case"slide-up":return{opacity:0,transform:"translateY(30px)"};case"slide-down":return{opacity:0,transform:"translateY(-30px)"};case"slide-left":return{opacity:0,transform:"translateX(30px)"};case"slide-right":return{opacity:0,transform:"translateX(-30px)"};case"scale":return{opacity:0,transform:"scale(0.9)"};case"rotate":return{opacity:0,transform:"rotate(5deg) scale(0.95)"};case"custom":return{animation:"none"};default:return{}}},b=()=>o==="custom"?{animation:`${u} ${s}ms ${h} ${a}ms forwards`}:{opacity:1,transform:"translate(0) rotate(0) scale(1)"},C={...{...c,transitionProperty:"opacity, transform",transitionDuration:`${s}ms`,transitionTimingFunction:h,transitionDelay:`${a}ms`,willChange:"opacity, transform"},...p||i&&f?b():v()};return e.jsx("div",{ref:g,className:`scroll-animation ${o} ${r}`,style:d?c:C,children:t})},J=({title:t,date:o,excerpt:a,content:s,link:n})=>{const[i,r]=l.useState(!1),{translate:c}=x(),u=()=>{r(!i)};return e.jsxs("div",{className:"blog-card cyber-edge-effect",style:{position:"relative",transition:"transform 0.3s ease, box-shadow 0.3s ease"},children:[e.jsx("div",{className:"blog-date-container",children:e.jsx("span",{className:"blog-date",children:o})}),e.jsx("h3",{className:"blog-title",children:t}),e.jsx("div",{className:"blog-excerpt",children:i?e.jsx("div",{className:"blog-content expanded",dangerouslySetInnerHTML:{__html:s.replace(/\n/g,"<br/>")}}):e.jsx("p",{children:a})}),e.jsx("button",{onClick:u,className:"blog-link cyber-button-small",children:c(i?"blog.collapse":"blog.read.more")}),e.jsx("div",{className:"card-glow"}),e.jsx("style",{jsx:!0,children:`
        .blog-card {
          background: rgba(27, 27, 34, 0.8);
          border: 2px solid #303344;
          border-radius: 8px;
          padding: 18px;
          margin-bottom: 20px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
          overflow: hidden;
        }

        .blog-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4), 0 0 15px rgba(65, 249, 152, 0.2);
        }

        .cyber-edge-effect {
          position: relative;
        }

        .cyber-edge-effect::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(65, 249, 152, 0.8), transparent);
        }

        .blog-date-container {
          display: inline-block;
          padding: 3px 8px;
          background: rgba(40, 44, 80, 0.7);
          border-radius: 4px;
          margin-bottom: 10px;
        }

        .blog-date {
          color: #a0a0ff;
          font-size: 11px;
          letter-spacing: 1px;
        }

        .blog-title {
          color: var(--color-accent);
          font-size: 16px;
          margin-bottom: 10px;
          font-family: 'Press Start 2P', monospace;
          text-shadow: 0 0 5px rgba(65, 249, 152, 0.3);
        }

        .blog-excerpt {
          color: var(--color-text);
          font-size: 14px;
          line-height: 1.5;
          margin-bottom: 15px;
        }

        .blog-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.6s ease, opacity 0.3s ease;
          opacity: 0;
          font-family: inherit;
        }

        .blog-content.expanded {
          max-height: 2000px;
          opacity: 1;
          padding: 10px 0;
          white-space: pre-line;
        }

        .cyber-button-small {
          display: inline-block;
          padding: 5px 12px;
          background: transparent;
          color: var(--color-accent);
          border: 1px solid var(--color-accent);
          font-family: inherit;
          font-size: 12px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.3s;
          border-radius: 4px;
        }

        .cyber-button-small::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(65, 249, 152, 0.2), transparent);
          transition: left 0.5s ease;
        }

        .cyber-button-small:hover {
          background: var(--color-accent);
          color: #121212;
          box-shadow: 0 0 10px rgba(65, 249, 152, 0.5);
        }

        .cyber-button-small:hover::before {
          left: 100%;
        }

        .card-glow {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background: radial-gradient(circle at 50% 50%, rgba(65, 249, 152, 0.15), transparent 60%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
          z-index: -1;
        }

        .blog-card:hover .card-glow {
          opacity: 1;
        }
      `})]})},K=({value:t})=>e.jsx("div",{style:{width:"100%",height:"6px",backgroundColor:"#152028",borderRadius:"3px",marginTop:"5px",position:"relative",overflow:"hidden",boxShadow:"inset 0 1px 3px rgba(0, 0, 0, 0.3)"},children:e.jsx("div",{style:{height:"100%",width:`${t*10}%`,backgroundColor:"#41f998",boxShadow:"0 0 5px #41f998, 0 0 10px #41f998",borderRadius:"3px",transition:"width 0.8s ease-in-out"}})}),z=({name:t,level:o,logo:a})=>e.jsxs("div",{style:{marginBottom:"12px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:"4px"},children:[e.jsx("img",{src:a,alt:`${t} logo`,style:{width:"20px",height:"20px",marginRight:"8px",objectFit:"contain",filter:"drop-shadow(0 0 2px rgba(65, 249, 152, 0.5))"}}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:[e.jsx("span",{style:{color:"#dadada",fontSize:"14px"},children:t}),e.jsxs("span",{style:{color:"#41f998",fontSize:"14px",textShadow:"0 0 3px rgba(65, 249, 152, 0.7)"},children:[o,"/10"]})]})]}),e.jsx(K,{value:o})]}),X=()=>{const{language:t}=x(),o={pycharm:"https://resources.jetbrains.com/storage/products/pycharm/img/meta/pycharm_logo_300x300.png",figma:"https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",cursor:"https://sun9-14.userapi.com/impg/uhfnJfKN-NXueY-uIxBYN3p8oOWSsM7ZuroVRg/1sIQEc2Z09o.jpg?size=800x800&quality=95&sign=bf75d024c12504c02533ea3a6bc333d6&type=album",framer:"https://sun9-49.userapi.com/impg/F9-F4SL8JnZ8o-JVMQ1s-KoUDHQAry5XuRCj7A/Tbo_DU7pwuc.jpg?size=1170x700&quality=95&sign=ae061fbcaf2d940bc79b6a1fbdd5d0b5&type=album",vscode:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png"},a={hardSkills:{ru:"HARD SKILLS",en:"HARD SKILLS"},softSkills:{ru:"SOFT SKILLS",en:"SOFT SKILLS"},tools:{ru:"ИНСТРУМЕНТЫ",en:"TOOLS"},languages:{ru:"ЯЗЫКИ",en:"LANGUAGES"},toolsDescription:{ru:"Указаны все инструменты, применяемые в работе. Некоторые из них используются реже — в зависимости от запроса.",en:"All tools used in work are listed. Some of them are used less frequently — depending on the request."},hardSkillsList:{ru:["• Пишу код на Python, немного разбираюсь в JavaScript (боты, сайты, парсеры, автоматизация);","• Основная IDE — PyCharm, иногда Cursor (вайбкодерам привет);","• Опыт в создании Telegram-ботов;","• Знание C#, Excel, Word;","• Понимание композиции;","• Высокая насмотренность;","• Люблю автоматизировать всё, что можно."],en:["• I write code in Python, know a bit of JavaScript (bots, websites, parsers, automation);","• Main IDE — PyCharm, sometimes Cursor (hello to vibe-coders);","• Experience in creating Telegram bots;","• Knowledge of C#, Excel, Word;","• Understanding of composition;","• High visual literacy;","• I love to automate everything possible."]},softSkillsList:{ru:["• Самоучка — учусь каждый день и не стесняюсь гуглить;","• Коммуникабельный парень;","• Открыт к идеям и здоровой критике;","• Умею работать сам, но и в команде не потеряюсь;","• Буду защищать свой продукт до конца."],en:["• Self-taught — I learn every day and am not ashamed to Google;","• Communicative guy;","• Open to ideas and healthy criticism;","• I can work independently, but will not get lost in a team;","• I will defend my product to the end."]},languageNames:{ru:{russian:"Русский",english:"Английский",german:"Немецкий"},en:{russian:"Russian",english:"English",german:"German"}},languageLevels:{ru:{russian:"родной",english:"50%",german:"25%"},en:{russian:"native",english:"50%",german:"25%"}}};return e.jsxs("div",{style:{padding:"20px",background:"linear-gradient(135deg, #121212 0%, #0A0A0A 50%, #060606 100%)",borderRadius:"8px",boxShadow:"0 4px 15px rgba(0, 0, 0, 0.5), 0 0 0 1px #266054",backdropFilter:"blur(5px)",border:"1px solid #222"},children:[e.jsxs("div",{style:{marginBottom:"25px"},children:[e.jsx("h3",{style:{color:"#41f998",fontSize:"16px",marginBottom:"15px",fontWeight:"bold",textShadow:"0 0 5px #41f998",letterSpacing:"1px"},children:a.hardSkills[t]}),e.jsx("ul",{style:{listStyleType:"none",padding:0,margin:0,color:"#dadada",fontSize:"14px",lineHeight:"1.6"},children:a.hardSkillsList[t].map((s,n)=>e.jsx("li",{style:{marginBottom:n<a.hardSkillsList[t].length-1?"5px":0},children:s},n))})]}),e.jsxs("div",{style:{marginBottom:"25px"},children:[e.jsx("h3",{style:{color:"#41f998",fontSize:"16px",marginBottom:"15px",fontWeight:"bold",textShadow:"0 0 5px #41f998",letterSpacing:"1px"},children:a.softSkills[t]}),e.jsx("ul",{style:{listStyleType:"none",padding:0,margin:0,color:"#dadada",fontSize:"14px",lineHeight:"1.6"},children:a.softSkillsList[t].map((s,n)=>e.jsx("li",{style:{marginBottom:n<a.softSkillsList[t].length-1?"5px":0},children:s},n))})]}),e.jsxs("div",{style:{marginBottom:"25px"},children:[e.jsx("h3",{style:{color:"#41f998",fontSize:"16px",marginBottom:"15px",fontWeight:"bold",textShadow:"0 0 5px #41f998",letterSpacing:"1px"},children:a.tools[t]}),e.jsxs("div",{children:[e.jsx(z,{name:"PyCharm",level:9,logo:o.pycharm}),e.jsx(z,{name:"Figma",level:7,logo:o.figma}),e.jsx(z,{name:"Cursor",level:6,logo:o.cursor}),e.jsx(z,{name:"Framer",level:7,logo:o.framer}),e.jsx(z,{name:"VS Code",level:5,logo:o.vscode})]}),e.jsx("div",{style:{fontSize:"12px",color:"#888",marginTop:"10px",fontStyle:"italic"},children:a.toolsDescription[t]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{color:"#41f998",fontSize:"16px",marginBottom:"15px",fontWeight:"bold",textShadow:"0 0 5px #41f998",letterSpacing:"1px"},children:a.languages[t]}),e.jsxs("div",{style:{color:"#dadada",fontSize:"14px",lineHeight:"1.6"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"8px"},children:[e.jsx("span",{children:a.languageNames[t].russian}),e.jsx("span",{style:{color:"#41f998",textShadow:"0 0 3px rgba(65, 249, 152, 0.7)"},children:a.languageLevels[t].russian})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"8px"},children:[e.jsx("span",{children:a.languageNames[t].english}),e.jsx("span",{style:{color:"#41f998",textShadow:"0 0 3px rgba(65, 249, 152, 0.7)"},children:a.languageLevels[t].english})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{children:a.languageNames[t].german}),e.jsx("span",{style:{color:"#41f998",textShadow:"0 0 3px rgba(65, 249, 152, 0.7)"},children:a.languageLevels[t].german})]})]})]})]})},U=k.memo(({isSnowing:t})=>{const o=l.useRef(null),a=l.useRef(null),s=l.useRef([]);return l.useEffect(()=>{const n=o.current;if(!n)return;const i=n.getContext("2d");if(!i)return;n.width=window.innerWidth,n.height=window.innerHeight;class r{constructor(d,h,g,p){w(this,"x");w(this,"y");w(this,"speed");w(this,"size");w(this,"opacity");w(this,"swing");w(this,"swingSpeed");w(this,"swingPos");this.x=d,this.y=h,this.speed=g,this.size=p,this.opacity=Math.random()*.5+.3,this.swing=Math.random()*3+1,this.swingSpeed=Math.random()*.02+.01,this.swingPos=Math.random()*Math.PI*2}update(){this.swingPos+=this.swingSpeed,this.x+=Math.sin(this.swingPos)*this.swing*.1,this.y+=this.speed,n&&this.y>n.height&&(this.y=0-this.size,this.x=n?Math.random()*n.width:0,this.speed=Math.random()*1.5+.5,this.swing=Math.random()*3+1,this.swingSpeed=Math.random()*.02+.01)}draw(){i.beginPath(),i.arc(this.x,this.y,this.size,0,Math.PI*2),i.fillStyle=`rgba(255, 255, 255, ${this.opacity})`,i.fill()}}function c(){s.current=[];const d=window.innerWidth<=768?50:100;for(let h=0;h<d;h++){const g=n?Math.random()*n.width:0,p=n?Math.random()*n.height:0,m=Math.random()*1.5+.5,f=Math.random()*2+1;s.current.push(new r(g,p,m,f))}}if(t){let u=function(p){const m=p,f=m-d,b=1e3/(window.innerWidth<=768?20:40);f>b&&(d=m-f%b,i&&n&&(i.clearRect(0,0,n.width,n.height),s.current.forEach(P=>{P.update(),P.draw()}))),a.current=requestAnimationFrame(u)};c();let d=0;a.current=requestAnimationFrame(u);let h=null;const g=()=>{h&&window.clearTimeout(h),h=window.setTimeout(()=>{n&&(n.width=window.innerWidth,n.height=window.innerHeight,c())},200)};return window.addEventListener("resize",g),()=>{a.current&&cancelAnimationFrame(a.current),h&&window.clearTimeout(h),window.removeEventListener("resize",g)}}else return i&&n&&i.clearRect(0,0,n.width,n.height),()=>{}},[t]),e.jsx("canvas",{ref:o,style:{position:"fixed",top:0,left:0,zIndex:0,pointerEvents:"none"}})});function I(){const[t,o]=l.useState(!1),[a,s]=l.useState(!1);return l.useEffect(()=>{const n=()=>{const i=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);o(i||window.innerWidth<=768),s(/iPhone|iPad|iPod/i.test(navigator.userAgent))};return n(),window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),{isMobile:t,isIOS:a}}const N={bg:"https://sun9-79.userapi.com/impg/atLs9Bs4WbUN9S36NnNjezi9VJMveCaFvdO-Sw/o2hXCRL4C-c.jpg?size=1280x720&quality=95&sign=0dc28f69fd3bf80cf2bbd8f5eace38ee&type=album",avatar:"https://sun9-56.userapi.com/impg/buBqW6ydvyVJBYoTPYhhX55YSo6H060h6WW8dA/3c2aOAdgx5Y.jpg?size=1024x1024&quality=95&sign=42611c9ef47bd3716a0cf0ce573112f8&type=album",vkIcon:"https://sun9-40.userapi.com/impg/yxF5XT-6fUN-LzdgZMmOhqur22EDC-EdN1pPag/cDPWaLdRwsE.jpg?size=301x300&quality=95&sign=96be5bbc9402b69f79b9029c36b6ca9f&type=album",telegramIcon:"https://sun9-11.userapi.com/impg/L7hzTFmuktNXqHILlFF_BZw_cIIp4vyPQLwvpQ/8bM8e_JEIPg.jpg?size=1000x1000&quality=95&sign=280292e4b530942d32c4aecab73fe696&type=album",mailIcon:"https://sun9-23.userapi.com/impg/16M6FGZgs1aQLhD9F8CwTAH3-QwaswFGkZxl3w/bXrtv3uSjxE.jpg?size=1042x980&quality=95&sign=9c8c9874758883c7e1cf49017bab94c0&type=album"},O=k.createContext({navigate:()=>{},currentPath:"/"}),L=()=>k.useContext(O),G={click:"https://ext.same-assets.com/3265914504/1246531987.mp3",hover:"https://ext.same-assets.com/3265914504/2396835127.mp3",switch:"https://ext.same-assets.com/3265914504/3478912567.mp3",success:"https://ext.same-assets.com/3265914504/4567891234.mp3",error:"https://ext.same-assets.com/3265914504/5678912345.mp3"},Z=()=>{const t=l.useRef({}),o=l.useCallback(s=>{if(!t.current[s]){const n=new Audio(G[s]);n.volume=.3,n.load(),t.current[s]=n}return t.current[s]},[]),a=l.useCallback(s=>{const n=o(s);n.currentTime=0,n.play().catch(()=>{})},[o]);return l.useEffect(()=>()=>{Object.values(t.current).forEach(s=>{s.pause(),s.src=""}),t.current={}},[]),{playSound:a}};function Q(){const{isMobile:t}=I(),[o,a]=l.useState(!0),s=t?34:44,n=t?4:6,i="nikyotodev".split("").map((r,c)=>c===3&&o?e.jsx("span",{style:{display:"inline-block",transform:"translateY(10px) rotate(8deg)",position:"relative",zIndex:2,animation:"hanging-letter 3s ease-in-out infinite",filter:"drop-shadow(0 3px 4px rgba(0,0,0,0.5))",cursor:"pointer"},onClick:()=>a(!o),children:r},c):e.jsx("span",{style:{display:"inline-block",position:"relative"},children:r},c));return e.jsxs("div",{style:{textAlign:"center",marginBottom:t?5:10},children:[e.jsx("span",{style:{fontFamily:"Press Start 2P",fontSize:s,color:"#3ffeff",letterSpacing:n,textShadow:"0 0 4px #41f9f9, 0 0 16px #43dede, 0 0 26px #266054, 0 0 32px #57fff5",display:"inline-block",lineHeight:1.1,filter:"drop-shadow(0 0 12px #4afdee99) drop-shadow(0 0 28px #3574e6b7)",animation:"dimden-glow 2.2s ease-in-out infinite alternate",position:"relative"},className:"dimden-glow-logo",children:i}),e.jsx("style",{children:`
          @keyframes dimden-glow {
            0% {
              color: #3ffeff;
              text-shadow:
                0 0 4px #41f9f9,
                0 0 16px #43dede,
                0 0 26px #266054,
                0 0 32px #57fff5;
              filter: drop-shadow(0 0 12px #4afdee99) drop-shadow(0 0 28px #3574e6b7);
            }
            50% {
              color: #baffff;
              text-shadow:
                0 0 8px #a1f9f9,
                0 0 32px #a3dede,
                0 0 52px #66e0d4,
                0 0 64px #a7fff5;
              filter: drop-shadow(0 0 24px #bafdee99) drop-shadow(0 0 56px #35e6e6b7);
            }
            100% {
              color: #3ffeff;
              text-shadow:
                0 0 4px #41f9f9,
                0 0 16px #43dede,
                0 0 26px #266054,
                0 0 32px #57fff5;
              filter: drop-shadow(0 0 12px #4afdee99) drop-shadow(0 0 28px #3574e6b7);
            }
          }
          @keyframes hanging-letter {
            0% { transform: translateY(10px) rotate(8deg); }
            50% { transform: translateY(15px) rotate(12deg); }
            100% { transform: translateY(10px) rotate(8deg); }
          }
        `})]})}const ee=()=>{const{isMobile:t}=I(),{translate:o,language:a}=x();return e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",alignItems:"flex-start",flexDirection:t?"column":"row"},children:[e.jsx("div",{style:{alignSelf:t?"center":"flex-start",marginBottom:t?20:0},children:e.jsx("img",{src:N.avatar,alt:"Nikyotodev avatar",width:t?82:120,height:t?82:120,style:{background:"#0b151a",borderRadius:"12px",padding:"3px",border:"2px solid rgba(65, 249, 152, 0.4)",boxShadow:"0 0 15px rgba(65, 249, 152, 0.2)",transition:"all 0.3s ease",imageRendering:"pixelated"},className:"modern-avatar-hover"})}),e.jsxs("div",{style:{marginLeft:t?0:32,textAlign:t?"center":"left"},children:[e.jsx("div",{style:{fontFamily:"'Press Start 2P', monospace",fontSize:t?16:20,color:"#3ca67f",textShadow:"0 0 6px #57fff5, 0 0 28px #266054",marginBottom:13},children:e.jsx("span",{style:{fontSize:t?15:22,display:"block",lineHeight:1.4},className:"glitch-text typing-animation","data-text":o("welcome"),children:o("welcome")})}),e.jsx("div",{style:{color:"#dadada",fontSize:t?14:17,marginBottom:12,fontFamily:"inherit",lineHeight:1.8},dangerouslySetInnerHTML:{__html:o("intro.text")}})]})]}),e.jsxs(j,{animation:"slide-up",delay:50,duration:300,children:[e.jsx("div",{style:{color:"#3ca67f",fontWeight:700,margin:"12px 0 14px 0",fontSize:15,fontFamily:"inherit"},children:o("facts.title")}),e.jsx("ul",{style:{color:"#d9dbdc",marginBottom:20,fontFamily:"inherit",fontSize:t?13:15,paddingLeft:t?28:56,lineHeight:1.7,gap:12},children:y["facts.list"][a].map((s,n)=>e.jsx("li",{dangerouslySetInnerHTML:{__html:s},style:{color:"#dadada"}},n))})]}),e.jsxs(j,{animation:"slide-up",delay:100,duration:300,children:[e.jsx("div",{style:{color:"#3ca67f",fontWeight:700,margin:"12px 0 14px 0",fontSize:15,fontFamily:"inherit"},children:o("activities.title")}),e.jsx("ul",{style:{color:"#d9dbdc",marginBottom:20,fontFamily:"inherit",fontSize:t?13:15,paddingLeft:t?28:56,lineHeight:1.7},children:y["activities.list"][a].map((s,n)=>e.jsx("li",{dangerouslySetInnerHTML:{__html:s},style:{color:"#dadada"}},n))})]}),e.jsxs(j,{animation:"slide-up",delay:150,duration:300,children:[e.jsx("div",{style:{color:"#3ca67f",fontWeight:700,margin:"12px 0 14px 0",fontSize:15,fontFamily:"inherit"},children:o("resume.title")}),e.jsx("ul",{style:{color:"#d9dbdc",marginBottom:36,fontFamily:"inherit",fontSize:t?13:15,paddingLeft:t?28:56,lineHeight:1.7},children:y["resume.list"][a].map((s,n)=>e.jsx("li",{dangerouslySetInnerHTML:{__html:s},style:{color:"#dadada"}},n))})]}),e.jsx(j,{animation:"slide-up",delay:200,duration:300,children:e.jsx("div",{style:{background:"#2c1a1a",color:"#ffe66d",padding:t?"14px 16px 12px 16px":"18px 18px 14px 18px",borderRadius:9,fontSize:t?12.5:14,border:"2px solid #902e2e",marginBottom:24,fontWeight:700,fontFamily:"inherit",boxShadow:"0 4px 16px #000a, 0 0 18px #da161699"},dangerouslySetInnerHTML:{__html:o("contact.box")}})})]})},te=()=>{const{translate:t}=x(),o=[{name:"nikyotodev.ru",status:"OK"},{name:"proxy-server",status:"OK"},{name:"mail-server",status:"OK"},{name:"bot",status:"OK"},{name:"owopbot",status:"OK"},{name:"nekoweb",status:"OK"},{name:"atabook",status:"OK"},{name:"lune",status:"OK"}];return e.jsx(j,{animation:"fade",delay:300,children:e.jsxs("div",{style:{marginTop:"30px",fontFamily:"inherit",padding:"15px",borderRadius:"8px",position:"relative",background:"linear-gradient(135deg, #121212 0%, #0A0A0A 50%, #060606 100%)",boxShadow:"0 4px 10px rgba(0, 0, 0, 0.4), 0 0 0 1px #266054",border:"1px solid #222"},className:"system-status-panel",children:[e.jsxs("div",{className:"neon-text",style:{fontSize:"14px",marginBottom:"10px",textTransform:"uppercase",textAlign:"center"},children:[t("systems.status")," ",e.jsx("span",{style:{color:"var(--color-accent)"},children:"OK"})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:"5px 15px",fontSize:"12px"},children:o.map((a,s)=>e.jsxs("div",{style:{display:"flex",alignItems:"center"},className:"status-item",children:[e.jsxs("span",{style:{color:"var(--color-accent)",marginRight:"8px",textShadow:"0 0 5px #41f998, 0 0 15px #41f998",display:"inline-flex"},className:"status-indicator",children:["[ ",e.jsx("span",{style:{color:"#41f998"},children:"OK"})," ]"]}),e.jsx("span",{style:{color:"var(--color-text)"},className:"status-name",children:a.name})]},s))}),e.jsx("style",{children:`
          .system-status-panel {
            transition: box-shadow 0.3s ease, transform 0.3s ease;
          }

          .system-status-panel:hover {
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.6), 0 0 0 1px #41f998;
            transform: translateY(-2px);
          }

          .status-item {
            padding: 4px 6px;
            border-radius: 4px;
            transition: background-color 0.2s ease, transform 0.2s ease;
            cursor: default;
          }

          .status-item:hover {
            background-color: rgba(65, 249, 152, 0.1);
            transform: translateX(3px);
          }

          .status-item:hover .status-indicator {
            text-shadow: 0 0 8px #41f998, 0 0 20px #41f998;
          }

          .status-item:hover .status-name {
            color: white;
          }
        `})]})})},ne=()=>{const[t,o]=l.useState(""),{translate:a}=x();return l.useEffect(()=>{const s=window.setInterval(()=>{const i=new Date().toLocaleString("ru-RU",{timeZone:"Europe/Moscow",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1});o(i)},1e3);return()=>clearInterval(s)},[]),e.jsxs("div",{style:{fontFamily:"inherit",fontSize:"13px",color:"var(--color-text)"},children:[a("moscow.time")," ",e.jsx("span",{style:{color:"var(--color-accent)"},children:t})]})},ae=()=>{const[t,o]=l.useState({phase:"Loading...",azimuth:0,altitude:0,illumination:0}),{translate:a,language:s}=x(),n=l.useRef(null),i=(r,c)=>s==="ru"?r<=.01?"Новолуние":r>=.99?"Полнолуние":r<.5?r<.25?"Растущий серп":"Первая четверть":r>.75?"Последняя четверть":"Убывающая Луна":r<=.01?"New Moon":r>=.99?"Full Moon":r<.5?r<.25?"Waxing Crescent":"First Quarter":r>.75?"Last Quarter":"Waning Moon";return l.useEffect(()=>{const r=()=>{const u=new Date,h=(u.getTime()-new Date(2e3,0,1).getTime())/(1e3*60*60*24)%29.53/29.53,g=(1-Math.cos(h*2*Math.PI))/2,p=u.getHours()+u.getMinutes()/60,m=p/24*360,S=60-Math.abs(12-p)*5,v=i(g);o({phase:v,azimuth:m,altitude:S,illumination:g}),n.current&&(n.current.style.transform=`rotate(${m}deg)`)};r();const c=window.setInterval(r,6e4);return()=>clearInterval(c)},[s]),e.jsxs("div",{style:{fontFamily:"inherit",fontSize:"13px",color:"var(--color-text)",marginTop:"10px"},children:[e.jsxs("div",{children:[a("moon.phase")," ",e.jsx("span",{style:{color:"var(--color-accent)"},children:t.phase})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",marginTop:"5px"},children:[e.jsxs("div",{title:s==="ru"?"Определяет направление движения небесного тела":"Determines the direction of movement of a celestial body",style:{cursor:"help",marginRight:"10px"},children:[a("moon.azimuth")," ",e.jsxs("span",{style:{color:"var(--color-accent)"},children:[Math.round(t.azimuth),"°"]})]}),e.jsxs("div",{title:s==="ru"?"Сколько градусов от горизонта":"How many degrees from the horizon",style:{cursor:"help"},children:[a("moon.altitude")," ",e.jsxs("span",{style:{color:"var(--color-accent)"},children:[Math.round(t.altitude),"°"]})]})]}),e.jsx("div",{style:{marginTop:"10px",display:"flex",justifyContent:"center"},children:e.jsx("div",{ref:n,style:{width:"40px",height:"40px",borderRadius:"50%",background:`linear-gradient(90deg,
              #f9f9f9 0%,
              #f9f9f9 ${t.illumination*100}%,
              #34344a ${t.illumination*100}%,
              #34344a 100%)`,boxShadow:"0 0 10px rgba(255, 255, 255, 0.5)",transition:"transform 0.5s ease-in-out, box-shadow 0.3s ease",marginBottom:"5px",cursor:"pointer"},className:"interactive-moon",title:s==="ru"?"Текущая фаза Луны":"Current Moon Phase"})}),e.jsx("style",{children:`
        .interactive-moon {
          position: relative;
        }

        .interactive-moon:hover {
          transform: scale(1.2) !important;
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.8), 0 0 30px rgba(65, 249, 152, 0.4) !important;
        }

        .interactive-moon::after {
          content: '';
          position: absolute;
          top: -5px;
          left: -5px;
          right: -5px;
          bottom: -5px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(65, 249, 152, 0.2), transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }

        .interactive-moon:hover::after {
          opacity: 1;
        }
      `})]})};function oe(){const{navigate:t,currentPath:o}=L(),{isMobile:a}=I(),{translate:s}=x(),n=()=>{o==="/blog"?(window.location.href="#/",setTimeout(()=>{t("/")},10)):(window.location.href="#/blog",setTimeout(()=>{t("/blog")},10))};return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{color:"#3ca67f",fontSize:a?"1.1em":"1.3em",fontWeight:"bold",marginBottom:"15px",textShadow:"0 0 5px #3ca67f",textAlign:"center"},className:"hover-glow",children:s("online")}),e.jsx("div",{style:{textAlign:"center",marginBottom:"20px"},children:e.jsx(V,{type:"both",glowOpacity:.2,glowSize:60,magneticIntensity:15,children:e.jsx("button",{className:"pixel-button hover-glow cyberpunk-button",style:{width:"100%",fontSize:a?15:void 0,padding:a?"10px 0":void 0},onClick:n,children:s(o==="/blog"?"home.button":"blog.button")})})}),e.jsxs("div",{style:{marginBottom:"20px",textAlign:"center"},children:[e.jsx("a",{href:"https://vk.com/nikyoto",target:"_blank",rel:"noopener noreferrer",style:{marginRight:"10px",display:"inline-block",verticalAlign:"middle"},className:"social-icon-link",title:"VK",children:e.jsx("img",{src:N.vkIcon,alt:"VK",style:{width:"32px",height:"32px",borderRadius:"50%",objectFit:"cover",objectPosition:"center",transition:"all 0.3s ease"},className:"hover-scale glitch-image social-icon"})}),e.jsx("a",{href:"https://t.me/nikyotodev",target:"_blank",rel:"noopener noreferrer",style:{marginRight:"10px",display:"inline-block",verticalAlign:"middle"},className:"social-icon-link",title:"Telegram",children:e.jsx("img",{src:N.telegramIcon,alt:"Telegram",style:{width:"32px",height:"32px",borderRadius:"50%",objectFit:"cover",objectPosition:"center",transition:"all 0.3s ease"},className:"hover-scale glitch-image social-icon"})}),e.jsx("a",{href:"mailto:richardbush@cocaine.ninja",style:{display:"inline-block",verticalAlign:"middle"},className:"social-icon-link",title:"Email",children:e.jsx("img",{src:N.mailIcon,alt:"Email",style:{width:"32px",height:"32px",borderRadius:"50%",objectFit:"cover",objectPosition:"center",transition:"all 0.3s ease"},className:"hover-scale glitch-image social-icon"})}),e.jsx("style",{children:`
          .social-icon-link {
            position: relative;
            display: inline-block;
          }

          .social-icon-link::before {
            content: '';
            position: absolute;
            top: -6px;
            left: -6px;
            right: -6px;
            bottom: -6px;
            border-radius: 50%;
            background: linear-gradient(45deg, #41f998, #01cdfe);
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: -1;
          }

          .social-icon-link:hover::before {
            opacity: 0.6;
            animation: rotate 3s linear infinite;
          }

          .social-icon {
            z-index: 1;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
          }

          .social-icon:hover {
            transform: scale(1.15) !important;
          }

          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `})]}),e.jsx(ne,{}),e.jsx(ae,{}),e.jsx("div",{style:{marginTop:"20px"},children:e.jsx(X,{})})]})}const ie=()=>{const{navigate:t}=L(),{translate:o,language:a}=x(),{isMobile:s}=I(),n=y["blog.posts"][a],i=()=>{window.location.href="#/",setTimeout(()=>{t("/")},10)};return e.jsxs("div",{style:{marginTop:"30px",fontFamily:"inherit"},children:[e.jsx(j,{animation:"fade",delay:50,duration:300,children:e.jsxs("div",{style:{color:"var(--color-green)",fontSize:"14px",marginBottom:"15px",textTransform:"uppercase",paddingBottom:"8px",borderBottom:"1px solid rgba(65, 249, 152, 0.2)",position:"relative",display:"inline-block"},className:"typing-effect",children:[o("blog.title"),e.jsx("span",{style:{position:"absolute",width:"50%",height:"2px",background:"linear-gradient(90deg, rgba(65, 249, 152, 0.8), transparent)",bottom:"-1px",left:"0"}})]})}),e.jsx("div",{className:"blog-list",children:n.map((r,c)=>e.jsx(j,{animation:"slide-up",delay:100+c*50,duration:300,threshold:.05,children:e.jsx(J,{...r},c)},c))}),e.jsx(j,{animation:"fade",delay:300,duration:300,children:e.jsx("div",{style:{textAlign:"center",marginTop:"30px"},children:e.jsx("button",{className:"pixel-button hover-glow cyberpunk-button",style:{marginRight:"10px",padding:s?"8px 16px":"10px 20px"},onClick:i,children:o("home.button")})})})]})},se=()=>{const{navigate:t}=L(),{isMobile:o}=I();return l.useEffect(()=>{document.body.style.overflow="hidden";const a=document.getElementById("root");if(a){const s={...a.style};return Object.assign(a.style,{maxWidth:"100vw",width:"100vw",height:"100vh",overflow:"hidden",padding:"0",margin:"0"}),()=>{Object.assign(a.style,s),document.body.style.overflow=""}}},[]),e.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"#0d0d0d",zIndex:99999,display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",fontFamily:"'Press Start 2P', monospace",height:"100vh",width:"100vw"},children:e.jsxs("div",{style:{display:"flex",flexDirection:o?"column":"row",width:"100%",height:"100%",position:"relative"},children:[e.jsxs("div",{style:{flex:o?"1":"0 0 28%",padding:o?"20px 15px":"30px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-start",background:"linear-gradient(135deg, #333333, #111111)",height:o?"auto":"100%",marginBottom:o?"20px":0},children:[e.jsxs("h1",{style:{fontSize:o?"18px":"24px",color:"#41f998",margin:"0 0 25px 0",textTransform:"uppercase",letterSpacing:"1px",position:"relative",paddingBottom:"12px",width:"fit-content"},children:["СТРАНИЦА НЕ РАБОТАЕТ",e.jsx("span",{style:{position:"absolute",bottom:0,left:0,width:"60%",height:"2px",background:"linear-gradient(90deg, #41f998, transparent)"}})]}),e.jsx("p",{style:{fontSize:o?"12px":"14px",color:"#cccccc",lineHeight:"1.6",marginBottom:"30px",fontFamily:"inherit",maxWidth:"400px"},children:"Пока не знаем в чем проблема, но мы скоро это пофиксим."}),e.jsx("button",{onClick:()=>t("/"),style:{backgroundColor:"transparent",color:"#41f998",border:"2px solid #41f998",padding:"10px 20px",fontSize:"12px",fontFamily:"'Press Start 2P', monospace",cursor:"pointer",textTransform:"uppercase",position:"relative",overflow:"hidden",transition:"all 0.3s ease",boxShadow:"0 0 10px rgba(65, 249, 152, 0.2)"},onMouseOver:a=>{a.currentTarget.style.backgroundColor="#41f998",a.currentTarget.style.color="#111111"},onMouseOut:a=>{a.currentTarget.style.backgroundColor="transparent",a.currentTarget.style.color="#41f998"},children:"Вернуться на главную"})]}),e.jsx("div",{style:{flex:o?"1":"0 0 72%",overflow:"hidden",height:o?"300px":"100%"},children:e.jsx("img",{src:"https://sun9-21.userapi.com/impg/kBtewwnmCqaw8Y4TOpvfu1u3nhoOjdvuiqnBGA/hywmYVXLuyk.jpg?size=1250x834&quality=95&sign=8e253a8b79e5c26edb4f6af3d7ba1406&type=album",alt:"Кот в капюшоне",style:{width:"100%",height:"100%",objectFit:"cover"}})})]})})},re=({translate:t})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",margin:"38px 0 25px 0"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"15px",marginBottom:"15px"},children:[e.jsx("span",{style:{height:"1px",width:"40px",background:"linear-gradient(90deg, transparent, var(--color-accent), transparent)",opacity:.6}}),e.jsx("span",{style:{color:"var(--color-accent)",textShadow:"0 0 5px var(--color-accent)",fontSize:"18px"},children:"❈"}),e.jsx("span",{style:{height:"1px",width:"40px",background:"linear-gradient(90deg, transparent, var(--color-accent), transparent)",opacity:.6}})]}),e.jsx("span",{style:{fontFamily:"inherit",fontSize:14,color:"#41f998",textShadow:"0 0 2px #69fff5, 0 0 8px #363",padding:"0 20px",textAlign:"center",lineHeight:1.5},className:"glitch-text","data-text":t("cute.decoration"),children:t("cute.decoration")})]}),le=()=>{const[t,o]=l.useState(!0),[a,s]=l.useState(()=>{const p=localStorage.getItem("effectsEnabled");return p!==null?JSON.parse(p):!0}),[n,i]=l.useState(window.location.hash.substring(1)||"/"),{playSound:r}=Z(),{language:c,toggleLanguage:u}=x(),{isMobile:d}=I();l.useEffect(()=>{const p=window.location.search.includes("blog"),m=window.location.hash.includes("blog");(p||m)&&i("/blog")},[]),l.useEffect(()=>{localStorage.setItem("effectsEnabled",JSON.stringify(a))},[a]),l.useEffect(()=>{const p=()=>{i(window.location.hash.substring(1)||"/"),window.scrollTo(0,0)};return window.addEventListener("hashchange",p),()=>window.removeEventListener("hashchange",p)},[]);const h=p=>{window.location.hash=p};l.useEffect(()=>(document.body.classList.add("night-sky-bg"),document.body.classList.remove("dimden-bg"),()=>{document.body.classList.remove("night-sky-bg")}),[]);const g=l.useMemo(()=>!d&&t&&a?e.jsx(U,{isSnowing:!0}):null,[t,a,d]);return n==="/not-found"||n!=="/"&&n!=="/blog"?e.jsx(se,{}):e.jsxs("div",{className:"night-sky-bg",children:[e.jsx("div",{style:{backgroundImage:`url(${N.bg})`,backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:"fixed",position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:-10}}),g,e.jsx(Y,{}),e.jsxs(O.Provider,{value:{navigate:h,currentPath:n},children:[e.jsx("header",{className:"dimden-header",children:e.jsx(Q,{})}),(()=>{let p;return n==="/blog"?p=e.jsx(ie,{}):p=e.jsxs(e.Fragment,{children:[e.jsx(ee,{}),re({translate:x().translate}),e.jsx(te,{})]}),e.jsxs("main",{className:"dimden-main-grid",style:d?{flexDirection:"column",display:"flex"}:void 0,children:[e.jsx("section",{className:"main-content cyberpunk-grid enhanced-crt-effect",style:d?{width:"100%",minWidth:0}:void 0,children:p}),e.jsx("aside",{className:"sidebar digital-noise",style:d?{width:"100%",minWidth:0,marginTop:18}:void 0,children:e.jsx(oe,{})})]})})(),e.jsx("footer",{className:"dimden-footer",children:e.jsx(j,{animation:"fade",delay:600,children:e.jsx("p",{style:{fontFamily:"inherit",fontSize:13},children:y["footer.copyright"][c]})})}),e.jsxs("div",{style:{position:"fixed",bottom:d?"15px":"25px",right:d?"15px":"25px",zIndex:1e3,display:"flex",flexDirection:d?"column":"row",gap:d?"8px":"12px"},children:[e.jsx("button",{onClick:()=>{o(!t),!t&&!a&&s(!0),r("switch")},className:"pixel-button snow-toggle-button",style:{background:t&&a?"var(--color-blue)":"var(--color-panel)",color:t&&a?"var(--color-text)":"var(--color-accent)",border:`2px solid ${t&&a?"var(--color-accent)":"var(--color-blue)"}`,padding:d?"6px 10px":"8px 15px",fontSize:d?"10px":"12px"},"aria-label":t&&a?y["snow.on"][c]:y["snow.off"][c],children:t&&a?y["snow.on"][c]:y["snow.off"][c]}),e.jsx(q,{playSound:r})]})]}),e.jsx("style",{children:ce})]})},ce=`
  @keyframes typing-cursor {
    from, to { border-color: transparent }
    50% { border-color: var(--color-accent); }
  }

  .typing-animation {
    position: relative;
  }

  .typing-animation::after {
    content: '';
    position: absolute;
    display: inline-block;
    width: 3px;
    height: 1em;
    margin-left: 4px;
    background-color: var(--color-accent);
    animation: typing-cursor 0.7s infinite;
  }
`;W.createRoot(document.getElementById("root")).render(e.jsx(k.StrictMode,{children:e.jsx($,{children:e.jsx(le,{})})}));
