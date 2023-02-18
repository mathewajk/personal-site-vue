<template>
    <div class="home-about">
        <div class="about-name">Mathew A. Jacqmin-Kramer</div>
        <div class="about-photo"><div class="photo-frame"><img src="DSC03704.jpg" alt="A photo of Mathew."/></div></div>
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
    justify-content: center;
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
    grid-column: 5 / 8;
}


@media screen and (max-width: 767px) {
    .home-about {
        grid-template-rows: repeat(6, 1fr);
        grid-template-columns: auto;
    }

    .about-name {
        grid-row: 1 / 2;
        grid-column: 1;
        margin-top: 1em;
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
        grid-row: 5 / 6;
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