import { get } from "https://bukulapak.github.io/api/process.js"; 
let urlAPI = "https://ws-andikamf-8a9eea7e7e50.herokuapp.com/presensi";
get(urlAPI,isiTablePresensi);
function isiTablePresensi(results){
    console.log(results);
}