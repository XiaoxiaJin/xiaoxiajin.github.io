document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("container");
  

    const projects = [
      {
        imageUrl: "./images/pomodoro.JPG",
        title: "Pomodoro Clock",
        keywords: "HTML, CSS, JavaScript",
        url: "https://xiaoxiajin.github.io/pomodoro-clock/index.html",
      },
      {
        imageUrl: "./images/roman-numeral-convert.JPG",
        title: "Roman Numeral Convert",
        keywords: "HTML, CSS, JavaScript",
        url: "https://xiaoxiajin.github.io/roman-numeral-convert/index.html",
      },
    ];
  
    //dynamically create cards
    projects.forEach(function (project) {
      const card = document.createElement("div");
      card.classList.add("card");
  
      const img = document.createElement("img");
      img.src = project.imageUrl;
      img.alt = project.title;
  
      const cardContent = document.createElement("div");
      cardContent.classList.add("card-content");
  
      const h3 = document.createElement("h3");
      h3.textContent = project.title;
  
      const p = document.createElement("p");
      p.textContent = project.keywords;
  
      const link = document.createElement("a");
      link.href = project.url;
      link.textContent = "View more";
      link.classList.add("view-more-btn");
      link.target = "_blank";
  
      cardContent.appendChild(h3);
      cardContent.appendChild(p);
      cardContent.appendChild(link);
      card.appendChild(img);
      card.appendChild(cardContent);
  
      container.appendChild(card);
    });
  });
  