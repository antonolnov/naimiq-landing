import { FormEvent, useState } from 'react';

const features = [
  {
    title: 'ATS и воронка найма',
    text: 'Заявки на подбор, этапы, интервью и решения по кандидатам в едином рабочем пространстве.',
  },
  {
    title: 'CRM кандидатов',
    text: 'Единая база контактов, история общения, теги, согласия и быстрый возврат к сильным кандидатам.',
  },
  {
    title: 'AI-сорсинг',
    text: 'Поиск релевантных профилей, подсказки по навыкам и персонализированные цепочки касаний.',
  },
  {
    title: 'Коммуникации',
    text: 'Шаблоны писем, Telegram-сценарии, напоминания и понятный статус каждого кандидата.',
  },
  {
    title: 'Интервью и календари',
    text: 'Согласование слотов, уведомления участникам и контроль загрузки нанимающих менеджеров.',
  },
  {
    title: 'Аналитика подбора',
    text: 'Сроки закрытия, конверсии этапов, источники кандидатов и нагрузка команды в понятных дашбордах.',
  },
];

const segments = [
  {
    name: 'IT-подбор',
    range: 'Экспертные вакансии',
    text: 'Собирайте short list, ведите историю касаний и возвращайтесь к кандидатам из прошлых процессов.',
  },
  {
    name: 'Массовый найм',
    range: 'Поток откликов',
    text: 'Сортируйте входящие резюме, контролируйте этапы и не теряйте кандидатов между каналами.',
  },
  {
    name: 'Агентства',
    range: 'Проектный подбор',
    text: 'Ведите клиентов, пайплайны и короткие списки кандидатов без потери истории и договоренностей.',
  },
  {
    name: 'Согласования',
    range: 'HR + бизнес',
    text: 'Показывайте нанимающим менеджерам статус вакансии, обратную связь и следующие действия.',
  },
];

const integrations = ['hh.ru', 'Хабр Карьера', 'SuperJob', 'Telegram', 'VK', '1C', 'Bitrix24', 'amoCRM', 'Яндекс 360'];

const useCases = ['IT-подбор', 'Массовый найм', 'Агентский подбор', 'Внутренние согласования', 'Talent pool', 'Аналитика воронки'];

const metrics = [
  ['1 база', 'кандидаты, статусы и коммуникации'],
  ['Каналы', 'hh.ru, Telegram, почта и карьерные страницы'],
  ['AI', 'short list, подсказки и черновики сообщений'],
  ['152-ФЗ', 'согласия, роли доступа и экспорт данных'],
];

const demoSteps = [
  'Разберем вашу текущую воронку и каналы кандидатов',
  'Покажем сценарий под реальные вакансии и согласования',
  'Обсудим пилот, интеграции и передачу заявок в CRM',
];

const faqs = [
  {
    question: 'Сколько занимает запуск пилота?',
    answer: 'Первый пилот можно запустить на одной команде или направлении: вакансии, этапы, роли доступа, база кандидатов и базовые отчеты.',
  },
  {
    question: 'Можно ли перенести базу кандидатов?',
    answer: 'Да. Для старта важно сохранить контакты, статусы, теги, согласия и историю коммуникаций, чтобы команда не начинала с пустого листа.',
  },
  {
    question: 'Что с персональными данными?',
    answer: 'В продуктовой логике предусмотрены согласия кандидатов, роли доступа, экспорт данных и сценарии работы в соответствии с 152-ФЗ.',
  },
  {
    question: 'AI принимает решения за рекрутера?',
    answer: 'Нет. AI помогает находить совпадения, готовить сообщения и подсвечивать риски, но финальное решение остается за командой найма.',
  },
  {
    question: 'Какие интеграции в приоритете?',
    answer: 'Для российского рынка важны hh.ru, Telegram, почта, календари, 1C, Bitrix24, amoCRM и внутренние HR-системы.',
  },
  {
    question: 'Сколько стоит внедрение?',
    answer: 'Стоимость зависит от размера команды, количества вакансий, интеграций и объема переноса данных. На демо можно собрать понятный пилотный сценарий.',
  },
];

function App() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="НаймIQ">
          <span className="brand-mark">IQ</span>
          <span>НаймIQ</span>
        </a>
        <nav className="nav" aria-label="Главная навигация">
          <a href="#product">Продукт</a>
          <a href="#solutions">Решения</a>
          <a href="#integrations">Интеграции</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="header-actions">
          <a className="login" href="#login">Войти</a>
          <a className="button button-small" href="#demo">Запросить демо</a>
        </div>
      </header>

      <main id="top">
        <section className="hero section-shell">
          <div className="hero-copy">
            <p className="eyebrow">Для in-house HR и агентств подбора</p>
            <h1>ATS и CRM для найма через hh.ru, Telegram и согласования</h1>
            <p className="hero-text">
              НаймIQ собирает вакансии, кандидатов, коммуникации и аналитику в один контур. AI помогает с короткими списками и сообщениями, а решения остаются за рекрутером.
            </p>
            <div className="hero-actions">
              <a className="button" href="#demo">Запросить демо</a>
              <a className="button secondary" href="#product">Посмотреть возможности</a>
            </div>
            <div className="trust-row" aria-label="Ключевые преимущества">
              <span>152-ФЗ и согласия</span>
              <span>hh.ru / Telegram / 1C</span>
              <span>Роли доступа</span>
              <span>Экспорт данных</span>
            </div>
          </div>
          <div className="hero-visual" aria-label="Макет интерфейса НаймIQ">
            <div className="dashboard-card main-card">
              <div className="window-bar">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="dashboard-grid">
                <aside className="sidebar-mock">
                  <strong>Вакансии</strong>
                  <span className="active-line">Senior Go</span>
                  <span>Product HR</span>
                  <span>Sales Lead</span>
                  <span>Data Analyst</span>
                </aside>
                <div className="pipeline-mock">
                  {['Новые', 'Скрининг', 'Интервью', 'Оффер'].map((stage, index) => (
                    <div className="pipeline-column" key={stage}>
                      <span>{stage}</span>
                      <b>{[42, 18, 9, 3][index]}</b>
                      <div className="candidate-chip"></div>
                      <div className="candidate-chip small"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="floating-card ai-card">
              <span className="spark">AI</span>
              <div>
                <strong>Рекомендация</strong>
                <p>5 кандидатов похожи на успешные наймы из вашей команды.</p>
              </div>
            </div>
            <div className="floating-card metric-card">
              <strong>Фокус недели</strong>
              <span>3 риска</span>
            </div>
          </div>
        </section>

        <section className="logo-strip section-shell" aria-label="Сценарии найма">
          {useCases.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </section>

        <section className="section-shell split-section" id="product">
          <div>
            <p className="eyebrow">Единая платформа</p>
            <h2>Все инструменты подбора работают вместе</h2>
          </div>
          <p>
            Вместо разрозненных таблиц, писем и мессенджеров НаймIQ дает команде единый контур: от заявки на вакансию до оффера и аналитики результата.
          </p>
        </section>

        <section className="features section-shell">
          {features.map((feature, index) => (
            <article className="feature-card" key={feature.title}>
              <span className="feature-index">0{index + 1}</span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </section>

        <section className="mini-cta section-shell">
          <div>
            <strong>Хотите увидеть это на своей воронке?</strong>
            <p>Покажем, где теряется скорость и какие ручные операции можно убрать первыми.</p>
          </div>
          <a className="button secondary" href="#demo">Получить разбор</a>
        </section>

        <section className="platform section-shell">
          <div className="platform-copy">
            <p className="eyebrow">Рабочее место рекрутера</p>
            <h2>AI помогает каждый день, но не заменяет экспертизу команды</h2>
            <p>
              Система подсказывает релевантных кандидатов, находит пробелы в воронке, готовит черновики сообщений и показывает, где процесс найма теряет скорость.
            </p>
            <a className="text-link" href="#demo">Обсудить внедрение</a>
          </div>
          <div className="insight-board">
            <div className="insight-card wide">
              <span>AI shortlist</span>
              <strong>12 кандидатов</strong>
              <p>С высоким совпадением по навыкам, зарплатной вилке и опыту в B2B SaaS.</p>
            </div>
            <div className="insight-card">
              <span>Конверсия</span>
              <strong>34%</strong>
              <p>Скрининг → интервью</p>
            </div>
            <div className="insight-card dark">
              <span>Риск</span>
              <strong>3 вакансии</strong>
              <p>Без движения больше 7 дней</p>
            </div>
            <div className="insight-card wide accent">
              <span>Следующее действие</span>
              <strong>Запустить цепочку в Telegram</strong>
              <p>Для 28 кандидатов из talent pool, которые недавно обновили профиль.</p>
            </div>
          </div>
        </section>

        <section className="section-shell split-section" id="solutions">
          <div>
            <p className="eyebrow">Решения</p>
            <h2>Под разные модели найма</h2>
          </div>
            <p>Сайт и продукт сразу говорят с российским рынком: поток откликов, IT-рекрутинг, проектные вакансии и согласования с бизнес-заказчиками.</p>
        </section>

        <section className="segments section-shell">
          {segments.map((segment) => (
            <article className="segment-card" key={segment.name}>
              <span>{segment.range}</span>
              <h3>{segment.name}</h3>
              <p>{segment.text}</p>
            </article>
          ))}
        </section>

        <section className="metrics section-shell">
          {metrics.map(([value, label]) => (
            <div className="metric" key={value}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </section>

        <section className="integrations section-shell" id="integrations">
          <div className="integrations-copy">
            <p className="eyebrow">Российский контекст</p>
            <h2>Интеграции с каналами, где реально живет подбор</h2>
            <p>Платформа должна вписываться в текущую HR-инфраструктуру, а не заставлять команду переносить процессы в очередную таблицу.</p>
          </div>
          <div className="integration-cloud">
            {integrations.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section className="section-shell faq" id="faq">
          <div className="faq-heading">
            <p className="eyebrow">FAQ</p>
            <h2>Ответы на частые вопросы</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="cta section-shell" id="demo">
          <div className="cta-copy">
            <p className="eyebrow">Демо-доступ</p>
            <h2>Разберите найм с НаймIQ за 30 минут</h2>
            <p>За 30 минут разберем вашу воронку, покажем сценарий под вакансии и обсудим безопасный пилот.</p>
            <ol className="demo-steps">
              {demoSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
          <form className="lead-form" onSubmit={handleSubmit}>
            <label>
              Имя
              <input name="name" placeholder="Анна" required />
            </label>
            <label>
              Компания
              <input name="company" placeholder="ООО Команда" required />
            </label>
            <label>
              Email или телефон
              <input name="contact" placeholder="anna@company.ru" required />
            </label>
            <label>
              Размер команды <span>необязательно</span>
              <select name="team" defaultValue="">
                <option value="" disabled>Выберите вариант</option>
                <option>1-50 сотрудников</option>
                <option>51-300 сотрудников</option>
                <option>301-1000 сотрудников</option>
                <option>1000+ сотрудников</option>
              </select>
            </label>
            <label className="full-field">
              Что хотите улучшить в подборе?
              <textarea name="message" placeholder="Например: ускорить скрининг, собрать единую базу, подключить аналитику" />
            </label>
            <button className="button full-field" type="submit">Запросить разбор</button>
            {submitted && <p className="form-note full-field">Спасибо! Заявка принята. Свяжемся в течение рабочего дня, чтобы согласовать демо и подготовить сценарий под ваши вакансии.</p>}
          </form>
        </section>
      </main>

      <footer className="footer">
        <div className="brand">
          <span className="brand-mark">IQ</span>
          <span>НаймIQ</span>
        </div>
        <p>AI-платформа для подбора персонала в России.</p>
        <div className="footer-links">
          <a href="#product">Продукт</a>
          <a href="#solutions">Решения</a>
          <a href="#demo">Демо</a>
          <a href="#privacy">Персональные данные</a>
        </div>
      </footer>
    </>
  );
}

export default App;
