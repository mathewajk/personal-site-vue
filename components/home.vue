<template>
    <div class="home-about">
        <div class="about-name">Mathew A. Jacqmin-Kramer</div>
        <div class="about-photo">Photo</div>
        <div class="about-description">I am a web developer and data scientist.</div>
    </div>
</template>

<style>

.home-about {
    margin-top: auto;
    margin-bottom: auto;

    text-align: center;
    
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    align-items: center;
}

.about-name {
    grid-column: 1 / 4;
    padding: 2em;

    color: #fff;
    font-size: 2em;
    font-weight: bold;
}

.about-photo {
    grid-column: 4;
}

.about-description {
    grid-column: 5 / 7;
    padding: 4em;
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