const mayk_user = {
  user_img: 'https://avatars.githubusercontent.com/u/6643122?v=4',
  user_name: 'Mayk Brito',
  user_github: 'maykbrito',
  user_description:
    'An instructor focused on helping people start programming for web.',
  user_youtube: 'maykbrito',
  user_facebook: 'maykbrito',
  user_instagram: 'maykbrito',
  user_twitter: 'maykbrito',
};

const kelvin_user = {
  user_img: 'https://avatars.githubusercontent.com/u/58356555?v=4',
  user_name: 'Kelvin de Miranda Barros',
  user_github: 'kelvindemirandabarros',
  user_description: 'A person who loves solve problems with programming.',
  user_youtube: undefined,
  user_facebook: 'kelvindmb',
  user_instagram: '_klvndmb',
  user_twitter: undefined,
};

const users = [mayk_user, kelvin_user];
var user_number = 0;

function change_user() {
  if (user_number === 0) {
    user_number++;
  } else {
    user_number = 0;
  }
  document.getElementById('user_img').src = users[user_number]['user_img'];

  document.getElementById('user_name').textContent =
    users[user_number]['user_name'];

  document.getElementById('user_github_username').textContent =
    users[user_number]['user_github'];

  document.getElementById('user_description').textContent =
    users[user_number]['user_description'];

  for (let link of document.getElementsByTagName('a')) {
    if (users[user_number][link.id]) {
      link.style.display = 'block';
      const link_href = `https://${link.id.replace('user_', '')}.com/${
        users[user_number][link.id]
      }`;
      console.log('link_href:', link_href);
      link.href = link_href;
    } else {
      link.style.display = 'none';
    }
  }
}

document.getElementById('change_user').addEventListener('click', () => {
  change_user();
});

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${kelvin_user.user_github}`;

  fetch(url)
    .then((response) => response.json())
    .catch((error) =>
      alert('Este usuário não foi encontrado no GitHub. Error: ' + error),
    )
    .then((data) => {
      document.getElementById('user_img').src = data.avatar_url;
      document.getElementById('user_name').textContent = data.name;
      document.getElementById('user_github').href = data.html_url;
      document.getElementById('user_github_username').textContent = data.login;
      document.getElementById('user_description').textContent = data.bio;
    });
}

// getGitHubProfileInfos();
