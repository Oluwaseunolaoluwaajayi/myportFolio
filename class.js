
// Select download button and progress bar elements
const downloadCVBtn = document.getElementById("downloadCVBtn");
const progressBar = document.getElementById("progressBar");

// Function to simulate CV download
function downloadCV() {
  let progress = 0;
  progressBar.style.width = "0%"; // Reset progress bar

  // Start a simulated download with a real-time progress bar update
  const interval = setInterval(() => {
    if (progress >= 100) {
      clearInterval(interval);

      // Trigger CV download after progress completes
      const link = document.createElement("a");
      link.href = "./path/to/your/oluwaseuncv.pdf"; // Replace with actual path to CV
      link.download = "Oluwaseun_Olaoluwa_Ajayi_CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      alert("Download complete!");
    } else {
      progress += 5; // Increment progress
      progressBar.style.width = `${progress}%`; // Update progress bar width
    }
  }, 100); // Update every 100ms for a smooth transition
}

// Attach event listener to download button
downloadCVBtn.addEventListener("click", downloadCV);
