/*
 * @Descripttion: ZJJ Code
 * @version: 1.0.0
 * @Author: ZJJ
 * @Date: 2023-09-21 22:22:18
 * @LastEditors: ZJJ
 * @LastEditTime: 2023-09-21 22:53:50
 */
import "./style.css";

function App() {
  const appTitle = "Today I learned";
  return (
    <>
      {/* HEADER */}
      <header className="header">
        <div className="logo">
          <img
            src="logo.png"
            height="68"
            width="68"
            alt="Today I learned logo"
          />
          <h1>{appTitle}</h1>
        </div>
        <button className="btn btn-large btn-open">Share a fact</button>
      </header>

      <NewFactForm />

      <main className="main">
        <CategoryFilter />
        <FactList />
      </main>
    </>
  );
}

function NewFactForm() {
  return <form className="fact-form">facts_form</form>;
}

function CategoryFilter() {
  return <aside>Category Filter</aside>;
}

function FactList() {
  return <section>Fact-list</section>;
}

export default App;
