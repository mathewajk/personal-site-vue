<template>
    <div class="home-about">
        <div class="about-name"></div>
        <div class="about-photo"></div>
        <div class="about-description"><h1>Mathew A. Jacqmin-Kramer</h1><p>I am a web developer and data scientist.</p></div>
    </div>
</template>

<style>

h1 {
    font-size: 2.5em;
    font-weight: bold;
}

.home-about {
    grid-template-rows: repeat(1, 1fr);
    grid-template-columns: repeat(2, 1fr);

    margin-top: auto;
    margin-bottom: auto;

    text-align: center;
    
    display: grid;
    align-items: center;
    justify-content: center;

    padding: 0em 1em 0em 1em;
}

.about-name {
    grid-row: 1;
    grid-column: 1;

    color: #fff;
    font-size: 2em;
    font-weight: bold;
}

.about-photo {    
    grid-row: 1;
    grid-column: 4;
    align-self: center;
    justify-self: center;
}

.about-photo .photo-frame {
    position: relative;

    height: 150px;
    width: 150px;
    overflow: hidden;

    border-radius: 150px;
    border: 5px solid;
    border-color: #bbbbbb;
}

.photo-frame img {
    position: absolute;
    width: 300px;
    left: -50%;
    top: -50%;
}

.about-description {
    grid-row: 1;
    grid-column: 2;
    padding: 0em 0em 0em 1.5em;
}


@media screen and (max-width: 767px) {

    .home-about {
        grid-template-rows: repeat(2, 1fr);
        grid-template-columns: auto;
        margin: 0em;
        height: 95%;
    }

    .about-name {
        grid-row: 1;
        grid-column: 1;
    }

    .about-photo {
        grid-row: 3 / 4;
        grid-column: 1;
    }
    
    .about-photo .photo-frame {
        height: 100px;
        width: 100px;
    }

    .photo-frame img {
        position: absolute;
        width: 200px;
        left: -50%;
        top: -50%;
    }

    .about-description {
        grid-row: 2;
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