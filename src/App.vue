<script setup></script>

<template>
  <div>
    <h1>Bienvenidos al curso de Vue.js desde 0 de AMazaing</h1>
    <hr />
    <h3>
      Este curso está separado por ramas, tienes cada lección y ejemplo en cada
      rama.
    </h3>
    <h4>
      Puedes ver cada rama en el
      <a
        href="https://github.com/Amaza-ing/AMazaing-Vue-Course"
        target="_blank"
      >
        repositorio de GitHub ⤴
      </a>
      .
    </h4>
    <h4>
      También puedes ver las ramas desde una terminal en Visual Studio Code o el
      editor de código que utilices escribiendo el siguiente comando:
      <pre>git branch -a</pre>
    </h4>
    <h4>
      Puedes moverte a cada rama escribiendo el comando:
      <pre>git checkout nombre-de-la-rama</pre>
    </h4>
    <hr />
    <h2>Hecho por Adrián Maza</h2>
    <h3>
      <a href="https://www.youtube.com/@AMaza-Ing" target="_blank">
        AMazaing
      </a>
    </h3>
    <h4>Espero que lo disfrutes ;)</h4>
    <div className="links">
      <h5>
        <a href="https://www.youtube.com/@AMaza-Ing" target="_blank">
          YouTube/AMaza-ing
        </a>
      </h5>
      <h5>
        <a
          href="https://www.linkedin.com/in/adrian-maza-vazquez/"
          target="_blank"
        >
          LinkedIn/Adrián-Maza
        </a>
      </h5>
      <h5>
        <a href="https://www.amaza-ing.com/" target="_blank"> AMazaing Web </a>
      </h5>
      <h5>
        <a href="https://github.com/Amaza-ing" target="_blank">
          GitHub/AMaza-ing
        </a>
      </h5>
    </div>
  </div>
</template>

<style>
body {
  margin: 0 50px;
  padding: 0;
  background-color: rgb(0, 0, 34);
  color: white;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 1.3rem;

  a {
    color: #e28413;
  }

  pre {
    padding: 10px 20px;
    background-color: lightgray;
    color: rgb(27, 27, 27);
  }

  .links {
    display: flex;
    justify-content: center;
    gap: 0 50px;
    flex-wrap: wrap;
  }
}
</style>
