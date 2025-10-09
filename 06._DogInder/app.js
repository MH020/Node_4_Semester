import express from 'express';
import path from 'path';

// anbefaler at have imports i blokke - det er mærkeligt i andre sprog men her giver det mening i logisk blokke (det er okay hvis man bare smider det i toppen)

const app = express();

app.use(express.static("public"));

// ========================= PAGES =====================================

app.get("/", (req, res) => {
    res.sendFile(path.resolve('public/pages/frontend/index.html'));
});

app.get("/matches", (req, res) => {
    res.sendFile(path.resolve('public/pages/matches/matches.html'));
});

// ========================= API =======================================

// task create a /api/matches route that returns 5 dog objects contain urls. 

import { getMatches } from './util/matchesUtil.js';

app.get("/api/matches", async (req, res) => {
    const matches = await getMatches() // venter på at getMatches() returnere noget 
    res.send({ data:matches })
})


// falsy values
// false, null, undefined, NaN, 0, ""

// short-circuit syntax

const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => {
    console.log('Server is running on port:', PORT); 
});
