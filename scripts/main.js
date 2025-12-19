document.addEventListener("DOMContentLoaded", () => {
  // Footer
  const footer = document.querySelector("footer");
  if (footer) {
    footer.innerHTML = `© ${new Date().getFullYear()} <strong>Domingos de Eulária Dumba</strong>.`;
  }

  // Social links
  // Icons sourced from Flaticon & Icons-For-Free.com (modified for theme consistency).
  const socialLinks = document.getElementById("social-links");
  if (socialLinks) {
    const height = 20;
    socialLinks.innerHTML = `
      <b></b><br>
      <a href='https://linkedin.com/in/domingosdeeulariadumba' target='_blank'>
        <img src='./assets/icons/contacts/linkedin.png' height='${height}' width='${height}' />
      </a>
      <a href='https://github.com/domingosdeeulariadumba' target='_blank'>
        <img src='./assets/icons/contacts/github.png' height='${height}' width='${height}' />
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

// Fetching API data 
fetch('https://domingosdeeulariadumba-dashboard-ao.hf.space/api/current-data-ao')
  .then(response => response.json())
  .then(data => {
    // Getting the HTML elements by their IDs
    const temperatureInLuanda = document.getElementById('Temperature in Luanda');
    const eurToAOA = document.getElementById('EUR ➜ AOA (Exchange Rate)');
    const usdToAOA = document.getElementById('USD ➜ AOA (Exchange Rate)');
    const gdpPercapitaGrowth = document.getElementById('GDP per Capita Growth (Annual %)');
    const inflationCPI = document.getElementById('Inflation, Consumer Prices (Annual %)');
    const unemployment = document.getElementById('Unemployment Rate, ILO Estimate (Annual %)');

    // Passing the data into HTML elements
    temperatureInLuanda.textContent = data['Temperature in Luanda'];
    eurToAOA.textContent = data['EUR ➜ AOA (Exchange Rate)'];
    usdToAOA.textContent = data['USD ➜ AOA (Exchange Rate)'];
    gdpPercapitaGrowth.textContent = data['GDP per Capita Growth (Annual %)'];
    inflationCPI.textContent = data['Inflation, Consumer Prices (Annual %)'];
    unemployment.textContent = data['Unemployment Rate, ILO Estimate (Annual %)'];
  })
  .catch(error => console.error('Error fetching data:', error));