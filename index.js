require('dotenv').config()

console.log("THIS APP.JS IS RUNNING");
const express = require('express');
const app = express()
const port = 3000
const githubdata={
  "login": "MadhavSingh1509",
  "id": 165358433,
  "node_id": "U_kgDOCdsrYQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/165358433?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/MadhavSingh1509",
  "html_url": "https://github.com/MadhavSingh1509",
  "followers_url": "https://api.github.com/users/MadhavSingh1509/followers",
  "following_url": "https://api.github.com/users/MadhavSingh1509/following{/other_user}",
  "gists_url": "https://api.github.com/users/MadhavSingh1509/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/MadhavSingh1509/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/MadhavSingh1509/subscriptions",
  "organizations_url": "https://api.github.com/users/MadhavSingh1509/orgs",
  "repos_url": "https://api.github.com/users/MadhavSingh1509/repos",
  "events_url": "https://api.github.com/users/MadhavSingh1509/events{/privacy}",
  "received_events_url": "https://api.github.com/users/MadhavSingh1509/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Damon Salvatore",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "shayari and code",
  "twitter_username": null,
  "public_repos": 11,
  "public_gists": 0,
  "followers": 2,
  "following": 3,
  "created_at": "2024-03-29T05:15:08Z",
  "updated_at": "2026-07-20T02:48:15Z"
}
app.get('/', (req, res) => {
  res.send('Hello World!')
})
// app.get('/twitter',(req,res)=>{
//     res.send('adityadotcom')
// })
app.get('/login', (req, res) => {
    console.log("LOGIN ROUTE HIT");
    res.send('LOGIN WORKS');
});

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
app.get('/github',(req,res)=>{


  res.json(githubdata);
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

