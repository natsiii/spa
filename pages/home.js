export default function () {
  return /* html */ `
    <section>
        <h2>Cześć, jestem Natalia</h2>
        <div class="section-content two-columns">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <div>
            <div class="skill-box">
              <div class="skill-box__header">
                <p class="skill-box__title">HTML & CSS</p>
                <p class="skill-box__value">90%</p>
              </div>
              <div class="skill-box__level" style="--level: 90%"></div>
            </div>
            <div class="skill-box">
              <div class="skill-box__header">
                <p class="skill-box__title">JavaScript</p>
                <p class="skill-box__value">60%</p>
              </div>
              <div class="skill-box__level" style="--level: 60%"></div>
            </div>
            <div class="skill-box">
              <div class="skill-box__header">
                <p class="skill-box__title">Wordpress</p>
                <p class="skill-box__value">75%</p>
              </div>
              <div class="skill-box__level" style="--level: 75%"></div>
            </div>
          </div>
        </div>
      </section>

      <section class="section-gray">
        <h2>Moje doświadczenie</h2>
        <div class="section-content">
          <div class="experience-box">
            <div class="experience-box__date">
              <p class="experience-box__years">2 lata</p>
              <p class="experience-box__range">2022 - teraz</p>
            </div>
            <div class="experience-box__content current">
              <p class="experience-box__title">Tytuł pracy</p>
              <p class="experience-box__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Vulputate sapien nec sagittis aliquam malesuada bibendum arcu.
              </p>
            </div>
          </div>
          <div class="experience-box">
            <div class="experience-box__date">
              <p class="experience-box__years">3 lata</p>
              <p class="experience-box__range">2019 - 2022</p>
            </div>
            <div class="experience-box__content">
              <p class="experience-box__title">Tytuł pracy</p>
              <p class="experience-box__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Vulputate sapien nec sagittis aliquam malesuada bibendum arcu.
              </p>
            </div>
          </div>
          <div class="experience-box">
            <div class="experience-box__date">
              <p class="experience-box__years">2 lata</p>
              <p class="experience-box__range">2017 - 2019</p>
            </div>
            <div class="experience-box__content">
              <p class="experience-box__title">Tytuł pracy</p>
              <p class="experience-box__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Vulputate sapien nec sagittis aliquam malesuada bibendum arcu.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2>Moje Projekty</h2>

        <div class="section-content two-columns">
          <div>
            <div
              class="project-box project-box--big"
              style="--bg-img: url('./media/kwiat1.jpg')"
            >
              Nazwa projektu
            </div>
            <div
              class="project-box project-box--big"
              style="--bg-img: url('./media/kwiat1.jpg')"
            >
              Nazwa projektu
            </div>
          </div>
          <div>
            <div
              class="project-box"
              style="--bg-img: url('./media/kwiat1.jpg')"
            >
              Nazwa projektu
            </div>
            <div
              class="project-box"
              style="--bg-img: url('./media/kwiat1.jpg')"
            >
              Nazwa projektu
            </div>
            <div
              class="project-box"
              style="--bg-img: url('./media/kwiat1.jpg')"
            >
              Nazwa projektu
            </div>
          </div>
        </div>
      </section>
    `;
}
