export default function ({ title, date, content }) {
  return /* html */ `
    <section class="post-section">
        <div class="section-content">
            <h2 class="post-section__title">${title}</h2>
            <div class="post-section__header">
                <div class="post-section__date">${date.toLocaleString()}</div>
                <div class="post-section__goback">
                    <a href="/blog" class="internal btn">Wróć na listę postów</a>
                </div>
            </div>
            <div class="post-section__content">
                ${content}
            </div>
        </div>
    </section>
    `;
}
