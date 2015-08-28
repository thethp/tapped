var express = require('express');
var app = express();
var jade = require('jade');

app.use(express.static(__dirname+'/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.get('/', function(req, res) {
  res.render('home');
  next();
});
app.get('/who', function(req, res) {
  res.render('who', creative_cast);
  res.end();
});


app.listen(8060);
console.log('Server running on port 80');

var creative_cast = { creative: [
  {
    'Name': 'Jed Levine',
    'Role': 'Writer/Lyricist',
    'Bio': 'Jed would like to apologize to the NSA agent who has been monitoring his internet usage since he first Googled “Has anyone written a musical about the NSA?” He promises that in his daily life, he does more than look up porn. Mostly. Although he is a huge musical nerd, this is his first time writing one.',
    'Picture': 'JL.jpg'
  },
  {
    'Name': 'Brad Kemp',
    'Role': 'Composer',
    'Bio': 'Brad has long been pissing people off with his musical compositions, earning the ire of Tommy Wiseau and the Swedish-American community for composing The Room: The Musical and Yes, Andersonville, respectively. When he’s not irritating the NSA, Brad performs with his hip hop group, Handsome Naked.',
    'Picture': 'BK.jpg'
  },
  {
    'Name': 'Molly Todd',
    'Role': 'Director',
    'Bio': 'Molly is a proud American and happy to be directing such a positive message for the NSA. Please don\'t arrest her and kindly ignore the numerous emails that allude to her founding a group called Anarchy. (It\'s just an improvised rock musical, but still "like" it on Facebook).',
    'Picture': 'default.png'
  },
  {
    'Name': 'Mary Mahoney',
    'Role': 'Music Director',
    'Bio': 'Mary communicates using the one code the NSA can’t crack: Music. If you listen closely to her play, you’ll uncover the locations of 14 different CIA Black Sites. Also, you’ll hear some bad-ass chords! In addition to her day job as a spy, Mary music directs at The Second City.',
    'Picture': 'MM.jpg'
  },
  {
    'Name': 'Holly Gombita',
    'Role': 'Choreographer',
    'Bio': 'Holly is is single-handedly responsible for the NSA expanding into video monitoring. Evidently, the NSA agents wanted to see the dance moves that were making everyone explode into laughter and applause. Holly is a member of the Matter Dance Company and can be found most Wednesdays performing with the Dunder MINtflins at MCL.',
    'Picture': 'default.png'
  }
],
 cast: [
    {
     'Name': 'Laureen Siciliano',
     'Role': 'Mary',
     'Bio': "doesn't watch the news and isn't interested in government happenings. It makes sense that she's had to Google more than one current event when preparing for the lead role of Mary #ignoranceisbliss. Laureen will be performing her self-titled solo show at the Chicago Woman's Funny Festival. Check that shit out",
     'Picture': 'default.png'
    },
{
     'Name': 'Laureen Siciliano',
     'Role': 'Mary',
     'Bio': "doesn't watch the news and isn't interested in government happenings. It makes sense that she's had to Google more than one current event when preparing for the lead role of Mary #ignoranceisbliss. Laureen will be performing her self-titled solo show at the Chicago Woman's Funny Festival. Check that shit out",
     'Picture': 'default.png'
    }
  ]};
