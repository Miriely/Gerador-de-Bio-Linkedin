document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bioForm");
  const bioParagraph = document.querySelector("#resultado p:last-child");
  const submitBtn = document.querySelector("button.primary");

if (form) {
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const profissaoInput = document.getElementById("profissao");
        const experienciaInput = document.getElementById("experiencia");
        const conquistasInput = document.getElementById("conquistas");
        const tomInput = document.querySelector('input[name="tom"]:checked');

        const profissao = profissaoInput ? profissaoInput.value.trim() : "";
        const experiencia = experienciaInput ? experienciaInput.value.trim() : "";
        const conquistas = conquistasInput ? conquistasInput.value.trim() : "";
        const tom = tomInput ? tomInput.value : "profissional";

        if (!profissao || !experiencia) {
            if (bioParagraph) {
                bioParagraph.textContent = "Preencha sua profissão e sua experiência para continuar.";
            }
            return;
        }

        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = "Gerando...";
        }

        if (bioParagraph) {
            bioParagraph.textContent = "Escrevendo sua bio...";
        }

        try {
            const bio = await gerarBio({ profissao, experiencia, conquistas, tom });
            if (bioParagraph) {
                bioParagraph.textContent = bio;
            }
        } catch (err) {
            console.error(err);
            if (bioParagraph) {
                bioParagraph.textContent = "Erro ao gerar a bio. Verifique sua chave de API e a conexão.";
            }
        } finally {
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = "Gerar bio profissional";
            }
        }
    });
}

function montarPrompt({ profissao, experiencia, conquistas, tom }) {
    const tons = {
        profissional: "tom profissional e direto, transmitindo competência",
        acessivel: "tom acessível e caloroso, mas ainda competente",
        ousado: "tom confiante e marcante, sem soar arrogante"
    };

    return [
        "Escreva uma bio de LinkedIn em português do Brasil, pronta para publicar.",
        "Profissão: " + profissao,
        "Experiência: " + experiencia,
        conquistas ? "Conquistas: " + conquistas : "",
        "Tom: " + (tons[tom] || tons.profissional) + ".",
        "Regras: 3 a 5 parágrafos curtos, primeira pessoa, sem hashtags, sem inventar dados que não foram mencionados.",
        "Responda APENAS com o texto da bio, sem título nem comentários."
    ].filter(Boolean).join("\n");
}

async function gerarBio(dados) {
  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + API_KEY
    },
    body: JSON.stringify({
      model: "openai/gpt-oss-20b",
    messages: [
        { role: "user", content: montarPrompt(dados) }
    ]
    })
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => "");
    throw new Error("Erro na API: " + response.status + " " + errorText);
  }

  const data = await response.json();
  const text = data.choices?.[0]?.message?.content;

  if (!text) {
    throw new Error("A API retornou uma resposta vazia.");
  }

  return text.trim();
}
});