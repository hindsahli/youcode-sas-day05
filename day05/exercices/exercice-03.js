/**
 * ─────────────────────────────────────────────────────────────
 * Jour 05 · EXERCICE 03 · NIVEAU 1 : FONDATIONS (DÉBUTANTS)
 * MAJUSCULES ET MINUSCULES
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Mettez "youcode" entièrement en majuscules, et "MAROC" entièrement en minuscules.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-03
 * ▶️ Commande : node day05/exercices/exercice-03.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.

let mot1 = "youcode"
let mot2 = "MAROC"

if(/[a-z]/.test(mot1) == true)
    console.log(mot1.toUpperCase())

if(/[A-Z]/.test(mot2) == true )
    console.log(mot2.toLowerCase())