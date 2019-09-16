var randomuserApp = new Vue({
  el: '#randomuser',
  data:  {
    users:[]
  },
  methods: {
    fetchUsers() {
      fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then( json => {randomuserApp.users = json.results[0]})

      // Means the same at this
      // fetch('https://randomuser.me/api/')
      // .then(function(response) {return response.json()})
      // .then(function(json) {waitingApp.people = json});
    }
  },
  created() {
    this.fetchUsers();
  }
});
