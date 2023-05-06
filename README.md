
<div align = "center" style = "display:flex; flex-direction:row;">
  <img src = "https://img.shields.io/github/license/ranveerchaudhary/Mercurial?style=for-the-badge">
  <img src = "https://img.shields.io/github/issues/ranveerchaudhary/Mercurial?style=for-the-badge">
  <img src = "https://img.shields.io/github/issues-pr/ranveerchaudhary/Mercurial?style=for-the-badge">
</div>

<br>

<div align="center">
  <img src = "https://github.com/ranveerchaudhary/Mercurial/blob/main/Mercurial.gif">
</div>
<p align="center">
  Mercurial is an intelligent music recommendation app that uses cutting-edge machine learning algorithms to suggest incredible tracks to the user. By analyzing the music that the user likes on the app, Mercurial recommends similar tracks based on their vibe. This personalized approach to music discovery ensures that users are always discovering new and exciting music that they love.
</p>

##

<br>

# Contents :rocket:
<div>
  <ul>
    <li>
    <h3>The Basics :page_facing_up:</h3>
    <ul>
      <li>
        <h4>History :thought_balloon:</h4>
      </li>
      <li>
        <h4>The UI :iphone:</h4>
      </li>
      <li>
        <h4>Recommendations :receipt:</h4>
      </li>
    </ul>
    </li>
    <li>
      <h3>The Mechanism :gear:</h3>
      <ul>
      <li>
        <h4>Algorithm :brain:</h4>
      </li>
      <li>
        <h4>The Engine :mechanical_arm:	</h4>
      </li>
      <li>
        <h4>Deployment :eyes:</h4>
      </li>
    </ul>
    </li>
    <li>
      <h3>Contributions :anchor:</h3>
    </li>
    <li>
      <h3><a href = "contact">Contact :mailbox_with_mail:<a/></h3>
    </li>
  </ul>
</div>

##

<br>

## The Basics :page_facing_up:

### 1. History :thought_balloon:
<p>• <strong>Mercurial</strong> was created in 2022 after the creator Ranveer Chaudhary found it difficult to discover new music that matched his taste. He tried various music recommendation apps but none of them seemed to work for him, frustrated with the lack of options, he decided to create his own music recommendation app that would help people like him find new music based on the vibe they seek. </p>

<br>

### 2. The UI :iphone:

<p>• Mercurial's UI follows the neumorphism design style, with spectacular animations, whilst also keeping user experience (UX) standards and guidelines in mind.</p>

<br>
<div align = "center" style = "display: flex; flex-direction: row; justify-content: center; align-items: center;">
  <img height = "480vh" width = "auto" src = "https://github.com/ranveerchaudhary/Mercurial/blob/main/gar/Wknd.png">
  &nbsp
  &nbsp
  <img height = "480vh" width = "auto" src = "https://github.com/ranveerchaudhary/Mercurial/blob/main/gar/GNoLimit.png">
  &nbsp
  &nbsp
  <img height = "480vh" width = "auto" src = "https://github.com/ranveerchaudhary/Mercurial/blob/main/gar/ACDC.png">
  &nbsp
  &nbsp
</div>

<br>

<p>• Taking notes from various applications, the creator finally settled on a swipe based Mechanism. Left swipe for skipping the track and right swipe for liking the track.</p>

<br>

### 3. Recommendations :receipt:
<p>• Inorder for <strong>Mercurial</strong> to recommend tracks, the user must right swipe atleast 3 songs. The purpose of doing this is to enable the algorithm to capture the pattern. <strong>Mercurial</strong> Recommends 5 tracks based upon the user's vibe.</p>

##

<br>

## The Mechanism :gear:

### 1. Algorithm :brain:
![Spotify](https://img.shields.io/badge/Spotify-1ED760?style=for-the-badge&logo=spotify&logoColor=white)
![Kmean++](https://img.shields.io/badge/Weights_&_Biases-FFBE00?style=for-the-badge&logo=WeightsAndBiases&logoColor=white)
<p>• <strong>Mercurial</strong> uses the Kmeans++ machine learning algorithm to cluster data points into groups based on their similarity. The algorithm is an improvement over the original K-means algorithm as it selects the initial centroids in a more intelligent way. The algorithm starts by selecting one random data point as the first centroid and then selects the next centroid from the remaining data points based on their distance from the first centroid. This process continues until all centroids have been selected. The result is a set of centroids that are well-spaced, which in turn gives the user those marvelous recommendations. The dataset used in this project is the skimmed version (Popular Tracks Only) of the Spotify dataset available on <a href = "https://www.kaggle.com/datasets/mrmorj/dataset-of-songs-in-spotify">Kaggle</a>.<p>
  
<br>

### 2. The Engine :mechanical_arm:
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![jQuery](https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
  
<ul>
  <li><a href = "https://github.com/juliangarnier/anime">Anime.js Library</a></li>
  <li><a href = "https://github.com/jquery/jquery">JQuery</a></li>
  <li><a href = "https://github.com/codedgar/Puppertino">Puppertino Framework</a></li>
  <li><a href = "https://github.com/FL3NKEY/scroll-lock">Scroll Lock Framework</a></li>
  <li><a href = "https://github.com/john-doherty/swiped-events">Swipe Events Framework</a></li>
</ul>

<p>• The application uses HTML, JavaScript, and CSS for the base of a spectacular UI. <strong>Mercurial</strong> also incorporates several other popular libraries like Jquery, Anime.js and the Puppertino framework. Jquery in this application is used for some simple animations and communicating with flask. Anime.js is a powerful JavaScript animation library that allows you to create complex animations with ease. The Pupertino framework is a design system that incorporates neomorphism, which is a modern design trend that combines elements of skeuomorphism and flat design. Another framework that has been used in this project is the scroll lock for disabling the overflow. For detecting user swipe gestures <strong>Mercurial</strong> integrates the swiped events framework. The operations to get tracks follows:- 

1. Javascript requests a track.
2. Python responds and sends a random track ( track name and artist(s) Info ) from the dataset.
3. Javascript Uses the <a href = "https://www.discogs.com/developers">Discogs API</a> to fetch the track art.</p>

<p>• When the user right swipe (Like) 3 or more songs, they can click the "recommend" button. <strong>Mercurial</strong> then analyzes the liked tracks and suggests 5 songs.</p>

<br>

### Deployment :eyes:
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)
![Jinja](https://img.shields.io/badge/jinja-white.svg?style=for-the-badge&logo=jinja&logoColor=black)

<p>• For the deployment part <strong>Mercurial</strong> uses <a href = "https://flask.palletsprojects.com/en/2.3.x/">Flask</a> which is a popular Python web framework that makes it easy to create web applications. Flask is based on Werkzeug WSGI toolkit and Jinja2 template engine. Using the "GET" & "POST" methods Python can communicate back and forth with Javascript.<p/>

##

<br>

## Contributions :anchor:

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

##

<br>

<h2 id = "contact">Contact :mailbox_with_mail:</h2>

Email: ranveerchaudhary1000@gmail.com

Portfolio Website: [https://ranveerchaudhary.github.io](https://ranveerchaudhary.github.io)

Linkedin Profile: [https://www.linkedin.com/in/ranveer-chaudhary-785538166/](https://www.linkedin.com/in/ranveer-chaudhary-785538166/)
