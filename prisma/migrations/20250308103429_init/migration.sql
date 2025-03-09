-- CreateTable
CREATE TABLE "Aluno" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(150) NOT NULL,

    CONSTRAINT "Aluno_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Professor" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "disciplina" VARCHAR(100) NOT NULL,

    CONSTRAINT "Professor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Boletim" (
    "id" SERIAL NOT NULL,
    "nota" DOUBLE PRECISION NOT NULL,
    "alunoId" INTEGER NOT NULL,

    CONSTRAINT "Boletim_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Boletim" ADD CONSTRAINT "Boletim_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "Aluno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
