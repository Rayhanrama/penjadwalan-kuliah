import("https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js").then(({ jsPDF }) => {
  document.getElementById("exportPDF").addEventListener("click", () => {
    const doc = new jsPDF();
    const data = JSON.parse(localStorage.getItem("courses")) || [];

    doc.setFontSize(14);
    doc.text("Jadwal Kuliah", 20, 20);

    let y = 30;
    data.forEach((item, i) => {
      doc.text(`${i + 1}. ${item.name} - ${item.instructor} - ${item.classroom}`, 20, y);
      y += 10;
    });

    doc.save("jadwal_kuliah.pdf");
  });
});
