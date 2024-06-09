let editID = null;

function montaTabela() {
    fetch(`http://localhost:3000/usuarios`)
        .then(resposta => resposta.json())
        .then(dadosUsuarios => {
            document.getElementById('tabela-de-usuarios').innerHTML = ''

            dadosUsuarios.map(function(usuario) {
                document.getElementById('tabela-de-usuarios').innerHTML += `
                    <tr>
                        <td class="d-flex justify-content-center">
                            <img class="img-icon" src="${usuario.image}" />
                        </td>
                        <td >${usuario.id}</td>
                        <td>${usuario.name}</td>
                        <td>${usuario.email}</td>
                        <td>
                        <button 
                            type="button btn-sm"
                            onclick="editarUsuario('${usuario.id}', '${usuario.name}', '${usuario.email}')"
                            class="btn btn-info"
                        >
                            <i class="bi bi-pencil-square"></i> Editar
                        </button>
                        <button
                            type="button btn-sm"
                            onclick="excluirUsuario('${usuario.id}')"
                            class="btn btn-danger">
                                <i class="bi bi-trash"></i>
                                Excluir
                        </button>
                        </td>
                    <tr/>
                `
            })
        })
}

function limparFormulario() {
    document.getElementById('nome').value = null
    document.getElementById('email').value = null
}

function editarUsuario(id, name, email) {
    document.getElementById('nome').value = name;
    document.getElementById('email').value = email;

    editID = id;
    document.getElementById('btn-cadastrar-usuario').innerText = "Atualizar"
}

function excluirUsuario(id) {
    // LIB Sweetalert do javascript: https://sweetalert2.github.io/#examples
    Swal.fire({
        title: "Você tem certeza?",
        text: "Você não poderá reverter isso!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim, excluir!"
    }).then((result) => {
        if (result.isConfirmed) {
            fetch(`http://localhost:3000/usuarios/${id}`, {
                method: 'DELETE'
            })
                .then(resposta => resposta.json())
                .then(usuario => {
                    montaTabela()
                    Swal.fire({
                        title: "Excluído com sucesso!",
                        icon: "success"
                    });
                })
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    montaTabela()
})

document.getElementById("btn-cadastrar-usuario").addEventListener("click", function() {
    let inputNome = document.getElementById('nome').value
    let inputEmail = document.getElementById('email').value
    let inputImage = document.getElementById('image').files[0]

    if (!inputNome) {
        alert('Preencha o nome')
        return
    }

    if (!inputEmail) {
        alert('Preencha o email')
        return
    }
    // convert image to base64
    let reader = new FileReader()
    reader.onload = function() {
        let base64 = reader.result

        let body = {
            name: inputNome,
            email: inputEmail,
            image: base64
        }
    
        if (editID != null) {
            fetch(`http://localhost:3000/usuarios/${editID}`, {
                method: 'PUT',
                body: JSON.stringify(body)
            })
                .then(resposta => resposta.json())
                .then(usuario => {
                    montaTabela()
                    limparFormulario()
                    document.getElementById('btn-cadastrar-usuario').innerText = "Cadastrar"
                    editID = null
                    Swal.fire({
                        title: 'Atualizado com sucesso',
                        icon: 'success',
                        timer: 2000,
                        timerProgressBar: true,
                    })
                })
            return;
        }
    
        fetch(`http://localhost:3000/usuarios`, {
            method: 'POST',
            body: JSON.stringify(body)
        })
            .then(resposta => resposta.json())
            .then(usuario => {
                Swal.fire({
                    title: 'Cadastrado com sucesso',
                    icon: 'success',
                    timer: 2000,
                    timerProgressBar: true,
                })
                montaTabela()
                limparFormulario()
            })
    }

    reader.readAsDataURL(inputImage)
})