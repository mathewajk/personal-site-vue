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
                <p>I am a taiko artist, composer, and web developer based in Toronto, ON.</p>

                <p>I offer in-person and online private lessons on:</p>
                <ul class="social-links center-content">
                    <li><span class="separator"></span><strong>taiko basics</strong></li>
                    <li><span class="separator"></span><strong>shime technique</strong></li>
                    <li><span class="separator"></span><strong>taiko set</strong></li>
                    <li><span class="separator"></span><strong>katsugi</strong></li>
                    <li><span class="separator"></span><strong>atarigane</strong></li>
                    <li><span class="separator"></span><strong>and more!</strong></li>
                </ul>

                <p>For more information, you can contact me at <a href="mailto:mathew@sazanamitaiko.net" title="mathew@sazanamitaiko.net">mathew@sazanamitaiko.net</a>.</p>

                <p class="center-content">You can also find me on:</p>
                <ul class="social-links center-content">
                    <li v-for="social in socials" :key="social.title">
                        <span class="separator"></span>
                        <a :href="social.url" :title="social.alt" target="_blank">{{ social.title }}</a>
                    </li>
                </ul>
                <div class="other-links">
                    <p class="center-content">Music activities:</p>
                        <ul class="center-content">
                        <li><a href="https://music.glyph.cafe" title="music portfolio">music portfolio</a></li>
                        <li><RouterLink to="/shishimai">toronto shishimai kai</RouterLink></li>
                        <li><a href="https://sazanamitaiko.net" title="sazanami taiko arts ensemble">sazanami taiko arts ensemble</a></li>
                        <li><a href="https://michigantaiko.net" title="great lakes taiko center">great lakes taiko center</a></li>
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
    font-weight: bold;
    margin-bottom: 1em;
    text-align: center;
}

p + p {
    margin-top: 1.5em;
}

.center-content {
    text-align: center;
}

.about-description li {
    list-style: none;
}

ul {
    padding-left: 0px;
}

.about-description ul.social-links {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1em;
}

.other-links li::before {
    content: '> '
}

.about-description .social-links li + li span::before{
    content: '// ';
    text-decoration: none;
    cursor: default;
    color: var(--color-text);
}

.home-page {
    position: relative;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    min-height: 100svh;
    padding-top: var(--home-header-overlap);
}

.home-about {
    grid-template-rows: repeat(1, 1fr);

    flex: 1;
    
    display: grid;
    align-items: center;
    justify-content: center;
}

.about-description {
    margin: 2rem;
    margin-left: calc(40vw + 2rem);
}

.other-links {
    margin-top: 2em;
}

@media screen and (max-width: 767px) {

    .home-about {
        grid-template-columns: auto;
        flex: 1;
        min-height: 0;
    }

    .about-description {
        margin: 2rem;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
}

@media screen and (max-width: 767px) {
    .about-description {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    h1 {
        margin-top: calc(50vh - 75px);
        margin-bottom: 1rem;
    }
}

</style>