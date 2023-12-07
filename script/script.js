function hitungLuas() {
    let alas = document.getElementById("alas").value;
    let tinggi = document.getElementById("tinggi").value;
    let luas = 0.5 * alas * tinggi;
    document.getElementById("luas").innerHTML = "Luas segitiga adalah " + `1/2 x ${alas} x ${tinggi} = ${luas}` + " satuan luas.";
    
}

function resetNilaiLuas() {
    document.getElementById("alas").value = "";
    document.getElementById("tinggi").value = "";
    document.getElementById("luas").textContent = "";
  }

function hitungKeliling() {
    let sisi1 = document.getElementById("sisi1").value;
    let sisi2 = document.getElementById("sisi2").value;
    let sisi3 = document.getElementById("sisi3").value;
    let keliling = parseInt(sisi1) + parseInt(sisi2) + parseInt(sisi3);
    document.getElementById("keliling").innerHTML = "Keliling segitiga adalah " + `${sisi1} + ${sisi2} + ${sisi3} = ${keliling}` + " satuan panjang.";
}

function resetNilaiKeliling() {
    document.getElementById("sisi1").value = "";
    document.getElementById("sisi2").value = "";
    document.getElementById("sisi3").value = "";
    document.getElementById("keliling").textContent = "";
  }