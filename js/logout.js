const logoutButton = document.getElementById("logout");
function onLogoutClick() {
    localStorage.clear();
    location.reload();
}
logoutButton.addEventListener("click", onLogoutClick);