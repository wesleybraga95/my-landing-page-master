function getProjects(){
  const urlGitHub = 'https://github.com/wesleybraga95?tab=repositories'

  fetch(urlGitHub, {
    method: 'GET'
  })

      .then((response) => response.json())
      .then((response) => {
        console.log(response)
      })
      .catch((e) => {
        console.log(e)
      }) 
  }

  getProjects()