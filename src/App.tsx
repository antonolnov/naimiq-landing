import { FormEvent, useState } from 'react';

const features = [
  {
    title: 'ATS и воронка найма',
    text: 'Вакансии, этапы, интервью и решения по кандидатам в едином рабочем пространстве.',
  },
  {
    title: 'CRM кандидатов',
    text: 'Единая база контактов, история общения, теги, сегменты и быстрый возврат к сильным кандидатам.',
  },
  {
    title: 'AI-сорсинг',
    text: 'Поиск релевантных профилей, подсказки по навыкам и персонализированные цепочки касаний.',
  },
  {
    title: 'Коммуникации',
    text: 'Шаблоны писем, Telegram-сценарии, напоминания и прозрачный статус каждого кандидата.',
  },
  {
    title: 'Интервью и календари',
    text: 'Согласование слотов, уведомления участникам и контроль загрузки нанимающих менеджеров.',
  },
  {
    title: 'Аналитика подбора',
    text: 'Time-to-hire, конверсии этапов, источники кандидатов и нагрузка команды в понятных дашбордах.',
  },
];

const segments = [
  {
    name: 'Стартапы',
    range: '1-80 сотрудников',
    text: 'Запускайте подбор без тяжелого внедрения и собирайте первую базу кандидатов с первого дня.',
  },
  {
    name: 'Растущие компании',
    range: '80-1000 сотрудников',
    text: 'Уберите хаос из таблиц и мессенджеров: вакансии, согласования и коммуникации живут в одной системе.',
  },
  {
    name: 'Enterprise',
    range: '1000+ сотрудников',
    text: 'Контролируйте массовый и экспертный подбор, SLA, безопасность данных и аналитику по подразделениям.',
  },
  {
    name: 'Агентства',
    range: 'Проектный найм',
    text: 'Ведите клиентов, пайплайны и короткие списки кандидатов без потери истории и договоренностей.',
  },
];

const integrations = ['hh.ru', 'Хабр Карьера', 'SuperJob', 'Telegram', 'VK', '1C', 'Bitrix24', 'amoCRM', 'Яндекс 360'];

const metrics = [
  ['40%', 'меньше ручной работы в подборе'],
  ['2x', 'быстрее первичный скрининг резюме'],
  ['1 база', 'для всех кандидатов и коммуникаций'],
  ['152-ФЗ', 'подход к обработке персональных данных'],
];

const faqs = [
  {
    question: 'НаймIQ заменяет ATS?',
    answer: 'Да, платформа может работать как полноценная ATS. Если у вас уже есть система, можно оставить ее и использовать НаймIQ для CRM, сорсинга и аналитики.',
  },
  {
    question: 'Можно ли подключить российские job-площадки?',
    answer: 'В концепции продукта предусмотрены интеграции с hh.ru, Хабр Карьерой, SuperJob, Telegram и другими каналами привлечения.',
  },
  {
    question: 'AI принимает решения за рекрутера?',
    answer: 'Нет. AI помогает находить совпадения, готовить сообщения и подсвечивать риски, но финальное решение остается за командой найма.',
  },
  {
    question: 'Как работает форма заявки?',
    answer: 'Сейчас это демонстрационная форма для первой версии сайта. На следующем этапе ее можно подключить к Яндекс Формам, CRM или webhook.',
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
            <p className="eyebrow">AI, ATS, CRM и аналитика для HR-команд</p>
            <h1>Нанимайте быстрее с AI-платформой для российского рынка</h1>
            <p className="hero-text">
              НаймIQ объединяет воронку найма, базу кандидатов, сорсинг, коммуникации и аналитику. Команда видит весь процесс, а AI берет на себя рутину.
            </p>
            <div className="hero-actions">
              <a className="button" href="#demo">Запросить демо</a>
              <a className="button secondary" href="#product">Посмотреть возможности</a>
            </div>
            <div className="trust-row" aria-label="Ключевые преимущества">
              <span>152-ФЗ ready</span>
              <span>Интеграции с HR-каналами</span>
              <span>Для in-house и агентств</span>
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
                <p>5 кандидатов похожи на успешных hires из вашей команды.</p>
              </div>
            </div>
            <div className="floating-card metric-card">
              <strong>Time-to-hire</strong>
              <span>21 день</span>
            </div>
          </div>
        </section>

        <section className="logo-strip section-shell" aria-label="Отрасли">
          {['IT', 'Финтех', 'Retail', 'Производство', 'Логистика', 'Медицина'].map((item) => (
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
          <p>Сайт и продукт сразу говорят с российским рынком: массовый подбор, IT-рекрутинг, проектные вакансии, согласования с бизнес-заказчиками.</p>
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
            <p>Первый экран продает скорость, а этот блок снимает практический вопрос: как платформа впишется в текущую HR-инфраструктуру.</p>
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
            <h2>Посмотрите, как НаймIQ ускорит подбор в вашей команде</h2>
            <p>Оставьте контакты. На следующей итерации подключим форму к Яндекс Формам, CRM или webhook.</p>
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
              Размер команды
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
            <button className="button full-field" type="submit">Запросить демо</button>
            {submitted && <p className="form-note full-field">Заявка сохранена в демо-режиме. Подключение отправки добавим следующим шагом.</p>}
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
