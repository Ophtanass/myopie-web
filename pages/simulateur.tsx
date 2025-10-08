import React, { useState } from "react";

export default function Simulateur() {
  const [formData, setFormData] = useState({
    seOG: "",
    seOD: "",
    age: "",
    evolutionMyopie: "",
    periode: "",
    elongationAxiale: "",
    parent1: "",
    parent2: "",
    traitementSouhaite: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const getCategorieEvolution = () => {
    const evo = parseFloat(formData.evolutionMyopie);
    const periode = formData.periode;
    if (isNaN(evo) || !periode) return null;
    if (periode === "an" && evo >= 0.75) return "rapide";
    if (periode === "6mois" && evo >= 0.5) return "rapide";
    if (periode === "an" && evo === 0.5) return "moderee";
    if (periode === "an" && evo === 0.25) return "legere";
    return "indeterminee";
  };

  const calcContraintes = () => {
    const refractionOG = parseFloat(formData.seOG);
    const refractionOD = parseFloat(formData.seOD);
    const categorie = getCategorieEvolution();

    const resultats = [];

    const verresFreinateursOK = (refractionOG > -13 && refractionOD > -13);
    const orthokOK = (refractionOG >= -4 && refractionOD >= -4);

    if (!categorie || categorie === "indeterminee") {
      resultats.push("⚠️ Données d'évolution insuffisantes pour proposer un traitement");
      return resultats;
    }

    if (categorie === "rapide") {
      if (orthokOK) {
        resultats.push("✅ Bithérapie : Orthokératologie + Atropine 0.05% (évolution rapide)");
      } else if (verresFreinateursOK) {
        resultats.push("✅ Bithérapie : Verres freinateurs + Atropine 0.05% (évolution rapide)");
      } else {
        resultats.push("✅ Atropine 0.05% seule (évolution rapide, autres options non disponibles)");
      }
    }

    if (categorie === "moderee") {
      if (orthokOK) {
        resultats.push("✅ Monothérapie : Orthokératologie (évolution modérée)");
      } else if (verresFreinateursOK) {
        resultats.push("✅ Monothérapie : Verres freinateurs (évolution modérée)");
      } else {
        resultats.push("✅ Atropine 0.05% seule (évolution modérée, autres options non disponibles)");
      }
    }

    if (categorie === "legere") {
      resultats.push("👀 Surveillance simple conseillée (évolution légère)");
    }

    resultats.push("ℹ️ Atropine 0.01% uniquement en relais pour éviter effet rebond après arrêt de l’atropine 0.05%");

    return resultats;
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-3xl mx-auto bg-white p-6 md:p-10 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Simulateur de traitement — Myopie évolutive
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <input
            type="number"
            step="0.1"
            name="seOG"
            className="w-full border rounded-md p-3 text-gray-800"
            placeholder="Équivalent sphérique OG (D)"
            value={formData.seOG}
            onChange={handleChange}
          />
          <input
            type="number"
            step="0.1"
            name="seOD"
            className="w-full border rounded-md p-3 text-gray-800"
            placeholder="Équivalent sphérique OD (D)"
            value={formData.seOD}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <input
            type="number"
            step="0.1"
            name="evolutionMyopie"
            className="w-full border rounded-md p-3 text-gray-800"
            placeholder="Évolution myopique (D)"
            value={formData.evolutionMyopie}
            onChange={handleChange}
          />
          <select
            name="periode"
            className="w-full border rounded-md p-3 text-gray-800"
            value={formData.periode}
            onChange={handleChange}
          >
            <option value="">Période</option>
            <option value="6mois">Sur 6 mois</option>
            <option value="an">Sur 1 an</option>
          </select>
          <input
            type="number"
            name="age"
            className="w-full border rounded-md p-3 text-gray-800"
            placeholder="Âge (années)"
            value={formData.age}
            onChange={handleChange}
          />
        </div>

        <div className="mb-8">
          <input
            type="number"
            step="0.01"
            name="elongationAxiale"
            className="w-full border rounded-md p-3 text-gray-800"
            placeholder="Élongation axiale (mm en 6 mois)"
            value={formData.elongationAxiale}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <select
            name="parent1"
            className="w-full border rounded-md p-3 text-gray-800"
            value={formData.parent1}
            onChange={handleChange}
          >
            <option value="">Parent 1 myope ?</option>
            <option value="non">Non</option>
            <option value="oui">Oui</option>
            <option value="fort">Oui (myopie forte)</option>
          </select>
          <select
            name="parent2"
            className="w-full border rounded-md p-3 text-gray-800"
            value={formData.parent2}
            onChange={handleChange}
          >
            <option value="">Parent 2 myope ?</option>
            <option value="non">Non</option>
            <option value="oui">Oui</option>
            <option value="fort">Oui (myopie forte)</option>
          </select>
        </div>

        <textarea
          name="traitementSouhaite"
          className="w-full border rounded-md p-3 text-gray-800 mb-6"
          rows={2}
          placeholder="Traitement envisagé ou souhait parental"
          value={formData.traitementSouhaite}
          onChange={handleChange}
        />

        <div className="bg-blue-50 rounded-xl p-4">
          <h2 className="text-lg font-semibold mb-2 text-gray-800">Propositions thérapeutiques</h2>
          <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
            {calcContraintes().map((r, idx) => (
              <li key={idx}>{r}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
