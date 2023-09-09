var acc = document.getElementsByClassName("accordionblue");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
      this.classList.toggle("active");

      /* Toggle between hiding and showing the active panel */
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;


      } else {
        panel.style.maxHeight = '100%';
      }

    });
  }
  const wikiToolsLink = document.getElementById('wiki-tools-link')
    const wikiToolsRepo = document.getElementById('wiki-tools-repo')
    const wikiToolsPipeline = document.getElementById('wiki-tools-pipeline')

    const path = document.location.pathname.split('/')

    const competitionSlug = document.location.host.split('.')[0]
    const teamSlug = path[1]
    const page = path[2] === '' ? 'index' : path[2]

    wikiToolsLink.href = `https://tools.igem.org/wiki-tools/${competitionSlug}/${teamSlug}/${page}`
    wikiToolsRepo.href = `https://gitlab.igem.org/${competitionSlug}/${teamSlug}`
    wikiToolsPipeline.src = `https://gitlab.igem.org/${competitionSlug}/${teamSlug}/badges/main/pipeline.svg`