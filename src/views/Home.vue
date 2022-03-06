<template>
  <div class="home">
    <gal/>
  </div>
</template>

<script>
// @ is an alias to /src
import gal from "@/components/GalleryDisplay.vue"

export default {
  name: 'Home',
  components: {
    gal
  }
}
</script>
