const criarMusica = async (dadosMusica: any): Promise<any> => {
    try {
        const response = await fetch('/api/musica', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dadosMusica),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao criar música:', error);
        throw error;
    }
};

const listarMusicas = async (): Promise<any[]> => {
    try {
        const response = await fetch('/api/musicas');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao listar músicas:', error);
        throw error;
    }
};

const atualizarMusica = async (id: string, dadosAtualizados: any): Promise<any> => {
    try {
        const response = await fetch(`/api/musica/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dadosAtualizados),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao atualizar música:', error);
        throw error;
    }
};

const excluirMusica = async (id: string): Promise<any> => {
    try {
        const response = await fetch(`/api/musica/${id}`, {
            method: 'DELETE',
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao excluir música:', error);
        throw error;
    }
};
