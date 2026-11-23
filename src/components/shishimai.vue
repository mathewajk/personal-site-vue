<template>
    <div class="shishimai-page">
        <div class="splash">
            <img class="splash-image" src="/AGI_4042web.jpg" alt="Toronto Shishimai Kai at TTF 2026">
        </div>
    <div class="article">
        <h1 class="title-lg">Toronto Shishimai Kai | トロント獅子舞会</h1>
        <div class="title-sm">
            <h1>Toronto Shishimai Kai</h1>
            <p><strong>トロント獅子舞会</strong></p>
        </div>
        <div id="sub-navigation">
            <a href="#about">About</a>
            <a href="#events">News and events</a>
            <a href="#members">Members</a>
            <a href="#contact">Contact</a>
        </div>
        <div id="about" class="section has-image">
            <div class="section-image">
                <div ref="gfmSectionEl" class="section-image">
                    <div class="gfm-embed" data-url="https://www.gofundme.com/f/toronto-shishimai-kai-debut-at-toronto-taiko-festival-2026/widget/large?sharesheet=undefined&attribution_id=sl:8fdfe715-ea02-476d-b805-757946fc3a76"></div>
                </div>
            </div>
            <div class="section-content">
                <h2>About</h2>
                <p>{{ SHISHIMAI_ABOUT_FIRST_PARAGRAPH }}</p>
                <p>We study in the tradition of premiere performing ensemble <a href="https://www.wakayamashachu.jp/" title="Wakayama Taneo Shachū">Wakayama Taneo Shachū (若山胤雄社中)</a>, which has been designated a Nationally Important Intangible Folk Cultural Asset in Japan, and we are committed to representing this tradition faithfully as we expand its practice to the GTA.</p>
                <p>As a new group, as well as the first Wakayama-ryū (若山流) group in Eastern Canada, we are excited to be a part of a growing cohort of Wakayama-ryū groups across North America, including Vancouver, Portland, Minnesota, and Michigan, and are deeply grateful for their support as we begin our own journey.</p>
                <p>We are also deeply grateful to our teachers, Kyosuke Suzuki Sensei and Eien Hunter-Ishikawa, with whom we continue to work closely to ensure the quality of our performances.</p>
                <p>Group membership is open to anyone interested in learning and performing the traditions of the Wakayama school. We welcome students of all ages and experience levels. For more information, please reach out to Mathew at <a href="mailto:mathew@sazanamitaiko.net" title="mathew@sazanamitaiko.net">mathew@sazanamitaiko.net</a>.</p>
            </div>
        </div>
        <div id="events" class="section">
            <div class="section-content">
                <h2>News and events</h2>
                <h3>JCCC Oshogatsu Kai 2027</h3>
                <img src="/Oshogatsukai-banner.jpg" alt="JCCC Oshogatsukai 2027 banner" class="section-image-img"/>
                <p>We are excited to announce that we will be performing at JCCC's annual new years event, <a href="https://jccc.on.ca/event/2027/01/oshogatsu-kai-2027" target="_blank">Oshogatsu Kai</a>, on January 17th, 2027! Joined once again by our instructor and special guest Eien Hunter-Ishikawa, we will be performing both Edo Kotobuki Jishi and Neri Aruki (walking around the venue) as a part of the day's festivities.</p>
                
                <h3>Toronto Taiko Festival 2026</h3>
                <img src="/Bang On poster 2026.png" alt="Bang On poster 2026" class="section-image-img"/>
                <p>Toronto Shishimai Kai will be performing at the Toronto Taiko festival on August 8th and August 9th, 2026!</p>
                <p>Joined by our instructor and special guest, Eien Hunter-Ishikawa, we will be performing Edo Kotobuki Jishi as a part of the festival concert on Saturday, August 8th. We will also be hosting a workshop and demonstration on Sunday, August 9th for a closer look as this fascinating art form. <RouterLink to="/articles/toronto-taiko-festival-2026">Read more →</RouterLink></p>
            </div>
        </div>
        <div id="members" class="section">
            <h2>Members</h2>
            <ul>
                <div v-for="member in members" :key="member.name">
                    <h3>{{ member.name }}</h3>
                    <p v-if="member.role"><strong>{{ member.role }}</strong></p>
                    <p v-if="member.bio">{{ member.bio }}</p>
                </div>
            </ul>
        </div>
        <div id="contact" class="section">
            <h2>Contact</h2>
            <p>For booking and other inquiries, please contact Mathew at <a href="mailto:mathew@sazanamitaiko.net" title="mathew@sazanamitaiko.net">mathew@sazanamitaiko.net</a>.</p>
        </div>
    </div>
    </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue'
import { SHISHIMAI_ABOUT_FIRST_PARAGRAPH } from '../site-meta'

/** GoFundMe embed.js only runs on DOMContentLoaded; SPA routes mount later, so we mirror their iframe setup. */
function mountGfmEmbeds(root: HTMLElement) {
  const embeds = root.getElementsByClassName('gfm-embed')
  for (let i = 0; i < embeds.length; i++) {
    const el = embeds[i] as HTMLElement
    if (el.querySelector('.gfm-embed-iframe')) continue
    const url = el.getAttribute('data-url')
    if (!url) continue
    el.appendChild(createGfmIframe(url, el.getAttribute('data-partner')))
  }
}

function createGfmIframe(url: string, partnerCode: string | null) {
  const utmContent = window?.location?.hostname || 'none'
  const parsedUrl = new URL(url)
  parsedUrl.searchParams.set('utm_content', utmContent)
  if (partnerCode) {
    parsedUrl.searchParams.set('utm_medium', 'partner')
    parsedUrl.searchParams.set('utm_source', partnerCode)
  } else {
    parsedUrl.searchParams.set('utm_medium', 'referral')
    parsedUrl.searchParams.set('utm_source', 'widget')
  }
  const iframeSrc = `${parsedUrl}#:~:tcm-regime=GDPR&tcm-prompt=Hidden`
  const iframe = document.createElement('iframe')
  const widgetSize = parsedUrl.pathname.split('/')[4] || 'large'
  if (widgetSize === 'small') iframe.setAttribute('height', '70')
  else if (widgetSize === 'medium') iframe.setAttribute('height', '200')
  else iframe.setAttribute('height', '500')
  iframe.setAttribute('class', 'gfm-embed-iframe')
  iframe.setAttribute('width', '100%')
  iframe.setAttribute('frameborder', '0')
  iframe.setAttribute('scrolling', 'no')
  iframe.setAttribute('src', iframeSrc)
  return iframe
}

const gfmSectionEl = ref<HTMLElement | null>(null)

onMounted(() => {
  nextTick(() => {
    if (!gfmSectionEl.value) return
    if (document.readyState === 'complete') {
      // DOMContentLoaded has already fired (SPA navigation, or Safari fired it before the
      // module script ran). embed.js won't run again, so we create the iframe ourselves.
      mountGfmEmbeds(gfmSectionEl.value)
    } else {
      // DOMContentLoaded is still pending. Register a fallback listener that creates the
      // iframe only if embed.js didn't already handle it (e.g. in Safari, embed.js can fire
      // its DOMContentLoaded handler before Vue has mounted, so it finds no .gfm-embed
      // elements and does nothing — this catches that case).
      document.addEventListener('DOMContentLoaded', () => {
        if (gfmSectionEl.value && !gfmSectionEl.value.querySelector('.gfm-embed-iframe')) {
          mountGfmEmbeds(gfmSectionEl.value)
        }
      }, { once: true })
    }
  })
})

const members = [
    { name: 'Mathew Jacqmin-Kramer', role: 'Founder and Director', email: 'mathew@sazanamitaiko.net', 'bio': 'Mathew Jacqmin-Kramer is a long-time taiko player and recent transplant to Toronto. He combines a background in classical piano and composition for interactive media with study of traditional Japanese music through koto and shishimai to bring a multifaceted perspective to taiko performance and composition. As a member of the Great Lakes Taiko Center, he has performed with multiple groups, including the Godaiko Drummers, Raion Taiko, Sakura Japanese Instrumental Group, and his own taiko group, Sazanami Taiko Arts Ensemble. He began studying Edo Kotobuki Jishi with Eien Hunter-Ishikawa in 2024 and recently founded Toronto Shishimai Kai with the goal of bringing the study and performance of the Wakayama-ryū repertoire to the GTA.' },
    { name: 'Josh Bagalacsa', role: 'Member'},
    { name: 'Natalina Halas', role: 'Member'},
    { name: 'Antonn Esquivel', role: 'Member'},
    { name: 'Lauretta Cheng', role: 'Coordinator'}
]
</script>

<style scoped>

#sub-navigation {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 1em;
    background-color: var(--color-bg);
    color: var(--color-text);
    gap: 1em;
    margin-bottom: 2rem;
}

#sub-navigation a {
    color: var(--color-text);
    text-decoration: none;
    text-underline-offset: 0.2em;
}

#sub-navigation a:hover,
#sub-navigation a:focus-visible {
    color: var(--color-link);
}

#sub-navigation a:focus-visible {
    outline: 2px solid var(--color-link);
    outline-offset: 2px;
}

@media screen and (max-width: 767px) {
    #sub-navigation {
        flex-direction: column;
    }
}

.section {
    width: 100%;
    margin-bottom: 2rem;
    max-width: 1000px;
    border-bottom: 1px solid var(--color-border-subtle);
    padding-bottom: 2rem;
}

.section.has-image {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
}

@media screen and (max-width: 1024px) {
    .section.has-image {
        flex-direction: column;
    }
}

.section-image {
    padding-top: 1.25rem;
    flex: 1;
}

.section-image-img {
    width: auto;
    height: auto;
    max-height: 300px;
}

@media screen and (max-width: 1024px) {
    .section-image {
        align-self: center;
    }
}

.section-content {
    flex: 1.5;
}

.section-image img {
    height: auto;
    max-height: 400px;
}

.splash {
    position: relative;
    height: 50vh;
    min-height: 18rem;
}

@media screen and (max-width: 767px) {
    .splash {
        height: 30vh;
    }
}

.splash::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, rgba(22, 8, 18, 0.62) 0%, rgba(22, 8, 18, 0.16) 24%, rgba(22, 8, 18, 0) 48%);
    pointer-events: none;
}

.splash-image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    margin: 0;
}

ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

p + h3 {
    margin-top: 2rem;
}

</style>