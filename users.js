function usersWrapper() {
  var users = ["Igor", "Dima", "Petya"];

  function getUsers() {
    return users;
  }

  APP.getUsers = getUsers;
}

usersWrapper();
