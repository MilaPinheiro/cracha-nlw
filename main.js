const LinksSocialMedia = {
  github: 'MilaPinheiro',
  youtube: 'Camila Mila',
  facebook: 'camila.pinheiro.5201',
  instagram: '_mihsp',
  twitter: 'mih00385410'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url).then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url
    userImage.src = data.avatar_url
    userLogin.textContent = data.login
  } )
}

getGitHubProfileInfos()