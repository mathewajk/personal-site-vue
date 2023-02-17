<template>
    <div class="home-about">
        <div class="about-name">Mathew A. Jacqmin-Kramer</div>
        <div class="about-photo">Photo</div>
        <div class="about-description">I am a web developer and data scientist.</div>
    </div>
</template>

<style>

.home-about {
    grid-template-rows: repeat(1, 1fr);
    grid-template-columns: repeat(7, 1fr);

    margin-top: auto;
    margin-bottom: auto;

    text-align: center;
    
    display: grid;
    align-items: center;
}

.about-name {
    grid-row: 1;
    grid-column: 1 / 4;

    color: #fff;
    font-size: 2em;
    font-weight: bold;
}

.about-photo {
    grid-row: 1;
    grid-column: 4;
}

.about-description {
    grid-row: 1;
    grid-column: 5 / 8;
}


@media screen and (max-width: 767px) {
    .home-about {
        grid-template-rows: repeat(6, 1fr);
        grid-template-columns: repeat(1, 1fr);
    }

    .about-name {
        grid-row: 1 / 2;
        grid-column: 1;
        margin-top: 1em;
    }

    .about-photo {
        grid-row: 3;
        grid-column: 1;
    }
    
    .about-description {
        grid-row: 4 / 7;
        grid-column: 1;
    }
}

</style>

<script>
export default {
  name: 'Home',
  data() {
  return {
    
    }
  }
}
</script>