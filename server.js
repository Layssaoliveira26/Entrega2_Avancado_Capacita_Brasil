import express from 'express';
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()
//criando uma variável app que recebe a função express e recebe tudo da função express
const app = express(); 
//poder usar e entender o formato json
app.use(express.json())

// criar uma variável que armazena os usuários
const users = []
/* Criar API de usuários
-Criar um usuário
-Listar usuários
-Alterar um usuário
-Deletar um usuário
*/

//Criando as rotas da aplicação
//-Necessário colocar o tipo de rota/método http
//-necessário passar o endereco da rota
//-Necessário passar uma função de callback que recebe dois parâmetros: request e response

//criar uma rota para criar um aluno
app.post('/alunos', async(req, res) => {
    
    await prisma.aluno.create({
        data: {
            nome: req.body.nome
        }
    });
    res.status(201).json(req.body);
    //res.send('Deu certo enviar os dados do usuário!')
})

//criar uma rota para listar todos os alunos
app.get('/alunos', async(req, res) => {
    const alunos = await prisma.aluno.findMany();
    res.status(200).json(alunos);
});

//criar uma rota para buscar um aluno pelo id
app.get('/alunos/:id', async(req, res) => {
    const aluno = await prisma.aluno.findUnique({
        where: {
            id: parseInt(req.params.id)
        }
    });
    res.status(200).json(aluno);
});

//criar uma rota para alterar um aluno
app.put('/alunos/:id', async(req,res) => {
    const alunoAtualizado = await prisma.aluno.update({
        where: {id: parseInt(req.params.id)},
        data: {nome: req.body.nome}
    });
    res.status(200).json(alunoAtualizado);
})

//criar uma rota para deletar um aluno
app.delete('/alunos/:id', async(req, res) => {
    await prisma.aluno.delete({
        where: {id: parseInt(req.params.id)}
    });
    res.status(200).send('Aluno deletado com sucesso!');
});

//criar uma rota para criar um professor
app.post('/professores', async(req, res) => {
    await prisma.professor.create({
        data: {
            nome: req.body.nome,
            disciplina : req.body.disciplina
        }
    });
    res.status(201).json(req.body);
    //res.send("Deu certo enviar os dados do professor!");
});

//criar uma rota que liste todos os professores
app.get('/professores', async(req,res) => {
    const professores = await prisma.professor.findMany()
    res.status(200).json(professores);
});

//criar uma rota para listar um professor pelo id
app.get('/professores/:id', async(req, res) => {
    const professor = await prisma.professor.findUnique({
        where: {
            id: parseInt(req.params.id)
        }
    });
    res.status(200).json(professor);
});

//criar rota para alterar um professor
app.put('/professores/:id', async(req, res) => {
    const professorAtualizado = await prisma.professor.update({
        where: {id: parseInt(req.params.id)},
        data: {
            nome: req.body.nome,
            disciplina: req.body.disciplina
        }
        });
        res.status(200).json(professorAtualizado);
});

//criar rota para deletar um professor
app.delete('/professores/:id', async(req, res) => {
    await prisma.professor.delete({
        where: {id: parseInt(req.params.id)}
    });
    res.status(200).send('Professor deletado com sucesso!');
})

//criar uma rota para criar um boletim
app.post('/boletins', async(req, res) => {
    await prisma.boletim.create({
        data: {
            nota: req.body.nota,
            alunoId: req.body.alunoId
        }
    });
    res.status(201).json(req.body);
})

//criar rota para listar todos os boletins
app.get('/boletins', async(req, res) => {
    const boletins = await prisma.boletim.findMany()
    res.status(200).json(boletins);
});


//criar uma rota para buscar um boletim pelo id
app.get('/boletins/:id', async(req, res) => {
    const aluno = await prisma.aluno.findUnique({
        where: {
            id: parseInt(req.params.id)
        }
    });
    res.status(200).json(aluno);
});

//criar rota para alterar um boletim por id
app.put('/boletins/:id', async(req, res) => {
    const boletimAtualizado = await prisma.boletim.update({
        where: {id: parseInt(req.params.id)},
        data: {
            nota: req.body.nota,
            alunoId: req.body.alunoId
        }
    });
    res.status(200).json(boletimAtualizado);
});

//criar rota para deletar um boletim
app.delete('/boletins/:id', async(req, res) => {
    await prisma.boletim.delete({
        where: {
            id: parseInt(req.params.id)
        }
    });
    res.status(200).send('Boletim deletado com sucesso!');
});
//iniciar o servidor na porta 3000
app.listen(3000)

