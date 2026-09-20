/*
 * languages.js - the single declaration of which languages this site serves.
 *
 * Read by lang_switch.js and by the switcher it renders; nothing else repeats
 * the list. Before this file existed the nine languages were written out by
 * hand in every page, in the sitemap and in the 404: eleven copies of one list,
 * which is eleven chances to send a reader to a page that is not there.
 *
 * Rule and rationale: PROJECT_BLUEPRINT.md 3.0quinquies.
 *
 * "base" is the path the site is published at. This is a project page, so it is
 * "/NeverDry" and not "": every URL the switcher builds carries that prefix.
 *
 * Each code is also its path prefix, and the code is the language tag, which is
 * why Austrian German is "de-at" and lives at /de-at/ rather than at the /at/ it
 * used to occupy. The tag is what a browser announces (de-AT) and what hreflang
 * declares, so keeping the three spellings identical is what makes an exact-tag
 * match possible at all; without it an Austrian browser falls through to the
 * German page, which is nearly right and therefore hard to notice.
 *
 * Only complete, current translations belong here. A translation frozen two
 * versions back is worse than a missing one, because the reader cannot tell.
 * When one can no longer be kept up to date, remove its entry: the files may
 * stay online, they simply stop being a destination.
 */
window.SITE_LANGUAGES = {
  base: '/NeverDry',
  default: 'en',
  available: [
    { code: 'en',    name: 'English' },
    { code: 'it',    name: 'Italiano' },
    { code: 'de',    name: 'Deutsch' },
    { code: 'de-at', name: 'Österreichisches Deutsch' },
    { code: 'es',    name: 'Español' },
    { code: 'fr',    name: 'Français' },
    { code: 'pt',    name: 'Português' },
    { code: 'hr',    name: 'Hrvatski' },
    { code: 'hu',    name: 'Magyar' }
  ]
};
