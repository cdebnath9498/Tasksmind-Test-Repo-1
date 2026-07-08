  const linkInput = document.getElementById("youtubeLink");
  const spinner = document.getElementById("loadingSpinner");
  const blogContent = document.getElementById("blogContent");
  const generateBtn = document.getElementById("generate-btn");

  async function generateBlog() {
    const link = linkInput.value.trim();
    if (!link) return;
    spinner.hidden = false;
    blogContent.textContent = "";
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ link }),
      });
      const data = await res.json();
      blogContent.textContent = res.ok ? data.content : `Error: ${data.error}`;
    } catch (e) {
      blogContent.textContent = `Network error: ${e.message}`;
    } finally {
      spinner.hidden = true;
    }
  }
