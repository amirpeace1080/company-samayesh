<template>
  <div>
    <div class="text-center mt-4">
      <input type="text" class="input-control" />
      <button class="btn btn-primary">+</button>
      <br /><br /><br />
      <div class="container">
        <div class="row">
          <div
            class="col-lg-3 col-sm-4 col-xs-6"
            v-for="(todo, index) in this.$store.state.todos"
            :key="index"
          >
            <div
              class="card mt-3"
              style="width: 15rem"
              :class="todo.completed ? 'bg-success' : 'bg-danger'"
            >
              <div class="card-body">
                <span class="text-right text-info"> {{ index + 1 }} </span>
                <h6 class="card-title">{{ todo.title }}</h6>
                <span>Alarm: {{ todo.userId }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlarmsView",
  data() {
    return {
      //
    };
  },
  created() {
    this.$store.dispatch("todo").then((resp) => {
      resp.data;
    });
  },
};
</script>

<style>
.btn-primary {
  margin-right: 5px;
}
</style>
