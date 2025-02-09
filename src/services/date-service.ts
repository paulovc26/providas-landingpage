function dataAtual() {
    const data = new Date();
    return data.toLocaleDateString('pt-BR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

export { dataAtual }