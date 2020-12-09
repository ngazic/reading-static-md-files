<template>
  <div class="hello">
    <div>
      <ul>
        <li @click="showWelcome">render Welcome.md file</li>
        <li @click="showBye">render Bye.md file</li>
        <li @click="showReadme">show README.md file of this Git repo</li>
      </ul>
      <h2>Content of Mardown:</h2>
      <div v-html="md"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import md from "@/reamarkable.ts";
import welcome from "@/pages/welcome.md";
import bye from "@/pages/bye.md";

@Component
export default class HelloWorld extends Vue {
  md = "";

  showWelcome() {
    console.log("welcome");
    this.md = md.render(welcome);
    console.log(this.md);
  }
  showBye() {
    console.log("welcome");
    this.md = md.render(bye);
    console.log(this.md);
  }

  async showReadme() {
    console.log("show readme");
    const request = await fetch(
      "https://raw.githubusercontent.com/ngazic/reading-static-md-files/master/README.md"
    );
    console.log(request);
    const file = await request.text();
    console.log(file);
    this.md = md.render(file);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
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
.my-paragraph {
  background: green;
  font-size: 16px;
}
</style>
