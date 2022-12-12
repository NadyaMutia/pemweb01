function validasi() {
    let inp_nama = document.getElementById("username").value;
    let inp_email = document.getElementById("email").value;
    let inp_jamkeb = document.getElementById("jam").value;
    let inp_tujuankeb = document.getElementById("tujuan").value;
    let inp_jumlahtiket = document.getElementById("tiket").value;
    let form = document.getElementById("form")

    if(inp_nama == "Nadya Mutia Safira" &&
       inp_email == "maubilang143@gmail.com" &&
       inp_jamkeb == "19.45" &&
       inp_tujuankeb == "Swiss" &&
       inp_jumlahtiket == "2") {
        form.setAttribute("action","dashboard.html")
        alert("Login berhasil")}
    else{
        alert("Login gagal")
    }
}