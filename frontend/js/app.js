const apiUrl = "http://localhost:3000";  // URL da API

// --- Carregar clientes (protegido) ---
if (document.getElementById("clientesList")) {
  const token = localStorage.getItem("token");

  if (!token) {
    window.location.href = "login.html";
  } else {
    fetch(`${apiUrl}/clientes`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => {
      if (!res.ok) throw new Error("Acesso negado.");
      return res.json();
    })
    .then(clientes => {
      const list = document.getElementById("clientesList");
      clientes.forEach(c => {
        const li = document.createElement("li");
        li.textContent = `${c.nome} ${c.sobrenome} - ${c.email}`;
        list.appendChild(li);
      });
    })
    .catch(err => {
      document.getElementById("error").textContent = "Token inválido ou expirado. Faça login novamente.";
      setTimeout(() => window.location.href = "login.html", 2000);
    });
  }
}

// --- Carregar usuários (protegido) ---
if (document.getElementById("usuariosList")) {
  const token = localStorage.getItem("token");

  if (!token) {
    window.location.href = "login.html";
  } else {
    fetch(`${apiUrl}/usuarios`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => {
      if (!res.ok) throw new Error("Acesso negado.");
      return res.json();
    })
    .then(usuarios => {
      const list = document.getElementById("usuariosList");
      usuarios.forEach(u => {
        const li = document.createElement("li");
        li.textContent = `ID: ${u.id} | Usuário: ${u.usuario}`;
        list.appendChild(li);
      });
    })
    .catch(err => {
      document.getElementById("error").textContent = "Token inválido ou expirado. Faça login novamente.";
      setTimeout(() => window.location.href = "login.html", 2000);
    });
  }
}

// Função de login
document.getElementById("loginForm")?.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    console.log("Enviando login..."); // Log para verificar o envio do formulário

    const response = await fetch(`${apiUrl}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ usuario, senha })
    });

    if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        console.log("Token salvo:", data.token); // Verificando se o token está sendo salvo
        window.location.href = "produtos.html";  // Redireciona para a lista de produtos
    } else {
        document.getElementById("error").textContent = "Credenciais inválidas.";
        console.log("Erro ao fazer login.");  // Log de erro
    }
});


// Função para listar os produtos
if (document.getElementById("produtosList")) {
    (async () => {
        const response = await fetch(`${apiUrl}/produtos`);
        const produtos = await response.json();
        const produtosList = document.getElementById("produtosList");

        produtos.forEach(produto => {
            const li = document.createElement("li");
            li.textContent = `${produto.nome} - ${produto.preco} R$`;
            produtosList.appendChild(li);
        });
    })();
}
