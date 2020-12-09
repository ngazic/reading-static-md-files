<template>
  <div class="hello">
    <div>
      <ul>
        <li @click="showWelcome">render Welcome.md file</li>
        <li @click="showBye">render Bye.md file</li>
      </ul>
      <h2>Content of Mardown:</h2>
      <div v-html="md"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import md from "@/reamarkable.ts";
@Component
export default class HelloWorld extends Vue {
  md = "";
  get myHtml() {
    return this.md;
  }
  async showWelcome() {
    console.log("welcome");
    // const file = await import("@/static-files/welcome.md");
    this.md = md.render("# custom h1 from markdown");
  }
  showBye() {
    console.log("bye");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
  background: yellow;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  padding: 10px;
  color: yellow;
  background: black;
  cursor: pointer;
}
a {
  color: #42b983;
}
</style>
