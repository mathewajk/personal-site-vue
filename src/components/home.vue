<script setup lang="ts">
const socials = [{ url: 'https://github.com/mathewajk', title: 'github', alt: 'mathewajk'},
                  { url: 'https://osf.io/ubas9', title: 'osf', alt: 'osf'},
                  { url: 'https://seventhfonon.itch.io', title: 'itch.io', alt: 'seventhfonon on itch.io'}, 
                  { url: 'https://seventhfonon.bandcamp.com/', title: 'bandcamp', alt: 'seventhfonon on bandcamp'}, 
                  { url: 'https://soundcloud.com/seventhfonon', title: 'soundcloud', alt: 'seventhfonon on soundcloud'}]
</script>

<template>
  <div class="home-page">
    <div class="background-container"></div>
    <div class="home-about">
        <div class="about-description">
            <h1>Mathew A. Jacqmin-Kramer</h1>

            <div>
                <p>I am a taiko artist, composer, web developer, and linguist based in Toronto, ON.</p>

                <p>I offer in-person and online private lessons on:</p>
                <ul class="plain-list">
                    <li>taiko basics</li>
                    <li>shime technique</li>
                    <li>taiko set</li>
                    <li>katsugi</li>
                    <li>atarigane</li>
                </ul>

                <p>For more information, you can contact me at <a href="mailto:mathew@sazanamitaiko.net" title="mathew@sazanamitaiko.net">mathew@sazanamitaiko.net</a>.</p>

                <p>You can also find me on:</p>
                <ul class="plain-list">
                    <li v-for="social in socials" :key="social.title">
                        <a :href="social.url" :title="social.alt" target="_blank" rel="noopener noreferrer">{{ social.title }}</a>
                    </li>
                </ul>
                <div class="other-links">
                    <p>Music activities:</p>
                    <ul class="plain-list">
                        <li><a href="https://music.glyph.cafe" title="music portfolio">music portfolio</a></li>
                        <li><RouterLink to="/shishimai">Toronto Shishimai Kai</RouterLink></li>
                        <li><a href="https://sazanamitaiko.net" title="Sazanami Taiko Arts Ensemble">Sazanami Taiko Arts Ensemble</a></li>
                        <li><a href="https://michigantaiko.net" title="Great Lakes Taiko Center">Great Lakes Taiko Center</a></li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<style>

a {
    color: var(--color-link);
}

h1 {
    font-size: 2.5em;
    margin-bottom: 1em;
}

.about-description h1 {
    text-align: left;
}

p + p {
    margin-top: 1.5em;
}

.about-description li {
    list-style: none;
}

.about-description li::before {
    content: "//";
    margin-right: 0.5em;
}

.about-description ul {
    padding-left: 0;
    margin: 0.75rem 0 0;
}

.plain-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 0.35rem 1.25rem;
}

.about-description a {
    text-underline-offset: 0.15em;
}

.home-page {
    position: relative;
    display: flex;
    flex-direction: column;
}

.about-description {
    box-sizing: border-box;
    width: min(800px, 100%);
    margin: 2.5rem auto 3rem;
    padding-inline: 1.5rem;
}

.other-links {
    margin-top: 2em;
}

</style>