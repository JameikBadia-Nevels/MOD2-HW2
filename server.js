const express = require('express')

const app = express()

const fs = require('fs');
const { allowedNodeEnvironmentFlags } = require('process');

//template 
app.engine('hypatia', (filePath, options, callback) => { // define the view engine called hypatia
    fs.readFile(filePath, (err, content) => {
      if (err) return callback(err)
      // this is an extremely simple view engine we'll be more complex later
      const rendered = content.toString()
        .replace('#title#', '<title>' + options.title + '</title>')
        .replace('#message#', '<h1>' + options.message + '</h1>')
        .replace('#content#','<div>'+ options.content + '</div>' )
        .replace("#picture", "<div>" + options.picture + '</div>')
      return callback(null, rendered)
    })
  })
app.set('views', './views') // specify the views directory
app.set('view engine', 'hypatia',) // register the hypatia view engine

app.listen(3001, () => {
    console.log('Listening on port 3001')
})

app.get('/home', (req,res) => {
    res.send("<h1>Welcome to the Bat-Family</h1> <h2>Come and explore some of the members of DC's infamous Bat-Family<h2> <img src = 'https://images2.alphacoders.com/440/thumb-1920-440969.jpg'>")
})

app.get('/batman', (req, res) => {
    res.render('template1', { title: 'Dark Knight', message: 'Batman', content: " The Caped Crusader himself is Bruce Wayne  billionaire industrialist and notorious playboy. Although he has no superhuman abilities, he is one of the world's smartest men and greatest fighter. His physical prowess, technical ingenuity, and tactical thinking make him an incredibly dangerous opponent. He's the worlds greatest detective and a founding member of the Justice Leauge. <img src='https://cdn.mos.cms.futurecdn.net/eRugth5FK6fMPiGhxVEgFh.jpg'>" })
})

app.get('/robin', (req, res) => {
    res.render('template1', { title: 'Boy Wonder', message: 'Robin', content: 'Robin is Batmans sidekick and the title has been held by many people over the years. From his first adopted son and the original Boy Wonder "Dick Grayson" to his biological son "Damian Wayne" <img src="https://images.saymedia-content.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cq_auto:eco%2Cw_1200/MTc0Mjk3NTE5MTEzNjQzNTE2/who-is-robin.png"> ' })
})

app.get('/alfred', (req, res) => {
    res.render('template1', { title: "Mr.Pennyworth", message: "Alfred Pennyworth", content: "You could never forget Alfred. He's not just Bruce Wayne's butler. He's the one that raised Bruce since the tragic murder of his parents. He's the Batman's patch-up man, orignally his computer guy, but someone who's been in his corner the whole ride. (Even after his death) <img src='https://bleedingcool.com/wp-content/uploads/2019/11/scaled.bm_alfred_cvr_wip_002_4prev_5dc9ca0b9df4d1.41405923-1200x900.jpg'> " })
})

app.get('/fox', (req, res) => {
    res.render('template1', {title: "Mr.Fox", message:"Lucius Fox", content: "Lucuis Fox is the mastermind that comes up with a lot of the equipment adn gadgets in the Batman's arsenal. He also is the CEO and president of both Wayne Enterprises and the Wayne Foundation. He's easily one of the best allies for both Bruce and the Bat. <img src='https://static1.srcdn.com/wordpress/wp-content/uploads/2020/04/Lucius-Fox-Featured.jpg'>"})
})

app.get('/catwoman', (req,res) => {
    res.render('template1', {title: "Catwoman", message:"Catwoman", content:"Selina Kyle (AKA Catwoman) is a cat burglarur and one of Batman's foes. Throughout the years she has been more of anti-hero than anything. But whats intersting is hers and Batmans complex love-hate relationship... yes she is Batman's love intrest. Through time she has learned the secret identiy of the Dark Knight, has becomes one of the good guys... they even got married! <img src='https://assets1.ignimgs.com/2018/06/12/batman-50-mark-brooks-cover-b-1528767795355.jpg'" })
})

app.get('/dick', (req,res) => {
    res.render('template2', {title: "Nightwing", message: "Nightwing", content: "Dick Grayson was the first to dawn the costume of the Boy Wonder. After being tired of being in the shadow of the Batman he left and had his own team of super heroes called the 'Teen Titans' consisting of Cyborg, Beast Boy, Starfire, Raven, himself and grew to many more. After they all went their seperate ways he became the protector of Blüdhaven as Nightwing. Using his incredibe gymnastic, detective, and martial arts skills to protect the people of Blüdhaven.", picture:'<img src = "https://i.stack.imgur.com/lzV9p.jpg"'})
})

app.get('/barb', (req,res) => {
    res.render('template2', {title: "The Killing Joke", message: "Oracle", content: "Barbara Gordon, daughter of Commissioner James Gordon. She was the first Batgirl, fighting alongside Batman and Robin cleanig up the streets of Gotham. That was all before her tragic injury caused by the Joker that left her paralyzed from the waist down. But that didnt stop her from helping teh cause. She then became Oracle, using technology and computers to help other super-heroes by operating a worldwide communications network. This provides up-to-the-minute espionage and intel, as well as coordination and organization.", picture: "<img src= 'https://i.pinimg.com/originals/af/6b/d3/af6bd3a87f8901e77465911c45638474.png'"})
})

app.get('/hood', (req,res) => {
    res.render('template2', {title: "Death of the Family", message: "Red Hood", content: "Jason Todd was the second adoptive son of Bruce Wayne and the second Robin. He was a good Robin, but he has some serious anger issues, but it gets worse. One night he was captured by the Joker and tortured by him for weeks before killing him with a bomb only seconds before Batman could save. Ra's Al Gul (The Leader of the Leauge of Assasins ) feeling guilty, because he enabled the Joker which led to the untimly death of the young Robin, tried to ressurect him with the same thing that has kept him alive for centeries... The Lazuras pit. It worked, but not without anyside effects, and he came back to Gotham with vengence on his mind. He became the Red Hood and attempted to do what the Batman refused to do for years... end his enemies. He uses a wide variety of weapons including guns and swords. He's with the good guys now though as an anti-hero", picture: "<img src= 'https://pbs.twimg.com/media/CshDT8hWAAEUIhV.jpg'"})
})

app.get('/tim', (req,res) =>{
    res.render('template2', {title: "Red Robin", message: "Red Robin", content: "Tim Drake was the 3rd of the Robin's. Now he didn't have these crazy acrobatic skills or a wicked temper like the Robin's before hand, but his intenlligence was top tier. He noticed things that no one else did even before he was Robin. Like when Dick left to become Nightwing, when Jason became Robin, the change in the Batman after the death of Jason Todd, and he even orchestrated a reuinon between Nightwing and Batman. But when NIghtwing declined Tim stepped up because Batman needed a Robin. After years of adventures he stepped down from the role of Robin to make way for the new one... Daminan Wayne. He then took up the Red Robin mantle but still operates in Gotham.", picture: "<img src = 'https://studiojakemedia.files.wordpress.com/2020/03/tim-drake-red-robin.jpg?w=640'"})
})

app.get('/son', (req,res) => {
    res.render('template2', {title: "Son of Batman", message: "Damian Wayne", content: "Damian Wayne is the biological son of Bruce Wayne and Thalia Al G'ul (Ras Al G'ul's daughter).Bruce was unaware of the child's conception and returned to crime fighting for years. Talia on the other hand, taking advantage of the hero's impressive genes, believed their child to be a perfect heir. The child was born and given the name Damian. Talia then used the League's extensive scientific resources to inorganically speed up the child's aging - giving him the physiology of a ten year old in less than five years. He spent most of his upbrinig with his mother training with the League of Assasins. So unlike the previous Robins he's had intensive training already from the Leauge he was a force to be reckoned with.", picture: "<img src='https://64.media.tumblr.com/9bcfe34b4b6205110ec28114cb1f7bd0/6ff019e095506f68-eb/s1280x1920/362b8b2eb24af57cb607dcca1ac1358a6e48e6b3.png'"})
})