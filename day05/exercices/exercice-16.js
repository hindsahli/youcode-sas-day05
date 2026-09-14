/**
 * ─────────────────────────────────────────────────────────────
 * Jour 05 · EXERCICE 16 · NIVEAU 3 : DÉFI (AVANCÉS)
 * EXTRACTION DE HASHTAGS
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * À partir d'un tweet : "Beau temps à #Nador aujourd'hui avec la team #YouCode !", 
 * extrayez tous les hashtags et retournez-les dans un tableau ["#Nador", "#YouCode"].
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-16
 * ▶️ Commande : node day05/exercices/exercice-16.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.

let tweet = "Beau temps à #Nador aujourd'hui avec la team #YouCode !"

function hashtags(tweet)
{
tweet = tweet.split(" ")
let newtweet = []
let i = 0
    while(i< tweet.length)
    {
        if(tweet[i][0] == "#")
            newtweet.push(tweet[i])
        i++
    }
    return newtweet
}

console.log(hashtags(tweet))