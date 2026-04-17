import { renderLayout } from './layout.js';
import { renderAbout } from './sections/about.js';
import { renderContact } from './sections/contact.js';
import { renderExperience } from './sections/experience.js';
import { renderFooter } from './sections/footer.js';
import { renderHero } from './sections/hero.js';
import { renderMetrics } from './sections/metrics.js';
import { renderNav } from './sections/nav.js';
import { renderProjects } from './sections/projects.js';
import { renderStack } from './sections/stack.js';

export function renderPage(content) {
  const body = `
    ${renderNav(content.site, content.navigation)}
    <main id="main-content">
      ${renderHero(content.hero)}
      ${renderMetrics(content.metrics)}
      ${renderAbout(content.about, content.skills)}
      ${renderExperience(content.experience)}
      ${renderProjects(content.projects)}
      ${renderStack(content.stack)}
      ${renderContact(content.contact)}
    </main>
    ${renderFooter(content.footer)}
  `;

  return renderLayout({
    site: content.site,
    body
  });
}
