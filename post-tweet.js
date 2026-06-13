const { TwitterApi } = require('twitter-api-v2');
const tweets = require('./tweets.json');

async function postTweet() {
  const keys = {
    appKey: process.env.TWITTER_API_KEY,
    appSecret: process.env.TWITTER_API_SECRET,
    accessToken: process.env.TWITTER_ACCESS_TOKEN,
    accessSecret: process.env.TWITTER_ACCESS_SECRET,
  };
  console.log('Vérification des clés :');
  for (const [k, v] of Object.entries(keys)) {
    console.log(`  ${k}: ${v ? v.slice(0, 6) + '...' + ' (longueur: ' + v.length + ')' : 'MANQUANT'}`);
  }

  const client = new TwitterApi({
    appKey: keys.appKey,
    appSecret: keys.appSecret,
    accessToken: keys.accessToken,
    accessSecret: keys.accessSecret,
  });

  // Sélection déterministe basée sur le jour de l'année (pas de répétition dans l'année)
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((now - start) / 86400000);
  const index = dayOfYear % tweets.length;
  const tweet = tweets[index];

  console.log(`Jour ${dayOfYear} → tweet #${index}`);
  console.log('Contenu :', tweet);

  const { data } = await client.v2.tweet(tweet);
  console.log('✅ Tweet publié — id:', data.id);
}

postTweet().catch((err) => {
  console.error('❌ Erreur lors de la publication :', err);
  process.exit(1);
});
