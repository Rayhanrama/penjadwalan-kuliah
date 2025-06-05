document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("exportICS").addEventListener("click", () => {
    const events = JSON.parse(localStorage.getItem("courses")) || [];
    let icsContent = "BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Scheduler App//EN\n";

    events.forEach((event, idx) => {
      icsContent += `BEGIN:VEVENT\n`;
      icsContent += `UID:event-${idx}@scheduler\n`;
      icsContent += `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').slice(0, 15)}Z\n`;
      icsContent += `SUMMARY:${event.name}\n`;
      icsContent += `LOCATION:${event.classroom}\n`;
      icsContent += `DESCRIPTION:Instruktur: ${event.instructor}\n`;
      icsContent += `END:VEVENT\n`;
    });

    icsContent += "END:VCALENDAR";

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "jadwal_kuliah.ics";
    link.click();
  });
});
