const criarEvento = async (dadosEvento: any): Promise<any> => {
    try {
        const response = await fetch('/api/evento', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dadosEvento),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao criar evento:', error);
        throw error;
    }
};

const listarEventos = async (): Promise<any[]> => {
    try {
        const response = await fetch('/api/eventos');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao listar eventos:', error);
        throw error;
    }
};

const atualizarEvento = async (id: string, dadosAtualizados: any): Promise<any> => {
    try {
        const response = await fetch(`/api/evento/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dadosAtualizados),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao atualizar evento:', error);
        throw error;
    }
};

const excluirEvento = async (id: string): Promise<any> => {
    try {
        const response = await fetch(`/api/evento/${id}`, {
            method: 'DELETE',
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao excluir evento:', error);
        throw error;
    }
};
