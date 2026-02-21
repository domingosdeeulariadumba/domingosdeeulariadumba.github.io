document.addEventListener('DOMContentLoaded', () => {
  // Footer
  const footer = document.querySelector('footer');
  if (footer) {
    footer.innerHTML = `© ${new Date().getFullYear()} <strong>Domingos de Eulária Dumba</strong>.`;
  }

  // Social links
  // Icons sourced from Flaticon, icons8.com, and Icons-For-Free.com (modified for theme consistency).
  const socialLinks = document.getElementById('social-links');
  if (socialLinks) {
    const height = 20;
    socialLinks.innerHTML = `
      <br>
      <a href='https://linkedin.com/in/domingosdeeulariadumba' target='_blank'>
        <img src='./assets/icons/contacts/linkedin.png' height='${height}' width='${height}' />
      </a>
      <a href='https://github.com/domingosdeeulariadumba' target='_blank'>
        <img src='./assets/icons/contacts/github.png' height='${height}' width='${height}' />
      </a>
      <a href='https://huggingface.co/domingosdeeulariadumba' target='_blank'>
        <img src='./assets/icons/contacts/huggingface.png' height='${height}' width='${height}' />
      </a>
      <a href='https://pypi.org/user/domingosdeeulariadumba' target='_blank'>
        <img src='./assets/icons/contacts/pypi.png' height='${height}' width='${height}' />
      </a>
      <a href='https://linktr.ee/domingosdeeulariadumba' target='_blank'>
        <img src='./assets/icons/contacts/linktree.png' height='${height}' width='${height}' />
      </a>
      <a href='mailto:domingosdeeulariadumba@gmail.com' target='_blank'>
        <img src='./assets/icons/contacts/email.png' height='${height}' width='${height}' />
      </a>
      <a href='https://ko-fi.com/domingosdeeulariadumba' target='_blank'>
        <img src='./assets/icons/contacts/ko-fi.png' height='${height}' width='${height}' />
      </a>
    `;
  }
});

// Function for fetching API data 
function fetchCurrentData() {
  fetch('https://domingosdeeulariadumba-dashboard-ao.hf.space/api/current-data-ao')
    .then(response => response.json())
    .then(data => {
      // Getting the HTML elements by their IDs
      const temperature = document.getElementById('Temperature in Luanda');
      const eur = document.getElementById('EUR');
      const usd = document.getElementById('USD');
      const gdp = document.getElementById('GDP per Capita');
      const inflation = document.getElementById('Inflation');
      const unemployment = document.getElementById('Unemployment');

      // Passing the data into HTML elements
      temperature.textContent = data['Temperature in Luanda'];
      eur.textContent = data['EUR ➤ AOA (Exchange Rate)'];
      usd.textContent = data['USD ➤ AOA (Exchange Rate)'];
      gdp.textContent = data['GDP per Capita Growth (Annual %)'];
      inflation.textContent = data['Inflation, Consumer Prices (Annual %)'];
      unemployment.textContent = data['Unemployment Rate, ILO Estimate (Annual %)'];
    })
    .catch(error => console.error('Error fetching data: ', error));
}
fetchCurrentData();