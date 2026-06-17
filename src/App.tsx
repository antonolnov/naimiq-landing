const notes = [
  'Эта страница используется только как техническая точка входа.',
  'Публичные материалы, инструкции, заявки и данные кандидатов здесь не размещаются.',
  'Если вам нужен доступ или порядок работы с сервисом, обратитесь к руководителю проекта.',
];

function App() {
  return (
    <main className="tech-page">
      <section className="tech-card" aria-labelledby="page-title">
        <div className="brand-row">
          <span className="brand-mark">RP</span>
          <span>Recruit pilot</span>
        </div>

        <p className="status">Техническая страница</p>
        <h1 id="page-title">Сервисная информация</h1>
        <p className="lead">
          Это не публичный сайт и не рабочий кабинет. Страница оставлена для технического доступа и проверки окружения.
        </p>

        <div className="notice">
          <strong>Инструкция по использованию</strong>
          <p>
            За правилами доступа, регламентом работы и актуальными ссылками обратитесь к своему руководителю или ответственному за проект Recruit pilot.
          </p>
        </div>

        <ul className="note-list" aria-label="Важные ограничения">
          {notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>

        <footer className="tech-footer">
          <span>Internal access page</span>
          <span>Recruit pilot</span>
        </footer>
      </section>
    </main>
  );
}

export default App;
