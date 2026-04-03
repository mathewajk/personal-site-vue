<template>
    <div class="article">
        <h1>Toronto Shishimai Kai | トロント獅子舞会</h1>
        <div id="sub-navigation">
            <a href="#about">About</a>
            <a href="#events">News and events</a>
            <a href="#members">Members</a>
            <a href="#contact">Contact</a>
        </div>
        <div id="about" class="section has-image">
            <div class="section-image">
                <img src="/edojishi.jpeg" alt="Toronto Shishimai Kai">
            </div>
            <div class="section-content">
                <p>{{ SHISHIMAI_ABOUT_FIRST_PARAGRAPH }}</p>
                <p>We study in the tradition of premiere performing ensemble <a href="https://www.wakayamashachu.jp/" title="Wakayama Taneo Shachū">Wakayama Taneo Shachū (若山胤雄社中)</a>, which has been designated a Nationally Important Intangible Folk Cultural Asset in Japan, and we are committed to representing this tradition faithfully as we expand its practice to the GTA.</p>
                <p>As a new group, as well as the first Wakayama-ryū (若山流) group in Eastern Canada, we are excited to be a part of a growing cohort of Wakayama-ryū groups across North America, including Vancouver, Portland, Minnesota, and Michigan, and are deeply grateful for their support as we begin our own journey.</p>
                <p>Group membership is open to anyone interested in learning and performing the traditions of the Wakayama school. We welcome students of all ages and experience levels. For more information, please reach out to Mathew at <a href="mailto:mathew@sazanamitaiko.net" title="mathew@sazanamitaiko.net">mathew@sazanamitaiko.net</a>.</p>
            </div>
        </div>
        <div id="events" class="section">
            <h2>News and events</h2>
            <h3>TSK at Toronto Taiko Festival 2026</h3>
            <p>Toronto Shishimai Kai will be performing at the Toronto Taiko festival on August 8th and August 9th, 2026! <RouterLink to="/articles/toronto-taiko-festival-2026">Read more →</RouterLink></p>
        </div>
        <div id="members" class="section"> <h2>Members</h2>
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
</template>

<script setup lang="ts">
import { SHISHIMAI_ABOUT_FIRST_PARAGRAPH } from '../site-meta'

const members = [
    { name: 'Mathew Jacqmin-Kramer', role: 'Founder and Director', email: 'mathew@sazanamitaiko.net', 'bio': 'Mathew Jacqmin-Kramer is a long-time taiko player and recent transplant to Toronto. He combines a background in classical piano and composition for interactive media with study of traditional Japanese music through koto and shishimai to bring a multifaceted perspective to taiko performance and composition. As a member of the Great Lakes Taiko Center, he has performed with multiple groups, including the Godaiko Drummers, Raion Taiko, Sakura Japanese Instrumental Group, and his own taiko group, Sazanami Taiko Arts Ensemble. He began studying Edo Kotobuki Jishi with Eien Hunter-Ishikawa in 2024 and recently founded Toronto Shishimai Kai with the goal of bringing the study and performance of the Wakayama-ryū repertoire to the GTA.' },
    { name: 'Josh Bagalacsa', },
    { name: 'Natalina Halas', },
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
    color: var(--color-link);
    text-decoration: none;
    font-weight: bold;
}

#sub-navigation a + a::before {
    content: '|';
    padding-right: 1em;
    color: var(--color-text);
}

#sub-navigation a:hover {
    text-decoration: underline;
}

@media screen and (max-width: 767px) {
    #sub-navigation {
        flex-direction: column;
    }

    #sub-navigation a + a::before {
        content: '';
        padding-right: 0;
    }
}

.article h1 {
    font-size: 2.5em;
    font-weight: bold;
    padding: 0;
    margin: 0 0 1rem 0;
}

.section {
    width: 100%;
    margin-bottom: 2rem;
    max-width: 1000px;
    border-bottom: 1px solid var(--color-link-muted);
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

</style>