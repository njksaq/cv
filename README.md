# Niko Parkkinen – CV-sivu 🥅→🤖

Ennen torjuin kiekkoja, nyt torjun turhaa käsityötä tekoälyllä. Tässä repossa on CV-sivuni: talous, juridiikka ja tekoäly samassa paketissa, suomeksi ja englanniksi.

**Ei frameworkkeja, ei build-vaihetta, ei node_modules-mustaa aukkoa.** Pelkkää HTML:ää, CSS:ää ja vähän JavaScriptiä.

## Mitä täällä on

| Tiedosto | Mitä se tekee |
|---|---|
| `index.html` | Itse sivu |
| `cv.html` | A4-CV, josta saa PDF:n |
| `content.js` | **Kaikki tekstit ja yhteystiedot.** Tätä muokkaat. |
| `style.css` / `cv.css` | Ulkoasu |
| `app.js` | Kielivalinta, linkit ja kuva |
| `favicon.svg` | Pieni NP-logo selaimen välilehteen |
| `profile.jpg` | Sinun naamasi (lisää itse) |

## Julkaisu GitHub Pagesiin (5 min)

1. Kirjaudu [GitHubiin](https://github.com) ja paina **New repository**.
2. Nimeksi `KÄYTTÄJÄNIMI.github.io` (oma käyttäjänimesi), valitse **Public** ja paina **Create repository**.
3. Paina **uploading an existing file** ja raahaa kaikki tämän kansion tiedostot sisään. Paina **Commit changes**.
4. Mene **Settings → Pages**. Valitse kohtaan *Source* **Deploy from a branch** ja kohtaan *Branch* **main / (root)**, ja paina **Save**.
5. Odota minuutti tai kaksi, niin sivu on osoitteessa `https://KÄYTTÄJÄNIMI.github.io` 🎉

## Omat tiedot

Avaa `content.js` GitHubissa, paina kynää ✏️, täytä lainausmerkkien väliin ja paina **Commit changes**:

```js
email: '',
phone: '',
city: '',
linkedin: 'https://www.linkedin.com/in/kayttaja/',
github: 'https://github.com/kayttaja',
instagram: 'https://www.instagram.com/kayttaja/',
site: 'https://kayttaja.github.io',
```

Tyhjäksi jätetty kenttä ei näy sivulla eikä CV:ssä, joten keskeneräistä ei näy missään.

Tekstejä voi muokata samassa tiedostossa: `fi:` on suomi ja `en:` englanti. Muista päivittää molemmat.

## Kuva

- Nimeä kuva `profile.jpg` ja lataa se repoon (**Add file → Upload files**).
- Pystykuva toimii parhaiten, esim. 800×1000 px. Pakkaa alle 300 kt esimerkiksi [Squooshilla](https://squoosh.app).
- Jos kuvaa ei ole, sivulla näkyy siluetti ja CV:stä kuvan paikka jää kokonaan pois.

## PDF-CV

1. Avaa sivu ja paina **CV PDF**.
2. Valitse kieli ja paina **Tallenna PDF**.
3. Valitse tulostusikkunasta **Tallenna PDF-muodossa**, paperiksi **A4**, marginaaleiksi **Ei mitään** ja ruksaa **Taustagrafiikka**.

Saat yhden sivun CV:n, jossa linkit toimivat.

## Ongelmia?

- **Muutos ei näy:** odota minuutti ja päivitä sivu painamalla Ctrl+Shift+R (Macilla Cmd+Shift+R).
- **404-virhe:** tarkista, että `index.html` on repon juuressa eikä missään alikansiossa.
- **Kuva ei näy:** tiedostonimessä isot ja pienet kirjaimet ovat eri merkkejä, joten `Profile.JPG` ei ole sama kuin `profile.jpg`.

Rakennettu käsin (ja tekoälyn avustamana) 🛠️
