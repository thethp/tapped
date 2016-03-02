var express = require('express');
var app = express();
var jade = require('jade');

app.use(express.static(__dirname+'/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.get('/', function(req, res) {
  res.render('home', reviews);
  next();
});
app.get('/about', function(req, res) {
  res.render('about', {activePage: 'about'});
  next();
});
app.get('/listen', function(req, res) {
  res.render('listen', {activePage: 'listen'});
  next();
});
app.get('/contact', function(req, res) {
  res.render('contact', {activePage: 'contact'});
  next();
});
app.get('/support', function(req, res) {
  res.render('support', {activePage: 'support'});
  next();
});
app.get('/who', function(req, res) {
  res.render('who', creative_cast);
  res.end();
});


app.listen(8090);
console.log('Server running on port 8090');

var creative_cast = { creative: [
  {
    'Name': 'Jed Levine',
    'Role': 'Writer/Lyricist',
    'Bio': 'Jed would like to apologize to the NSA agent who has been monitoring his internet usage since he first Googled “Has anyone written a musical about the NSA?” He promises that offline, he does more than look at porn. Mostly. Although he’s a huge musical nerd, this is the first one he’s written.',
    'Picture': 'JL.jpg'
  },
  {
    'Name': 'Brad Kemp',
    'Role': 'Composer',
    'Bio': 'Brad has long been pissing people off with his compositions, earning the ire of Tommy Wiseau and Swedish Americans for composing The Room: The Musical and Yes, Andersonville, respectively. When he’s not irritating the NSA, Brad performs with his hip hop group, Handsome Naked.',
    'Picture': 'BK.jpg'
  },
  {
    'Name': 'Molly Todd',
    'Role': 'Director',
    'Bio': 'Molly is a proud American and happy to be directing such a positive message for the NSA. Please don\'t arrest her and kindly ignore the numerous emails that allude to her founding a group called Anarchy. (It\'s just an improvised rock musical, but still “like” it on Facebook).',
    'Picture': 'default.png'
  },
  {
    'Name': 'Holly Gombita',
    'Role': 'Choreographer',
    'Bio': 'Holly is responsible for the NSA’s expansion into video monitoring (NSA agents wanted to see the dance moves that were resulting in uproarious laughter and applause). Holly is a member of the Matter Dance Company and performs Wednesdays with the Dunder MINtflins at MCL.',
    'Picture': 'default.png'
  }
],
 cast: [
    {
     'Name': 'Laureen Siciliano',
     'Role': 'Mary',
     'Bio': "Laureen doesn't watch the news and isn't interested in government happenings. It makes sense that she's had to Google more than one current event when preparing for the lead role of Mary #ignoranceisbliss. When she's not listening to your phone calls, Laureen can be seen performing with MiNTerstellar, Win Again Finnegan and Storytown. Much love and many thanks to family, friends and Claude. www.laureensiciliano.com",
     'Picture': 'LS.jpg'
    },
   {
     'Name': 'Max Hinders',
     'Role': 'Steve',
     'Bio': 'Max has always dreamed of being a whistle-blower ever since watching Citizenfour on HBO. When he isn\'t exposing the NSA, he can be seen at MCL with his team Mint, Flichigan and as the co- host of "Live at MCL with Alex and Max". He can be seen later this year in "Clara and the Nutcracker" at the Piccolo Theatre. Recent Chicago credits include The Venetian Twins and The Love of Three Oranges (Piccolo Theatre).',
     'Picture': 'MH.jpg'
    },
    {
      'Name': 'Brittny Congleton',
      'Role': 'Lisa',
      'Bio': 'Brittny always dresses appropriately and professionally for her work at the NSA, which she treats with the utmost respect. She in no way pretends to be lots other people in her many one-woman cabarets and would never consider fraternizing inappropriately with other women like the harlots of HEY LADIES and Vaudezilla do. For further proof of her patriotism check out <a href="brittnycongleton.com">www.brittnycongleton.com</a>',
      'Picture': 'default.png'
    },
    {
      'Name': 'David Dritsas',
      'Role': 'Patrick',
      'Bio': 'David is an early sign-up for the NSA affiliate program and thanks you all for the $0.0001 he gets every time you Google “da bomb," "Guy Fawkes Mask coupon code" and "Moscow Mule recipe." When he’s not tracking your every move, he’s performing in ComedySportz and other improv around town, including the Hitch-cocktails at The Annoyance. He has also worked for The Second City Theatricals, including two tours on the high seas aboard cruise ships.',
      'Picture': 'DD.jpg'
    },
    {
      'Name': 'Jenna Steege',
      'Role': 'Juliana',
      'Bio': 'Jenna was once part of an FBI sting operation, so she hopes she\'s still on the NSA\'s good side. Jenna loves the American government and all of its logical, pro-humanity choices; she trusts that by now they\'ve forgiven her rebellious years as an ex-pat. Due to its cheese, America is a superior nation to Switzerland.',
      'Picture': 'default.png'
    },
    {
      'Name': 'Sarah Barnhardt',
      'Role': 'Ensemble',
      'Bio': 'Sarah works for the NSA in the Department of Snapchats. She collects your disappeared Snapchats and saves them to your personal folder, organizing into subfolders based on silliness and inappropriateness. Check out her solo sketch and The Comedy Dance Collective to see if any of your "snaps" appear in her shows. <a href="sarahbarnhardt.com">"www.sarahbarnhardt.com</a>',
      'Picture': 'SB.jpg'
    },  
    {
      'Name': 'Colleen Burgess',
      'Role': 'Ensemble',
      'Bio': 'Colleen is thrilled to be a part of such a splendidly secretive ensemble! Colleen is an accomplished opera singer and is slightly frightened that after this show she will no longer be accepted into Canada… eh!',
      'Picture': 'CB.jpg'
    },
    {
      'Name': 'Phil DeBoer',
      'Role': 'Ensemble',
      'Bio': 'Phil <i>could</i> be a dangerous member of a domestic terrorism sleeper cell. Or, he could be a special agent operating undercover for the FBI. Or, he could just be a regular citizen studying improv at Second City Training Center. He could tell you the truth – but who needs that when you can just speculate it!',
      'Picture': 'PD.jpg'
    },
    {
      'Name': 'Lou Leonardo',
      'Role': 'Ensemble',
      'Bio': 'may or may not be an undercover FBI agent set to infiltrate this show and assume the identities of its various oddballs. Before going undercover, Lou was a Chicago actor working on stage and screen with a BFA in acting from Syracuse University.',
      'Picture': 'default.png'
    },
    {
      'Name': 'Mikey Mulhearn',
      'Role': 'Ensemble',
      'Bio': 'Mikey is proud to represent the vast diversity of NSA employees as their white gay intern. He promises to promote their good name throughout the land while both working onstage and off. To read more about the NSA’s equal opportunity employment policies please visit <a href="michaelmulhearn.com">michaelmulhearn.com</a>.',
      'Picture': 'default.png'
    },
    {
      'Name': 'Beau Nolen',
      'Role': 'Ensemble',
      'Bio': 'Beau is probably an American, and might be a government secret weapon. He is currently working undercover as a former reality TV star and Chicago bon vivant, and has recently infiltrated a clandestine organization called X-MINT. Some say he is a siren, his serenade as mesmerizing and deadly as his kiss. Beware.',
      'Picture': 'default.png'
    },    
    {
      'Name': 'Todd Page',
      'Role': 'Ensemble',
      'Bio': 'has a moustache and all the authority that comes with it, and is proud to be using it as part of this grand organization. You\'re welcome. Todd frequently stops terrorists at MINT (X-Mint), and with vigorous high fives on ComedySportz house team CHAOS',
      'Picture': 'TP.jpg'
    },
    {
      'Name': 'Kristen Schmitz',
      'Role': 'Ensemble',
      'Bio': 'Kristen recently fled... err... moved to Chicago from the Bay Area. If you see her doing weird things with her hands, don\'t worry, it\'s not a secret terrorist signal—in addition to acting and improvising she is studying to become a sign language interpreter. You can see her perform every other Friday night at the Comedy Clubhouse with her improv team, Win Again Finnegan.',
      'Picture': 'default.png'
    },
    {
      'Name': 'Heather Scholl',
      'Role': 'Ensemble',
      'Bio': 'Heather likes to travel and pretend she\'s a spy. If the NSA is monitoring her, they’ll find a trail of strange organization acronyms such as MINt, SCTC, and iO in her history. Heather is also an Anarchist (meaning she can improvise a rock musical).',
      'Picture': 'HS.jpg'
    }
  ], activePage: 'who'};
var reviews = { reviews: [
  {
    'Review': '"Clever, engaging and very funny."',
    'Reviewer': 'Jim Jensen',
    'Context': '2015 Premier Premieres Judge'
  },
  {
    'Review': '"Funny as hell."',
    'Reviewer': 'Tina Gluschenko',
    'Context': '2015 Premier Premieres Judge'
  },
  {
    'Review': '"Hilarious musical numbers."',
    'Reviewer': 'Kim Campbell',
    'Context': 'The Gapers Block'
  },
  {
    'Review': '"This show is so delightful. I don\'t have enough superlatives"',
    'Reviewer': 'Matthew Van Colton',
    'Context': '2015 Premier Premieres Judge'
  },
], activePage: 'home'};
