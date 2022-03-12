<template>
  <div class="quiz">
    <quiz/>
  </div>
</template>

<script>
// @ is an alias to /src
import quiz from "@/components/QuizDisplay.vue"

export default {
  name: 'Test',
  components: {
    quiz
  }
}
</script>
