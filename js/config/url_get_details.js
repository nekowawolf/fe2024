//Mendapatkan parameter dari URL
const urlParams = new URLSearchParams(window.location.search);
const presensiId = urlParams.get("presensiId");

export let urlFetch = "https://ws-andikamf-8a9eea7e7e50.herokuapp.com/presensi/" + presensiId;