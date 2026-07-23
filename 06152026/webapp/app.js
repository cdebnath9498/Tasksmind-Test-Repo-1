

  const linkInput = document.getElementById("youtubeLink");
  const spinner = document.getElementById("loadingSpinner");
  const blogContent = document.getElementById("blogContent");
  const generateBtn = document.getElementById("generateBtn");
  const checkoutBtn = document.getElementById("checkoutBtn");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", async () => {
      const res = await fetch("/checkout", { method: "POST" });
      const data = await res.json();
      if (data && data.redirectUrl && typeof window !== "undefined" && window.location) {
        window.location.assign(data.redirectUrl);
      }
    });
  }

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
