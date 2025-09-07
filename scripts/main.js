document.addEventListener("DOMContentLoaded", () => {
  // Footer
  const footer = document.querySelector("footer");
  if (footer) {
    footer.innerHTML = `© ${new Date().getFullYear()} <strong>Domingos de Eulária Dumba</strong>.`;
  }

  // Social links (optional if you want them here)
  const socialLinks = document.getElementById("social-links");
  if (socialLinks) {
    const height = 20;
    socialLinks.innerHTML = `
      <b style='margin:50px;margin-bottom:6px; display:inline-block;'></b><br>
      <a href='mailto:domingosdeeulariadumba@gmail.com' target='_blank'>
        <img src='./assets/icons/contacts/email.png' height='${height}' width='${height}' />
      </a>
      <a href='https://github.com/domingosdeeulariadumba' target='_blank'>
        <img src='./assets/icons/contacts/github.png' height='${height}' width='${height}' />
      </a>
      <a href='https://linkedin.com/in/domingosdeeulariadumba' target='_blank'>
        <img src='./assets/icons/contacts/linkedin.png' height='${height}' width='${height}' />
      </a>
      <a href='https://ko-fi.com/domingosdeeulariadumba' target='_blank'>
        <img src='./assets/icons/contacts/ko-fi.png' height='${height}' width='${height}' />
      </a>
      <a href='https://linktree.com/domingosdeeulariadumba' target='_blank'>
        <img src='./assets/icons/contacts/linktree.png' height='${height}' width='${height}' />
      </a>
    `;
  }
});