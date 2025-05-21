const downloadCVBtn = document.getElementById("downloadCVBtn");
const progressBar = document.getElementById("progressBar");

function downloadCV() {
  downloadCVBtn.disabled = true;
  const cvPath = "./assets/oluwaseun_cv.pdf";
  let progress = 0;
  progressBar.style.width = "0%";

  fetch(cvPath, { method: "HEAD" })
    .then((response) => {
      if (!response.ok) {
        alert("Error: CV file not found!");
        downloadCVBtn.disabled = false;
        return;
      }

      const interval = setInterval(() => {
        if (progress >= 100) {
          clearInterval(interval);
          const link = document.createElement("a");
          link.href = cvPath;
          link.download = "Oluwaseun_Olaoluwa_Ajayi_CV.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          alert("Download complete!");
          downloadCVBtn.disabled = false;
        } else {
          progress += 10;
          progressBar.style.width = `${progress}%`;
        }
      }, 100);
    })
    .catch(() => {
      alert("Error: Unable to access CV file!");
      downloadCVBtn.disabled = false;
    });
}

if (downloadCVBtn) {
  downloadCVBtn.addEventListener("click", downloadCV);
}