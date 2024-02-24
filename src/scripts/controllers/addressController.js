function getCEPInfo(cep) {
    return new Promise((resolve) => {
        $.getJSON(`https://viacep.com.br/ws/${cep}/json`, function(data) {
            resolve({
                city: data.localidade,
                state: data.uf,
                address: data.logradouro
            });
        });
    });
}